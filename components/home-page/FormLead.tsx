"use client";
import React from "react";
import InputWithLabel from "../ui/InputWIthLabel";

const FormLead = () => {
  return (
    <div className="border border-main bg-main rounded-md flex flex-col gap-5 p-12 mx-2 lg:mx-12">
      <h2 className="text-center text-4xl font-semibold my-12">
        Contactez notre <br /> bureau de vente !
      </h2>
      <InputWithLabel
        label="Votre Nom"
        onChange={(e) => console.log(e)}
        name="name"
      />
      <InputWithLabel
        label="Votre Email"
        onChange={(e) => console.log(e)}
        name="name"
      />
      <InputWithLabel
        label="Votre Téléphone"
        onChange={(e) => console.log(e)}
        name="name"
      />
      <button className="flex justify-center items-center  gap-2 px-6 py-2 rounded-md bg-second border-main border text-white">
        Prendre RDV
      </button>
    </div>
  );
};

export default FormLead;
