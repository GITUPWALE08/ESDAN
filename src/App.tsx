import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './pages/homePage';
import About from './pages/about';
import Projects from './pages/projects';
import Membership from './pages/membership';
import Partners from './pages/partners';
import Products from './pages/products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="projects" element={<Projects />} />
        <Route path="membership" element={<Membership />} />
        <Route path="partners" element={<Partners />} />
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;