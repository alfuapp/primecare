"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-800 px-4 overflow-hidden pt-20">

      {/* Hero Section */}
      <motion.div
        className="text-center max-w-3xl mt-10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D3B66] mb-4 leading-snug">
          Reseptin uusiminen helposti ja turvallisesti verkossa
        </h1>
        <p className="text-gray-600 mb-6 text-base sm:text-lg md:text-xl">
          PrimeCare tarjoaa nopean ja edullisen tavan uusia reseptisi verkossa.
          Tunnistaudu suomalaisilla pankkitunnuksilla ja saat reseptin nopeasti käyttöön.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            (window.location.href =
              "/checkout?service=Reseptin uusiminen&price=12")
          }
          className="bg-[#0D3B66] hover:bg-[#0c3560] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          💊 Uusi resepti nyt
        </motion.button>
      </motion.div>

      {/* Doctor Section */}
      <section className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 px-4 sm:px-6 lg:px-8">
        {/* Doctor Image */}
        <motion.div
          className="flex justify-center md:justify-end w-full md:w-1/2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Image
            src="/doctor.png"
            alt="Lääkäri"
            width={480}
            height={480}
            className="w-64 sm:w-80 md:w-[420px] lg:w-[460px] h-auto rounded-2xl shadow-lg border border-gray-200"
            priority
          />
        </motion.div>

        {/* Info Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center"
          whileHover={{ scale: 1.03 }}
        >
          <h2 className="text-base font-semibold text-white bg-[#0D3B66] rounded-md inline-flex items-center gap-2 px-4 py-2 mb-4">
            💙 Tietoa PrimeCaresta
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-3 mb-6 text-sm sm:text-base">
            <p>PrimeCare on aina tukenasi – nopea ja luotettava palvelu reseptin uusimiseen sekä etälääkärin vastaanottoon.</p>
            <p>Tunnistaudu turvallisesti ja hoida terveysasiasi helposti muutamassa minuutissa – missä ja milloin vain.</p>
            <p className="font-semibold text-[#0D3B66]">
              Luotettava suomalainen palvelu, joka pitää huolta hyvinvoinnistasi.
            </p>
          </div>

          <div className="inline-block bg-green-50 text-green-700 border border-green-200 rounded-lg px-3 py-1 text-sm font-semibold mb-6">
            🎁 −10% ensimmäisestä tilauksesta, kun rekisteröidyt
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/about"
              className="bg-white text-[#0D3B66] border border-[#0D3B66] hover:bg-[#0D3B66] hover:text-white rounded-lg px-5 py-2 font-semibold transition"
            >
              Lue lisää
            </a>
            <button
              onClick={() =>
                (window.location.href =
                  "/checkout?service=Reseptin%20uusiminen&price=12")
              }
              className="bg-[#E63946] hover:bg-[#d5303e] text-white font-semibold px-5 py-2 rounded-lg shadow"
            >
              Uusi resepti nyt
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="mt-20 w-full bg-[#FFFFFF] py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Reseptin uusiminen */}
          <motion.div
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-bold text-white bg-[#0D3B66] rounded-md inline-block px-4 py-2 mb-4">
              💊 Uusi resepti nyt
            </h2>
            <p className="text-4xl font-bold text-[#E63946] mb-1">12 €</p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Arkipäivän loppuun asti</li>
              <li>✔ Julkisen tai yksityisen lääkärin resepti</li>
            </ul>
            <button className="bg-[#E63946] hover:bg-[#d5303e] text-white font-semibold py-2 px-5 rounded-lg shadow">
              VALITSE
            </button>
          </motion.div>

          {/* Lääkärin etävastaanotto */}
          <motion.div
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-bold text-white bg-[#0D3B66] rounded-md inline-block px-4 py-2 mb-4">
              🩺 Lääkärin etävastaanotto
            </h2>
            <p className="text-4xl font-bold text-[#E63946] mb-1">43 €</p>
            <p className="text-sm text-[#E63946] mb-4">
              (68 euroa ilman Kela-korvausta)
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Sairauslomatodistus</li>
              <li>✔ Uusi lääkemääräyspyyntö</li>
              <li>✔ Hoidon määrittäminen</li>
            </ul>
            <button className="bg-[#E63946] hover:bg-[#d5303e] text-white font-semibold py-2 px-5 rounded-lg shadow">
              VALITSE
            </button>
          </motion.div>

          {/* Tärkeää tietoa */}
          <motion.div
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-bold text-white bg-[#E63946] rounded-md inline-block px-4 py-2 mb-4">
              ℹ️ Tärkeää tietoa
            </h2>
            <p className="text-gray-700 leading-relaxed">
              PrimeCare ei uusi antibioottien, huumausaineiden, unilääkkeiden,
              rauhoittavien tai vahvojen kipulääkkeiden reseptejä. Näiden pyyntöjä ei käsitellä eikä maksua palauteta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="mt-24 w-full bg-[#0D3B66] py-20 text-center text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Aloita reseptin uusiminen jo tänään
          </h2>
          <p className="text-lg mb-8 text-gray-100">
            Nopeasti, turvallisesti ja helposti — PrimeCare auttaa sinua uusimaan reseptisi missä ja milloin vain.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              (window.location.href =
                "/checkout?service=Reseptin uusiminen&price=12")
            }
            className="bg-white text-[#0D3B66] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition"
          >
            💊 UUSI RESEPTI NYT
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
