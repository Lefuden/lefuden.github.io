import { Route, Routes, HashRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import About from './pages/About'
import CV from './pages/Cv'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import EasterEgging from './components/EasterEggs'

export default function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <Navigation />
        </header>
        <main>
          <EasterEgging/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </HashRouter>
  );
}