import React from "react";
import Head from "next/head";

function Index() {
  return (
    <>
      <Head>
        <title>Live Website - Built with Plasmic & Next.js</title>
        <meta
          name="description"
          content="A modern, production-ready website built with Plasmic visual design platform and Next.js React framework."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Live Website" />
        <meta
          property="og:description"
          content="A modern website built with Plasmic and Next.js"
        />
        <meta property="og:type" content="website" />
      </Head>
      <main style={{ minHeight: "100vh" }}>
        <nav
          style={{
            background: "linear-gradient(135deg, #1877f2 0%, #04a4f4 100%)",
            color: "white",
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Live Website
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <a href="#features" style={{ color: "white" }}>
              Features
            </a>
            <a href="#about" style={{ color: "white" }}>
              About
            </a>
            <a href="#contact" style={{ color: "white" }}>
              Contact
            </a>
          </div>
        </nav>

        <section
          style={{
            padding: "6rem 2rem",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(24, 119, 242, 0.1) 0%, rgba(4, 164, 244, 0.1) 100%)",
          }}
        >
          <h1 style={{ fontSize: "3rem", margin: "0 0 1rem 0", color: "#1a1a1a" }}>
            Welcome to Your Live Website
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#666",
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            A modern, production-ready website built with Plasmic visual design
            platform and Next.js React framework.
          </p>
          <button
            style={{
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              background: "linear-gradient(135deg, #1877f2 0%, #04a4f4 100%)",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Get Started
          </button>
        </section>

        <section
          id="features"
          style={{
            padding: "4rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "3rem", color: "#1a1a1a" }}>
            Key Features
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                title: "Visual Design",
                description:
                  "Design and iterate on your website using Plasmic's visual studio",
              },
              {
                title: "Production Ready",
                description:
                  "Built with Next.js for optimal performance and SEO",
              },
              {
                title: "Type Safe",
                description: "Full TypeScript support for robust development",
              },
              {
                title: "Fast Loading",
                description: "Optimized for speed with automatic code splitting",
              },
              {
                title: "Responsive Design",
                description:
                  "Works seamlessly on desktop, tablet, and mobile devices",
              },
              {
                title: "Easy Deployment",
                description:
                  "Deploy to Vercel, Netlify, or any hosting platform",
              },
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  background: "#f5f5f5",
                  borderRadius: "8px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <h3 style={{ margin: "0 0 0.5rem 0", color: "#1877f2" }}>
                  {feature.title}
                </h3>
                <p style={{ color: "#666", margin: 0 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="about"
          style={{
            padding: "4rem 2rem",
            background: "#f5f5f5",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "1rem", color: "#1a1a1a" }}>About This Site</h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            This is a live website demonstrating the capabilities of Plasmic, a
            powerful visual design platform that integrates seamlessly with Next.js.
            It provides a complete visual development environment while maintaining
            the power and flexibility of React and TypeScript.
          </p>
        </section>

        <section
          id="contact"
          style={{
            padding: "4rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#1a1a1a" }}>
            Get In Touch
          </h2>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#666", marginBottom: "1.5rem" }}>
              Ready to build your next project? Let&apos;s connect!
            </p>
            <a
              href="mailto:hello@example.com"
              style={{
                display: "inline-block",
                padding: "0.75rem 2rem",
                background: "linear-gradient(135deg, #1877f2 0%, #04a4f4 100%)",
                color: "white",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Contact Us
            </a>
          </div>
        </section>

        <footer
          style={{
            background: "#1a1a1a",
            color: "white",
            padding: "2rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <p style={{ margin: 0, marginBottom: "0.5rem" }}>
            Built with Plasmic & Next.js
          </p>
          <p style={{ margin: 0, fontSize: "0.875rem", color: "#999" }}>
            © 2024 Live Website. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default Index;