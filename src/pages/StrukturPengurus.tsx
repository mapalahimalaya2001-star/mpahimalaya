import { Mail, Instagram } from 'lucide-react';
import arrizalPhoto from './img/arrizal-kamaluddin-syat.jpeg';
import davinaPhoto from './img/davina-rafaefa.jpeg';
import evaPhoto from './img/eva-yunizar.jpg';
import syukronPhoto from './img/syukron-abdullah.jpeg';
import achmadPhoto from './img/achmad-syaifullah.png';
import kamalPhoto from './img/kamal-fauzi-al-anshary.jpg';
import dellaPhoto from './img/della-mekar-arthamevia.jpeg';
import meyPhoto from './img/mey-nur-cahyaningsih.png';
import sheilaPhoto from './img/sheila-mellynda-yufa.jpeg';
import grymaldyPhoto from './img/grymaldy-tegar.jpeg';
import alfiyPhoto from './img/alfiy-haaniyah-w.jpeg';
import noerPhoto from './img/noer-rachman-m.jpeg';

interface Member {
  name: string;
  jabatan: string;
  divisi?: string;
  photo: string;
  email?: string;
}

const inti: Member[] = [
  {
    name: 'Arrizal Kamaluddin Syat',
    jabatan: 'Ketua Umum',
    photo: arrizalPhoto,
    email: 'ketua@mapala.ac.id',
  },
  {
    name: 'Davina Rafaefa ',
    jabatan: 'Sekretaris Umum',
    photo: davinaPhoto,
    email: 'sekretaris@mapala.ac.id',
  },
  {
    name: 'Eva Yunizar',
    jabatan: 'Bendahara Umum',
    photo: evaPhoto,
    email: 'bendahara@mapala.ac.id',
  },
];

const manajemen: Member[] = [
  {
    name: 'Syukron Abdullah',
    jabatan: 'Kabid Pendidikan',
    divisi: 'Bidang Pendidikan',
    photo: syukronPhoto,
  },
  {
    name: 'Achmad Syaifullah',
    jabatan: 'Koordinator Divisi',
    divisi: 'Koordinasi Divisi',
    photo: achmadPhoto,
  },
  {
    name: 'Kamal Fauzi Al Anshary',
    jabatan: 'Humas 1',
    divisi: 'Bidang Humas & Komunikasi',
    photo: kamalPhoto,
  },
  {
    name: 'Della Mekar Arthamevia',
    jabatan: 'Humas 2',
    divisi: 'Bidang Humas & Komunikasi',
    photo: dellaPhoto,
  },
  {
    name: 'Mey Nur Cahyaningsih',
    jabatan: 'Kabag Logistik',
    divisi: 'Bagian Logistik',
    photo: meyPhoto,
  },
];

const ketuaDivisi: Member[] = [
  {
    name: 'Sheila Mellynda Yufa',
    jabatan: 'Kadiv RG',
    divisi: 'Rock Garden',
    photo: sheilaPhoto,
  },
  {
    name: 'Grymaldy Tegar',
    jabatan: 'Kadiv RC',
    divisi: 'Rock Climbing',
    photo: grymaldyPhoto,
  },
  {
    name: 'Alfiy Haaniyah W',
    jabatan: 'Kadiv Caving',
    divisi: 'Caving',
    photo: alfiyPhoto,
  },
  {
    name: 'Noer Rachman M.',
    jabatan: 'Kadiv PPGD',
    divisi: 'PPGD',
    photo: noerPhoto,
  },
];

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="card p-6 text-center group">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <img
          src={member.photo}
          alt={member.name}
          className="w-20 h-20 rounded-full object-cover border-3 border-stone-100 group-hover:border-forest-300 transition-colors shadow-md"
        />
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-forest-500 rounded-full border-2 border-white" />
      </div>
      <h3 className="font-serif font-bold text-stone-800 text-base mb-0.5">{member.name}</h3>
      <p className="text-forest-600 font-semibold text-sm mb-1">{member.jabatan}</p>
      {member.divisi && (
        <p className="text-stone-500 text-xs mb-3">{member.divisi}</p>
      )}
      {member.email && (
        <div className="flex justify-center gap-2 mt-3">
          <a href={`mailto:${member.email}`} className="p-1.5 bg-stone-100 hover:bg-forest-100 rounded-lg transition-colors">
            <Mail size={13} className="text-stone-500 hover:text-forest-600" />
          </a>
          <a href="#" className="p-1.5 bg-stone-100 hover:bg-forest-100 rounded-lg transition-colors">
            <Instagram size={13} className="text-stone-500 hover:text-forest-600" />
          </a>
        </div>
      )}
    </div>
  );
}

export default function StrukturPengurus() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-72 sm:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1024975/pexels-photo-1024975.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1')" }}
        />
        <div className="absolute inset-0 bg-forest-900/65" />
        <div className="relative z-10 text-center px-4">
          <p className="text-forest-300 font-semibold text-sm tracking-wider uppercase mb-3">Tentang Kami</p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white">Struktur Pengurus</h1>
          <p className="text-stone-300 mt-3 max-w-xl mx-auto">Periode Kepengurusan 2025/2026</p>
        </div>
      </section>

      {/* Pengurus Inti */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">Pimpinan</p>
            <h2 className="section-title">Pengurus Inti</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {inti.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Struktur Manajemen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">Koordinasi Teknis</p>
            <h2 className="section-title">Pengurus Manajemen</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {manajemen.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Ketua Divisi */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-forest-600 font-semibold text-sm tracking-wider uppercase mb-3">Pelaksanaan Divisi</p>
            <h2 className="section-title">Ketua Divisi</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {ketuaDivisi.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>
      </section>

      {/* Org Chart Visual */}
      <section className="py-16 bg-forest-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">Bergabunglah Bersama Kami</h2>
          <p className="text-forest-200 leading-relaxed max-w-xl mx-auto mb-6">
            Kami selalu membuka pintu untuk mahasiswa yang ingin berkontribusi dan berkembang bersama MAPALA. Daftarkan dirimu sekarang!
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm px-5 py-2.5 rounded-lg">
            Pendaftaran anggota baru dibuka setiap Tahun ajaran baru
          </div>
        </div>
      </section>
    </div>
  );
}
