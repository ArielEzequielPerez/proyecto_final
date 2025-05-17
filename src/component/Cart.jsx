import React from "react";
import { Container } from "react-bootstrap";

export default function Cart({ cart, incrementQuantity, decrementQuantity }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Container>
        <div className="cart-overlay">
          <div className="cart-container">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
              <p>No hay productos en el carrito.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>{product.title}</td>
                      <td>${product.price}</td>
                      <td>
                        <div className="d-flex align-items-start gap-4">
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => decrementQuantity(product.id)}
                            >
                              -
                            </button>
                            <span className="mx-2">
                              {product.quantity || 1}
                            </span>
                            <button
                              className="btn btn-sm btn-outline-primary"
                              onClick={() => incrementQuantity(product.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        ${(product.price * (product.quantity || 1)).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
