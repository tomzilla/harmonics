"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SupportPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send to support
    await fetch("/api/support", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });

    // Redirect to home
    router.push("/");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <header
        style={{
          background: "var(--gradient-harmonic)",
          padding: "var(--space-12) 0",
          marginBottom: "var(--space-12)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "var(--text-small)",
              fontWeight: "var(--weight-semibold)",
              letterSpacing: "var(--tracking-wide)",
              textTransform: "uppercase",
              color: "white",
              opacity: 0.9,
            }}
          >
            Harmonics24
          </Link>
          <span style={{ fontSize: "var(--text-small)", color: "white", opacity: 0.8 }}>
            Support
          </span>
        </div>
      </header>

      <div className="container container--narrow">
        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
          <h1
            style={{
              fontSize: "var(--text-h1)",
              fontWeight: "var(--weight-bold)",
              marginBottom: "var(--space-4)",
              color: "var(--color-obsidian)",
            }}
          >
            Contact Support
          </h1>
          <p
            style={{
              fontSize: "var(--text-body)",
              color: "var(--color-steel)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Send us a message and we&apos;ll get back to you shortly.
          </p>
        </div>

        {/* Form */}
        <main
          style={{
            background: "var(--color-white)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-md)",
            padding: "var(--space-10)",
            marginBottom: "var(--space-12)",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div style={{ marginBottom: "var(--space-6)" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "var(--text-small)",
                  fontWeight: "var(--weight-medium)",
                  color: "var(--color-obsidian)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                style={{
                  width: "100%",
                  border: "1px solid var(--color-steel)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.625rem 0.875rem",
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-sans)",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--color-frequency)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--color-steel)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "var(--space-8)" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "var(--text-small)",
                  fontWeight: "var(--weight-medium)",
                  color: "var(--color-obsidian)",
                  marginBottom: "var(--space-2)",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder="How can we help?"
                style={{
                  width: "100%",
                  border: "1px solid var(--color-steel)",
                  borderRadius: "var(--radius-sm)",
                  padding: "0.625rem 0.875rem",
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-sans)",
                  resize: "vertical",
                  minHeight: "120px",
                  transition: "border-color 0.15s ease, box-shadow 0.15s ease",
                  outline: "none",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "var(--color-frequency)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "var(--color-steel)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                background: isSubmitting ? "var(--color-steel)" : "var(--gradient-harmonic)",
                color: "var(--color-white)",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-sm)",
                fontWeight: "var(--weight-medium)",
                fontSize: "var(--text-body)",
                fontFamily: "var(--font-sans)",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSubmitting) {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-frequency)";
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </main>

        {/* Footer */}
        <footer style={{ textAlign: "center", padding: "var(--space-8) 0", color: "var(--color-steel)", fontSize: "var(--text-small)" }}>
          <p>&copy; {new Date().getFullYear()} Harmonics24. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
