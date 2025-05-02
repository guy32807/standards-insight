import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogListing from './pages/BlogListing';
import BlogPost from './pages/BlogPost';
import StandardsPage from './pages/StandardsPage';
import StandardDetail from './pages/StandardDetail';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ScrollToTop from './components/ScrollToTop';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/standards" element={<StandardsPage />} />
            <Route path="/standards/:id" element={<StandardDetail />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

export default App;
