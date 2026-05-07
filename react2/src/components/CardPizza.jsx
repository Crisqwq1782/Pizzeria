// src/components/CardPizza.jsx
export default function CardPizza({ img, name, price, desc, ingredients }) {
  return (
    <div style={{
      width: "100%",           
      maxWidth: "380px",       
      borderRadius: "24px",
      backgroundColor: "#fff",
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      height: "700px",         
      overflow: "hidden"
    }}>
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
        
        <h3 style={{ margin: "0 0 16px 0", fontSize: "22px", fontWeight: "bold", textTransform: "capitalize" }}>
          {name}
        </h3>

        <img src={img} alt={name} style={{ width: "calc(100% + 48px)", marginLeft: "-24px", height: "200px", objectFit: "cover" }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          
          <div style={{ height: "100px", overflow: "hidden", marginTop: "20px" }}>
            <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>{desc}</p>
          </div>

          <p style={{ fontWeight: "bold", margin: "15px 0 10px" }}>Ingredientes:</p>
          
          <ul style={{ flex: 1, margin: 0, paddingLeft: "20px", fontSize: "14px", color: "#444" }}>
            {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
          </ul>
        </div>

        <div style={{ borderTop: "1px solid #eee", paddingTop: "20px", marginTop: "10px" }}>
          <p style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
            Precio: ${price.toLocaleString()}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
            <button style={{ flex: 1, padding: "10px", borderRadius: "10px", border: "1px solid #ccc", backgroundColor: "#fff" }}>Ver Más</button>
            <button style={{ flex: 1, padding: "10px", borderRadius: "10px", backgroundColor: "#000", color: "#fff" }}>Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}