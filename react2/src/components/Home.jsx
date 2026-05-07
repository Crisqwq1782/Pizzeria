import { useState, useEffect } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { Container, Spinner } from "react-bootstrap";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/pizzas");
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error al cargar pizzas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return (
    <Container className="text-center mt-5"><Spinner animation="border" variant="danger" /></Container>
  );

  return (
    <main>
      <Header />
      <section style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "16px",
        margin: "40px 16px"
      }}>
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            img={pizza.img}
            name={pizza.name}
            desc={pizza.desc}
            ingredients={pizza.ingredients}
            price={pizza.price}
          />
        ))}
      </section>
    </main>
  );
}
  


