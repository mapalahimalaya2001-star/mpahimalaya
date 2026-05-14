import { CheckCircle, Calendar, Anchor } from 'lucide-react';

const skills = [
  'Teknik pemanjatan dasar dan lanjutan',
  'Pemasangan pengaman (proteksi) yang aman',
  'Pengenalan tipe batu dan jalur panjat',
  'Rappelling dan teknik tali-temali',
  'Perawatan dan pengecekan peralatan panjat',
  'Top rope, lead climbing, dan bouldering',
];

const gallery = [
  { src: 'https://images.pexels.com/photos/2755287/pexels-photo-2755287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Lead Climbing, Jawa Barat' },
  { src: 'https://images.pexels.com/photos/4555021/pexels-photo-4555021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Latihan Tebing Pantai' },
  { src: 'https://images.pexels.com/photos/3692617/pexels-photo-3692617.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Bouldering Indoor' },
  { src: 'https://images.pexels.com/photos/3278183/pexels-photo-3278183.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Rappelling Tebing 80m' },
  { src: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Tim Rock Climbing' },
  { src: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Kompetisi Panjat Tebing' },
];

const events = [
  { date: 'Mar 2025', title: 'Kompetisi Panjat Tebing Regional', peserta: '22 anggota' },
  { date: 'Feb 2025', title: 'Latihan Rutin Bouldering', peserta: '40 anggota' },
  { date: 'Des 2024', title: 'Ekspedisi Tebing Ciampea', peserta: '16 anggota' },
];

export default function RockClimbing() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2755287/pexels-photo-2755287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-earth-900/50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-amber-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Anchor size={14} /> Divisi Vertikal
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">Rock Climbing</h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">Menapaki tebing batu, menggapai langit — kekuatan dan keberanian dalam setiap pegangan.</p>
        </div>
      </section>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-earth-600 font-semibold text-sm tracking-wider uppercase mb-3">Tentang Divisi</p>
              <h2 className="section-title mb-6">Seni Mendaki Tebing</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi Rock Climbing MAPALA adalah wadah bagi para pemanjat yang ingin mengembangkan teknik dan kemampuan di dunia panjat tebing. Dari tebing alam hingga wall indoor, kami melatih anggota secara sistematis dan aman.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Kami aktif mengikuti kompetisi tingkat regional dan nasional, serta menyelenggarakan kursus panjat tebing untuk pemula maupun tingkat lanjut. Keselamatan adalah prioritas utama di setiap kegiatan kami.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-amber-700 font-semibold text-sm mb-1">Statistik Divisi</p>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {[['28+', 'Kegiatan'], ['80+', 'Anggota'], ['6', 'Juara']].map(([val, label]) => (
                    <div key={label} className="text-center">
                      <div className="font-serif text-2xl font-bold text-amber-700">{val}</div>
                      <div className="text-amber-600 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-800 text-xl mb-5">Keahlian yang Diajarkan</h3>
              <ul className="grid grid-cols-1 gap-3">
                {skills.map(s => (
                  <li key={s} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle size={17} className="text-amber-600 shrink-0 mt-0.5" />
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
            <p className="text-earth-600 font-semibold text-sm tracking-wider uppercase mb-3">Dokumentasi</p>
            <h2 className="section-title">Galeri Kegiatan</h2>
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
            <p className="text-earth-600 font-semibold text-sm tracking-wider uppercase mb-3">Program</p>
            <h2 className="section-title">Kegiatan Terkini</h2>
          </div>
          <div className="space-y-4">
            {events.map(e => (
              <div key={e.title} className="card p-5 flex items-center gap-5">
                <div className="bg-amber-50 rounded-xl p-3 text-center min-w-[64px]">
                  <Calendar size={18} className="text-amber-600 mx-auto" />
                  <p className="text-amber-700 text-xs font-semibold mt-1">{e.date}</p>
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
