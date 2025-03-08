  import React from "react";
  import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
  
  const FloatingWhatsApp = () => {
    const phoneNumber = "+919912340396"; // Replace with your WhatsApp number
    const defaultMessage = "Hello! I'm interested in your services. Can we get on a call?"; // Custom message
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          zIndex: 1000,
          textDecoration: "none", // Remove underline from link
        }}
      >
        <FaWhatsapp color="white" size={40} /> {/* Use the WhatsApp icon */}
      </a>
    );
  };
  
  export default FloatingWhatsApp;
  