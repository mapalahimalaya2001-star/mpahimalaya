import { CheckCircle, Calendar, Flashlight } from 'lucide-react';

// IMPORT IMAGE
import gua1 from '../assets/images/caving/gua1.jpg';
import gua2 from '../assets/images/caving/gua2.jpg';
import gua3 from '../assets/images/caving/gua3.jpg';
import gua4 from '../assets/images/caving/gua4.jpg';
import gua5 from '../assets/images/caving/gua5.jpg';
import gua6 from '../assets/images/caving/gua6.jpg';

const skills = [
  'Teknik penelusuran gua horizontal dan vertikal',
  'Single Rope Technique (SRT)',
  'Double Rope Technique (DRT)',
  'Navigasi dan pemetaan gua',
  'Manajemen tali dan anchor',
  'Teknik evakuasi dan keselamatan gua',
  'Pengenalan speleologi dan ekosistem karst',
  'Dokumentasi dan fotografi bawah tanah',
  'Konservasi kawasan gua dan karst',
];

const gallery = [
  {
    src: gua1,
    caption: 'Penelusuran Gua Vertikal',
  },
  {
    src: gua2,
    caption: 'Latihan Single Rope Technique',
  },
  {
    src: gua3,
    caption: 'Eksplorasi Lorong Gua',
  },
  {
    src: gua4,
    caption: 'Pemetaan Kawasan Karst',
  },
  {
    src: gua5,
    caption: 'Simulasi Evakuasi Gua',
  },
  {
    src: gua6,
    caption: 'Tim Caving MPA HIMALAYA',
  },
];

export default function Caving() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3617458/pexels-photo-3617458.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-sky-950/60 to-transparent" />

        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-sky-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Flashlight size={14} />
            Divisi Bawah Tanah
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            Caving
          </h1>

          <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Menjelajahi lorong bawah tanah, memahami ekosistem gua,
            dan mempelajari dunia speleologi dengan teknik serta keselamatan.
          </p>
        </div>
      </section>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sky-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Tentang Divisi
              </p>

              <h2 className="section-title mb-6">
                Dunia di Bawah Permukaan
              </h2>

              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi Caving merupakan divisi di MPA HIMALAYA UNIMUS
                yang berfokus pada kegiatan penelusuran gua dan eksplorasi
                kawasan karst. Divisi ini mempelajari teknik penelusuran
                gua horizontal maupun vertikal dengan mengutamakan
                keselamatan dan kerja sama tim.
              </p>

              <p className="text-stone-600 leading-relaxed mb-4">
                Selain kegiatan eksplorasi, anggota juga dibekali kemampuan
                Single Rope Technique (SRT), pemetaan gua, manajemen tali,
                serta pemahaman mengenai speleologi dan ekosistem bawah tanah.
              </p>

              <p className="text-stone-600 leading-relaxed mb-6">
                Divisi Caving juga menanamkan kepedulian terhadap pelestarian
                kawasan karst dan gua sebagai bagian penting dari lingkungan
                alam yang harus dijaga keberlangsungannya.
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
                      className="text-sky-500 shrink-0 mt-0.5"
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
            <p className="text-sky-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Dokumentasi
            </p>

            <h2 className="section-title">Galeri Eksplorasi</h2>
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
      <section className="py-20 bg-sky-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sky-300 uppercase tracking-[0.3em] text-sm mb-5">
            Motto Divisi
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl text-white leading-relaxed">
            “Dalam gelap kami belajar,
            dalam kedalaman kami memahami alam.”
          </h2>
        </div>
      </section>

      {/* Kegiatan */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sky-600 font-semibold text-sm tracking-wider uppercase mb-3">
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
              Saat ini belum terdapat kegiatan terbaru dari Divisi Caving.
              Nantikan informasi dan dokumentasi kegiatan berikutnya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}