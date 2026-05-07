import { useState, useEffect } from "react";
import { Container, Card, Button, Badge, Spinner } from "react-bootstrap";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas/p001");
      const data = await response.json();
      setPizza(data);
    } catch (error) {
      console.error("Error al cargar la pizza:", error);
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

  if (!pizza) return null;

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: '25rem' }} className="shadow border-0">
        <Card.Img variant="top" src={"https://easyways.cl/storage/20210208143331pizza-napolitana.jpg"} alt={pizza.name} />
        <Card.Body>
          <Card.Title className="text-capitalize fw-bold fs-2">🍕 {pizza.name}</Card.Title>
          <hr />
          <Card.Text className="text-muted small">{pizza.desc}</Card.Text>

          <div className="my-3">
            <h6 className="fw-bold">Ingredientes:</h6>
            {pizza.ingredients?.map((ing) => (
              <Badge key={ing} bg="light" text="dark" className="border me-1 mb-1">
                {ing}
              </Badge>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <h3 className="fw-bold m-0">${pizza.price?.toLocaleString()}</h3>
            <Button variant="dark" className="px-4 shadow-sm">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Pizza;