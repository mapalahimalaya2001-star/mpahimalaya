import logo from './img/logo-himalaya.png';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 bg-forest-700 rounded-lg">
                <img
  src={logo}
  alt="UKM MPA HIMALAYA Logo"
  className="w-10 h-10"
/>
              </div>
              <span className="font-serif text-xl font-bold text-white">MPA HIMALAYA</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-5">
              Mahasiswa Pecinta Alam — komunitas petualang muda yang mencintai alam, menjaga kelestarian, dan membentuk jiwa tangguh.
            </p>
            <div className="flex gap-3">
  <a
    href="https://www.instagram.com/mpahimalaya_unimus/"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-stone-800 hover:bg-pink-600 rounded-lg transition-colors duration-200"
  >
    <Instagram size={17} />
  </a>

  <a
    href="https://www.facebook.com/mpa.himalaya"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-stone-800 hover:bg-blue-600 rounded-lg transition-colors duration-200"
  >
    <Facebook size={17} />
  </a>

  <a
    href="https://www.youtube.com/@mpahimalayaofficial6936"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-stone-800 hover:bg-red-600 rounded-lg transition-colors duration-200"
  >
    <Youtube size={17} />
  </a>

  <a
    href="https://www.tiktok.com/@mpa.himalaya"
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-stone-800 hover:bg-black rounded-lg transition-colors duration-200"
  >
    <Music2 size={17} />
  </a>
</div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigasi</h4>
            <ul className="space-y-2.5">
              {[
  { label: 'Beranda', path: '/' },
  { label: 'Profil Kami', path: '/profil' },
  { label: 'Struktur Pengurus', path: '/struktur-pengurus' },
  { label: 'Berita & Artikel', path: '/berita-artikel' },
  { label: 'Kontak', path: '/kontak' },
].map(item => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-stone-400 hover:text-forest-400 text-sm transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisi */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Divisi</h4>
            <ul className="space-y-2.5">
              {[
  { label: 'Gunung Hutan', path: '/divisi/gunung-hutan' },
  { label: 'Rock Climbing', path: '/divisi/rock-climbing' },
  { label: 'Caving', path: '/divisi/caving' },
  { label: 'PPGD', path: '/divisi/ppgd' },
].map(item => (
                <li key={item.path}>
                  <Link
  to={item.path}
                    className="text-stone-400 hover:text-forest-400 text-sm transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-stone-400">
                <MapPin size={15} className="mt-0.5 shrink-0 text-forest-500" />
                Gedung Sekretariat PKM, Universitas Muhammadiyah Semarang, Indonesia
              </li>
              <li className="flex items-center gap-2.5 text-sm text-stone-400">
                <Mail size={15} className="shrink-0 text-forest-500" />
                mapalahimalaya2001@gmail.com
              </li>
              <li className="flex items-center gap-2.5 text-sm text-stone-400">
                <Phone size={15} className="shrink-0 text-forest-500" />
                +62 813 2960 2156
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-sm">&copy; {new Date().getFullYear()} MPA HIMALAYA Universitas Muhammadiyah Semarang. Semua hak dilindungi.</p>
          <p className="text-stone-600 text-xs">Dibuat dengan semangat petualangan</p>
        </div>
      </div>
    </footer>
  );
}
