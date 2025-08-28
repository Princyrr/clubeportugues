import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portal from './pages/Portal';
import Restaurant from './pages/services/Restaurant';
import Cellar from './pages/services/Cellar';
import Barcelos from './pages/services/Barcelos';
import Events from './pages/services/Events';
import News from './pages/services/News';
import NewsDetail from './pages/services/NewsDetail';
import Diretoria from "./components/Diretoria";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<About />} />
            <Route path="/fale-conosco" element={<Contact />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/servicos/restaurante" element={<Restaurant />} />
            <Route path="/servicos/servicos" element={<Cellar />} />
            <Route path="/servicos/barcelos" element={<Barcelos />} />
            <Route path="/servicos/agenda-shows" element={<Events />} />
            <Route path="/servicos/noticias" element={<News />} />
            <Route path="/servicos/noticias/:id" element={<NewsDetail />} />
             <Route path="/diretoria" element={<Diretoria />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;