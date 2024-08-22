from dotenv import load_dotenv
load_dotenv()
from pinecone import Pinecone, ServerlessSpec
import google.generativeai as genai
import os
import json

# Load environment variables from .env.local
load_dotenv(dotenv_path='../.env.local')

# Initialize Pinecone
pc = Pinecone(api_key=os.environ["PINECONE_API_KEY"])

# Check if the index already exists
index_name = "rag"
existing_indexes = pc.list_indexes()

# if index_name in existing_indexes:
#     pc.delete_index(index_name)  # Delete existing index

# Create a Pinecone index
# pc.create_index(
#     name=index_name,
#     dimension=768,
#     metric="cosine",
#     spec=ServerlessSpec(cloud="aws", region="us-east-1"),
# )

# Configure Gemini API
genai.configure(api_key=os.environ["GEMINI_API_KEY"])
model = genai.GenerativeModel('gemini-1.5-flash')

# Load the review data
data = json.load(open("reviews.json"))

processed_data = []

# Function to create embeddings using Gemini
def create_embedding_gemini(text):
    result = genai.embed_content(
        model="models/text-embedding-004",
        content=text,
        task_type="retrieval_document",
        title="Embedding of single string"
    )
    print(result)
    
    return result['embedding']

# Create embeddings for each review
for review in data["reviews"]:
    embedding = create_embedding_gemini(review['review'])
    processed_data.append(
        {
            "values": embedding,
            "id": review["professor"],
            "metadata": {
                "review": review["review"],
                "subject": review["subject"],
                "stars": review["stars"],
            }
        }
    )

# Insert the embeddings into the Pinecone index
index = pc.Index("rag")
upsert_response = index.upsert(
    vectors=processed_data,
    namespace="ns1",
)
print(f"Upserted count: {upsert_response['upserted_count']}")

# Print index statistics
print(index.describe_index_stats())