import {
  CheckCircle,
  Calendar,
  HeartPulse,
  ShieldAlert,
} from 'lucide-react';

// IMPORT IMAGE
import ppgd1 from '../assets/images/ppgd/ppgd1.jpeg';
import ppgd2 from '../assets/images/ppgd/ppgd2.jpeg';
import ppgd3 from '../assets/images/ppgd/ppgd3.jpeg';
import ppgd4 from '../assets/images/ppgd/ppgd4.jpeg';
import ppgd5 from '../assets/images/ppgd/ppgd5.jpeg';
import ppgd6 from '../assets/images/ppgd/ppgd6.jpeg';

const skills = [
  'Penanganan luka dan perdarahan di lapangan',
  'Resusitasi Jantung Paru (RJP/CPR)',
  'Evakuasi korban di medan alam bebas',
  'Manajemen hipotermia dan heat stroke',
  'Penanganan patah tulang dan dislokasi',
  'Penggunaan peralatan P3K outdoor',
  'Simulasi tanggap darurat lapangan',
  'Manajemen keselamatan kegiatan alam bebas',
];

const gallery = [
  {
    src: ppgd1,
    caption: 'Simulasi Pertolongan Pertama',
  },
  {
    src: ppgd2,
    caption: 'Pelatihan Evakuasi Korban',
  },
  {
    src: ppgd3,
    caption: 'Latihan CPR dan Bantuan Hidup Dasar',
  },
  {
    src: ppgd4,
    caption: 'Penanganan Korban di Alam Bebas',
  },
  {
    src: ppgd5,
    caption: 'Tim PPGD MPA HIMALAYA',
  },
  {
    src: ppgd6,
    caption: 'Simulasi Keadaan Darurat',
  },
];

export default function PPGD() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-red-950/60 to-transparent" />

        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-red-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <HeartPulse size={14} />
            Divisi Keselamatan
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            PPGD
          </h1>

          <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Siap, sigap, dan terlatih dalam memberikan pertolongan pertama
            serta menjaga keselamatan pada setiap kegiatan alam bebas.
          </p>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-red-700 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm font-medium">
          <ShieldAlert size={16} />
          Divisi PPGD siap mendukung keselamatan dalam setiap kegiatan
          MPA HIMALAYA UNIMUS
        </div>
      </div>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Tentang Divisi
              </p>

              <h2 className="section-title mb-6">
                Garda Keselamatan Lapangan
              </h2>

              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi PPGD (Pertolongan Pertama Gawat Darurat) merupakan
                divisi di MPA HIMALAYA UNIMUS yang berfokus pada penanganan
                keselamatan dan pertolongan pertama dalam kegiatan alam bebas.
              </p>

              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi ini membekali anggota dengan kemampuan penanganan
                kondisi darurat di lapangan, mulai dari cedera ringan,
                hipotermia, hingga proses evakuasi korban di medan alam.
              </p>

              <p className="text-stone-600 leading-relaxed mb-6">
                Selain keterampilan teknis, Divisi PPGD juga menanamkan
                kesiapsiagaan, ketenangan, kerja sama tim, dan tanggung jawab
                terhadap keselamatan seluruh anggota dalam setiap kegiatan.
              </p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-stone-800 text-xl mb-5">
                Keahlian yang Diajarkan
              </h3>

              <ul className="grid grid-cols-1 gap-3">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-stone-600"
                  >
                    <CheckCircle
                      size={17}
                      className="text-red-500 shrink-0 mt-0.5"
                    />

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
            <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Dokumentasi
            </p>

            <h2 className="section-title">Galeri Pelatihan</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img) => (
              <div
                key={img.src}
                className="group relative overflow-hidden rounded-xl h-48 sm:h-56"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <p className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto */}
      <section className="py-20 bg-red-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-300 uppercase tracking-[0.3em] text-sm mb-5">
            Motto Divisi
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl text-white leading-relaxed">
            “Keselamatan adalah prioritas,
            kesiapsiagaan adalah tanggung jawab.”
          </h2>
        </div>
      </section>

      {/* Kegiatan */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Program
            </p>

            <h2 className="section-title">Kegiatan Terkini</h2>
          </div>

          <div className="card p-10 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-stone-100 p-4 rounded-2xl">
                <Calendar size={32} className="text-stone-400" />
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-700 mb-3">
              Belum Ada Kegiatan
            </h3>

            <p className="text-stone-500 leading-relaxed max-w-md mx-auto">
              Saat ini belum terdapat kegiatan terbaru dari Divisi PPGD.
              Nantikan informasi dan dokumentasi kegiatan berikutnya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}