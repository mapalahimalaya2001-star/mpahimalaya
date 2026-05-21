import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Calendar, ArrowLeft } from 'lucide-react';

interface WPPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
  ['wp:featuredmedia']?: Array<{
    source_url: string;
  }>;

  author?: Array<{
    name: string;
  }>;
};
}

export default function DetailArtikel() {
  const { id } = useParams();

  const [article, setArticle] = useState<WPPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://mpahimalaya.unimus.ac.id/wp-json/wp/v2/posts/${id}?_embed`
    )
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="pt-32 text-center">
        Memuat artikel...
      </div>
    );
  }

  if (!article || !article.id) {
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
      <section className="relative h-[320px] md:h-[420px] overflow-hidden">
        <img
          src={
            article._embedded?.['wp:featuredmedia']?.[0]
              ?.source_url ||
            'https://via.placeholder.com/1200x600'
          }
          alt={article.title.rendered}
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

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
              {article.title.rendered}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-stone-200 mt-4">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                {new Date(article.date).toLocaleDateString('id-ID')}
              </span>
              <span>
                Oleh {article._embedded?.author?.[0]?.name || 'MPA HIMALAYA'}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <div className="bg-white rounded-3xl shadow-sm border border-stone-100 p-8 md:p-12">

      <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-stone-200">
        <div className="flex items-center gap-2 text-stone-600">
          <Calendar size={18} />
          <span>
            {new Date(article.date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
        </div>

        <span className="text-stone-300">•</span>

        <span className="text-forest-700 font-medium">
          MPA HIMALAYA UNIMUS
        </span>
      </div>

      <article
        className="
          prose
          prose-lg
          max-w-none

          prose-headings:font-serif
          prose-headings:text-stone-900
          prose-headings:font-bold

          prose-p:text-stone-700
          prose-p:leading-8

          prose-strong:text-stone-900

          prose-img:rounded-2xl
          prose-img:shadow-lg

          prose-ul:list-disc
          prose-ol:list-decimal

          prose-a:text-forest-700
          prose-a:no-underline
          hover:prose-a:text-forest-800
        "
        dangerouslySetInnerHTML={{
          __html: article.content.rendered,
        }}
      />
    </div>
  </div>
</section>
    </div>
  );
}