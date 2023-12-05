import React from "react";
import Header from "../components/Header";
import FormHandler from "../components/BMI_Calculator/FormHandler";
import ButtonForm from "../components/BMI_Calculator/ButtonForm";

const CalculatorBMI = () => {
  return (
    <>
      <Header />
      <FormHandler />
      <ButtonForm />
    </>
  );
};

export default CalculatorBMI;
