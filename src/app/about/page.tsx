export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F9FBFD] text-gray-800 pt-24 px-6 flex flex-col md:flex-row items-start justify-center gap-8">
      
      {/* Qaybta qoraalka (content) */}
      <div className="flex-1 max-w-2xl">
        <h1 className="text-3xl font-bold text-[#0D3B66] mb-4">Tietoa meistä</h1>
        <p className="text-gray-700 leading-relaxed mb-4">
          PrimeCare on suomalainen terveyspalvelu, joka tarjoaa reseptin uusimista ja lääkärin etävastaanottoja turvallisesti verkossa.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Palvelumme on suunniteltu helpottamaan arkeasi – lääkärin apu on aina lähellä, turvallisesti ja nopeasti.
        </p>
      </div>

      {/* Qaybta dhinaca (side section) */}
    <aside className="w-full md:w-80 space-y-8">

  {/* Card 1 */}
  <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
    <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
      💙 Miksi valita PrimeCare?
    </h3>
    <p className="text-gray-700 text-sm leading-relaxed">
      Turvallinen ja luotettava palvelu – lääkärin hyväksymä reseptin uusiminen helposti verkossa.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
    <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
      ⚡ Nopea palvelu
    </h3>
    <p className="text-gray-700 text-sm leading-relaxed">
      Saat reseptisi usein saman päivän aikana, ilman jonotusta tai ajanvarausta.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 text-center">
    <h3 className="text-lg font-semibold text-[#0D3B66] mb-2">
      🔒 Tietoturva etusijalla
    </h3>
    <p className="text-gray-700 text-sm leading-relaxed">
      Kaikki tiedot käsitellään suojatusti ja suomalaisen tietosuojalain mukaisesti.
    </p>
  </div>

</aside>


    </main>
  );
}
