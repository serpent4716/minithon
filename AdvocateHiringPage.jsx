import React, { useState } from 'react';
import { Search, MapPin, Clock, DollarSign, Filter } from 'lucide-react';
import './AdvocateHiringPage.css';
import Header from '../Header';

const AdvocateHiringPage = () => {
  const [salaryRange, setSalaryRange] = useState([5000, 50000]);
  const [filters, setFilters] = useState({
    specialty: '',
    location: '',
    experience: '',
  });

  const advocates = [
    { id: 1, name: "Priya Sharma", specialty: "Corporate Law", location: "Mumbai", experience: "5 years", rate: 5000 },
    { id: 2, name: "Rahul Verma", specialty: "Criminal Law", location: "Delhi", experience: "8 years", rate: 6000 },
    { id: 3, name: "Anita Desai", specialty: "Family Law", location: "Bangalore", experience: "3 years", rate: 4000 },
    { id: 4, name: "Shivani Mehta", specialty: "Civil Rights Law", location: "Chennai", experience: "4 years", rate: 7000 },
    { id: 5, name: "Amit Gupta", specialty: "Labor Law", location: "Hyderabad", experience: "10 years", rate: 9000 },
    { id: 6, name: "Sunil Khanna", specialty: "Tax Law", location: "Pune", experience: "6 years", rate: 8500 },
    { id: 7, name: "Neha Kapoor", specialty: "Immigration Law", location: "Kolkata", experience: "7 years", rate: 7500 },
    { id: 8, name: "Ravi Patel", specialty: "Property Law", location: "Ahmedabad", experience: "5 years", rate: 5500 },
    { id: 9, name: "Megha Arora", specialty: "Environmental Law", location: "Jaipur", experience: "6 years", rate: 6500 },
    { id: 10, name: "Rajesh Iyer", specialty: "Intellectual Property Law", location: "Kochi", experience: "9 years", rate: 7000 },
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredAdvocates = advocates.filter(advocate => {
    return (
      (filters.specialty ? advocate.specialty.toLowerCase().includes(filters.specialty.toLowerCase()) : true) &&
      (filters.location ? advocate.location.toLowerCase().includes(filters.location.toLowerCase()) : true) &&
      (filters.experience ? advocate.experience.includes(filters.experience) : true) &&
      advocate.rate >= salaryRange[0] && advocate.rate <= salaryRange[1]
    );
  });

  return (
    <div className="advocate-hiring-page">
      <Header />
      <main className="main-content">
        <h2 className="page-title">Find Your Ideal Advocate</h2>
        <br>
        </br>
        <div className="search-panel">
          
          <div className="search-grid">

            <div className="search-input">
              <Search size={20} />
              <input type="text" name="specialty" placeholder="Advocate specialty" onChange={handleFilterChange} />
            </div>
            <div className="search-input">
              <MapPin size={20} />
              <input type="text" name="location" placeholder="Location" onChange={handleFilterChange} />
            </div>
            <div className="search-input">
              <Clock size={20} />
              <select name="experience" onChange={handleFilterChange}>
                <option value="">Experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>
            <div className="search-input">
              <DollarSign size={20} />
              <input
                type="range"
                min="5000"
                max="50000"
                value={salaryRange[1]}
                onChange={(e) => setSalaryRange([5000, Number(e.target.value)])}
              />
            </div>
          </div>
          <div className="salary-range">
            <span>₹{salaryRange[0]} - ₹{salaryRange[1]}</span>
          </div>
        </div>

        <div className="content-wrapper">
          <aside className="sidebar">
            
            <div className="filter-panel">
              <h3 className="filter-title">
                <Filter size={20} />
                Filters
              </h3>
              
              <div className="filter-options">
                <label><input type="checkbox" name="corporate" /> Corporate Law</label>
                <label><input type="checkbox" name="criminal" /> Criminal Law</label>
                <label><input type="checkbox" name="family" /> Family Law</label>
                <label><input type="checkbox" name="property" /> Property Law</label>
              </div>
            </div>
          </aside>

          <div className="main-results">
            <div className="results-panel">
              <h3 className="results-title">Recommended Advocates</h3>
              <div className="advocate-grid">
                {filteredAdvocates.map(advocate => (
                  <div key={advocate.id} className="advocate-card">
                    <h4>{advocate.name}</h4>
                    <p>{advocate.specialty}</p>
                    <p>{advocate.location}</p>
                    <p>{advocate.experience}</p>
                    <p className="rate">₹{advocate.rate}/hr</p>
                    <button className="btn btn-contact">Contact</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdvocateHiringPage;
