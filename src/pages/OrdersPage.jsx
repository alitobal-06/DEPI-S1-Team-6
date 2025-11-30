import { useState } from "react";
import "../assets/OrdersPage.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function OrdersPage() {
  // Load initial or saved orders
  const loadOrders = () => {
    const saved = localStorage.getItem("orders");
    if (saved) return JSON.parse(saved);

    return [
      {
        id: 1,
        customerName: "John Smith",
        phone: "+1 (555) 123-4567",
        address: "123 Main St, Apt 4B",
        chosenOffer: "Basic Pipe Repair",
        status: "New",
      },
      {
        id: 2,
        customerName: "Sarah Johnson",
        phone: "+1 (555) 987-6543",
        address: "456 Oak Avenue",
        chosenOffer: "Water Heater Service",
        status: "In Progress",
      },
    ];
  };

  const [orders, setOrders] = useState(loadOrders());

  // Update Status Function
  const updateStatus = (id, newStatus) => {
    setOrders((prev) => {
      const updated = prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      );
      localStorage.setItem("orders", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <>
      <Header />
       {/* Sidebar */}
      <div className="sidebar p-4">
        <Link to="/categories" className="back-link mb-3 d-flex align-items-center gap-2 text-decoration-none">
          <i className="fa-solid fa-arrow-left"></i> Back to Categories
        </Link>

        <h5 className="fw-bold">Plumbing</h5>
        <p className="text-secondary small mb-4">Repairs & Installation</p>

        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <Link to="/offers" className="nav-link  d-flex align-items-center gap-2">
              <i className="fa-regular fa-clipboard"></i> Offers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/orders" className="nav-link active d-flex align-items-center gap-2">
              <i className="fa-solid fa-cart-shopping"></i> Orders
            </Link>
          </li>
        </ul>
      </div>

      <div className="orders-container">
        <h1 className="orders-title">Orders</h1>

        <table className="orders-table table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Chosen Offer</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.customerName}</td>
                <td>{order.phone}</td>
                <td>{order.address}</td>
                <td>{order.chosenOffer}</td>

                {/* Status Badge */}
                <td>
                  <span
                    className={`status-badge 
                      ${order.status === "New" ? "status-new" : ""} 
                      ${order.status === "In Progress" ? "status-progress" : ""} 
                      ${order.status === "Done" ? "status-done" : ""}`}
                  >
                    {order.status}
                  </span>
                </td>

                {/* Action Buttons */}
                <td>
                  {order.status === "New" && (
                    <button
                      className="btn btn-primary btn-start"
                      onClick={() => updateStatus(order.id, "In Progress")}
                    >
                      Start
                    </button>
                  )}

                  {order.status === "In Progress" && (
                    <button
                      className="btn btn-success btn-complete"
                      onClick={() => updateStatus(order.id, "Done")}
                    >
                      Complete
                    </button>
                  )}

                  {order.status === "Done" && (
                    <span className="completed-text">Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
}

export default OrdersPage;
