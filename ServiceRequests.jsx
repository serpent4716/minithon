import React from "react";

function ServiceRequests() {
  const requests = [
    { id: 1, client: "Jane Doe", service: "Consultation" },
    { id: 2, client: "Bob Smith", service: "Document Drafting" },
  ];

  return (
    <div className="service-requests">
      <h3>Pending Requests</h3>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            {request.client} - {request.service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServiceRequests;
