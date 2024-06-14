// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import FAQ from './components/FAQ';
import PastSeminars from './components/PastSeminars';
import SeminarApplications from './components/SeminarApplications';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the Seminar Application</h1>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/past-seminars" element={<PastSeminars />} />
          <Route path="/seminar-applications" element={<SeminarApplications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
