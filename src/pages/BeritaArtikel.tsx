import { useState } from 'react';
import { Calendar, Clock, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Ekspedisi Puncak Semeru: Menggapai Mahameru di Musim Kemarau',
    excerpt: 'Sebanyak 14 anggota MAPALA berhasil menyelesaikan pendakian ke puncak tertinggi Pulau Jawa, Gunung Semeru (3.676 mdpl), dengan kondisi cuaca yang bersahabat dan pemandangan yang menakjubkan.',
    date: '12 April 2025',
    readTime: '5 menit',
    category: 'Gunung Hutan',
    image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
    featured: true,
  },
  {
    id: 2,
    title: 'Juara 2 Kompetisi Panjat Tebing Regional Jawa Tengah 2025',
    excerpt: 'Tim Rock Climbing MAPALA meraih peringkat kedua dalam kompetisi panjat tebing tingkat regional yang diikuti oleh 30 tim dari berbagai universitas.',
    date: '28 Maret 2025',
    readTime: '3 menit',
    category: 'Rock Climbing',
    image: 'https://images.pexels.com/photos/2755287/pexels-photo-2755287.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    id: 3,
    title: 'Susur Gua Jomblang: Menembus Cahaya dari Kegelapan',
    excerpt: 'Divisi Caving MAPALA menggelar ekspedisi susur gua Jomblang yang terkenal dengan fenomena cahaya surga-nya. 18 anggota berhasil mencapai dasar gua sedalam 60 meter.',
    date: '18 Februari 2025',
    readTime: '6 menit',
    category: 'Caving',
    image: 'https://images.pexels.com/photos/3617458/pexels-photo-3617458.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    id: 4,
    title: 'Pelatihan PPGD Anggota Baru: Membangun Tim Siaga Darurat',
    excerpt: 'Divisi PPGD menyelenggarakan pelatihan pertolongan pertama komprehensif untuk 55 anggota baru MAPALA, mencakup materi CPR, penanganan luka, dan evakuasi medan.',
    date: '5 April 2025',
    readTime: '4 menit',
    category: 'PPGD',
    image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    id: 5,
    title: 'MAPALA Ikut Serta dalam Gerakan Bersih Gunung Nasional',
    excerpt: 'Sebagai bentuk kepedulian lingkungan, MAPALA mengirimkan 25 relawan dalam kegiatan bersih gunung nasional yang dilaksanakan serentak di 14 gunung di seluruh Indonesia.',
    date: '20 Januari 2025',
    readTime: '3 menit',
    category: 'Lingkungan',
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    id: 6,
    title: 'Workshop Fotografi Alam: Mengabadikan Keindahan Nusantara',
    excerpt: 'MAPALA menggelar workshop fotografi alam bebas bersama fotografer profesional, mengajarkan teknik mengambil gambar indah di berbagai kondisi alam.',
    date: '10 Desember 2024',
    readTime: '4 menit',
    category: 'Edukasi',
    image: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    id: 7,
    title: 'Ekspedisi Internasional: Tim MAPALA Taklukkan Puncak Kinabalu',
    excerpt: 'Untuk pertama kalinya dalam sejarah MAPALA, 15 anggota terpilih berhasil menyelesaikan pendakian ke Gunung Kinabalu (4.095 mdpl) di Sabah, Malaysia.',
    date: '15 November 2024',
    readTime: '7 menit',
    category: 'Gunung Hutan',
    image: 'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
  {
    id: 8,
    title: 'Donor Darah dan Bakti Sosial: MAPALA Peduli Masyarakat',
    excerpt: 'Dalam rangka HUT MAPALA ke-12, organisasi mengadakan kegiatan donor darah yang berhasil mengumpulkan 120 kantong darah untuk PMI setempat.',
    date: '3 Oktober 2024',
    readTime: '2 menit',
    category: 'Sosial',
    image: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1',
  },
];

const categories = ['Semua', 'Gunung Hutan', 'Rock Climbing', 'Caving', 'PPGD', 'Lingkungan', 'Edukasi', 'Sosial'];

const categoryColors: Record<string, string> = {
  'Gunung Hutan': 'bg-forest-100 text-forest-700',
  'Rock Climbing': 'bg-amber-100 text-amber-700',
  'Caving': 'bg-sky-100 text-sky-700',
  'PPGD': 'bg-red-100 text-red-700',
  'Lingkungan': 'bg-green-100 text-green-700',
  'Edukasi': 'bg-violet-100 text-violet-700',
  'Sosial': 'bg-orange-100 text-orange-700',
};

export default function BeritaArtikel() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'Semua' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find(a => a.featured);
  const rest = filtered.filter(a => !a.featured || activeCategory !== 'Semua' || searchQuery);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-forest-900/65" />
        <div className="relative z-10 text-center px-4">
          <p className="text-forest-300 font-semibold text-sm tracking-wider uppercase mb-3">Liputan</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Berita & Artikel</h1>
          <p className="text-stone-300 mt-3">Kisah, liputan, dan catatan ekspedisi terbaru dari MAPALA</p>
        </div>
      </section>

      <section className="py-14 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-sm"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${activeCategory === cat ? 'bg-forest-700 text-white' : 'bg-white border border-stone-200 text-stone-600 hover:border-forest-300 hover:text-forest-700'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {featured && activeCategory === 'Semua' && !searchQuery && (
            <Link
  to={`/artikel/${featured.id}`}
  className="card mb-10 group overflow-hidden lg:flex block"
>
              <div className="lg:w-1/2 h-56 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-forest-700 text-white text-xs font-bold px-2.5 py-1 rounded-full">TERBARU</span>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.category] || 'bg-stone-100 text-stone-600'}`}>
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-stone-800 mb-3 leading-snug group-hover:text-forest-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-stone-500 leading-relaxed mb-5 text-sm">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-stone-400 text-xs">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime}</span>
                </div>
              </div>
            </Link>
          )}

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-stone-400">
              <Search size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">Tidak ada artikel ditemukan</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {(activeCategory === 'Semua' && !searchQuery ? rest : filtered).map(article => (
                <Link
  to={`/artikel/${article.id}`}
  key={article.id}
  className="card group cursor-pointer block"
>
                  <div className="overflow-hidden h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${categoryColors[article.category] || 'bg-stone-100 text-stone-600'}`}>
                        <Tag size={9} /> {article.category}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-stone-800 text-lg leading-snug mb-2 group-hover:text-forest-700 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
                    <div className="flex items-center gap-3 text-stone-400 text-xs pt-3 border-t border-stone-100">
                      <span className="flex items-center gap-1"><Calendar size={11} /> {article.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
