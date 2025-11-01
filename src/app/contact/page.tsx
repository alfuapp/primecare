export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F9FBFD] text-gray-800 pt-24 px-6 flex flex-col md:flex-row md:items-start md:justify-center md:gap-16">

      {/* Qaybta content (bidix) */}
      <div className="flex-1 max-w-2xl md:text-left text-center">
        <h1 className="text-3xl font-bold text-[#0D3B66] mb-4">Ota yhteyttä</h1>
        <p className="text-gray-700 leading-relaxed mb-6">
          Olemme täällä auttamassa sinua. Ota rohkeasti yhteyttä, jos sinulla on kysyttävää palveluistamme,
          reseptin uusimisesta tai lääkärin etävastaanotosta.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Voit ottaa meihin yhteyttä sähköpostitse, WhatsAppin kautta tai käyttämällä verkkolomakettamme.
          Pyrimme vastaamaan kaikkiin viesteihin mahdollisimman nopeasti.
        </p>

        {/* Macluumaadka xiriirka tooska ah */}
        <div className="mt-8 text-gray-700 text-sm space-y-2">
          <p><strong>📍 Osoite:</strong> Helsinki, Suomi</p>
          <p><strong>📧 Sähköposti:</strong> <a href="mailto:info@primecare.fi" className="text-[#0D3B66] hover:underline">info@primecare.fi</a></p>
          <p><strong>💬 WhatsApp:</strong> <a href="tel:+358401234567" className="text-[#0D3B66] hover:underline">+358 40 123 4567</a></p>
        </div>
      </div>

      {/* Qaybta dhinaca (3 cards) */}
      <aside className="w-full md:w-80 space-y-8">

        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
            💙 Asiakaspalvelu
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Tiimimme on valmiina auttamaan sinua joka päivä.
            Vastaamme yleensä muutamassa tunnissa.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
            ⚡ Nopea palaute
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Arvostamme palautettasi – se auttaa meitä kehittämään palveluamme.
            Kerro meille, miten voimme parantaa PrimeCarea.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
          <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
            🔒 Turvallinen yhteys
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Kaikki yhteydenotot käsitellään luottamuksellisesti ja suojatusti
            EU:n tietosuojalainsäädännön mukaisesti.
          </p>
        </div>

      </aside>
    </main>
  );
}
