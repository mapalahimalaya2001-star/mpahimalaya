import { CheckCircle, Calendar, Anchor } from 'lucide-react';

// IMPORT IMAGE
import tebing1 from '../assets/images/rc/tebing1.jpg';
import tebing2 from '../assets/images/rc/tebing2.jpg';
import tebing3 from '../assets/images/rc/tebing3.jpg';
import tebing4 from '../assets/images/rc/tebing4.jpg';
import tebing5 from '../assets/images/rc/tebing5.png';
import tebing6 from '../assets/images/rc/tebing6.jpg';

const skills = [
  'Teknik dasar panjat tebing',
  'Belaying dan sistem pengamanan',
  'Rappelling dan ascending',
  'Manajemen tali dan anchor',
  'Lead climbing dan top rope',
  'Pengenalan peralatan panjat',
  'Keselamatan dan manajemen risiko',
  'Etika pemanjatan dan teamwork',
];

const gallery = [
  {
    src: tebing1,
    caption: 'Latihan Lead Climbing',
  },
  {
    src: tebing2,
    caption: 'Panjat Tebing Alam',
  },
  {
    src: tebing3,
    caption: 'Latihan Wall Climbing',
  },
  {
    src: tebing4,
    caption: 'Teknik Rappelling',
  },
  {
    src: tebing5,
    caption: 'Tim Rock Climbing',
  },
  {
    src: tebing6,
    caption: 'Kompetisi Panjat Tebing',
  },
];

export default function RockClimbing() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-80 sm:h-[480px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/2755287/pexels-photo-2755287.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-earth-900/50 to-transparent" />

        <div className="relative z-10 text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-amber-200 text-sm font-medium px-4 py-2 rounded-full mb-5">
            <Anchor size={14} />
            Divisi Vertikal
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            Rock Climbing
          </h1>

          <p className="text-stone-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Melatih keberanian, teknik, dan kerja sama melalui dunia panjat
            tebing dengan mengutamakan keselamatan dan disiplin.
          </p>
        </div>
      </section>

      {/* Tentang Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-earth-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Tentang Divisi
              </p>

              <h2 className="section-title mb-6">
                Teknik, Keberanian, dan Disiplin
              </h2>

              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi Rock Climbing (RC) merupakan divisi di MPA HIMALAYA
                UNIMUS yang berfokus pada pengembangan kemampuan panjat tebing,
                baik pada wall climbing maupun tebing alam.
              </p>

              <p className="text-stone-600 leading-relaxed mb-4">
                Divisi ini menjadi wadah pembelajaran teknik pemanjatan,
                penggunaan peralatan vertical rescue, manajemen tali,
                hingga keselamatan dalam aktivitas pemanjatan.
              </p>

              <p className="text-stone-600 leading-relaxed mb-6">
                Selain latihan rutin, Divisi RC juga aktif dalam kegiatan
                kompetisi, pelatihan, simulasi teknik vertical, serta
                pengembangan fisik, mental, dan kerja sama tim.
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
                      className="text-amber-600 shrink-0 mt-0.5"
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
            <p className="text-earth-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Dokumentasi
            </p>

            <h2 className="section-title">Galeri Kegiatan</h2>
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
      <section className="py-20 bg-earth-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-300 uppercase tracking-[0.3em] text-sm mb-5">
            Motto Divisi
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl text-white leading-relaxed">
            “Ketinggian bukan untuk ditakuti,
            tetapi untuk dipelajari dan ditaklukkan dengan disiplin.”
          </h2>
        </div>
      </section>

      {/* Kegiatan */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-earth-600 font-semibold text-sm tracking-wider uppercase mb-3">
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
              Saat ini belum terdapat kegiatan terbaru dari Divisi Rock
              Climbing. Nantikan informasi dan dokumentasi kegiatan berikutnya.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}