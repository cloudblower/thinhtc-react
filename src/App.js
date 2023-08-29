import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';

import './styles/Variables.css';
import './styles/Base.css';
import './styles/App.css';
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
