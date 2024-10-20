import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertTriangle, DollarSign, TrendingUp, Settings, Calendar } from 'lucide-react';
import './BudgetManagement.css';

const BudgetManagement = () => {
  const [selectedCategory, setSelectedCategory] = useState('Overall');
  const [budgetLimit, setBudgetLimit] = useState(2000);
  const [currentSpending, setCurrentSpending] = useState(1500);
  const [predictedSpending, setPredictedSpending] = useState(1800);

  const categories = ['Overall', 'Food', 'Rent', 'Utilities', 'Entertainment', 'Transportation'];

  const spendingData = [
    { day: '1', amount: 50 },
    { day: '5', amount: 300 },
    { day: '10', amount: 600 },
    { day: '15', amount: 900 },
    { day: '20', amount: 1200 },
    { day: '25', amount: 1500 },
    { day: '30', amount: 1800 },
  ];

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setCurrentSpending(prev => Math.min(prev + Math.random() * 10, budgetLimit));
      setPredictedSpending(prev => Math.min(prev + Math.random() * 5, budgetLimit * 1.1));
    }, 3000);

    return () => clearInterval(interval);
  }, [budgetLimit]);

  const getAlertLevel = () => {
    const percentage = (currentSpending / budgetLimit) * 100;
    if (percentage >= 90) return 'high';
    if (percentage >= 75) return 'medium';
    return 'low';
  };

  return (
    <div className="budget-management">
      <header>
        <h1>Budget Management</h1>
        <div className="time">10:02 PM</div>
      </header>

      <main>
        <section className="budget-overview">
          <div className="budget-card">
            <h3>Current Budget</h3>
            <div className="budget-amount">
              <DollarSign size={24} />
              <span>{budgetLimit.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="5000"
              value={budgetLimit}
              onChange={(e) => setBudgetLimit(Number(e.target.value))}
            />
          </div>
          <div className="spending-status">
            <h3>Spending Status</h3>
            <div className={`alert-box ${getAlertLevel()}`}>
              <AlertTriangle size={24} />
              <p>
                You've spent {((currentSpending / budgetLimit) * 100).toFixed(1)}% of your budget.
                {predictedSpending > budgetLimit && 
                  ` Predicted to exceed by ${((predictedSpending / budgetLimit - 1) * 100).toFixed(1)}%`
                }
              </p>
            </div>
          </div>
        </section>

        <section className="spending-trend">
          <h3>Spending Trend</h3>
          <div className="category-selector">
            {categories.map(category => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={spendingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="budget" stroke="#82ca9d" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="budget-stats">
          <div className="stat-card">
            <h4>Current Spending</h4>
            <p>${currentSpending.toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <h4>Remaining Budget</h4>
            <p>${(budgetLimit - currentSpending).toFixed(2)}</p>
          </div>
          <div className="stat-card">
            <h4>Predicted End-of-Month</h4>
            <p>${predictedSpending.toFixed(2)}</p>
          </div>
        </section>
      </main>

      <footer>
        <button><Settings size={20} /> Settings</button>
        <button><DollarSign size={20} /> Expenses</button>
        <button className="active"><TrendingUp size={20} /> Budget</button>
        <button><Calendar size={20} /> Calendar</button>
      </footer>
    </div>
  );
};

export default BudgetManagement;