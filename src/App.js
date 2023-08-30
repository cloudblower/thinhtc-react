import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages';

import './styles/Variables.css';
import './styles/Base.css';
import './styles/App.css';
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
