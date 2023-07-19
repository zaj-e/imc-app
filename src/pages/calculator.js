import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import Layout from "../components/layout";
import StepperControl from "../components/StepperControl";
import { calculateBmi, generateResultAndRecommendation } from "../domain/bmi";
import PopUp from "../components/popup";

export default function CalculatorPage() {
  const [height, setHeight] = React.useState(100);
  const [weight, setWeight] = React.useState(50);

  let [isModalOpen, setIsModalOpen] = useState(false);
  let [modalTitle, setModalTitle] = useState("");
  let [modalBody, setModalBody] = useState("");
  
  const closeModal = () => setIsModalOpen(false);
  const openModal = (title, body) => {
    setModalTitle(title);
    setModalBody(body);
    setIsModalOpen(true);
  }

  function handleCalculateBmi() {
    let bmi = calculateBmi(height, weight)
    let output = generateResultAndRecommendation(bmi)
    let result = output['result']
    let recommendation = output['recommendation'] + ` (ICM: ${bmi})`
    openModal(result, recommendation);
  }

  return (
    <Layout>
      <div className="mx-auto flex flex-col max-w-fit items-center justify-between">
        <StepperControl
          min={0}
          max={200}
          title={"Peso (Kilogramos)"}
          value={weight}
          setValue={setWeight}
        />
        <StepperControl
          min={100}
          max={220}
          title={"Altura (Centimetros)"}
          value={height}
          setValue={setHeight}
        />
        <button
          onClick={handleCalculateBmi}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Calcular
        </button>
      </div>
      <PopUp
        title={modalTitle}
        body={modalBody}
        closeText={"¡Entendido, gracias!"}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      ></PopUp>
    </Layout>
  );
}
