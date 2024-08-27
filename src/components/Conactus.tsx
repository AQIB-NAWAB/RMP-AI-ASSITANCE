"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import {
  Button,
  TextField,
  TextareaAutosize,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, email, message, acceptTerms });
  };

  return (
    <section className="bg-[#020817] text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 relative">
          <span
            className="relative z-10"
            style={{
              background: "linear-gradient(180deg, #ffffff, #3B82F6)", 
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            GET IN TOUCH
          </span>
          <span
            className="absolute top-0 left-0 text-8xl text-gray-800 opacity-10 -z-10"
            style={{
              background: "linear-gradient(180deg, #ffffff, #3B82F6)", 
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            CONTACT
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">DON'T BE SHY</h3>
            <p className="text-gray-400 mb-8">
              Feel free to get in touch with us. We are always open to
              discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-4 text-blue-500" />
                <span>info@ratemate.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-blue-500" />
                <span>+92 3014529958</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              fullWidth
              type="text"
              label="Your Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              InputProps={{
                className: "bg-gray-800 text-white",
              }}
              InputLabelProps={{
                className: "text-gray-400",
              }}
            />
            <TextField
              fullWidth
              type="email"
              label="Email Address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              InputProps={{
                className: "bg-gray-800 text-white",
              }}
              InputLabelProps={{
                className: "text-gray-400",
              }}
            />
            <TextareaAutosize
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full bg-gray-800 border border-gray-700 text-white p-4 rounded-md"
              minRows={6}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  sx={{
                    color: "gray",
                    "&.Mui-checked": {
                      color: "#1D4ED8", // Blue color
                    },
                  }}
                />
              }
              label={
                <span className="text-sm text-gray-400">
                  I accept the Terms of Service
                </span>
              }
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #1D4ED8 0%, #3B82F6 100%)",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "50px",
                py: 1.5,
                px: 4,
                ":hover": {
                  background:
                    "linear-gradient(90deg, #1A3FB3 0%, #2563EB 100%)",
                },
              }}
              fullWidth
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
