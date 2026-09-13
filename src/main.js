import './style.css';

const logo = 'https://lingkarsosial.org/wp-content/uploads/2020/03/LOGO-LINGKAR-SOSIAL.png';
const heroImage = 'https://lingkarsosial.org/wp-content/uploads/2024/12/200-kb-penghijauan.jpeg';
const newsImage = 'https://lingkarsosial.org/wp-content/uploads/2026/08/HARI-GAJAH-SEDUNIA-DIFPALA-X-GEOPIX.jpeg';

document.querySelector('#app').innerHTML = `
  <header class="absolute inset-x-0 top-0 z-20">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10" aria-label="Navigasi utama">
      <a href="#" class="flex items-center gap-3 text-white" aria-label="Lingkar Sosial Indonesia">
        <span class="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white p-1">
          <img src="${logo}" alt="Logo Lingkar Sosial" class="h-full w-full object-contain" />
        </span>
        <span class="font-display text-sm font-bold tracking-wide sm:text-base">LINGKAR SOSIAL<br><span class="font-sans text-[10px] font-medium tracking-[.22em] text-lime-200">INDONESIA</span></span>
      </a>
      <button id="menu-button" class="rounded-lg border border-white/30 p-2 text-white lg:hidden" aria-expanded="false" aria-controls="mobile-menu" aria-label="Buka menu">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <div class="hidden items-center gap-8 text-sm font-semibold text-white lg:flex">
        <a class="nav-link" href="#tentang">Tentang kami</a>
        <a class="nav-link" href="#program">Program</a>
        <a class="nav-link" href="#cerita">Kabar terbaru</a>
        <a href="#dukung" class="rounded-full bg-[#a8c93a] px-5 py-3 text-sm font-bold text-[#173b32] transition hover:bg-white">Dukung gerakan</a>
      </div>
    </nav>
    <div id="mobile-menu" class="mx-4 hidden rounded-2xl bg-white p-5 shadow-xl lg:hidden">
      <div class="flex flex-col gap-4 text-sm font-semibold text-ink">
        <a href="#tentang">Tentang kami</a><a href="#program">Program</a><a href="#cerita">Kabar terbaru</a>
        <a href="#dukung" class="rounded-full bg-leaf px-5 py-3 text-center">Dukung gerakan</a>
      </div>
    </div>
  </header>

  <main>
    <section class="relative flex min-h-[680px] items-end overflow-hidden bg-ink pb-20 pt-36 text-white lg:min-h-[760px] lg:pb-28">
      <img src="${heroImage}" alt="Kegiatan penghijauan bersama komunitas" class="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#123c32] via-[#173f34]/75 to-[#173f34]/20"></div>
      <div class="absolute inset-0 hero-pattern opacity-30"></div>
      <div class="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div class="max-w-3xl">
          <p class="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[.2em] text-lime-200"><span class="reveal-line"></span> Membangun Indonesia inklusif</p>
          <h1 class="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">Setiap orang berhak<br /><span class="text-leaf">ambil bagian.</span></h1>
          <p class="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">Lingkar Sosial Indonesia adalah organisasi difabel penggerak inklusi yang bekerja bersama masyarakat untuk mewujudkan ruang hidup yang setara.</p>
          <div class="mt-9 flex flex-wrap gap-4">
            <a href="#tentang" class="rounded-full bg-leaf px-7 py-3.5 font-bold text-ink transition hover:bg-white">Kenali LINKSOS <span class="ml-2">→</span></a>
            <a href="#program" class="rounded-full border border-white/50 px-7 py-3.5 font-bold text-white transition hover:border-white hover:bg-white/10">Lihat program</a>
          </div>
        </div>
      </div>
    </section>

    <section id="tentang" class="bg-cream py-20 lg:py-28">
      <div class="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
        <div>
          <p class="mb-4 text-sm font-bold uppercase tracking-[.18em] text-forest">Tentang kami</p>
          <h2 class="font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">Inklusi dimulai<br />dari <span class="text-forest">desa.</span></h2>
          <div class="reveal-line my-7"></div>
          <p class="text-[17px] leading-8 text-slate-600">Berdiri sejak 2014, LINKSOS konsisten mendampingi berbagai ragam disabilitas melalui inovasi dan model pemberdayaan berbasis komunitas.</p>
          <a href="#" class="mt-7 inline-flex items-center gap-2 font-bold text-forest hover:text-leaf">Selengkapnya tentang LINKSOS <span>↗</span></a>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:gap-6">
          <div class="rounded-3xl bg-forest p-6 text-white sm:p-8"><span class="font-display text-4xl font-bold text-leaf sm:text-5xl">10+</span><p class="mt-3 leading-6 text-white/75">tahun bergerak bersama</p></div>
          <div class="mt-8 rounded-3xl bg-white p-6 shadow-sm sm:p-8"><span class="font-display text-4xl font-bold text-forest sm:text-5xl">30+</span><p class="mt-3 leading-6 text-slate-500">desa dampingan</p></div>
          <div class="-mt-2 rounded-3xl bg-leaf p-6 text-ink sm:p-8"><span class="font-display text-4xl font-bold sm:text-5xl">6</span><p class="mt-3 leading-6 text-ink/70">model program inklusi</p></div>
          <div class="rounded-3xl bg-sand p-6 sm:p-8"><span class="font-display text-4xl font-bold text-forest sm:text-5xl">∞</span><p class="mt-3 leading-6 text-slate-600">ruang untuk bertumbuh</p></div>
        </div>
      </div>
    </section>

    <section id="program" class="py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div><p class="mb-4 text-sm font-bold uppercase tracking-[.18em] text-forest">Yang kami lakukan</p><h2 class="font-display text-3xl font-bold text-ink sm:text-5xl">Gerakan yang<br /><span class="text-forest">menumbuhkan harapan.</span></h2></div>
          <p class="max-w-sm text-slate-500">Bersama difabel, keluarga, pemerintah dan komunitas, kami mendorong perubahan yang nyata dan berkelanjutan.</p>
        </div>
        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          ${[
            ['01', 'Omah Difabel', 'Ruang aman untuk belajar, berkarya, dan saling menguatkan bagi penyandang disabilitas.', '⌂'],
            ['02', 'Posyandu Disabilitas', 'Mendekatkan akses kesehatan dan layanan dasar yang ramah bagi semua.', '♡'],
            ['03', 'Gugusdepan Inklusif', 'Membentuk generasi muda yang berani, mandiri, dan menghargai keberagaman.', '✦'],
            ['04', 'Difabel Pecinta Alam', 'Membuka ruang partisipasi difabel dalam menjaga alam dan lingkungan.', '⌁'],
            ['05', 'Aksara Inklusi', 'Menghidupkan literasi dan komunikasi yang dapat diakses oleh siapa saja.', 'Aa'],
            ['06', 'Kelompok Dampingan', 'Menguatkan komunitas lokal agar mampu memperjuangkan haknya sendiri.', '◎']
          ].map(([num, title, text, icon]) => `<article class="card-lift rounded-3xl border border-slate-100 bg-white p-7 shadow-[0_4px_20px_rgba(23,59,50,.04)]"><div class="flex items-start justify-between"><span class="font-mono text-sm text-slate-400">${num}</span><span class="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-xl font-bold text-forest">${icon}</span></div><h3 class="mt-8 font-display text-xl font-bold text-ink">${title}</h3><p class="mt-3 leading-7 text-slate-500">${text}</p><a href="#" class="mt-7 inline-block font-bold text-forest">Pelajari <span class="ml-1">→</span></a></article>`).join('')}
        </div>
      </div>
    </section>

    <section id="cerita" class="bg-ink py-20 text-white lg:py-28">
      <div class="mx-auto max-w-7xl px-6 lg:px-10">
        <div class="mb-12 flex items-end justify-between"><div><p class="mb-4 text-sm font-bold uppercase tracking-[.18em] text-lime-200">Dari lapangan</p><h2 class="font-display text-3xl font-bold sm:text-5xl">Cerita terbaru.</h2></div><a href="#" class="hidden font-bold text-leaf sm:block">Lihat semua cerita →</a></div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article class="group overflow-hidden rounded-3xl bg-white text-ink lg:col-span-2"><div class="relative h-64 overflow-hidden sm:h-80"><img src="${newsImage}" alt="Pentas seni dan dongeng satwa" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span class="absolute left-5 top-5 rounded-full bg-leaf px-4 py-2 text-xs font-bold text-ink">KABAR KEGIATAN</span></div><div class="p-7"><p class="text-sm text-slate-400">12 Agustus 2026 · 3 menit baca</p><h3 class="mt-3 max-w-2xl font-display text-2xl font-bold leading-tight">Aksi Difpala: Pentas Seni dan Dongeng Satwa, Peringati Hari Gajah Sedunia</h3><a href="#" class="mt-5 inline-block font-bold text-forest">Baca cerita →</a></div></article>
          <div class="flex flex-col justify-between rounded-3xl bg-[#285e4d] p-7"><div><span class="text-4xl text-leaf">“</span><p class="mt-3 font-display text-2xl font-bold leading-snug">Penyandang disabilitas memiliki hak sekaligus kemauan dan kemampuan untuk mengambil peran.</p></div><div class="mt-8 border-t border-white/20 pt-5 text-sm text-white/70">Ken Kerta<br /><span class="text-white">Pembina Difabel Pecinta Alam</span></div></div>
        </div>
      </div>
    </section>

    <section id="dukung" class="relative overflow-hidden bg-leaf py-20 lg:py-24"><div class="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[35px] border-white/10"></div><div class="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 sm:flex-row sm:items-center lg:px-10"><div><p class="text-sm font-bold uppercase tracking-[.18em] text-ink/70">Mari bergerak bersama</p><h2 class="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">Perubahan besar dimulai dari langkah kecil.</h2></div><a href="#" class="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-7 py-4 font-bold text-white transition hover:bg-white hover:text-ink">Hubungi kami <span class="ml-3">→</span></a></div></section>
  </main>

  <footer class="bg-[#102d27] py-14 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
      <div><div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white p-1"><img src="${logo}" alt="" class="h-full w-full object-contain" /></span><span class="font-display font-bold">LINGKAR SOSIAL</span></div><p class="mt-5 max-w-sm text-sm leading-7 text-white/55">Mewujudkan penghormatan, pelindungan, dan pemenuhan hak penyandang disabilitas di Indonesia.</p></div>
      <div><p class="font-bold text-leaf">Jelajahi</p><div class="mt-5 flex flex-col gap-3 text-sm text-white/60"><a href="#tentang" class="hover:text-white">Tentang kami</a><a href="#program" class="hover:text-white">Program</a><a href="#cerita" class="hover:text-white">Kabar terbaru</a></div></div>
      <div><p class="font-bold text-leaf">Terhubung</p><p class="mt-5 text-sm leading-7 text-white/60">Malang, Jawa Timur<br />Indonesia</p><a href="mailto:info@lingkarsosial.org" class="mt-3 inline-block text-sm text-white/80 hover:text-leaf">info@lingkarsosial.org</a></div>
    </div>
    <div class="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-xs text-white/40 lg:px-10"><span>© <span id="year"></span> Lingkar Sosial Indonesia.</span><span class="float-right">Dibuat dengan kepedulian.</span></div>
  </footer>
`;

const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
menuButton.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden') === false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
