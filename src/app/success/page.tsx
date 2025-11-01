export default function SuccessPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F9FBFD] text-center text-gray-800 px-6">
      <h1 className="text-3xl font-bold text-[#0D3B66] mb-4">
        Kiitos, tunnistautuminen onnistui!
      </h1>
      <p className="text-gray-600 max-w-lg">
        Maksusi ja tunnistautumisesi on vastaanotettu. Lääkärimme käsittelee pyyntösi pian.
      </p>
      <div className="mt-8">
        <a
          href="/"
          className="bg-[#0D3B66] hover:bg-[#0b3560] text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Palaa etusivulle
        </a>
      </div>
    </main>
  );
}
