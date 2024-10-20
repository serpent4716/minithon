import React, { useState } from "react";

function Refer() {
  const [referralLink] = useState("http://yourwebsite.com/referral?code=12345");

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(referralLink)
      .then(() => {
        alert("Referral link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="refer-and-earn">
      <h4>Refer and Earn</h4>
      <p>Share your referral link with friends and earn rewards:</p>
      <p>{referralLink}</p>
      <button onClick={handleCopyLink}>Copy Referral Link</button>
    </div>
  );
}

export default Refer;
