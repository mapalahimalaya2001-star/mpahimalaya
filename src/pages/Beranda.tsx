import {
  ArrowRight,
  Mountain,
  Anchor,
  Flashlight,
  Heart,
  Calendar,
  Users,
  ChevronRight,
} from 'lucide-react';

import { Link } from 'react-router-dom';

const divisions = [
  {
    path: '/divisi/gunung-hutan',
    icon: Mountain,
    title: 'Gunung Hutan',
    desc: 'Menjelajah alam bebas, memahami kehidupan, dan menjaga kelestarian hutan serta pegunungan Indonesia.',
    image:
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-forest-900/80',
  },
  {
    path: '/divisi/rock-climbing',
    icon: Anchor,
    title: 'Rock Climbing',
    desc: 'Melatih keberanian, teknik, dan kerja sama melalui dunia panjat tebing dengan mengutamakan keselamatan.',
    image:
      'https://images.pexels.com/photos/2755287/pexels-photo-2755287.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-earth-900/80',
  },
  {
    path: '/divisi/caving',
    icon: Flashlight,
    title: 'Caving',
    desc: 'Menjelajahi lorong bawah tanah dan mempelajari dunia speleologi serta ekosistem gua.',
    image:
      'https://images.pexels.com/photos/3617458/pexels-photo-3617458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-sky-900/80',
  },
  {
    path: '/divisi/ppgd',
    icon: Heart,
    title: 'PPGD',
    desc: 'Siap dan sigap dalam pertolongan pertama serta keselamatan pada setiap kegiatan alam bebas.',
    image:
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    color: 'from-red-900/80',
  },
];

const activities = [
  {
    date: '12 Apr 2025',
    title: 'Ekspedisi Puncak Semeru',
    category: 'Gunung Hutan',
    image:
      'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
  {
    date: '5 Mar 2025',
    title: 'Latihan Rock Climbing Pemula',
    category: 'Rock Climbing',
    image:
      'https://images.pexels.com/photos/4555021/pexels-photo-4555021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
  {
    date: '18 Feb 2025',
    title: 'Susur Gua Jomblang',
    category: 'Caving',
    image:
      'https://images.pexels.com/photos/3617497/pexels-photo-3617497.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
  },
];

export default function Beranda() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/50 to-stone-950/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Mountain size={14} />
            Mahasiswa Pecinta Alam
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            MPA HIMALAYA
            <br />
            <span className="text-forest-400">
              Universitas Muhammadiyah Semarang
            </span>
          </h1>

          <p className="text-stone-300 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-10">
            Organisasi mahasiswa pecinta alam yang bergerak dalam bidang
            eksplorasi, konservasi, pendidikan lingkungan, dan pengembangan
            karakter melalui kegiatan alam bebas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/profil"
              className="btn-primary bg-forest-600 hover:bg-forest-700 text-base px-8 py-4"
            >
              Tentang Kami <ArrowRight size={18} />
            </Link>

            <Link
              to="/berita-artikel"
              className="btn-outline border-white text-white hover:bg-white hover:text-stone-800 text-base px-8 py-4"
            >
              Lihat Kegiatan
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
          <div className="w-0.5 h-10 bg-white/40 rounded-full" />
          <div className="w-0.5 h-4 bg-white/20 rounded-full" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Tentang Kami
              </p>

              <h2 className="section-title mb-6">
                Wadah Pengembangan
                <br />
                Karakter dan Kepedulian Alam
              </h2>

              <p className="section-subtitle mb-5">
                MPA HIMALAYA UNIMUS hadir sebagai organisasi mahasiswa
                yang menjadi wadah pembelajaran, pengabdian, dan
                pengembangan kemampuan di bidang kepencintaalaman.
              </p>

              <p className="text-stone-500 leading-relaxed mb-8">
                Melalui berbagai kegiatan ekspedisi, konservasi,
                pelatihan, sosial kemanusiaan, dan pendidikan lingkungan,
                anggota dibentuk menjadi pribadi yang disiplin,
                bertanggung jawab, serta memiliki jiwa solidaritas tinggi.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/profil" className="btn-primary">
                  Profil Kami <ChevronRight size={16} />
                </Link>

                <Link
                  to="/struktur-pengurus"
                  className="btn-outline"
                >
                  Struktur Pengurus
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Tim MAPALA"
                className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
              />

              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
                <div className="bg-forest-100 p-3 rounded-lg">
                  <Users size={22} className="text-forest-700" />
                </div>

                <div>
                  <div className="font-bold text-stone-800 text-lg">
                    24+
                  </div>

                  <div className="text-stone-500 text-xs">
                    Tahun Pengabdian
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Divisi Kami
            </p>

            <h2 className="section-title mb-4">
              Divisi Keahlian MPA HIMALAYA
            </h2>

            <p className="section-subtitle">
              Setiap divisi menjadi wadah pembelajaran dan
              pengembangan kemampuan anggota dalam bidang
              kepencintaalaman dan kegiatan alam bebas.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div) => {
              const Icon = div.icon;

              return (
                <Link
                  key={div.path}
                  to={div.path}
                  className="group relative overflow-hidden rounded-2xl h-72 text-left shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={div.image}
                    alt={div.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${div.color} to-transparent`}
                  />

                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg w-fit mb-3">
                      <Icon size={18} className="text-white" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-white mb-1.5">
                      {div.title}
                    </h3>

                    <p className="text-white/80 text-xs leading-relaxed line-clamp-3">
                      {div.desc}
                    </p>

                    <div className="flex items-center gap-1 text-forest-300 text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                      Selengkapnya <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Kegiatan Terbaru
              </p>

              <h2 className="section-title">
                Dokumentasi dan Kegiatan
              </h2>
            </div>

            <Link
              to="/berita-artikel"
              className="btn-outline shrink-0"
            >
              Lihat Semua <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {activities.map((activity) => (
              <Link
                key={activity.title}
                to="/berita-artikel"
                className="card group text-left"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-forest-100 text-forest-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {activity.category}
                    </span>

                    <div className="flex items-center gap-1 text-stone-400 text-xs">
                      <Calendar size={11} />
                      {activity.date}
                    </div>
                  </div>

                  <h3 className="font-serif font-semibold text-stone-800 text-lg leading-snug group-hover:text-forest-700 transition-colors">
                    {activity.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&dpr=1')",
          }}
        />

        <div className="absolute inset-0 bg-forest-900/75" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-5">
            Bersama Menjaga Alam dan Persaudaraan
          </h2>

          <p className="text-stone-300 text-lg leading-relaxed mb-10">
            Setiap perjalanan adalah proses belajar,
            setiap kegiatan adalah bentuk pengabdian,
            dan setiap anggota adalah keluarga dalam semangat
            pecinta alam.
          </p>

          <Link
            to="/kontak"
            className="btn-primary text-base px-10 py-4 bg-forest-500 hover:bg-forest-400"
          >
            Hubungi Kami <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}