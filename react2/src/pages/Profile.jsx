import { Card, Button } from "react-bootstrap";

export default function Profile({ user }) {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card
        style={{
          padding: "8px 12px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          fontSize: "14px",
          width: "22rem",
        }}
        className="shadow"
      >
        <Card.Img
          variant="top"
          src={
            user?.avatar ||
            "https://images.unsplash.com/photo-1553514029-1318c9127859?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvbmQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D"
          }
          alt="User avatar"
        />
        <Card.Body>
          <Card.Title>{user?.name || "Amelia Watson"}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user?.email || "Usermail2742@gmail.com"}
          </Card.Subtitle>
          <Card.Text>
            {user?.bio ||
              "This profile is meant to showcase the user's information."}
          </Card.Text>
          <Button variant="primary">Editar Perfil</Button>
          <Button variant="danger" className="ms-2">Logout</Button>
        </Card.Body>
      </Card>
    </div>
  );
}