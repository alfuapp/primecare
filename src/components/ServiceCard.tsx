import React from "react";

interface ServiceCardProps {
  title: string;
  price: string;
  subtitle: string;
  features: string[];
  buttonText: string;
}

export default function ServiceCard({
  title,
  price,
  subtitle,
  features,
  buttonText,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 text-center max-w-xs hover:shadow-lg transition">
      <h2 className="text-[#004a7c] text-xl font-bold mb-2">{title}</h2>
      <p className="text-red-600 text-3xl font-extrabold mb-1">{price}</p>
      <p className="text-sm text-red-500 mb-4">{subtitle}</p>

      <ul className="text-gray-700 text-sm mb-5 space-y-1">
        {features.map((f, i) => (
          <li key={i}>✓ {f}</li>
        ))}
      </ul>

      <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition">
        {buttonText}
      </button>
    </div>
  );
}
