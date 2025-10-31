"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import doctorImage from "../../public/doctor.png";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F9FBFD] text-gray-800 px-4 overflow-hidden">
      
      {/* Hero Section */}
      <motion.div
        className="text-center max-w-2xl mt-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D3B66] mb-4">
          Reseptin uusiminen helposti ja turvallisesti verkossa
        </h1>
        <p className="text-gray-600 mb-6 text-lg">
          PrimeCare tarjoaa nopean ja edullisen tavan uusia reseptisi verkossa.  
          Tunnistaudu suomalaisilla pankkitunnuksilla ja saat reseptin nopeasti käyttöön.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#0D3B66] hover:bg-[#0c3560] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
        >
          💊 Uusi resepti nyt
        </motion.button>
      </motion.div>

      {/* Doctor Illustration */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Image
          src={doctorImage}
          alt="Lääkäri"
          width={480}
          height={480}
          className="rounded-2xl shadow-lg border border-gray-200"
          priority
        />
      </motion.div>

      {/* Services Section */}
      <section className="mt-20 w-full bg-[#FFFFFF] py-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          
          {/* Reseptin uusiminen */}
          <motion.div
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-2xl font-semibold text-[#0D3B66] mb-2">
              Reseptin uusiminen
            </h2>
            <p className="text-4xl font-bold text-[#E63946] mb-1">12 €</p>
            <p className="text-sm text-[#E63946] mb-4">
              (20 euroa ilman Kela-korvausta)
            </p>
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
            <h2 className="text-2xl font-semibold text-[#0D3B66] mb-2">
              Lääkärin etävastaanotto
            </h2>
            <p className="text-4xl font-bold text-[#E63946] mb-1">43 €</p>
            <p className="text-sm text-[#E63946] mb-4">
              (68 euroa ilman Kela-korvausta)
            </p>
            <ul className="text-gray-700 space-y-2 mb-6">
              <li>✔ Sairauslomatodistuksen pyyntö</li>
              <li>✔ Uusi lääkemääräyspyyntö</li>
              <li>✔ Hoidon määrittäminen</li>
            </ul>
            <button className="bg-[#E63946] hover:bg-[#d5303e] text-white font-semibold py-2 px-5 rounded-lg shadow">
              VALITSE
            </button>
          </motion.div>
        </div>
      </section>

      {/* Information Section */}
      <section className="mt-24 w-full bg-[#F0F4F8] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0D3B66] mb-8">
            Miksi valita PrimeCare?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-[#0D3B66] mb-2">
                Nopea ja helppo
              </h3>
              <p className="text-gray-700">
                Uusi reseptisi muutamassa tunnissa. Tunnistaudu ja täytä lomake – loput hoidamme me.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-[#0D3B66] mb-2">
                Turvallinen palvelu
              </h3>
              <p className="text-gray-700">
                Kaikki tiedot käsitellään suojatusti suomalaisen tietosuojalain mukaisesti.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-xl font-semibold text-[#0D3B66] mb-2">
                Lääkärin hyväksymä
              </h3>
              <p className="text-gray-700">
                Kaikki reseptit tarkistaa ja hyväksyy luvan saanut lääkäri ennen uusimista.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
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
            className="bg-white text-[#0D3B66] hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-md transition"
          >
            💊 UUSI RESEPTI NYT
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}
