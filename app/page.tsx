import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between gap-20 pl-50 pr-50 bg-gray-100">
        <Image
          src="/images/logo-domainesia.svg"
          alt="Logo Domainesia"
          className="h-8"
          width={180}
          height={37}
        />
        <input type="text" className="w-full rounded-full pl-20 pr-20 border border-gray-400" placeholder="Searching ..." />
        <div className="flex gap-2 justify-between items-center">
          <Image
            src="/images/fb.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
          <Image
            src="/images/youtube.svg"
            alt="Search Icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      <div className="flex justify-between pl-50 pr-50 bg-linear-to-b from-[#009eed] to-[#00aeef] w-full h-80">
        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-3xl font-bold text-white">Selamat datang di Domainesia</h1>
          <p className="text-white">Temukan domain impianmu di sini dengan harga
            yang kompetitif</p>
        </div>
        <div className="h-full">
          <Image
            className="h-full"
            src="/images/ilustrasi-domainesia.svg"
            alt="Domainesia Hero" width={500} height={300}
          />
        </div>
      </div>
      <div className="flex justify-between px-50 pt-10 w-full bg-white">
        <div>
          <div className="text-lg text-blue-500">Artikel</div>
          <div className="text-xl font-bold text-black">Berita Pilihan</div>
        </div>
        <button className="px-4 py-2 cursor-pointer rounded-full hover:drop-shadow-[5px_8px_10px_rgba(0,0,0,0.25)]
        transition duration-300 self-center
         bg-blue-500 text-white">Lainnya</button>
      </div>
      <div className="grid grid-cols-3 gap-10 px-50 py-10 bg-white">
        {/* start konten item */}
        <div className="drop-shadow-lg rounded-lg bg-white hover:-translate-y-4 transition-all duration-300">
          <Image
            className="w-full rounded-lg"
            src="/images/blog1.webp"
            alt="Artikel 1"
            width={300}
            height={200}
          />
          <div className="px-4 py-2">
            <div className="text-sm text-blue-500">Berita</div>
            <div className="text-xl font-bold text-black">Supabase: Solusi Open-Source untuk
              Backend Aplikasi Modern</div>
            <div className="flex justify-between text-black">
              <div className="text-gray-500"><small className="text-gray-400">Oleh</small> John Doe</div><div className="text-gray-500">21 June 2026</div>
            </div>
          </div>
        </div>

        
        <div className="drop-shadow-lg rounded-lg bg-white hover:-translate-y-4 transition-all duration-300">
          <Image
            className="w-full rounded-lg"
            src="/images/blog1.webp"
            alt="Artikel 1"
            width={300}
            height={200}
          />
          <div className="px-4 py-2">
            <div className="text-sm text-blue-500">Berita</div>
            <div className="text-xl font-bold text-black">Supabase: Solusi Open-Source untuk
              Backend Aplikasi Modern</div>
            <div className="flex justify-between text-black">
              <div className="text-gray-500"><small className="text-gray-400">Oleh</small> John Doe</div><div className="text-gray-500">21 June 2026</div>
            </div>
          </div>
        </div>

        <div className="drop-shadow-lg rounded-lg bg-white hover:-translate-y-4 transition-all duration-300">
          <Image
            className="w-full rounded-lg"
            src="/images/blog1.webp"
            alt="Artikel 1"
            width={300}
            height={200}
          />
          <div className="px-4 py-2">
            <div className="text-sm text-blue-500">Berita</div>
            <div className="text-xl font-bold text-black">Supabase: Solusi Open-Source untuk
              Backend Aplikasi Modern</div>
            <div className="flex justify-between text-black">
              <div className="text-gray-500"><small className="text-gray-400">Oleh</small> John Doe</div><div className="text-gray-500">21 June 2026</div>
            </div>
          </div>
        </div>

        <div className="drop-shadow-lg rounded-lg bg-white hover:-translate-y-4 transition-all duration-300">
          <Image
            className="w-full rounded-lg"
            src="/images/blog1.webp"
            alt="Artikel 1"
            width={300}
            height={200}
          />
          <div className="px-4 py-2">
            <div className="text-sm text-blue-500">Berita</div>
            <div className="text-xl font-bold text-black">Supabase: Solusi Open-Source untuk
              Backend Aplikasi Modern</div>
            <div className="flex justify-between text-black">
              <div className="text-gray-500"><small className="text-gray-400">Oleh</small> John Doe</div><div className="text-gray-500">21 June 2026</div>
            </div>
          </div>
        </div>

        <div className="drop-shadow-lg rounded-lg bg-white hover:-translate-y-4 transition-all duration-300">
          <Image
            className="w-full rounded-lg"
            src="/images/blog1.webp"
            alt="Artikel 1"
            width={300}
            height={200}
          />
          <div className="px-4 py-2">
            <div className="text-sm text-blue-500">Berita</div>
            <div className="text-xl font-bold text-black">Supabase: Solusi Open-Source untuk
              Backend Aplikasi Modern</div>
            <div className="flex justify-between text-black">
              <div className="text-gray-500"><small className="text-gray-400">Oleh</small> John Doe</div><div className="text-gray-500">21 June 2026</div>
            </div>
          </div>
        </div>

        <div className="drop-shadow-lg rounded-lg bg-white hover:-translate-y-4 transition-all duration-300">
          <Image
            className="w-full rounded-lg"
            src="/images/blog1.webp"
            alt="Artikel 1"
            width={300}
            height={200}
          />
          <div className="px-4 py-2">
            <div className="text-sm text-blue-500">Berita</div>
            <div className="text-xl font-bold text-black">Supabase: Solusi Open-Source untuk
              Backend Aplikasi Modern</div>
            <div className="flex justify-between text-black">
              <div className="text-gray-500"><small className="text-gray-400">Oleh</small> John Doe</div><div className="text-gray-500">21 June 2026</div>
            </div>
          </div>
        </div>
        {/* end konten item */}
      </div>
    </div>
  );
}
