import React from "react";

function IncentiveDashboard() {
  const rewards = {
    rating: 4.8,
    clientsServed: 50,
    bonuses: "₹2000",
    ranking: 5,
    activeStreak: 30,
  };

  return (
    <div className="incentive-dashboard">
      <h3>Performance Dashboard</h3>
      <p>Rating: {rewards.rating}/5</p>
      <p>Clients Served: {rewards.clientsServed}</p>
      <p>Bonuses Earned: {rewards.bonuses}</p>
      <p>Ranking: #{rewards.ranking} in your category</p>
      <p>Active Streak: {rewards.activeStreak} days</p>
      <button>Claim Rewards</button>
    </div>
  );
}

export default IncentiveDashboard;
