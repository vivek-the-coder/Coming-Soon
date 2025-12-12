import React, { useState } from "react";
import Head from "next/head";

function Index() {
  const [activeTab, setActiveTab] = useState("home");

  const whatsappLink = "https://wa.me/919712227011?text=Hi%20Hotel%20Sai%20Darshan,%20I%20would%20like%20to%20book%20a%20room";
  const phoneNumber = "tel:+919712227011";

  const premiumColors = {
    primary: "#2C1810",
    secondary: "#8B6F47",
    accent: "#D4AF37",
    light: "#F5F1E8",
    white: "#FFFFFF",
    text: "#3E3E3E",
    lightText: "#666666",
    success: "#27AE60",
    danger: "#E74C3C",
  };

  return (
    <>
      <Head>
        <title>Hotel Sai Darshan - Affordable Luxury Rooms | Budget Hotel in Prime Location</title>
        <meta
          name="description"
          content="Hotel Sai Darshan offers affordable, clean, comfortable rooms for couples, families & business travelers. Budget rooms from ₹1199, AC deluxe rooms, transparent pricing, WiFi, parking, family-friendly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Hotel Sai Darshan, budget hotel, affordable rooms, AC rooms, Non AC rooms, deluxe rooms, best hotel, Sai Darshan hotel booking, budget accommodation" />
        <meta property="og:title" content="Hotel Sai Darshan - Affordable Luxury Rooms" />
        <meta
          property="og:description"
          content="Book affordable, clean rooms at Hotel Sai Darshan. Budget from ₹1199, deluxe AC rooms available. WiFi, parking, family-friendly amenities."
        />
        <meta property="og:type" content="hotel" />
        <meta property="og:url" content="https://hotelsaidarshan.com" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Schema Markup for Local Business & Hotel */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Hotel",
              name: "Hotel Sai Darshan",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hotel Sai Darshan",
                addressLocality: "Bhiwandi",
                postalCode: "421302",
                addressCountry: "IN"
              },
              telephone: "+919712227011",
              priceRange: "₹₹",
              starRating: {
                "@type": "Rating",
                ratingValue: "4.5"
              },
              description: "Affordable luxury hotel offering clean, comfortable rooms for couples, families and business travelers",
              amenityFeature: ["WiFi", "Parking", "Hot Water", "24/7 Service", "Family Friendly"],
              roomType: [
                {
                  "@type": "Room",
                  name: "Budget Room",
                  description: "Non-AC and AC budget rooms",
                  priceRange: "₹1199-₹1700"
                },
                {
                  "@type": "Room",
                  name: "Semi Deluxe Room",
                  description: "Semi deluxe rooms with premium amenities",
                  priceRange: "₹1599-₹2099"
                },
                {
                  "@type": "Room",
                  name: "Deluxe Room",
                  description: "Luxury deluxe rooms with all premium facilities",
                  priceRange: "₹2099-₹2599"
                }
              ]
            })
          }}
        />

        <style>{`
          * {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: ${premiumColors.light};
          }
        `}</style>
      </Head>

      <main style={{ minHeight: "100vh", background: premiumColors.light }}>
        {/* Premium Navigation Header */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            background: premiumColors.white,
            color: premiumColors.primary,
            padding: "1rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 100,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            flexWrap: "wrap",
            borderBottom: `2px solid ${premiumColors.accent}`,
          }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "2px", color: premiumColors.primary }}>
            ✨ Hotel Sai Darshan
          </div>
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Home", id: "home" },
              { label: "Rooms", id: "rooms" },
              { label: "Amenities", id: "amenities" },
              { label: "Location", id: "location" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  color: premiumColors.primary,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  position: "relative",
                  paddingBottom: "4px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = premiumColors.accent;
                  e.currentTarget.style.borderBottom = `2px solid ${premiumColors.accent}`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = premiumColors.primary;
                  e.currentTarget.style.borderBottom = "none";
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={phoneNumber}
            style={{
              background: premiumColors.accent,
              color: premiumColors.white,
              padding: "0.65rem 1.25rem",
              borderRadius: "30px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 600,
              transition: "all 0.3s ease",
              boxShadow: `0 4px 15px rgba(212, 175, 55, 0.3)`,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = `0 6px 20px rgba(212, 175, 55, 0.4)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 4px 15px rgba(212, 175, 55, 0.3)`;
            }}
          >
            ☎️ Reserve Now
          </a>
        </nav>

        {/* Premium Hero Section */}
        <section
          id="home"
          style={{
            padding: "8rem 2rem 6rem",
            textAlign: "center",
            background: `linear-gradient(135deg, ${premiumColors.primary}95 0%, ${premiumColors.secondary}90 100%)`,
            minHeight: "70vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: premiumColors.white,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1 }}>
            {/* Decorative Pattern */}
          </div>
          
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>🏨</div>
            <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", margin: "0 0 1rem 0", fontWeight: 700, letterSpacing: "1px" }}>
              Hotel Sai Darshan
            </h1>
            <h2 style={{ fontSize: "clamp(1.1rem, 3vw, 1.6rem)", color: premiumColors.accent, margin: "0 0 2rem 0", fontWeight: 400, letterSpacing: "0.5px" }}>
              Premium Comfort • Affordable Luxury • Prime Location
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.15rem)",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "2.5rem",
                maxWidth: "700px",
                lineHeight: "1.8",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Experience exceptional hospitality with our immaculately clean rooms, premium amenities, and personalized service. Your comfort is our priority.
            </p>
            <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center", marginTop: "2rem" }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "1rem 2.5rem",
                  fontSize: "1rem",
                  background: premiumColors.success,
                  color: "white",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: `0 4px 15px rgba(39, 174, 96, 0.3)`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "#229954";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 6px 20px rgba(39, 174, 96, 0.4)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = premiumColors.success;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 15px rgba(39, 174, 96, 0.3)`;
                }}
              >
                💬 Book via WhatsApp
              </a>
              <a
                href={phoneNumber}
                style={{
                  padding: "1rem 2.5rem",
                  fontSize: "1rem",
                  background: premiumColors.accent,
                  color: premiumColors.primary,
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  fontWeight: 600,
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                  boxShadow: `0 4px 15px rgba(212, 175, 55, 0.3)`,
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 6px 20px rgba(212, 175, 55, 0.4)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 15px rgba(212, 175, 55, 0.3)`;
                }}
              >
                ☎️ Call: 97122 27011
              </a>
            </div>
          </div>
        </section>

        {/* Rooms & Pricing Section */}
        <section
          id="rooms"
          style={{
            padding: "6rem 2rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: premiumColors.accent, letterSpacing: "2px", textTransform: "uppercase" }}>
              Our Offerings
            </span>
            <h2 style={{ textAlign: "center", marginTop: "0.5rem", marginBottom: "0.5rem", color: premiumColors.primary, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Room Categories & Pricing
            </h2>
            <p style={{ textAlign: "center", color: premiumColors.lightText, marginBottom: "0", fontSize: "1.05rem" }}>
              Transparent pricing • All-inclusive amenities • Book with confidence
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2.5rem",
            }}
          >
            {[
              {
                name: "Budget Room",
                icon: "🏠",
                description: "Comfortable and clean, perfect for value-conscious travelers",
                amenities: ["Essential amenities", "Spotless clean", "Window AC/Fan", "Modern bathroom"],
                rates: [
                  { type: "Non-AC", price: "₹1,199" },
                  { type: "AC", price: "₹1,700" },
                ],
                bestFor: "Solo travelers & budget visitors",
              },
              {
                name: "Semi Deluxe Room",
                icon: "⭐",
                description: "Premium experience with excellent value and comfort",
                amenities: ["Premium bedding", "Efficient AC", "Hot water 24/7", "42\" LCD TV"],
                rates: [
                  { type: "Non-AC", price: "₹1,599" },
                  { type: "AC", price: "₹2,099" },
                ],
                bestFor: "Families & couples",
                featured: true,
              },
              {
                name: "Deluxe Room",
                icon: "👑",
                description: "Luxury and elegance at remarkably affordable prices",
                amenities: ["Premium furnishings", "AC + heater", "Hot water always", "Spacious layout", "Premium toiletries"],
                rates: [
                  { type: "Non-AC", price: "₹2,099" },
                  { type: "AC", price: "₹2,599" },
                ],
                bestFor: "Special occasions",
              },
            ].map((room, index) => (
              <div
                key={index}
                style={{
                  padding: "2.5rem",
                  background: room.featured ? premiumColors.white : "rgba(255,255,255,0.7)",
                  borderRadius: "15px",
                  border: room.featured ? `3px solid ${premiumColors.accent}` : `1px solid rgba(0,0,0,0.05)`,
                  boxShadow: room.featured ? `0 8px 30px rgba(212, 175, 55, 0.15)` : "0 4px 15px rgba(0,0,0,0.06)",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.320, 1)",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = room.featured 
                    ? `0 12px 40px rgba(212, 175, 55, 0.2)` 
                    : "0 8px 25px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = room.featured 
                    ? `0 8px 30px rgba(212, 175, 55, 0.15)` 
                    : "0 4px 15px rgba(0,0,0,0.06)";
                }}
              >
                {room.featured && (
                  <div style={{ position: "absolute", top: "0px", right: "20px", background: premiumColors.accent, color: premiumColors.primary, padding: "0.5rem 1rem", borderRadius: "0 0 15px 15px", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1px" }}>
                    ⭐ MOST POPULAR
                  </div>
                )}
                
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{room.icon}</div>
                <h3 style={{ margin: "1rem 0", color: premiumColors.primary, fontSize: "1.5rem", fontWeight: 700 }}>{room.name}</h3>
                <p style={{ color: premiumColors.lightText, marginBottom: "1.5rem", fontSize: "0.95rem", lineHeight: "1.6" }}>{room.description}</p>
                
                <div style={{ background: "rgba(212, 175, 55, 0.08)", padding: "1.2rem", borderRadius: "10px", marginBottom: "1.5rem", flex: 1 }}>
                  <p style={{ margin: "0 0 0.8rem 0", color: premiumColors.primary, fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>Best For: {room.bestFor}</p>
                  {room.amenities.map((amenity, i) => (
                    <div key={i} style={{ color: premiumColors.text, fontSize: "0.9rem", margin: "0.4rem 0" }}>
                      ✓ {amenity}
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{ margin: "0.5rem 0", fontWeight: 600, color: premiumColors.primary, fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.5px" }}>Per Night (2 Persons):</p>
                  {room.rates.map((rate, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                      <span style={{ color: premiumColors.lightText, fontSize: "0.9rem" }}>{rate.type}</span>
                      <span style={{ fontWeight: 700, color: premiumColors.accent, fontSize: "1.1rem" }}>{rate.price}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "0.9rem 1.5rem",
                    background: premiumColors.success,
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    marginBottom: "0.6rem",
                    fontSize: "0.95rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#229954";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = premiumColors.success;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  💬 Reserve on WhatsApp
                </a>
                <a
                  href={phoneNumber}
                  style={{
                    display: "block",
                    padding: "0.9rem 1.5rem",
                    background: premiumColors.primary,
                    color: premiumColors.white,
                    textDecoration: "none",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    fontSize: "0.95rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#1a0e08";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = premiumColors.primary;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  ☎️ Call to Book
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Amenities Section */}
        <section
          id="amenities"
          style={{
            padding: "6rem 2rem",
            background: "white",
            textAlign: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: premiumColors.accent, letterSpacing: "2px", textTransform: "uppercase" }}>
              What We Offer
            </span>
            <h2 style={{ marginTop: "0.5rem", color: premiumColors.primary, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Exceptional Amenities & Services
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2rem",
              maxWidth: "1300px",
              margin: "0 auto",
            }}
          >
            {[
              { icon: "📶", name: "High-Speed WiFi", desc: "24/7 complimentary WiFi in all rooms" },
              { icon: "🅿️", name: "Free Parking", desc: "Secure & spacious parking for guests" },
              { icon: "🚿", name: "Hot Water Always", desc: "Hot water available round the clock" },
              { icon: "🧹", name: "Daily Housekeeping", desc: "Professional cleaning daily" },
              { icon: "👨‍👩‍👧‍👦", name: "Family Friendly", desc: "Perfect for families & children" },
              { icon: "☎️", name: "24/7 Support", desc: "Round-the-clock customer service" },
              { icon: "🔐", name: "Safe & Secure", desc: "CCTV & security personnel on duty" },
              { icon: "🛁", name: "Modern Bathrooms", desc: "Clean & well-maintained facilities" },
              { icon: "🎬", name: "Entertainment", desc: "LCD TV & cable in every room" },
            ].map((amenity, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  background: premiumColors.light,
                  borderRadius: "12px",
                  border: `1px solid rgba(212, 175, 55, 0.2)`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.background = premiumColors.white;
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = premiumColors.light;
                  e.currentTarget.style.boxShadow = "0 0px 0px rgba(0,0,0,0)";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.8rem" }}>{amenity.icon}</div>
                <h3 style={{ color: premiumColors.primary, marginBottom: "0.5rem", fontWeight: 700, fontSize: "1.1rem" }}>{amenity.name}</h3>
                <p style={{ color: premiumColors.lightText, margin: 0, fontSize: "0.9rem" }}>{amenity.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section
          id="reviews"
          style={{
            padding: "6rem 2rem",
            background: premiumColors.light,
            textAlign: "center",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: premiumColors.accent, letterSpacing: "2px", textTransform: "uppercase" }}>
              Guest Experiences
            </span>
            <h2 style={{ marginTop: "0.5rem", color: premiumColors.primary, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Guest Reviews & Testimonials
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              { name: "Rajesh Kumar", rating: 5, text: "Exceptional value for money! Clean rooms, helpful staff, perfect for couples. Highly recommended!" },
              { name: "Priya Sharma", rating: 5, text: "Amazing stay! AC works perfectly, hot water is consistent, and the bathroom is impeccably maintained." },
              { name: "Amit Patel", rating: 5, text: "Best budget hotel experience. Fast WiFi, secure parking, professional service. Will definitely return!" },
              { name: "Sneha Desai", rating: 5, text: "Family-friendly atmosphere with cooperative staff. Kids felt comfortable. Exceeded expectations!" },
              { name: "Vikram Singh", rating: 5, text: "Perfect for business travelers. Comfortable beds, good housekeeping, excellent hospitality." },
              { name: "Maya Iyer", rating: 5, text: "Cleanliness is impeccable! Everything spotless, great location, friendly management. Five stars!" },
            ].map((review, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  background: "white",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{ marginBottom: "1rem", display: "flex", gap: "0.2rem" }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} style={{ color: premiumColors.accent, fontSize: "1.3rem" }}>★</span>
                  ))}
                </div>
                <p style={{ color: premiumColors.text, marginBottom: "1.2rem", lineHeight: "1.7", fontSize: "0.95rem" }}>"{review.text}"</p>
                <p style={{ color: premiumColors.primary, fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>— {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Map Section */}
        <section
          id="location"
          style={{
            padding: "6rem 2rem",
            background: "white",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: premiumColors.accent, letterSpacing: "2px", textTransform: "uppercase" }}>
              Find Us
            </span>
            <h2 style={{ marginTop: "0.5rem", color: premiumColors.primary, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Our Location
            </h2>
          </div>

          <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ borderRadius: "15px", overflow: "hidden", height: "420px", boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.7638888888886!2d73.06162252346926!3d19.268222682149894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7c8f8e8e8e8e9%3A0x8e8e8e8e8e8e8e8e!2sBhiwandi%2C%20Maharashtra%20421302!5e0!3m2!1sen!2sin!4v1234567890"
              ></iframe>
            </div>

            <div>
              <h3 style={{ color: premiumColors.primary, marginBottom: "2rem", fontSize: "1.4rem", fontWeight: 700 }}>Hotel Sai Darshan</h3>
              
              <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <h4 style={{ color: premiumColors.accent, marginBottom: "0.5rem", fontSize: "0.95rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>📍 Address</h4>
                <p style={{ color: premiumColors.text, fontSize: "1rem", lineHeight: "1.6", margin: 0 }}>Bhiwandi, Thane District<br/>Maharashtra 421302, India</p>
              </div>

              <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <h4 style={{ color: premiumColors.accent, marginBottom: "0.5rem", fontSize: "0.95rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>☎️ Contact</h4>
                <a href={phoneNumber} style={{ color: premiumColors.secondary, textDecoration: "none", fontWeight: 700, fontSize: "1.2rem" }}>
                  +91 97122 27011
                </a>
              </div>

              <div style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
                <h4 style={{ color: premiumColors.accent, marginBottom: "0.5rem", fontSize: "0.95rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>🕐 Check-in / Check-out</h4>
                <p style={{ color: premiumColors.text, fontSize: "0.95rem", margin: 0 }}>Check-in: 1:00 PM | Check-out: 11:00 AM</p>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href="https://www.google.com/travel/hotels/s/REpukhBFPvheRbd58"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "0.9rem 1.5rem",
                    background: premiumColors.primary,
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    fontSize: "0.95rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#1a0e08";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = premiumColors.primary;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  📍 Get Directions
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    padding: "0.9rem 1.5rem",
                    background: premiumColors.success,
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    fontSize: "0.95rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = "#229954";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = premiumColors.success;
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  💬 Share Location
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          style={{
            padding: "6rem 2rem",
            background: premiumColors.light,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: premiumColors.accent, letterSpacing: "2px", textTransform: "uppercase" }}>
              Questions & Answers
            </span>
            <h2 style={{ marginTop: "0.5rem", color: premiumColors.primary, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ maxWidth: "950px", margin: "0 auto" }}>
            {[
              { q: "What is the cheapest room available?", a: "Our Budget Room (Non-AC) starts at ₹1,199 per night for 2 persons. AC budget rooms are available at ₹1,700/night." },
              { q: "Is WiFi complimentary?", a: "Yes! High-speed WiFi is complimentary for all guests 24/7 in all rooms and common areas." },
              { q: "Is parking available?", a: "Yes, secure parking is available free of charge for all hotel guests." },
              { q: "What are your check-in/check-out times?", a: "Standard check-in is at 1:00 PM and check-out is at 11:00 AM. Early check-in/late check-out may be available on request." },
              { q: "Do you have hot water 24/7?", a: "Yes, hot water is available 24/7 in all our rooms with modern water heating systems." },
              { q: "Can I book directly without WhatsApp?", a: "Absolutely! You can call us at 97122-27011 to book directly or visit our reception." },
              { q: "Is the hotel family-friendly?", a: "Yes! We are very family-friendly with comfortable rooms and helpful staff to ensure a pleasant stay." },
              { q: "What payment methods do you accept?", a: "We accept cash, UPI, credit/debit cards, and online transfers. All major payment methods are welcome." },
            ].map((faq, index) => (
              <div key={index} style={{ marginBottom: "1.5rem", background: "white", padding: "1.8rem", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.05)", transition: "all 0.3s ease" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow = "0 0px 0px rgba(0,0,0,0)";
                }}
              >
                <h4 style={{ color: premiumColors.primary, marginBottom: "0.8rem", fontSize: "1.05rem", fontWeight: 700 }}>❓ {faq.q}</h4>
                <p style={{ color: premiumColors.text, margin: 0, lineHeight: "1.7", fontSize: "0.95rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          style={{
            padding: "6rem 2rem",
            background: `linear-gradient(135deg, ${premiumColors.primary}95 0%, ${premiumColors.secondary}90 100%)`,
            textAlign: "center",
            color: "white",
          }}
        >
          <h2 style={{ marginBottom: "1rem", color: "white", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
            Ready to Experience Premium Comfort?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.9)", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
            Book your stay today and enjoy exceptional hospitality at affordable rates
          </p>
          <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "1rem 2.5rem",
                background: premiumColors.success,
                color: "white",
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 600,
                transition: "all 0.3s ease",
                display: "inline-block",
                boxShadow: `0 4px 15px rgba(39, 174, 96, 0.3)`,
                fontSize: "1rem",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#229954";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 6px 20px rgba(39, 174, 96, 0.4)`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = premiumColors.success;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 15px rgba(39, 174, 96, 0.3)`;
              }}
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href={phoneNumber}
              style={{
                padding: "1rem 2.5rem",
                background: premiumColors.accent,
                color: premiumColors.primary,
                textDecoration: "none",
                borderRadius: "50px",
                fontWeight: 600,
                transition: "all 0.3s ease",
                display: "inline-block",
                boxShadow: `0 4px 15px rgba(212, 175, 55, 0.3)`,
                fontSize: "1rem",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = `0 6px 20px rgba(212, 175, 55, 0.4)`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 4px 15px rgba(212, 175, 55, 0.3)`;
              }}
            >
              ☎️ Call Now
            </a>
          </div>
        </section>

        {/* Premium Footer */}
        <footer
          style={{
            background: premiumColors.primary,
            color: "white",
            padding: "4rem 2rem",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0", fontSize: "1.8rem", fontWeight: 700, letterSpacing: "1px" }}>🏨 Hotel Sai Darshan</h3>
          <p style={{ margin: "0.5rem 0", color: premiumColors.accent, fontSize: "1rem", fontWeight: 600, letterSpacing: "1px" }}>
            Premium Comfort • Affordable Luxury • Exceptional Service
          </p>
          <div style={{ margin: "1.5rem 0", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            <p style={{ margin: "0.5rem 0", color: "rgba(255,255,255,0.9)" }}>
              📍 Bhiwandi, Maharashtra 421302 | ☎️ +91 97122 27011
            </p>
            <p style={{ margin: "0.5rem 0", color: "rgba(255,255,255,0.9)" }}>
              💬 Available on WhatsApp 24/7
            </p>
          </div>
          <p style={{ margin: "1.5rem 0 0 0", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
            © 2024 Hotel Sai Darshan. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}

export default Index;
