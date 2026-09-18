"use client";

import { useMemo, useState } from "react";

type Article = {
  title: string;
  category: "Cerita" | "Program" | "Berita";
  date: string;
  excerpt: string;
  tone: string;
};

const programs = [
  {
    number: "01",
    title: "Omah Difabel",
    description:
      "Pusat inkubasi usaha inklusif tempat difabel mengembangkan karya, keterampilan, dan kemandirian.",
    color: "bg-[#f8cf42]",
  },
  {
    number: "02",
    title: "Posyandu Disabilitas",
    description:
      "Layanan kesehatan dan pendampingan berbasis desa yang hadir dekat dengan keluarga difabel.",
    color: "bg-[#ef715b]",
  },
  {
    number: "03",
    title: "Difabel Pecinta Alam",
    description:
      "Ruang belajar dan petualangan untuk membangun kepercayaan diri, kepemimpinan, serta kepedulian alam.",
    color: "bg-[#6d9b75]",
  },
];

const articles: Article[] = [
  {
    title: "Munir: Melawan Stigma Kusta Lewat Usaha Pracangan di Lawang",
    category: "Cerita",
    date: "12 Agustus 2026",
    excerpt: "Kisah tentang keberanian membuka peluang dan memulihkan kepercayaan diri.",
    tone: "from-[#d9a26d] to-[#734b3b]",
  },
  {
    title: "Difpala: Manfaat Kegiatan Alam Terbuka bagi Penyandang Autisme",
    category: "Program",
    date: "05 Agustus 2026",
    excerpt: "Belajar mengenal alam, membangun relasi, dan merayakan setiap kemampuan.",
    tone: "from-[#8eb59a] to-[#315d50]",
  },
  {
    title: "Sumiati, Sosok Inspiratif di Balik Sosialisasi Bisindo",
    category: "Cerita",
    date: "28 Juli 2026",
    excerpt: "Bahasa isyarat membuka percakapan dan membuat ruang publik lebih ramah.",
    tone: "from-[#d6869a] to-[#704f70]",
  },
  {
    title: "Posyandu Disabilitas: Sehat Bersama dari Desa",
    category: "Berita",
    date: "20 Juli 2026",
    excerpt: "Kolaborasi warga untuk memastikan tidak ada keluarga yang berjalan sendiri.",
    tone: "from-[#e5ba67] to-[#915d42]",
  },
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16" fill="none">
      <path d="M2 8h11M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="LINKSOS beranda">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#e96d55] text-lg font-black text-[#e96d55]">
        ∞
      </span>
      <span className="text-xl font-black tracking-[-0.06em] text-[#193c3b]">LINKSOS</span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(
    () =>
      articles.filter((article) => {
        const matchesCategory = activeCategory === "Semua" || article.category === activeCategory;
        const matchesQuery = article.title.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [activeCategory, query],
  );

  return (
    <main className="overflow-hidden bg-[#fffdf8] text-[#193c3b]">
      <div className="bg-[#193c3b] px-5 py-2 text-center text-xs font-medium tracking-wide text-white/80">
        Membangun Indonesia inklusif dimulai dari desa.
      </div>
      <header className="sticky top-0 z-20 border-b border-[#193c3b]/10 bg-[#fffdf8]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navigasi utama">
            <a className="text-[#e96d55]" href="#">Beranda</a>
            <a className="transition hover:text-[#e96d55]" href="#tentang">Tentang Kami</a>
            <a className="transition hover:text-[#e96d55]" href="#program">Program</a>
            <a className="transition hover:text-[#e96d55]" href="#cerita">Cerita</a>
            <a className="transition hover:text-[#e96d55]" href="#kontak">Kontak</a>
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button className="rounded-full p-2 text-[#193c3b] transition hover:bg-[#f8cf42]/30" aria-label="Cari">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" /><path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
            <a href="#donasi" className="rounded-full bg-[#e96d55] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#d95943]">Dukung Kami</a>
          </div>
          <button className="rounded-lg p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Buka menu" aria-expanded={menuOpen}>
            <span className="block h-0.5 w-6 bg-[#193c3b]" />
            <span className="my-1.5 block h-0.5 w-6 bg-[#193c3b]" />
            <span className="block h-0.5 w-6 bg-[#193c3b]" />
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#193c3b]/10 px-5 pb-4 pt-2 lg:hidden" aria-label="Navigasi mobile">
            {["Beranda", "Tentang Kami", "Program", "Cerita", "Kontak"].map((item) => (
              <a key={item} href={item === "Beranda" ? "#" : `#${item.toLowerCase().replace(" ", "")}`} onClick={() => setMenuOpen(false)} className="block border-b border-[#193c3b]/10 py-3 text-sm font-semibold">{item}</a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-24">
        <div className="relative z-10">
          <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#e96d55]"><span className="h-2 w-2 rounded-full bg-[#e96d55]" /> Lingkar Sosial Indonesia</p>
          <h1 className="max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">Setiap orang punya <span className="text-[#e96d55]">ruang</span> untuk tumbuh.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#193c3b]/70">Kami bergerak bersama penyandang disabilitas, keluarga, dan komunitas untuk mewujudkan lingkungan yang setara, mandiri, dan inklusif.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#program" className="inline-flex items-center gap-3 rounded-full bg-[#193c3b] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#315d50]">Lihat program <ArrowIcon /></a>
            <a href="#tentang" className="inline-flex items-center gap-3 rounded-full border border-[#193c3b]/25 px-6 py-3.5 text-sm font-bold transition hover:border-[#e96d55] hover:text-[#e96d55]">Kenali kami</a>
          </div>
        </div>
        <div className="relative mx-auto h-97.5 w-full max-w-135 sm:h-120">
          <div className="absolute inset-5 rounded-[48%_52%_45%_55%/50%_40%_60%_50%] bg-[#f8cf42] rotate-[-7deg]" />
          <div className="absolute inset-14 overflow-hidden rounded-[45%_55%_40%_60%/55%_45%_55%_45%] bg-linear-to-br from-[#77a68d] via-[#4f806e] to-[#193c3b]">
            <div className="absolute -left-8 top-14 h-32 w-32 rounded-full bg-[#f8cf42]/80" />
            <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[#e96d55]/80" />
            <div className="absolute left-[28%] top-[25%] h-48 w-48 rounded-full border-18 border-white/70" />
            <div className="absolute bottom-10 left-10 max-w-57.5 text-4xl font-black leading-none tracking-[-0.07em] text-white">Bersama,<br />tanpa batas.</div>
          </div>
          <span className="absolute right-0 top-6 flex h-20 w-20 rotate-12 items-center justify-center rounded-full bg-[#e96d55] text-center text-xs font-bold leading-tight text-white">Tumbuh<br />setara</span>
        </div>
      </section>

      <section id="tentang" className="bg-[#193c3b] px-5 py-16 text-white lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f8cf42]">Tentang LINKSOS</p>
          <div><h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">Mendampingi dengan cara yang dekat, mendengar dengan hati.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-white/70">Berdiri sejak 2014, LINKSOS konsisten mendampingi berbagai ragam disabilitas melalui inovasi dan model pendampingan berbasis komunitas di Malang dan sekitarnya.</p></div>
        </div>
      </section>

      <section id="program" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96d55]">Apa yang kami lakukan</p><h2 className="mt-3 text-4xl font-black tracking-tighter sm:text-5xl">Program untuk perubahan nyata.</h2></div><a href="#kontak" className="inline-flex items-center gap-2 text-sm font-bold text-[#e96d55]">Lihat semua <ArrowIcon /></a></div>
        <div className="grid gap-4 md:grid-cols-3">
          {programs.map((program) => <article key={program.number} className={`group rounded-4xl ${program.color} p-7 transition duration-300 hover:-translate-y-2`}><div className="flex items-start justify-between"><span className="text-sm font-black">{program.number}</span><span className="rounded-full border border-[#193c3b]/30 p-2 transition group-hover:rotate-45"><ArrowIcon /></span></div><h3 className="mt-20 text-2xl font-black tracking-[-0.04em]">{program.title}</h3><p className="mt-3 text-sm leading-6 text-[#193c3b]/75">{program.description}</p></article>)}
        </div>
      </section>

      <section id="cerita" className="bg-[#f3eee4] px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e96d55]">Dari komunitas</p><h2 className="mt-3 text-4xl font-black tracking-tighter sm:text-5xl">Cerita yang menggerakkan.</h2></div><div className="flex flex-wrap gap-2">{["Semua", "Cerita", "Program", "Berita"].map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full px-4 py-2 text-xs font-bold transition ${activeCategory === category ? "bg-[#193c3b] text-white" : "border border-[#193c3b]/20 hover:border-[#e96d55]"}`}>{category}</button>)}</div></div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"><div className="col-span-full mb-1"><label className="sr-only" htmlFor="search">Cari cerita</label><input id="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari cerita atau program..." className="w-full rounded-full border border-[#193c3b]/15 bg-white px-5 py-3 text-sm outline-none transition placeholder:text-[#193c3b]/40 focus:border-[#e96d55] md:max-w-sm" /></div>{filteredArticles.map((article) => <article key={article.title} className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><div className={`relative h-44 bg-linear-to-br ${article.tone}`}><span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#193c3b]">{article.category}</span><span className="absolute right-4 top-4 text-5xl font-black text-white/20">✳</span></div><div className="p-5"><p className="text-xs font-medium text-[#193c3b]/50">{article.date}</p><h3 className="mt-2 text-lg font-bold leading-snug">{article.title}</h3><p className="mt-3 text-sm leading-6 text-[#193c3b]/60">{article.excerpt}</p><a href="#kontak" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#e96d55]">Baca cerita <ArrowIcon /></a></div></article>)}</div>
          {filteredArticles.length === 0 && <p className="mt-8 rounded-2xl bg-white p-8 text-center text-sm text-[#193c3b]/60">Cerita yang dicari belum ditemukan.</p>}
        </div>
      </section>

      <section id="donasi" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="relative overflow-hidden rounded-4xl bg-[#e96d55] px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16"><div className="relative z-10 max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">Mari ambil bagian</p><h2 className="mt-3 text-4xl font-black tracking-tighter sm:text-5xl">Perubahan dimulai dari satu langkah kecil.</h2><p className="mt-5 max-w-xl leading-7 text-white/80">Dukung gerakan inklusi dengan menjadi relawan, mitra, atau donatur LINKSOS.</p></div><a href="#kontak" className="relative z-10 mt-8 inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#e96d55] transition hover:bg-[#f8cf42] hover:text-[#193c3b] lg:mt-0">Dukung LINKSOS <ArrowIcon /></a><div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-35 border-white/10" /></div></section>

      <footer id="kontak" className="bg-[#193c3b] px-5 pb-8 pt-14 text-white lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-white/60">Pusat pemberdayaan disabilitas dan penggerak inklusi dari Malang, Jawa Timur.</p></div><div><h3 className="font-bold">Jelajah</h3><div className="mt-4 space-y-3 text-sm text-white/60"><a className="block hover:text-white" href="#tentang">Tentang Kami</a><a className="block hover:text-white" href="#program">Program</a><a className="block hover:text-white" href="#cerita">Cerita</a></div></div><div><h3 className="font-bold">Terhubung</h3><div className="mt-4 space-y-3 text-sm text-white/60"><a className="block hover:text-white" href="#kontak">Instagram</a><a className="block hover:text-white" href="#kontak">Facebook</a><a className="block hover:text-white" href="#kontak">Youtube</a></div></div><div><h3 className="font-bold">Kantor kami</h3><p className="mt-4 text-sm leading-6 text-white/60">Malang, Jawa Timur<br />Indonesia</p></div></div><div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">© 2026 Lingkar Sosial Indonesia. Bersama membangun ruang yang setara.</div></footer>
    </main>
  );
}
