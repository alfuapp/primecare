"use client";

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-[#0D3B66]">PrimeCare</h3>
          <p className="text-sm text-gray-600">
            Terveys on etusijalla – sinun hyvinvointisi on meille tärkeää.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-[#0D3B66]">Yhteystiedot</h4>
          <p className="text-sm text-gray-700">WhatsApp: +358 40 123 4567</p>
          <p className="text-sm text-gray-700">Sähköposti: info@primecare.fi</p>
          <p className="text-sm text-gray-700">Helsinki, Suomi</p>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold text-[#0D3B66]">Linkit</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>
              <a className="hover:underline" href="#">
                Tietosuoja
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Käyttöehdot
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PrimeCare. Kaikki oikeudet pidätetään.
      </div>
    </footer>
  );
}
