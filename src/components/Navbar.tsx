import logo from './img/logo-himalaya.png';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown} from 'lucide-react';

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

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const tentangItems = [
  { label: 'Profil Kami', page: 'profil' as Page },
  { label: 'Struktur Pengurus', page: 'struktur' as Page },
];

const divisiItems = [
  { label: 'Gunung Hutan', page: 'gunung-hutan' as Page },
  { label: 'Rock Climbing', page: 'rock-climbing' as Page },
  { label: 'Caving', page: 'caving' as Page },
  { label: 'PPGD', page: 'ppgd' as Page },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [tentangOpen, setTentangOpen] = useState(false);
  const [divisiOpen, setDivisiOpen] = useState(false);
  const [mobileTentangOpen, setMobileTentangOpen] = useState(false);
  const [mobileDivisiOpen, setMobileDivisiOpen] = useState(false);

  const tentangRef = useRef<HTMLDivElement>(null);
  const divisiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (tentangRef.current && !tentangRef.current.contains(e.target as Node)) {
        setTentangOpen(false);
      }
      if (divisiRef.current && !divisiRef.current.contains(e.target as Node)) {
        setDivisiOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const go = (page: Page) => {
    navigate(page);
    setMobileOpen(false);
    setTentangOpen(false);
    setDivisiOpen(false);
  };

  const isTentang = currentPage === 'profil' || currentPage === 'struktur';
  const isDivisi = ['gunung-hutan', 'rock-climbing', 'caving', 'ppgd'].includes(currentPage);

  const isHero = currentPage === 'beranda';
  const navBg = scrolled || !isHero
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-100'
    : 'bg-transparent';
  const textColor = scrolled || !isHero ? 'text-stone-800' : 'text-white';
  const logoColor = scrolled || !isHero ? 'text-forest-700' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => go('beranda')}
            className={`flex items-center gap-2.5 font-bold text-xl transition-colors ${logoColor}`}
          >
            <div className={`p-1.5 rounded-lg ${scrolled || !isHero ? 'bg-forest-700' : 'bg-white/20'}`}>
              <img
  src={logo}
  alt="UKM MPA HIMALAYA Logo"
  className="w-10 h-10"
/>
            </div>
            <span className="font-serif tracking-wide">MPA HIMALAYA</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <button
              onClick={() => go('beranda')}
              className={`nav-link px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${textColor} ${currentPage === 'beranda' ? 'text-forest-600' : ''}`}
            >
              Beranda
            </button>

            {/* Tentang Dropdown */}
            <div ref={tentangRef} className="relative">
              <button
                onClick={() => { setTentangOpen(v => !v); setDivisiOpen(false); }}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${textColor} ${isTentang ? 'text-forest-600' : ''}`}
              >
                Tentang Kami
                <ChevronDown size={15} className={`transition-transform duration-200 ${tentangOpen ? 'rotate-180' : ''}`} />
              </button>
              {tentangOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-stone-100 p-1.5">
                  {tentangItems.map(item => (
                    <button key={item.page} onClick={() => go(item.page)} className="dropdown-item w-full text-left">
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divisi Dropdown */}
            <div ref={divisiRef} className="relative">
              <button
                onClick={() => { setDivisiOpen(v => !v); setTentangOpen(false); }}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${textColor} ${isDivisi ? 'text-forest-600' : ''}`}
              >
                Divisi
                <ChevronDown size={15} className={`transition-transform duration-200 ${divisiOpen ? 'rotate-180' : ''}`} />
              </button>
              {divisiOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-stone-100 p-1.5">
                  {divisiItems.map(item => (
                    <button key={item.page} onClick={() => go(item.page)} className="dropdown-item w-full text-left">
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => go('berita')}
              className={`nav-link px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${textColor} ${currentPage === 'berita' ? 'text-forest-600' : ''}`}
            >
              Berita & Artikel
            </button>

            <button
              onClick={() => go('kontak')}
              className={`ml-2 bg-forest-700 hover:bg-forest-800 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200`}
            >
              Kontak
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${textColor}`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <button onClick={() => go('beranda')} className="block w-full text-left px-4 py-3 rounded-lg text-stone-700 font-semibold hover:bg-forest-50 hover:text-forest-700 transition-colors">
              Beranda
            </button>

            {/* Mobile Tentang */}
            <div>
              <button
                onClick={() => setMobileTentangOpen(v => !v)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-stone-700 font-semibold hover:bg-forest-50 hover:text-forest-700 transition-colors"
              >
                Tentang Kami
                <ChevronDown size={16} className={`transition-transform ${mobileTentangOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileTentangOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  {tentangItems.map(item => (
                    <button key={item.page} onClick={() => go(item.page)} className="block w-full text-left px-4 py-2.5 rounded-lg text-stone-600 hover:bg-forest-50 hover:text-forest-700 transition-colors text-sm">
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Divisi */}
            <div>
              <button
                onClick={() => setMobileDivisiOpen(v => !v)}
                className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-stone-700 font-semibold hover:bg-forest-50 hover:text-forest-700 transition-colors"
              >
                Divisi
                <ChevronDown size={16} className={`transition-transform ${mobileDivisiOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileDivisiOpen && (
                <div className="ml-4 space-y-1 mt-1">
                  {divisiItems.map(item => (
                    <button key={item.page} onClick={() => go(item.page)} className="block w-full text-left px-4 py-2.5 rounded-lg text-stone-600 hover:bg-forest-50 hover:text-forest-700 transition-colors text-sm">
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => go('berita')} className="block w-full text-left px-4 py-3 rounded-lg text-stone-700 font-semibold hover:bg-forest-50 hover:text-forest-700 transition-colors">
              Berita & Artikel
            </button>
            <button onClick={() => go('kontak')} className="block w-full text-left px-4 py-3 rounded-lg bg-forest-700 text-white font-semibold hover:bg-forest-800 transition-colors mt-2">
              Kontak
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
