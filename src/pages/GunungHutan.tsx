import { CheckCircle, Calendar, Mountain } from 'lucide-react';

const skills = [
  'Teknik navigasi hutan & gunung',
  'Manajemen perjalanan dan survival',
  'Pengenalan flora & fauna tropis',
  'Mountaineering dan teknik bivouac',
  'Pengelolaan logistik ekspedisi',
  'Leave No Trace — prinsip tanpa jejak',
];

const gallery = [
  { src: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Puncak Rinjani, NTB' },
  { src: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Pendakian Semeru, Jatim' },
  { src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Hutan Tropis Kalimantan' },
  { src: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Ekspedisi Gunung Kerinci' },
  { src: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Sunrise Gunung Bromo' },
  { src: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Trekking Flores' },
];

const events = [
  { date: 'Apr 2025', title: 'Ekspedisi Puncak Semeru', peserta: '14 anggota' },
  { date: 'Jan 2025', title: 'Latihan Navigasi Hutan', peserta: '32 anggota' },
  { date: 'Nov 2024', title: 'Ekspedisi Rinjani', peserta: '10 anggota' },
];

export default function GunungHutan() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-forest-900/50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-forest-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Mountain size={14} /> Divisi Alam Bebas
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">Gunung Hutan</h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">Menaklukkan puncak, menembus rimba — setiap langkah adalah cerita.</p>
        </div>
      </section>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">Tentang Divisi</p>
              <h2 className="section-title mb-6">Jiwa Petualang Sejati</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi Gunung Hutan adalah divisi dengan anggota terbanyak di MAPALA. Kami mengkhususkan diri dalam kegiatan pendakian gunung, penelusuran hutan tropis, dan ekspedisi alam bebas di seluruh kepulauan Nusantara.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Tidak sekadar mendaki, kami mengajarkan teknik-teknik bertahan hidup, navigasi alam, dan menjaga ekosistem hutan. Setiap ekspedisi adalah pembelajaran mendalam tentang diri sendiri dan alam sekitar.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-800 text-xl mb-5">Keahlian yang Diajarkan</h3>
              <ul className="grid grid-cols-1 gap-3">
                {skills.map(s => (
                  <li key={s} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle size={17} className="text-forest-500 shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">Dokumentasi</p>
            <h2 className="section-title">Galeri Ekspedisi</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map(img => (
              <div key={img.src} className="group relative overflow-hidden rounded-xl h-48 sm:h-56">
                <img src={img.src} alt={img.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{img.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kegiatan */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">Program</p>
            <h2 className="section-title">Kegiatan Terkini</h2>
          </div>
          <div className="space-y-4">
            {events.map(e => (
              <div key={e.title} className="card p-5 flex items-center gap-5">
                <div className="bg-forest-100 rounded-xl p-3 text-center min-w-[64px]">
                  <Calendar size={18} className="text-forest-700 mx-auto" />
                  <p className="text-forest-700 text-xs font-semibold mt-1">{e.date}</p>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-800">{e.title}</h3>
                  <p className="text-stone-500 text-sm">{e.peserta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
