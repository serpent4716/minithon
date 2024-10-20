import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Settings, DollarSign, TrendingUp, Calendar } from 'lucide-react';
import './ExpenseTracking.css';

const ExpenseTracking = () => {
  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [timeFilter, setTimeFilter] = useState('month');

  const expenseData = [
    { category: 'Food', amount: 500 },
    { category: 'Rent', amount: 1000 },
    { category: 'Utilities', amount: 200 },
    { category: 'Entertainment', amount: 300 },
    { category: 'Transportation', amount: 150 },
  ];

  const monthlyData = [
    { month: 'Jan', expenses: 2000 },
    { month: 'Feb', expenses: 2200 },
    { month: 'Mar', expenses: 1800 },
    { month: 'Apr', expenses: 2100 },
    { month: 'May', expenses: 2300 },
    { month: 'Jun', expenses: 2150 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#a4de6c'];

  return (
    <div className="expense-tracking">
      <header>
        <nav>
          <button className={selectedRoom === 'Living Room' ? 'active' : ''} onClick={() => setSelectedRoom('Living Room')}>Living Room</button>
          <button>Bedroom</button>
          <button>Kitchen</button>
          <button>Bathroom</button>
          <button>Backyard</button>
          <button>Garage</button>
          <button>+</button>
        </nav>
        <div className="time">10:02 PM</div>
      </header>

      <main>
        <section className="expense-overview">
          <div className="expense-card">
            <h3>Total Expenses</h3>
            <div className="expense-amount">
              <DollarSign size={24} />
              <span>2,150</span>
            </div>
            <p>This Month</p>
          </div>
          <div className="expense-chart">
            <h3>Expense Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={expenseData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="amount"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {expenseData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="expense-details">
          <div className="expense-trend">
            <h3>Expense Trend</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={monthlyData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="expenses" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="expense-stats">
            <div className="stat-card">
              <h4>Current Consumption</h4>
              <p>1.5 kWh</p>
            </div>
            <div className="stat-card">
              <h4>Average Daily Expenses</h4>
              <p>$71.67</p>
            </div>
            <div className="stat-card">
              <h4>Highest Expense Category</h4>
              <p>Rent</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <button><Settings size={20} /> Settings</button>
        <button className="active"><DollarSign size={20} /> Expenses</button>
        <button><TrendingUp size={20} /> Analytics</button>
        <button><Calendar size={20} /> Calendar</button>
      </footer>
    </div>
  );
};

export default ExpenseTracking;