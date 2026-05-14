import { MapPin, Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

type Page =
  | 'beranda'
  | 'profil'
  | 'struktur'
  | 'gunung-hutan'
  | 'rock-climbing'
  | 'caving'
  | 'ppgd'
  | 'berita'
  | 'kontak';

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="p-1.5 bg-forest-700 rounded-lg">
                <img src="src\components\img\logo MPA HIMALAYA.png" alt="UKM MPA HIMALAYA Logo" className="w-10 h-10" />
              </div>
              <span className="font-serif text-xl font-bold text-white">MPA HIMALAYA</span>
            </div>
            <p className="text-sm leading-relaxed text-stone-400 mb-5">
              Mahasiswa Pecinta Alam — komunitas petualang muda yang mencintai alam, menjaga kelestarian, dan membentuk jiwa tangguh.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-stone-800 hover:bg-forest-700 rounded-lg transition-colors duration-200">
                <Instagram size={17} />
              </a>
              <a href="#" className="p-2 bg-stone-800 hover:bg-forest-700 rounded-lg transition-colors duration-200">
                <Facebook size={17} />
              </a>
              <a href="#" className="p-2 bg-stone-800 hover:bg-forest-700 rounded-lg transition-colors duration-200">
                <Youtube size={17} />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Navigasi</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Beranda', page: 'beranda' as Page },
                { label: 'Profil Kami', page: 'profil' as Page },
                { label: 'Struktur Pengurus', page: 'struktur' as Page },
                { label: 'Berita & Artikel', page: 'berita' as Page },
                { label: 'Kontak', page: 'kontak' as Page },
              ].map(item => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-stone-400 hover:text-forest-400 text-sm transition-colors duration-150"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisi */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Divisi</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Gunung Hutan', page: 'gunung-hutan' as Page },
                { label: 'Rock Climbing', page: 'rock-climbing' as Page },
                { label: 'Caving', page: 'caving' as Page },
                { label: 'PPGD', page: 'ppgd' as Page },
              ].map(item => (
                <li key={item.page}>
                  <button
                    onClick={() => navigate(item.page)}
                    className="text-stone-400 hover:text-forest-400 text-sm transition-colors duration-150"
                  >
                    {item.label}
                  </button>
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
