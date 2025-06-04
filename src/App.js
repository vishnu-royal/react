import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Index from './Pages/Index';
import About from './Pages/About';
import Login from './Pages/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
