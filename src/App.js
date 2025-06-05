import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './Pages/Index';
import About from './Pages/About';
import Experts from './Pages/Experts';
import ExpertsDtl from './Pages/ExpertsDtl';
import Login from './Pages/Login';
import Otp from './Pages/Otp';
import Allexperts from './Pages/Allexperts';
import Community from './Pages/Community';
import Destinations from './Pages/Destinations';
import DestinationsDtl from './Pages/DestinationsDtl';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Experts" element={<Experts/>} />
          <Route path="/ExpertsDtl" element={<ExpertsDtl/>} />
          <Route path="/Otp" element={<Otp/>} />
          <Route path="/Allexperts" element={<Allexperts/>} />
          <Route path="/Community" element={<Community/>} />
          <Route path="/Destinations" element={<Destinations/>} />
          <Route path="/DestinationsDtl" element={<DestinationsDtl/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
