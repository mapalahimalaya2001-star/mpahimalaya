import { useState, useEffect } from 'react';
import { Calendar, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    ['wp:featuredmedia']?: Array<{
      source_url: string;
    }>;
  };
}

//const categories = ['Semua', 'Gunung Hutan', 'Rock Climbing', 'Caving', 'PPGD', 'Lingkungan', 'Edukasi', 'Sosial'];

// const categoryColors: Record<string, string> = {
//   'Gunung Hutan': 'bg-forest-100 text-forest-700',
//   'Rock Climbing': 'bg-amber-100 text-amber-700',
//   'Caving': 'bg-sky-100 text-sky-700',
//   'PPGD': 'bg-red-100 text-red-700',
//   'Lingkungan': 'bg-green-100 text-green-700',
//   'Edukasi': 'bg-violet-100 text-violet-700',
//   'Sosial': 'bg-orange-100 text-orange-700',
// };

export default function BeritaArtikel() {
  const [searchQuery, setSearchQuery] = useState('');
  const [articles, setArticles] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);

  const filtered = articles.filter((a) => {
  const matchSearch =
    a.title.rendered
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
    a.excerpt.rendered
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

  return matchSearch;
});

  useEffect(() => {
  fetch(
    'https://mpahimalaya.unimus.ac.id/wp-json/wp/v2/posts?_embed'
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setArticles(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
}, []);

  if (loading) {
  return (
    <div className="pt-32 text-center">
      Memuat artikel...
    </div>
  );
}

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
          </div>

          {/* Articles Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-stone-400">
              <Search size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">Tidak ada artikel ditemukan</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((article) => (
  <Link
    to={`/artikel/${article.id}`}
    key={article.id}
    className="card group cursor-pointer block"
  >
    <div className="overflow-hidden h-48">
      <img
        src={
          article._embedded?.['wp:featuredmedia']?.[0]
            ?.source_url ||
          'https://via.placeholder.com/800x500'
        }
        alt={article.title.rendered}
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-5">
      <h3 className="font-serif font-bold text-lg mb-2">
        {article.title.rendered}
      </h3>

      <div
        className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-4"
        dangerouslySetInnerHTML={{
          __html: article.excerpt.rendered,
        }}
      />

      <div className="flex items-center gap-3 text-xs">
        <span>
          <Calendar size={11} />{' '}
          {new Date(article.date).toLocaleDateString('id-ID')}
        </span>

        <span>
          <Clock size={11} /> 3 menit baca
        </span>
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
