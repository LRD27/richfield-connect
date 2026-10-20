import { Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import SignUpPage from './views/SignUpPage';
import ProfilePage from './views/ProfilePage';
import FeedPage from './views/FeedPage';

function App() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <div className="route-fade">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
