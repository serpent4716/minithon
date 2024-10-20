import React, { useState } from "react";

function ServiceManagement() {
  const [services, setServices] = useState([
    {
      name: "Consultation",
      price: "₹500",
      description: "30-minute legal consultation",
    },
    {
      name: "Document Drafting",
      price: "₹1500",
      description: "Drafting legal documents",
    },
  ]);

  const addService = () => {
    const newService = {
      name: "New Service",
      price: "₹1000",
      description: "Description",
    };
    setServices([...services, newService]);
  };

  return (
    <div className="service-management">
      <h3>My Services</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <strong>{service.name}</strong> - {service.price}
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
      <button onClick={addService}>Add New Service</button>
    </div>
  );
}

export default ServiceManagement;
