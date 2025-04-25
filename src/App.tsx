import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/ui/LoadingScreen';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const LiveTranslationPage = lazy(() => import('./pages/LiveTranslationPage'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingScreen />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/live-translation" element={<LiveTranslationPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
}

export default App;