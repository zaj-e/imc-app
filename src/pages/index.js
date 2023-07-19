import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Layout from "../components/layout";

export default function Example() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Índice de masa corporal
          </h1>
          <p className="mt-6 text-lg leading-7 text-gray-600">
            El Índice de Masa Corporal (IMC) es el peso de una persona en
            kilogramos (o libras) dividido por el cuadrado de su altura en
            metros (o pies). Un alto IMC puede indicar un nivel elevado de grasa
            corporal. El IMC evalúa las categorías de peso que podrían estar
            asociadas con problemas de salud, pero no diagnostica la composición
            corporal ni el estado de salud individual.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/calculator"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Calcular
            </a>
            <a
              href="https://www.cdc.gov/healthyweight/assessing/bmi/index.html"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Leer más <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}