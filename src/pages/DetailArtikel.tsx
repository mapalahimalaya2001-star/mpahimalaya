import { useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: 'Ekspedisi Puncak Semeru: Menggapai Mahameru di Musim Kemarau',
    content: `
      Sebanyak 14 anggota MAPALA berhasil menyelesaikan pendakian
      ke Gunung Semeru dengan kondisi cuaca yang sangat bersahabat.

      Perjalanan dimulai dari Ranupani menuju Kalimati,
      kemudian dilanjutkan summit attack menuju Mahameru.

      Selain kegiatan pendakian, tim juga melakukan dokumentasi,
      observasi lingkungan, dan edukasi pendaki mengenai kebersihan gunung.
    `,
    image:
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '12 April 2025',
    readTime: '5 menit',
    category: 'Gunung Hutan',
  },

  {
    id: 2,
    title: 'Juara 2 Kompetisi Panjat Tebing Regional Jawa Tengah 2025',
    content: `
      Tim Rock Climbing MAPALA berhasil meraih juara 2
      dalam kompetisi panjat tebing regional Jawa Tengah 2025.

      Kompetisi diikuti berbagai universitas dan komunitas
      pecinta olahraga panjat tebing.
    `,
    image:
      'https://images.pexels.com/photos/2755287/pexels-photo-2755287.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '28 Maret 2025',
    readTime: '3 menit',
    category: 'Rock Climbing',
  },
];

export default function DetailArtikel() {
  const { id } = useParams();

  const article = articles.find(
    (a) => a.id === Number(id)
  );

  if (!article) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-3xl font-bold">
          Artikel tidak ditemukan
        </h1>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[420px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <Link
              to="/berita-artikel"
              className="inline-flex items-center gap-2 mb-6 text-stone-200 hover:text-white"
            >
              <ArrowLeft size={18} />
              Kembali
            </Link>

            <span className="inline-block bg-forest-700 px-3 py-1 rounded-full text-sm mb-5">
              {article.category}
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight mb-6">
              {article.title}
            </h1>

            <div className="flex items-center gap-5 text-stone-200">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {article.date}
              </span>

              <span className="flex items-center gap-2">
                <Clock size={16} />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-stone-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </section>
    </div>
  );
}