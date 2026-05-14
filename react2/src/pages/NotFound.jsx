
import React from "react";

export default function NotFound() {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
    },
    title: {
      fontSize: "6rem",
      color: "tomato",
      margin: 0,
      fontWeight: "bold",
    },
    text: {
      fontSize: "1.5rem",
      color: "#555",
      margin: "1rem 0",
    },
    link: {
      textDecoration: "none",
      color: "white",
      backgroundColor: "tomato",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      transition: "background-color 0.3s ease",
    },
    linkHover: {
      backgroundColor: "#d63c2e",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>Oops... Wrong Way. 🍕</p>
      <a
        href="/"
        style={styles.link}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#d63c2e")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "tomato")}
      >
        Bring me home!
      </a>
    </div>
  );
}

