import Header from './components/Header.jsx';
import FeaturesList from './components/FeaturesList.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <main className="page">
      <div className="container">
        <Header />
        <FeaturesList />
        <Footer />
      </div>
    </main>
  );
}
