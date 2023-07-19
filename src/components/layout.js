import React from "react";

export default function Layout({ children }) {
  return (
    <header className="bg-white flex-col">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1"></div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/#"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            ¿Qué es el IMC?
          </a>
          <a
            href="calculator"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            ¡Calculemos tu IMC!
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        </div>
      </nav>
      {children}
    </header>
  );
}
