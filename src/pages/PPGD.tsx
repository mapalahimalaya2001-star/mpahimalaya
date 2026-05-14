import { CheckCircle, Calendar, Heart, AlertTriangle } from 'lucide-react';

const skills = [
  'Penanganan luka dan perdarahan di lapangan',
  'Resusitasi Jantung Paru (RJP/CPR)',
  'Evakuasi korban di medan terjal',
  'Manajemen hipotermia dan heat stroke',
  'Penanganan patah tulang dan dislokasi',
  'Penggunaan peralatan P3K standar outdoor',
];

const gallery = [
  { src: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Simulasi Pertolongan Pertama' },
  { src: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Latihan Evakuasi Korban' },
  { src: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Pelatihan CPR & AED' },
  { src: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Perlengkapan P3K Outdoor' },
  { src: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Tim PPGD Bertugas' },
  { src: 'https://images.pexels.com/photos/3985150/pexels-photo-3985150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1', caption: 'Sertifikasi Pertolongan Pertama' },
];

const events = [
  { date: 'Apr 2025', title: 'Pelatihan P3K Anggota Baru', peserta: '55 anggota' },
  { date: 'Mar 2025', title: 'Simulasi SAR Gunung Berapi', peserta: '25 anggota' },
  { date: 'Jan 2025', title: 'Sertifikasi Wilderness First Aid', peserta: '18 anggota' },
];

export default function PPGD() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-red-950/50 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-red-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Heart size={14} /> Divisi Keselamatan
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">PPGD</h1>
          <p className="text-stone-300 text-lg max-w-xl mx-auto">Pertolongan Pertama Gawat Darurat — siap, sigap, dan terlatih menghadapi situasi darurat di alam bebas.</p>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-red-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
          <AlertTriangle size={16} />
          PPGD siap mendukung keselamatan di setiap kegiatan ekspedisi MAPALA
        </div>
      </div>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">Tentang Divisi</p>
              <h2 className="section-title mb-6">Penjaga Keselamatan Ekspedisi</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi PPGD (Pertolongan Pertama Gawat Darurat) adalah garda terdepan keselamatan dalam setiap kegiatan MAPALA. Anggota kami dilatih secara intensif untuk menangani situasi darurat medis di lapangan, mulai dari luka ringan hingga kondisi kritis.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Kami bekerja sama dengan tenaga medis profesional untuk memastikan standar pelatihan yang tinggi. Setiap anggota PPGD memiliki sertifikasi pertolongan pertama yang diakui secara nasional.
              </p>
            </div>
            <div>
              <h3 className="font-serif font-bold text-stone-800 text-xl mb-5">Keahlian yang Diajarkan</h3>
              <ul className="grid grid-cols-1 gap-3">
                {skills.map(s => (
                  <li key={s} className="flex items-start gap-3 text-stone-600">
                    <CheckCircle size={17} className="text-red-500 shrink-0 mt-0.5" />
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
            <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">Dokumentasi</p>
            <h2 className="section-title">Galeri Pelatihan</h2>
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
            <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">Program</p>
            <h2 className="section-title">Kegiatan Terkini</h2>
          </div>
          <div className="space-y-4">
            {events.map(e => (
              <div key={e.title} className="card p-5 flex items-center gap-5">
                <div className="bg-red-50 rounded-xl p-3 text-center min-w-[64px]">
                  <Calendar size={18} className="text-red-600 mx-auto" />
                  <p className="text-red-700 text-xs font-semibold mt-1">{e.date}</p>
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
