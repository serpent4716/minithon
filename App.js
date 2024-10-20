// import logo from './logo.svg';
 import './styles.css';

import AdvocateHiringPage from './pages/client_page/AdvocateHiringPage';
import ExpenseTracking from './pages/Expense_tracking/ExpenseTracking';
import BudgetManagement from './pages/Budget/BudgetManagement';
import IncentiveDashboard from './pages/IncentiveDashboard';
import Onboarding from './pages/Onboarding';
import Refer from './pages/Refer';
import ReviewsAndRatings from './pages/ReviewsAndRatings';
import ServiceManagement from './pages/ServiceManagement';
import ProfileSection from './pages/ProfileSection';
import ServiceRequests from './pages/ServiceRequests';
import Header from './pages/Header';
import Login from './pages/Login';

function App() {
  return (
    <div className="lawyer-page">
      <Login/>
      <AdvocateHiringPage/>
      <Header/>
      <div className="layout">
        <ProfileSection img="https://dchr.dc.gov/sites/default/files/dc/sites/dchr/biography_content/images/paul%20shawsm.jpg" />
        <div className="components">
          <ServiceManagement />
          <IncentiveDashboard />
          <ServiceRequests />
          <ReviewsAndRatings />
        </div>
      </div>
      <ExpenseTracking/>
      <BudgetManagement/>
    </div>

  );
}

export default App;
