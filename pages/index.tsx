import React, { useState } from "react";
import Head from "next/head";

function Index() {
  const [activeTab, setActiveTab] = useState("home");

  const whatsappLink = "https://wa.me/919712227011?text=Hi%20Hotel%20Sai%20Darshan,%20I%20would%20like%20to%20book%20a%20room";
  const phoneNumber = "tel:+919712227011";

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
      </Head>
      <main style={{ minHeight: "100vh" }}>
        {/* Fixed Header with Navigation */}
        <nav
          style={{
            position: "sticky",
            top: 0,
            background: "linear-gradient(135deg, #8B4513 0%, #A0522D 100%)",
            color: "white",
            padding: "0.8rem 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 100,
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            flexWrap: "wrap",
          }}
        >
          <div style={{ fontSize: "1.8rem", fontWeight: "bold", letterSpacing: "1px" }}>
            🏨 Hotel Sai Darshan
          </div>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Home", id: "home" },
              { label: "Rooms & Pricing", id: "rooms" },
              { label: "Amenities", id: "amenities" },
              { label: "Location", id: "location" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  transition: "opacity 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* Call Button */}
          <a
            href={phoneNumber}
            style={{
              background: "#FF6B6B",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "25px",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: "bold",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "#FF5252")}
            onMouseOut={(e) => (e.currentTarget.style.background = "#FF6B6B")}
          >
            ☎️ Call Now
          </a>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          style={{
            padding: "5rem 2rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(139, 69, 19, 0.2) 0%, rgba(160, 82, 45, 0.2) 100%)",
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", margin: "0 0 1rem 0", color: "#1a1a1a", fontWeight: "bold" }}>
            🏨 Welcome to Hotel Sai Darshan
          </h1>
          <h2 style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)", color: "#666", margin: "0 0 2rem 0", fontWeight: "normal" }}>
            Affordable Luxury • Clean Comfort • Prime Location
          </h2>
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "#555",
              marginBottom: "2rem",
              maxWidth: "700px",
              lineHeight: "1.6",
            }}
          >
            Experience affordable luxury with our clean, comfortable rooms perfect for couples, families, and business travelers. Budget-friendly rates with zero compromises on quality.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginTop: "2rem" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                background: "#25D366",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#20BA5A";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              💬 WhatsApp Us
            </a>
            <a
              href={phoneNumber}
              style={{
                padding: "1rem 2.5rem",
                fontSize: "1rem",
                background: "#FF6B6B",
                color: "white",
                border: "none",
                borderRadius: "50px",
                cursor: "pointer",
                fontWeight: "bold",
                transition: "all 0.3s",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#FF5252";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#FF6B6B";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ☎️ Call Now: 9712227011
            </a>
          </div>
        </section>

        {/* Rooms & Pricing Section */}
        <section
          id="rooms"
          style={{
            padding: "4rem 2rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem", color: "#1a1a1a", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            🛏️ Our Room Categories & Pricing
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "3rem", fontSize: "1.05rem" }}>
            Transparent pricing • No hidden charges • All amenities included
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                name: "Budget Room",
                image: "🏠",
                description: "Perfect for budget-conscious travelers",
                amenities: ["Basic amenities", "Clean & comfortable", "Fan/AC", "Private bathroom"],
                rates: [
                  { type: "Non-AC", price: "₹1,199/night" },
                  { type: "AC", price: "₹1,700/night" },
                ],
                bestFor: "Budget travelers",
              },
              {
                name: "Semi Deluxe Room",
                image: "⭐",
                description: "Premium comfort with excellent value",
                amenities: ["Premium bedding", "AC with temperature control", "Hot water", "LCD TV"],
                rates: [
                  { type: "Non-AC", price: "₹1,599/night" },
                  { type: "AC", price: "₹2,099/night" },
                ],
                bestFor: "Families & couples",
                featured: true,
              },
              {
                name: "Deluxe Room",
                image: "👑",
                description: "Luxury experience at affordable prices",
                amenities: ["Premium furnishings", "AC + heater", "Hot water 24/7", "Larger space", "Premium toiletries"],
                rates: [
                  { type: "Non-AC", price: "₹2,099/night" },
                  { type: "AC", price: "₹2,599/night" },
                ],
                bestFor: "Special occasions",
              },
            ].map((room, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  background: room.featured ? "linear-gradient(135deg, #FFF9E6 0%, #FFE6CC 100%)" : "#f9f9f9",
                  borderRadius: "12px",
                  border: room.featured ? "2px solid #FFB800" : "1px solid #e0e0e0",
                  boxShadow: room.featured ? "0 4px 15px rgba(255, 184, 0, 0.2)" : "0 2px 8px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  position: "relative",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = room.featured ? "0 4px 15px rgba(255, 184, 0, 0.2)" : "0 2px 8px rgba(0,0,0,0.05)";
                }}
              >
                {room.featured && (
                  <div style={{ position: "absolute", top: "-12px", right: "20px", background: "#FFB800", color: "white", padding: "0.4rem 0.8rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "bold" }}>
                    ⭐ Most Popular
                  </div>
                )}
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{room.image}</div>
                <h3 style={{ margin: "1rem 0", color: "#1a1a1a", fontSize: "1.4rem" }}>{room.name}</h3>
                <p style={{ color: "#666", marginBottom: "1.5rem" }}>{room.description}</p>
                
                <div style={{ background: "rgba(139, 69, 19, 0.05)", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                  <p style={{ margin: "0 0 0.5rem 0", color: "#666", fontSize: "0.9rem" }}>Best for: <strong>{room.bestFor}</strong></p>
                  {room.amenities.map((amenity, i) => (
                    <div key={i} style={{ color: "#555", fontSize: "0.9rem", margin: "0.3rem 0" }}>
                      ✓ {amenity}
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <p style={{ margin: "0.5rem 0", fontWeight: "bold", color: "#1a1a1a" }}>Rates per night (2 persons):</p>
                  {room.rates.map((rate, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0", borderBottom: "1px solid #e0e0e0" }}>
                      <span style={{ color: "#666" }}>{rate.type}</span>
                      <span style={{ fontWeight: "bold", color: "#FFB800", fontSize: "1.1rem" }}>{rate.price}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    padding: "0.8rem 1.5rem",
                    background: "#25D366",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: "bold",
                    transition: "background 0.3s",
                    marginBottom: "0.5rem",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#20BA5A")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#25D366")}
                >
                  📱 Book Now on WhatsApp
                </a>
                <a
                  href={phoneNumber}
                  style={{
                    display: "block",
                    padding: "0.8rem 1.5rem",
                    background: "#FF6B6B",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "8px",
                    textAlign: "center",
                    fontWeight: "bold",
                    transition: "background 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.background = "#FF5252")}
                  onMouseOut={(e) => (e.currentTarget.style.background = "#FF6B6B")}
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
            padding: "4rem 2rem",
            background: "#f5f5f5",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "2rem", color: "#1a1a1a", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            ✨ Hotel Amenities & Features
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              { icon: "📶", name: "High-Speed WiFi", desc: "24/7 complimentary WiFi in all rooms" },
              { icon: "🅿️", name: "Free Parking", desc: "Secure parking available for guests" },
              { icon: "🚿", name: "Hot Water 24/7", desc: "Hot water available round the clock" },
              { icon: "🧹", name: "Daily Housekeeping", desc: "Professional cleaning & maintenance" },
              { icon: "👨‍👩‍👧‍👦", name: "Family Friendly", desc: "Perfect for families with children" },
              { icon: "☎️", name: "24/7 Support", desc: "Customer service available anytime" },
              { icon: "🔐", name: "Safe & Secure", desc: "CCTV & security personnel on duty" },
              { icon: "🛁", name: "Modern Bathrooms", desc: "Clean, well-maintained bathrooms" },
              { icon: "🎬", name: "Entertainment", desc: "LCD TV & cable in rooms" },
            ].map((amenity, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  background: "white",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  transition: "all 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0px 0px rgba(0,0,0,0)";
                }}
              >
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{amenity.icon}</div>
                <h3 style={{ color: "#1a1a1a", marginBottom: "0.5rem" }}>{amenity.name}</h3>
                <p style={{ color: "#666", margin: 0 }}>{amenity.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Section */}
        <section
          id="reviews"
          style={{
            padding: "4rem 2rem",
            background: "#f9f9f9",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "2rem", color: "#1a1a1a", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            ⭐ Guest Reviews & Testimonials
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {[
              { name: "Rajesh Kumar", rating: 5, text: "Excellent budget hotel! Very clean rooms and helpful staff. Perfect for couples. Highly recommended!" },
              { name: "Priya Sharma", rating: 5, text: "Amazing value for money. The AC room was cool, water was hot, and the bathroom was impeccably clean." },
              { name: "Amit Patel", rating: 5, text: "Best hotel in this price range. WiFi was fast, parking was secure. Will definitely stay again!" },
              { name: "Sneha Desai", rating: 5, text: "Family-friendly hotel with great amenities. Kids felt comfortable. Staff was very cooperative." },
              { name: "Vikram Singh", rating: 5, text: "Perfect for business travelers. Comfortable bed, good service, and reasonable prices. A+ hotel!" },
              { name: "Maya Iyer", rating: 5, text: "Cleanliness is their priority! Everything was spotless. Great location too. Definitely coming back!" },
            ].map((review, index) => (
              <div
                key={index}
                style={{
                  padding: "2rem",
                  background: "white",
                  borderRadius: "10px",
                  border: "1px solid #e0e0e0",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} style={{ color: "#FFB800", fontSize: "1.2rem" }}>★</span>
                  ))}
                </div>
                <p style={{ color: "#555", marginBottom: "1rem", lineHeight: "1.6" }}>"{review.text}"</p>
                <p style={{ color: "#1a1a1a", fontWeight: "bold", margin: 0 }}>- {review.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location & Map Section */}
        <section
          id="location"
          style={{
            padding: "4rem 2rem",
            background: "white",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "0.5rem", color: "#1a1a1a", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            📍 Our Location
          </h2>
          <p style={{ textAlign: "center", color: "#666", marginBottom: "2rem" }}>
            Conveniently located in the heart of Bhiwandi
          </p>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            {/* Map Embed */}
            <div style={{ borderRadius: "10px", overflow: "hidden", height: "400px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.7638888888886!2d73.06162252346926!3d19.268222682149894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7c8f8e8e8e8e9%3A0x8e8e8e8e8e8e8e8e!2sBhiwandi%2C%20Maharashtra%20421302!5e0!3m2!1sen!2sin!4v1234567890"
              ></iframe>
            </div>

            {/* Location Info */}
            <div>
              <h3 style={{ color: "#1a1a1a", marginBottom: "1.5rem", fontSize: "1.3rem" }}>Hotel Sai Darshan</h3>
              
              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "#666", marginBottom: "0.5rem" }}>📍 Address</h4>
                <p style={{ color: "#555" }}>Bhiwandi, Thane District, Maharashtra 421302, India</p>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <h4 style={{ color: "#666", marginBottom: "0.5rem" }}>☎️ Contact</h4>
                <a href={phoneNumber} style={{ color: "#25D366", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}>
                  +91 97122 27011
                </a>
              </div>

              <div style={{ marginBottom: "2rem" }}>
                <h4 style={{ color: "#666", marginBottom: "0.5rem" }}>🕐 Check-in / Check-out</h4>
                <p style={{ color: "#555" }}>Check-in: 1:00 PM | Check-out: 11:00 AM</p>
              </div>

              <a
                href="https://www.google.com/travel/hotels/s/REpukhBFPvheRbd58"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "0.8rem 1.5rem",
                  background: "#1877f2",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  transition: "background 0.3s",
                  marginBottom: "1rem",
                  marginRight: "1rem",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#1666D0")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#1877f2")}
              >
                📍 Google Maps Directions
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "0.8rem 1.5rem",
                  background: "#25D366",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "#20BA5A")}
                onMouseOut={(e) => (e.currentTarget.style.background = "#25D366")}
              >
                💬 WhatsApp Location
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          style={{
            padding: "4rem 2rem",
            background: "#f5f5f5",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#1a1a1a", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            ❓ Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {[
              { q: "What is the cheapest room available?", a: "Our Budget Room (Non-AC) starts at ₹1,199 per night for 2 persons. AC budget rooms are available at ₹1,700/night." },
              { q: "Is WiFi complimentary?", a: "Yes! High-speed WiFi is complimentary for all guests 24/7 in all rooms." },
              { q: "Is parking available?", a: "Yes, secure parking is available free of charge for all hotel guests." },
              { q: "What are your check-in/check-out times?", a: "Standard check-in is at 1:00 PM and check-out is at 11:00 AM. Early check-in/late check-out may be available on request." },
              { q: "Do you have hot water 24/7?", a: "Yes, hot water is available 24/7 in all our rooms with water heaters." },
              { q: "Can I book directly without WhatsApp?", a: "Absolutely! You can call us at 97122-27011 to book directly or visit our reception." },
              { q: "Is the hotel family-friendly?", a: "Yes! We are very family-friendly with comfortable rooms and helpful staff to ensure a pleasant stay." },
              { q: "What payment methods do you accept?", a: "We accept cash, UPI, credit/debit cards. Most common payment methods are welcome." },
            ].map((faq, index) => (
              <div key={index} style={{ marginBottom: "1.5rem", background: "white", padding: "1.5rem", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
                <h4 style={{ color: "#1a1a1a", marginBottom: "0.5rem", fontSize: "1.05rem" }}>❓ {faq.q}</h4>
                <p style={{ color: "#666", margin: 0, lineHeight: "1.6" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{
            padding: "4rem 2rem",
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "2rem", color: "#1a1a1a", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}>
            📞 Ready to Book Your Stay?
          </h2>
          <p style={{ color: "#666", marginBottom: "2rem", fontSize: "1.05rem" }}>
            Contact us now for quick booking and best rates!
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "1rem 2rem",
                background: "#25D366",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#20BA5A";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              💬 Chat on WhatsApp
            </a>
            <a
              href={phoneNumber}
              style={{
                padding: "1rem 2rem",
                background: "#FF6B6B",
                color: "white",
                textDecoration: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                transition: "all 0.3s",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#FF5252";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#FF6B6B";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              ☎️ Call: 9712227011
            </a>
          </div>
        </section>

        <footer
          style={{
            background: "#1a1a1a",
            color: "white",
            padding: "3rem 2rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <h3 style={{ margin: "0 0 1rem 0" }}>🏨 Hotel Sai Darshan</h3>
          <p style={{ margin: "0.5rem 0", color: "#ccc" }}>
            Affordable Luxury • Premium Comfort • Prime Location
          </p>
          <p style={{ margin: "1rem 0 0 0", fontSize: "0.875rem", color: "#999" }}>
            © 2024 Hotel Sai Darshan. All rights reserved.
          </p>
          <p style={{ margin: "1rem 0 0 0", fontSize: "0.85rem", color: "#999" }}>
            Phone: +91 97122 27011 | Location: Bhiwandi, Maharashtra 421302
          </p>
        </footer>
      </main>
    </>
  );
}

export default Index;