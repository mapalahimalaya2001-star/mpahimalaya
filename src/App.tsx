import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Beranda from './pages/Beranda';
import ProfilKami from './pages/ProfilKami';
import StrukturPengurus from './pages/StrukturPengurus';
import GunungHutan from './pages/GunungHutan';
import RockClimbing from './pages/RockClimbing';
import Caving from './pages/Caving';
import PPGD from './pages/PPGD';
import BeritaArtikel from './pages/BeritaArtikel';
import Kontak from './pages/Kontak';

export type Page =
  | 'beranda'
  | 'profil'
  | 'struktur'
  | 'gunung-hutan'
  | 'rock-climbing'
  | 'caving'
  | 'ppgd'
  | 'berita'
  | 'kontak';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('beranda');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const navigate = (page: Page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'beranda':
        return <Beranda navigate={navigate} />;
      case 'profil':
        return <ProfilKami />;
      case 'struktur':
        return <StrukturPengurus />;
      case 'gunung-hutan':
        return <GunungHutan />;
      case 'rock-climbing':
        return <RockClimbing />;
      case 'caving':
        return <Caving />;
      case 'ppgd':
        return <PPGD />;
      case 'berita':
        return <BeritaArtikel />;
      case 'kontak':
        return <Kontak />;
      default:
        return <Beranda navigate={navigate} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} navigate={navigate} />
      {renderPage()}
      <Footer navigate={navigate} />
    </>
  );
}

export default App;