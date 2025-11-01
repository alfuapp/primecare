export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F9FBFD] text-gray-800 pt-24 px-6 flex flex-col md:flex-row md:items-start md:justify-center md:gap-16">

      {/* Qaybta content (bidix) */}
      <div className="flex-1 max-w-2xl md:text-left text-center">
        <h1 className="text-3xl font-bold text-[#0D3B66] mb-4">Palvelut</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Tarjoamme nopeaa ja luotettavaa reseptin uusimista sekä lääkärin etävastaanottoja.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Palvelumme avulla voit hoitaa reseptiasiasi helposti verkossa missä ja milloin vain.
        </p>
      </div>

      {/* Qaybta dhinaca (3 cards) */}
      <aside className="w-full md:w-80 space-y-8">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
            💊 Reseptin uusiminen
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Uusi reseptisi helposti verkossa – turvallisesti ja nopeasti. 
            Lääkärin hyväksymä palvelu ilman turhia viiveitä.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
            👩‍⚕️ Lääkärin etävastaanotto
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Saat yhteyden lääkäriin nopeasti – ilman jonotusta tai ajanvarausta.
            Etävastaanotto sopii kiireiseen arkeen.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
            📋 Kela-korvaus
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Jos olet oikeutettu Kela-korvaukseen, se käsitellään automaattisesti.
            Maksat vain oman osuutesi palvelusta.
          </p>
        </div>

      </aside>
    </main>
  );
}
