"use client";
import {
  AppBar,
  Box,
  Button,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm the Rate My Professor support assistant. How can I help you today?",
    },
  ]);
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    setMessage("");
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([...messages, { role: "user", content: message }]),
      });

      const { result } = await response.json();

      setMessages((messages) => {
        const newMessages = [...messages];
        newMessages[messages.length - 1].content = result;
        return newMessages;
      });
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Box
      className="w-full h-screen flex flex-col items-center"
      sx={{ backgroundColor: "#020817" }}
    >
      <Navbar />
      <Stack
        direction="column"
        width="500px"
        height="700px"
        className="border border-gray-300 bg-gray-800 p-4 mt-4 shadow-lg rounded-lg mb-4"
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          flexGrow={1}
          sx={{
            overflowY: "auto",
            paddingRight: "12px",
            marginBottom: "80px",
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#020817",
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#1F2937",
            },
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              className={`flex ${
                message.role === "assistant" ? "justify-start" : "justify-end"
              }`}
            >
              <Box
                className={`${
                  message.role === "assistant"
                    ? "text-white rounded-2xl p-3 max-w-xs"
                    : "text-white rounded-2xl p-3 max-w-xs"
                } ${index === messages.length - 1 ? "rounded-b-2xl mb-2" : ""}`}
                style={{
                  backgroundColor:
                    message.role === "assistant" ? "#5d6c8b" : "#1C2A48",
                }}
              >
                {message.content}
              </Box>
            </Box>
          ))}
        </Stack>

        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            backgroundColor: "#1F2937",
            padding: "8px 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <TextField
              label="Message"
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#888888",
                  },
                  "&:hover fieldset": {
                    borderColor: "#888888",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#888888",
                  },
                  backgroundColor: "#020817",
                },
                "& .MuiInputLabel-root": {
                  color: "#ffffff",
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#ffffff",
                },
                input: {
                  color: "#ffffff",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #1D4ED8 0%, #3B82F6 100%)",
                color: "#fff",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #1A3FB3 0%, #2563EB 100%)",
                },
              }}
              onClick={sendMessage}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Stack>
         
    </Box>
  );
}
