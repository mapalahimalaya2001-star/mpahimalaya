import { CheckCircle, Calendar, Mountain } from 'lucide-react';

const skills = [
  'Navigasi darat menggunakan peta dan kompas',
  'Teknik survival dan manajemen perjalanan',
  'Mountaineering dasar',
  'Teknik packing dan bivouac',
  'Konservasi lingkungan dan edukasi alam',
  'Manajemen logistik ekspedisi',
  'Search and Rescue dasar medan gunung hutan',
  'Etika pendakian dan Leave No Trace',
];

const gallery = [
  {
    src: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    caption: 'Pendakian Gunung Semeru',
  },
  {
    src: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    caption: 'Ekspedisi Gunung Rinjani',
  },
  {
    src: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    caption: 'Jungle Tracking dan Survival',
  },
  {
    src: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    caption: 'Pendakian Gunung Bromo',
  },
  {
    src: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    caption: 'Camping dan Bivouac',
  },
  {
    src: 'https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    caption: 'Konservasi dan Jelajah Alam',
  },
];

export default function GunungHutan() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-forest-900/50 to-transparent" />

        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-forest-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Mountain size={14} />
            Divisi Alam Bebas
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            Gunung Hutan
          </h1>

          <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Menjelajah alam bebas, memahami kehidupan, dan menjaga kelestarian
            hutan serta pegunungan Indonesia.
          </p>
        </div>
      </section>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Tentang Divisi
              </p>

              <h2 className="section-title mb-6">
                Jiwa Petualang dan Pecinta Alam
              </h2>

              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi Gunung Hutan (GH) merupakan divisi di MPA HIMALAYA
                UNIMUS yang berfokus pada kegiatan kepencintaalaman di medan
                gunung dan hutan. Divisi ini menjadi wadah pembelajaran bagi
                anggota dalam memahami teknik bertahan hidup, navigasi darat,
                manajemen perjalanan, serta kepedulian terhadap lingkungan alam.
              </p>

              <p className="text-stone-600 leading-relaxed mb-6">
                Tidak hanya tentang pendakian, Divisi Gunung Hutan juga
                menanamkan nilai solidaritas, disiplin, tanggung jawab, dan
                kecintaan terhadap alam melalui berbagai kegiatan latihan,
                ekspedisi, konservasi, dan pengabdian masyarakat.
              </p>

              <p className="text-stone-600 leading-relaxed">
                Setiap perjalanan bukan hanya tentang mencapai puncak, tetapi
                juga tentang proses belajar, menghargai alam, dan membangun
                karakter diri.
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
                      className="text-forest-500 shrink-0 mt-0.5"
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
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Dokumentasi
            </p>

            <h2 className="section-title">Galeri Ekspedisi</h2>
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
      <section className="py-20 bg-forest-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-forest-300 uppercase tracking-[0.3em] text-sm mb-5">
            Motto Divisi
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl text-white leading-relaxed">
            “Alam bukan untuk ditaklukkan,
            tetapi untuk dipahami dan dijaga.”
          </h2>
        </div>
      </section>

      {/* Kegiatan */}
<section className="py-20 bg-stone-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
        Program
      </p>

      <h2 className="section-title">Kegiatan Terkini</h2>
    </div>

    {/* Empty State */}
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
        Saat ini belum terdapat kegiatan terbaru dari Divisi Gunung Hutan.
        Nantikan informasi dan dokumentasi kegiatan berikutnya.
      </p>
    </div>
  </div>
</section>
    </div>
  );
}