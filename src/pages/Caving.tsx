import { CheckCircle, Calendar, Flashlight } from 'lucide-react';

const skills = [
  'Teknik penelusuran gua horizontal dan vertikal',
  'Penggunaan SRT (Single Rope Technique)',
  'Pemetaan gua dan pencatatan data speleologi',
  'Pengenalan formasi stalaktit dan stalagmit',
  'Prosedur keselamatan dan evakuasi gua',
  'Fotografi bawah tanah dan dokumentasi',
];

const gallery = [
  { src: 'https://images.pexels.com/photos/3617458/pexels-photo-3617458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Gua Jomblang, Yogyakarta' },
  { src: 'https://images.pexels.com/photos/3617497/pexels-photo-3617497.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Penelusuran Gua Vertikal' },
  { src: 'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Stalagmit Gua Karst' },
  { src: 'https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Lorong Gua Bawah Tanah' },
  { src: 'https://images.pexels.com/photos/4614207/pexels-photo-4614207.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Pemetaan Gua Karst' },
  { src: 'https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Ekspedisi Gua Sumatera' },
];

const events = [
  { date: 'Feb 2025', title: 'Susur Gua Jomblang', peserta: '18 anggota' },
  { date: 'Des 2024', title: 'Pelatihan SRT Pemula', peserta: '30 anggota' },
  { date: 'Okt 2024', title: 'Pemetaan Gua Karst Gunung Kidul', peserta: '12 anggota' },
];

export default function Caving() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3617458/pexels-photo-3617458.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-sky-950/60 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-sky-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Flashlight size={14} /> Divisi Bawah Tanah
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">Caving</h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">Menyelami kedalaman bumi, mengungkap keajaiban tersembunyi yang tak terjangkau sinar matahari.</p>
        </div>
      </section>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sky-600 font-semibold text-sm tracking-wider uppercase mb-3">Tentang Divisi</p>
              <h2 className="section-title mb-6">Dunia di Bawah Permukaan</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi Caving MAPALA mengeksplorasi keindahan dunia bawah tanah yang penuh misteri. Dengan teknik speleologi modern dan peralatan berstandar internasional, kami menjelajahi gua-gua karst terbaik di Indonesia.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Lebih dari sekadar penelusuran, divisi ini aktif dalam kegiatan pemetaan ilmiah gua, dokumentasi formasi batu, dan edukasi pelestarian ekosistem gua yang unik dan rapuh.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-800 text-xl mb-5">Keahlian yang Diajarkan</h3>
              <ul className="grid grid-cols-1 gap-3">
                {skills.map(s => (
                  <li key={s} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle size={17} className="text-sky-500 shrink-0 mt-0.5" />
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
            <p className="text-sky-600 font-semibold text-sm tracking-wider uppercase mb-3">Dokumentasi</p>
            <h2 className="section-title">Galeri Eksplorasi</h2>
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
            <p className="text-sky-600 font-semibold text-sm tracking-wider uppercase mb-3">Program</p>
            <h2 className="section-title">Kegiatan Terkini</h2>
          </div>
          <div className="space-y-4">
            {events.map(e => (
              <div key={e.title} className="card p-5 flex items-center gap-5">
                <div className="bg-sky-50 rounded-xl p-3 text-center min-w-[64px]">
                  <Calendar size={18} className="text-sky-600 mx-auto" />
                  <p className="text-sky-700 text-xs font-semibold mt-1">{e.date}</p>
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
