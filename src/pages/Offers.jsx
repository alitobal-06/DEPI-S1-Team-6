import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/offers.css";
import { Link } from "react-router-dom";
import data from "../data/data.json";

export default function Offers() {
  const [offers, setOffers] = useState([]);
  const [modalData, setModalData] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
    duration: "",
  });

  // Load offers: merge from data.json + localStorage
  useEffect(() => {
    // 1. Get all offers from data.json services
    const baseOffers = [];
    data.services.forEach((service) => {
      if (service.offers && service.offers.length > 0) {
        service.offers.forEach((offer) => {
          baseOffers.push({
            id: offer.id,
            title: offer.title,
            description: offer.shortDesc || offer.description,
            price: offer.price,
            duration: offer.unit || "N/A",
            fromData: true, // Mark as from data.json (read-only)
          });
        });
      }
    });

    // 2. Get custom offers from localStorage
    const stored = localStorage.getItem("customOffers");
    const customOffers = stored ? JSON.parse(stored) : [];

    // 3. Merge both: base offers + custom offers
    setOffers([...baseOffers, ...customOffers]);
  }, []);

  const updateStorage = (customOnly) => {
    localStorage.setItem("customOffers", JSON.stringify(customOnly));
  };

  const openAddModal = () => {
    setModalData({ id: "", title: "", description: "", price: "", duration: "" });
  };

  const openEditModal = (offer) => {
    // Only allow editing custom offers (not from data.json)
    if (offer.fromData) {
      alert("Cannot edit base offers from data.json. You can only edit custom offers.");
      return;
    }
    setModalData(offer);
    new window.bootstrap.Modal(document.getElementById("offerModal")).show();
  };

  const saveOffer = () => {
    // Filter to get only custom offers
    const customOffers = offers.filter((o) => !o.fromData);
    
    let updatedCustom = [];
    if (modalData.id) {
      // Edit existing custom offer
      updatedCustom = customOffers.map((o) => (o.id === modalData.id ? modalData : o));
    } else {
      // Add new custom offer
      updatedCustom = [...customOffers, { ...modalData, id: Date.now(), fromData: false }];
    }

    updateStorage(updatedCustom);

    // Merge with base offers
    const baseOffers = offers.filter((o) => o.fromData);
    setOffers([...baseOffers, ...updatedCustom]);

    const modalEl = document.getElementById("offerModal");
    const bsModal = window.bootstrap.Modal.getInstance(modalEl);
    bsModal.hide();
  };

  const deleteOffer = (id) => {
    const offerToDelete = offers.find((o) => o.id === id);
    
    // Only allow deleting custom offers
    if (offerToDelete && offerToDelete.fromData) {
      alert("Cannot delete base offers from data.json. You can only delete custom offers.");
      return;
    }

    const newList = offers.filter((o) => o.id !== id);
    const customOnly = newList.filter((o) => !o.fromData);
    
    setOffers(newList);
    updateStorage(customOnly);
  };

  return (
    <>
      <Header />
      <div className="d-flex">
        {/* Sidebar */}
        <div className="sidebar p-4">
          <Link to="/categories" className="back-link mb-3 d-flex align-items-center gap-2 text-decoration-none">
            <i className="fa-solid fa-arrow-left"></i> Back to Categories
          </Link>
          <h5 className="fw-bold">All Services</h5>
          <p className="text-secondary small mb-4">Manage All Offers</p>

          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <Link to="/offers" className="nav-link active d-flex align-items-center gap-2">
                <i className="fa-regular fa-clipboard"></i> Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/orders" className="nav-link d-flex align-items-center gap-2">
                <i className="fa-solid fa-cart-shopping"></i> Orders
              </Link>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="content">
          <h4 className="fw-bold">Offers Management</h4>
          <p className="text-secondary">Manage all service offers from data.json + custom offers</p>

          <div className="d-flex mb-4">
            <button
              className="btn btn-outline"
              style={{ backgroundColor: "#4F944F", color: "white" }}
              data-bs-toggle="modal"
              data-bs-target="#offerModal"
              onClick={openAddModal}
            >
              + Add New Custom Offer
            </button>
          </div>

          <div id="offersList" className="offers-flex">
            {offers.map((offer) => (
              <div className="offer-card" key={offer.id}>
                <div>
                  <h5>
                    {offer.title}
                    {offer.fromData && <span className="badge bg-info ms-2" style={{fontSize: '0.7rem'}}>From Data</span>}
                  </h5>
                  <p>{offer.description}</p>
                  <p>
                    <strong className="text-secondary">Price:</strong> {offer.price} EGP —{" "}
                    <strong className="text-secondary">Duration:</strong> {offer.duration}
                  </p>
                </div>
                <div className="d-flex gap-2">
                  {!offer.fromData && (
                    <>
                      <span className="text-primary icon-btn" onClick={() => openEditModal(offer)}>
                        <i className="fa-regular fa-pen-to-square"></i>
                      </span>
                      <span className="text-danger icon-btn" onClick={() => deleteOffer(offer.id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </span>
                    </>
                  )}
                  {offer.fromData && (
                    <span className="text-muted" style={{fontSize: '0.85rem'}}>
                      <i className="fa-solid fa-lock"></i> Read-only
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          <div className="modal fade" id="offerModal" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 id="modalTitle" className="modal-title">
                    {modalData.id ? "Edit Custom Offer" : "Add Custom Offer"}
                  </h5>
                  <button className="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div className="modal-body">
                  <input type="hidden" id="offerId" value={modalData.id} />

                  <div className="mb-3">
                    <label className="form-label">Offer Name</label>
                    <input
                      className="form-control"
                      value={modalData.title}
                      onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      value={modalData.description}
                      onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Price (EGP)</label>
                    <input
                      type="number"
                      className="form-control"
                      value={modalData.price}
                      onChange={(e) => setModalData({ ...modalData, price: Number(e.target.value) })}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Estimated Duration</label>
                    <input
                      className="form-control"
                      value={modalData.duration}
                      onChange={(e) => setModalData({ ...modalData, duration: e.target.value })}
                    />
                  </div>
                </div>

                <div className="modal-footer d-flex justify-content-evenly">
                  <button className="btn btn-secondary col-5" data-bs-dismiss="modal">
                    Cancel
                  </button>
                  <button
                    style={{ backgroundColor: "#4F944F", color: "#f3f0f0" }}
                    className="btn btn-outline col-5"
                    onClick={saveOffer}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
