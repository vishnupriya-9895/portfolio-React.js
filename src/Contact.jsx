import React from "react";

const Contact = () => {
  return (
<>
 <h1 className="text-center text-2xl">Contact</h1>

    <section id="contact" className="bg-black d-flex justify-center  h-100"
      style={{
        
        // display: "flex",
        alignItems: "center",
        justifyContent: "center",
      
        padding: "40px 20px",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "480px",
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(12px)",
          borderRadius: "18px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          animation: "fadeUp 1s ease",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: "2.5rem",
            marginBottom: "10px",
          }}
        >
          Get In Touch
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#ccc",
            fontSize: "0.95rem",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          Have a project or want to work together?  
          Drop me a message 
        </p>

        <form style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "14px 16px",
              borderRadius: "10px",
              border: "1px solid #555",
              background: "transparent",
              color: "#fff",
              outline: "none",
              fontSize: "0.95rem",
            }}
          />

      
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "14px 16px",
              borderRadius: "10px",
              border: "1px solid #555",
              background: "transparent",
              color: "#fff",
              outline: "none",
              fontSize: "0.95rem",
            }}
          />

  
          <textarea
            rows="4"
            placeholder="Your Message"
            style={{
              padding: "14px 16px",
              borderRadius: "10px",
              border: "1px solid #555",
              background: "transparent",
              color: "#fff",
              outline: "none",
              fontSize: "0.95rem",
              resize: "none",
            }}
          />

 
          <button
            type="submit"
            style={{
              marginTop: "10px",
              padding: "14px",
              borderRadius: "30px",
              border: "none",
              background: "linear-gradient(90deg, #ff9ffc, #9f7bff)",
              color: "#000",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px rgba(159,123,255,0.5)",
            }}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-3px)")
            }
            onMouseLeave={(e) =>
              (e.target.style.transform = "translateY(0)")
            }
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
    </>
  );
};

export default Contact;
