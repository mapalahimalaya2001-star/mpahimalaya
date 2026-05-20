import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
import DetailArtikel from './pages/DetailArtikel';
import Kontak from './pages/Kontak';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Beranda />} />

            <Route path="/profil" element={<ProfilKami />} />

            <Route
              path="/struktur-pengurus"
              element={<StrukturPengurus />}
            />

            <Route
              path="/divisi/gunung-hutan"
              element={<GunungHutan />}
            />

            <Route
              path="/divisi/rock-climbing"
              element={<RockClimbing />}
            />

            <Route
              path="/divisi/caving"
              element={<Caving />}
            />

            <Route
              path="/divisi/ppgd"
              element={<PPGD />}
            />

            <Route
              path="/berita-artikel"
              element={<BeritaArtikel />}
            />

            <Route
              path="/artikel/:id"
              element={<DetailArtikel />}
            />

            <Route path="/kontak" element={<Kontak />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;