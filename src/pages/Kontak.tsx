import { useState } from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, Youtube, Send, CheckCircle, Music2 } from 'lucide-react';

interface FormState {
  nama: string;
  email: string;
  subjek: string;
  pesan: string;
}

export default function Kontak() {
  const [form, setForm] = useState<FormState>({ nama: '', email: '', subjek: '', pesan: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const reset = () => {
    setForm({ nama: '', email: '', subjek: '', pesan: '' });
    setSubmitted(false);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-64 sm:h-80 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-forest-900/65" />
        <div className="relative z-10 text-center px-4">
          <p className="text-forest-300 font-semibold text-sm tracking-wider uppercase mb-3">Hubungi Kami</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Kontak</h1>
          <p className="text-stone-300 mt-3">Ada pertanyaan atau ingin bergabung? Kami siap membantu.</p>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info Kontak */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="section-title mb-3">Temukan Kami</h2>
                <p className="text-stone-500 leading-relaxed">Jangan ragu untuk menghubungi kami melalui berbagai saluran yang tersedia. Tim kami siap menjawab pertanyaan Anda.</p>
              </div>

              <div className="space-y-4">
                <div className="card p-5 flex items-start gap-4">
                  <div className="bg-forest-100 p-3 rounded-xl shrink-0">
                    <MapPin size={20} className="text-forest-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Alamat Sekretariat</h4>
                    <p className="text-stone-500 text-sm leading-relaxed">
                      Gedung Sekretariat PKM,<br />
                      Universitas Muhammadiyah Semarang<br />
                      Jl. Kedungmundu Raya No.18, Semarang, 50273</p>
                  </div>
                </div>

                <div className="card p-5 flex items-start gap-4">
                  <div className="bg-forest-100 p-3 rounded-xl shrink-0">
                    <Mail size={20} className="text-forest-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Email</h4>
                    <a href="mailto:mapala@universitas.ac.id" className="text-forest-600 hover:text-forest-700 text-sm font-medium">mapalahimalaya2001@gmail.com</a>
                    <p className="text-stone-400 text-xs mt-0.5">Respon dalam 1-2 hari kerja</p>
                  </div>
                </div>

                <div className="card p-5 flex items-start gap-4">
                  <div className="bg-forest-100 p-3 rounded-xl shrink-0">
                    <Phone size={20} className="text-forest-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">WhatsApp</h4>
                    <a href="https://wa.me/6281329602156" className="text-forest-600 hover:text-forest-700 text-sm font-medium">+62 813 2960 2156</a>
                    <p className="text-stone-400 text-xs mt-0.5">Setiap Hari, 08.00–23.00 WIB</p>
                  </div>
                </div>
              </div>

              {/* Sosmed */}
<div className="card p-5">
  <h4 className="font-semibold text-stone-800 mb-4">Media Sosial</h4>

  <div className="space-y-3">
    {[
      {
        icon: Instagram,
        label: '@mpahimalaya_unimus',
        platform: 'Instagram',
        link: 'https://www.instagram.com/mpahimalaya_unimus/',
        color: 'text-pink-600 bg-pink-50'
      },
      {
        icon: Facebook,
        label: 'MPA Himalaya',
        platform: 'Facebook',
        link: 'https://www.facebook.com/mpa.himalaya',
        color: 'text-blue-600 bg-blue-50'
      },
      {
        icon: Youtube,
        label: 'MPA HIMALAYA Official',
        platform: 'YouTube',
        link: 'https://www.youtube.com/@mpahimalayaofficial6936',
        color: 'text-red-600 bg-red-50'
      },
      {
        icon: Music2,
        label: '@mpa.himalaya',
        platform: 'TikTok',
        link: 'https://www.tiktok.com/@mpa.himalaya',
        color: 'text-black bg-stone-100'
      },
    ].map(s => {
      const Icon = s.icon;

      return (
        <a
          key={s.platform}
          href={s.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors group"
        >
          <div className={`p-2 rounded-lg ${s.color}`}>
            <Icon size={16} />
          </div>

          <div>
            <p className="text-xs text-stone-400">{s.platform}</p>
            <p className="text-sm font-medium text-stone-700 group-hover:text-forest-700 transition-colors">
              {s.label}
            </p>
          </div>
        </a>
      );
    })}
  </div>
</div>

              {/* Jam Operasional */}
<div className="card p-5">
  <h4 className="font-semibold text-stone-800 mb-4">
    Jam Operasional Sekretariat
  </h4>

  <div className="bg-forest-50 border border-forest-200 rounded-xl p-4 text-center">
    <p className="text-lg font-bold text-forest-700">
      BUKA SETIAP HARI
    </p>

    <p className="text-2xl font-extrabold text-stone-800 mt-1">
      24 JAM
    </p>

    <p className="text-sm text-stone-500 mt-2">
      Tim MPA HIMALAYA siap melayani dan menerima informasi kapan saja.
    </p>
  </div>
</div>
            </div>

            {/* Form Kontak */}
            <div className="lg:col-span-3">
              <div className="card p-8">
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="bg-forest-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={36} className="text-forest-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-800 mb-3">Pesan Terkirim!</h3>
                    <p className="text-stone-500 leading-relaxed mb-6 max-w-sm mx-auto">
                      Terima kasih telah menghubungi kami. Tim MAPALA akan merespons pesan Anda dalam 1-2 hari kerja.
                    </p>
                    <button onClick={reset} className="btn-outline">
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-7">
                      <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">Kirim Pesan</h3>
                      <p className="text-stone-500 text-sm">Isi formulir di bawah dan kami akan segera menghubungi Anda.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-stone-700 font-medium text-sm mb-1.5">Nama Lengkap <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            name="nama"
                            required
                            value={form.nama}
                            onChange={handleChange}
                            placeholder="Masukkan nama Anda"
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-sm transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-stone-700 font-medium text-sm mb-1.5">Email <span className="text-red-500">*</span></label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            placeholder="email@contoh.com"
                            className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-stone-700 font-medium text-sm mb-1.5">Topik Pesan <span className="text-red-500">*</span></label>
                        <select
                          name="subjek"
                          required
                          value={form.subjek}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-sm transition-all appearance-none"
                        >
                          <option value="">Pilih topik...</option>
                          <option>Informasi Keanggotaan</option>
                          <option>Kegiatan dan Ekspedisi</option>
                          <option>Kerjasama dan Sponsorship</option>
                          <option>Media dan Publikasi</option>
                          <option>Pertanyaan Umum</option>
                          <option>Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-stone-700 font-medium text-sm mb-1.5">Pesan <span className="text-red-500">*</span></label>
                        <textarea
                          name="pesan"
                          required
                          rows={5}
                          value={form.pesan}
                          onChange={handleChange}
                          placeholder="Tulis pesan Anda di sini..."
                          className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-700 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent text-sm transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Mengirim...
                          </>
                        ) : (
                          <>
                            Kirim Pesan <Send size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
<section className="h-72 relative overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d281.90236352346443!2d110.46116465129722!3d-7.020538833442355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c5a129b2071%3A0xc49764f22a42241b!2sMPA%20HIMALAYA!5e0!3m2!1sid!2sid!4v1776081202291!5m2!1sid!2sid"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Lokasi MPA HIMALAYA"
  />

  {/* Overlay Info */}
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="bg-white rounded-2xl shadow-lg px-8 py-5 flex items-center gap-4">
      <div className="bg-forest-100 p-3 rounded-xl">
        <MapPin size={24} className="text-forest-700" />
      </div>

      <div>
        <p className="font-semibold text-stone-800">
          Sekretariat MPA HIMALAYA
        </p>

        <p className="text-stone-500 text-sm">
          Gedung PKM, Universitas Muhammadiyah Semarang
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
