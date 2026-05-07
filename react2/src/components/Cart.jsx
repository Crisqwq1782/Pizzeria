import { useState } from "react";
import { pizzaCart as initialCart } from "../data/pizzas"; //Array inicial


const Cart = () => {
  const [cart, setCart] = useState(initialCart);

  // Funciones para aumentar y disminuir 
  const increaseCount = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(newCart);
  };

  const decreaseCount = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0); // Si llega a 0, se elimina del carrito
    setCart(newCart);
  };

  // Cálculo del total
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div className="container mt-5">
      <h3>Detalles del pedido:</h3>
      <div className="bg-light p-4 rounded">
        {/* Recorrer el array */}
        {cart.map((item) => (
          <div key={item.id} className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center">
              <img src={item.img} alt={item.name} style={{ width: "50px", marginRight: "10px" }} />
              <h5 className="mb-0 text-capitalize">{item.name}</h5>
            </div>
            
            <div className="d-flex align-items-center">
              <span className="me-3">${(item.price * item.count).toLocaleString()}</span>
              
              {/* Botones de aumentar y disminuir (Punto 2) */}
              <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseCount(item.id)}>-</button>
              <span className="mx-2">{item.count}</span>
              <button className="btn btn-outline-primary btn-sm" onClick={() => increaseCount(item.id)}>+</button>
            </div>
          </div>
        ))}

        {/* Mostrar el total */}
        <h4 className="mt-4">Total: ${total.toLocaleString()}</h4>
        <button className="btn btn-dark mt-2">Pagar</button>
      </div>
    </div>
  );
};

export default Cart;