import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './HomePage';
import BlogPage from './Blogpage';
import LoginPage from './LoginPage';
import AboutPage from './AboutPage';

function App() {
  return (
    <BrowserRouter>
      <div className="app-main min-h-screen flex flex-col">
        <Navbar />
        <main className="app-content grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:slug" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;