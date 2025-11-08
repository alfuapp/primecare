"use client";

export default function Footer() {
  return (
  <footer className="bg-white border-t border-gray-200 text-gray-700 mt10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">

        {/* PrimeCare description */}
        <div>
          <h3 className="text-xl font-bold text-[#0D3B66] mb-2">PrimeCare</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Terveys on etusijalla – sinun hyvinvointisi on meille tärkeää.
          </p>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xl font-bold text-[#0D3B66] mb-2">Yhteystiedot</h3>
          <p className="text-sm text-gray-600">
            WhatsApp: <a href="tel:+358401234567" className="hover:text-[#0077b6]">+358 40 123 4567</a>
          </p>
          <p className="text-sm text-gray-600">
            Sähköposti:{" "}
            <a href="mailto:info@primecare.fi" className="hover:text-[#0077b6]">
              info@primecare.fi
            </a>
          </p>
          <p className="text-sm text-gray-600">Helsinki, Suomi</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold text-[#0D3B66] mb-2">Linkit</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>
              <a href="#privacy" className="hover:text-[#0077b6]">Tietosuoja</a>
            </li>
            <li>
              <a href="#terms" className="hover:text-[#0077b6]">Käyttöehdot</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} PrimeCare. Kaikki oikeudet pidätetään.
      </div>
    </footer>
  );
}
