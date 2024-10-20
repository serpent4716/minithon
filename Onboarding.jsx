// Onboarding.js
import React, { useState } from "react";

function Onboarding() {
  const [credentials, setCredentials] = useState(null);
  const [identityVerified, setIdentityVerified] = useState(false);
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState({});

  const handleUploadCredentials = (e) => {
    const file = e.target.files[0];
    setCredentials(file);
  };

  const handleKYCVerification = () => {
    // Add logic to verify identity (e.g., API call)
    setIdentityVerified(true);
  };

  const handleServiceListing = (service) => {
    setServices((prevServices) => [...prevServices, service]);
  };

  const handlePricingSetting = (service, price) => {
    setPricing((prevPricing) => ({ ...prevPricing, [service]: price }));
  };

  return (
    <div className="onboarding">
      <h2>Onboarding</h2>

      {/* Step 1: Upload Legal Credentials */}
      <div>
        <label htmlFor="credentials">Upload Legal Credentials:</label>
        <input
          type="file"
          id="credentials"
          onChange={handleUploadCredentials}
        />
      </div>

      {/* Step 2: Verify Identity */}
      <div>
        <button onClick={handleKYCVerification}>
          {identityVerified ? "Identity Verified" : "Verify Identity (KYC)"}
        </button>
      </div>

      {/* Step 3: List Services Offered */}
      <div>
        <h3>List Services Offered</h3>
        <input
          type="text"
          placeholder="Service"
          onBlur={(e) => handleServiceListing(e.target.value)}
        />
      </div>

      {/* Step 4: Set Pricing */}
      <div>
        <h3>Set Pricing for Services</h3>
        {services.map((service) => (
          <div key={service}>
            <label>{service}: </label>
            <input
              type="number"
              placeholder="Price"
              onBlur={(e) => handlePricingSetting(service, e.target.value)}
            />
          </div>
        ))}
      </div>

      {/* Outcome Message */}
      {credentials && identityVerified && services.length > 0 && (
        <p>Your profile is activated, and you are ready to offer services!</p>
      )}
    </div>
  );
}

export default Onboarding;
