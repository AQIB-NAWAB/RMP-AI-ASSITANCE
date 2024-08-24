import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#020817] text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-[400px] flex justify-center items-center">
              <Image
                src="/ast.webp"
                alt="AI Assistant Center"
                width={250}
                height={400}
                style={{ objectFit: "contain" }}
                className="z-20"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is Rate Mate?
            </h2>
            <p className="text-gray-300 mb-6">
              Rate Mate is an advanced tool designed to provide insightful
              feedback on your professors. Using cutting-edge AI technology, it
              analyzes various data points to help you make informed decisions
              about your courses and instructors.
            </p>
            <p className="text-gray-300 mb-6">
              Whether you're seeking detailed reviews or quick insights, our AI
              Assistant is here to help you get the most out of your academic
              experience. It offers personalized recommendations and evaluations
              based on a comprehensive analysis of professor ratings and student
              feedback.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-300">
                <span className="font-semibold">Technology:</span> AI-Driven
                Insights
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Images */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x opacity-30">
        <div className="relative w-[150px] h-[300px] md:w-[250px] md:h-[400px]">
          <Image
            src="/ast.webp"
            alt="AI Assistant Left"
            fill
            style={{ objectFit: "contain" }}
            className="z-0"
          />
        </div>
      </div>
      <div className="absolute right-1/2 top-1/2 transform -translate-y-1/2 translate-x-1/4 opacity-30">
        <div className="relative w-[150px] h-[300px] md:w-[250px] md:h-[400px]">
          <Image
            src="/ast.webp"
            alt="AI Assistant Right"
            fill
            style={{ objectFit: "contain" }}
            className="z-0"
          />
        </div>
      </div>
    </section>
  );
}
