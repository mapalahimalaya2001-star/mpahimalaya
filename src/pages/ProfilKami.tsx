import { Eye, Target, Leaf, Shield, Heart, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Cinta Alam',
    desc: 'Menjaga dan melestarikan alam sebagai bentuk tanggung jawab kepada generasi mendatang.',
  },
  {
    icon: Shield,
    title: 'Keselamatan',
    desc: 'Mengutamakan keselamatan dalam setiap kegiatan ekspedisi dan petualangan.',
  },
  {
    icon: Users,
    title: 'Kekeluargaan',
    desc: 'Membangun solidaritas dan rasa persaudaraan antar anggota organisasi.',
  },
  {
    icon: Heart,
    title: 'Kepedulian',
    desc: 'Aktif memberikan kontribusi sosial kepada masyarakat dan lingkungan.',
  },
];

const milestones = [
  {
    year: '2001',
    event:
      'MPA HIMALAYA UNIMUS resmi didirikan pada 10 Maret 2001 sebagai wadah mahasiswa pecinta alam Universitas Muhammadiyah Semarang.',
  },
  {
    year: '2011',
    event:
      'Mengadakan Himalaya On Competition (HOC) pertama sebagai kompetisi panjat tebing tingkat kota.',
  },
  {
    year: '2014',
    event:
      'Himalaya On Competition berkembang menjadi kompetisi tingkat nasional dan diikuti peserta dari berbagai daerah.',
  },
  {
    year: '2015',
    event:
      'Memperingati Milad ke-14 dengan berbagai kegiatan sosial, lingkungan, dan penguatan solidaritas antar MAPALA.',
  },
  {
    year: '2021',
    event:
      'Aktif berpartisipasi dalam kegiatan FORPAS Semarang dan pengembangan jaringan pecinta alam regional.',
  },
  {
    year: '2025',
    event:
      'Menggelar kompetisi panjat tebing tingkat Jawa Tengah bekerja sama dengan FPTI di Sport Center UNIMUS.',
  },
  {
    year: '2026',
    event:
      'Memperingati 25 tahun perjalanan organisasi dengan semangat regenerasi, konservasi, dan pengabdian masyarakat.',
  },
];

export default function ProfilKami() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1')",
          }}
        />
        <div className="absolute inset-0 bg-forest-900/70" />

        <div className="relative z-10 text-center px-4">
          <p className="text-forest-300 font-semibold text-sm tracking-wider uppercase mb-3">
            Tentang Kami
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            Profil Organisasi
          </h1>
        </div>
      </section>

      {/* Sejarah */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
                Sejarah
              </p>

              <h2 className="section-title mb-6">
                Perjalanan Panjang yang Menginspirasi
              </h2>

              <p className="text-stone-600 leading-relaxed mb-4">
                MPA HIMALAYA UNIMUS resmi berdiri pada tanggal
                <strong> 10 Maret 2001 </strong>
                sebagai wadah mahasiswa pecinta alam Universitas Muhammadiyah
                Semarang yang memiliki semangat petualangan, kepedulian
                lingkungan, dan jiwa sosial kemanusiaan.
              </p>

              <p className="text-stone-600 leading-relaxed mb-4">
                Berawal dari kegiatan pendakian sederhana dan latihan alam
                bebas, organisasi ini berkembang menjadi salah satu Unit
                Kegiatan Mahasiswa yang aktif dalam bidang konservasi,
                pendidikan lingkungan, olahraga alam bebas, serta pengabdian
                masyarakat.
              </p>

              <p className="text-stone-600 leading-relaxed">
                Hingga saat ini, MPA HIMALAYA UNIMUS terus aktif melaksanakan
                berbagai kegiatan seperti ekspedisi gunung, panjat tebing,
                caving, pendidikan dan latihan dasar, aksi sosial, konservasi
                lingkungan, serta kegiatan pengembangan karakter mahasiswa.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                alt="Kegiatan MPA HIMALAYA"
                className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Linimasa
            </p>

            <h2 className="section-title">
              Tonggak Perjalanan Kami
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-forest-200 sm:-translate-x-0.5" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 sm:gap-0 ${
                    i % 2 === 0
                      ? 'sm:flex-row'
                      : 'sm:flex-row-reverse'
                  }`}
                >
                  <div className="sm:w-1/2" />

                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 bg-forest-700 rounded-full border-4 border-white shadow-md flex items-center justify-center -translate-x-1/2 top-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>

                  <div
                    className={`sm:w-1/2 pl-12 sm:pl-0 ${
                      i % 2 === 0
                        ? 'sm:pl-8'
                        : 'sm:pr-8 sm:text-right'
                    }`}
                  >
                    <div className="bg-stone-50 border border-stone-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <span className="inline-block bg-forest-700 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                        {m.year}
                      </span>

                      <p className="text-stone-600 text-sm leading-relaxed">
                        {m.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* VISI */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-forest-500 p-3 rounded-xl">
                  <Eye size={22} className="text-white" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  Visi
                </h3>
              </div>

              <p className="text-forest-100 leading-relaxed text-lg font-serif italic">
                "Menjadi organisasi mahasiswa pecinta alam yang unggul,
                berkarakter, berwawasan lingkungan, serta mampu memberikan
                kontribusi nyata bagi masyarakat dan kelestarian alam Indonesia."
              </p>
            </div>

            {/* MISI */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-earth-500 p-3 rounded-xl">
                  <Target size={22} className="text-white" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-white">
                  Misi
                </h3>
              </div>

              <ul className="space-y-3">
                {[
                  'Menyelenggarakan pendidikan dan pelatihan kepencintaalaman.',
                  'Membangun jiwa kepemimpinan, solidaritas, dan tanggung jawab.',
                  'Aktif dalam pelestarian lingkungan dan konservasi alam.',
                  'Menjalin kerja sama dengan berbagai pihak untuk pengembangan organisasi.',
                  'Melaksanakan kegiatan sosial dan kemanusiaan.',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-forest-100 text-sm leading-relaxed"
                  >
                    <span className="mt-1 w-5 h-5 bg-forest-500 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nilai */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">
              Nilai Kami
            </p>

            <h2 className="section-title">
              Landasan yang Menguatkan
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;

              return (
                <div
                  key={v.title}
                  className="card p-6 text-center hover:border-forest-200"
                >
                  <div className="bg-forest-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} className="text-forest-700" />
                  </div>

                  <h3 className="font-serif font-bold text-stone-800 text-lg mb-2">
                    {v.title}
                  </h3>

                  <p className="text-stone-500 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}