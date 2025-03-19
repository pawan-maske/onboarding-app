import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import EcuOnboardingForm from './components/EcuOnboardingForm';
import VinOnboardingForm from './components/VinOnboardingForm';
import CustomerOnboardingForm from './components/CustomerOnboardingForm';
import VinServices from './components/VinServices';
import VinSearch from './components/VinSearch';
import VinMapping from './components/VinMapping';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/ecu" element={<EcuOnboardingForm />} />
          <Route path="/vin" element={<VinOnboardingForm />} />
          <Route path="/customer" element={<CustomerOnboardingForm />} />
          <Route path="/services" element={<VinServices />} />
          <Route path="/search" element={<VinSearch />} />
          <Route path="/mapping" element={<VinMapping />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;