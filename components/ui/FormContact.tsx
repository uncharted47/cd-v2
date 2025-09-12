"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Ajustement du sélecteur d'indicatif pour react-phone-input-2
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `.react-tel-input .selected-flag {
    height: 80%;}`;
  document.head.appendChild(style);
}
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import axios from "axios";
import fontTitle from "@/lib/font";
const FormContact = () => {
  const [success, setSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Le nom est requis"),
      phone: Yup.string().required("Le téléphone est requis"),
      email: Yup.string()
        .email("L'e-mail est requis et doit être valide")
        .required("L'e-mail est requis et doit être valide"),
      message: Yup.string().required("Le message est requis"),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSuccess(true);
      resetForm();

      try {
        await axios.post("/leads", { ...values });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="pb-12" id="form-contact">
      <div className="container mx-auto lg:w-3/4 items-center p-4 lg:px-5">
        {success ? (
          <div className="text-black  backdrop-blur-3xl p-5 py-12 rounded-2xl border border-main flex flex-col gap-5  items-center text-lg text-center mt-2">
            <Image
              src={"/icons/coche.png"}
              alt="Coche"
              width={50}
              height={50}
            />
            Merci ! Votre message a bien été envoyé. Nous vous répondrons dans
            les plus brefs délais.
          </div>
        ) : (
          <form
            onSubmit={formik.handleSubmit}
            className="backdrop-blur-3xl p-5 py-12 rounded-2xl border border-second flex flex-col gap-5 text-black"
          >
            <h2 className={`text-3xl md:text-5xl font-bold text-main text-center ${fontTitle.className}`}>
              Nous contacter
            </h2>
            <div className="flex flex-col gap-2.5">
              <Label htmlFor="name" className="text-black">
                Nom et prénom
              </Label>
              <Input
                id="name"
                name="name"
                placeholder={"Nom"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="placeholder:text-second border-second h-12 rounded-2xl"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500">{formik.errors.name}</div>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <Label htmlFor="phone" className="text-black">
                Téléphone
              </Label>
              <div className="relative w-full">
                <PhoneInput
                  country={'ma'}
                  preferredCountries={['ma', 'fr']}
                  value={formik.values.phone || ''}
                  onChange={phone => formik.setFieldValue('phone', phone)}
                  inputProps={{
                    name: 'phone',
                    id: 'phone',
                    required: true,
                    autoFocus: false,
                    placeholder: 'Téléphone',
                    className: 'pl-14 h-12 w-full rounded-2xl border border-second placeholder:text-second text-black bg-white focus:outline-none',
                  }}
                  buttonClass="!border-none !bg-transparent !outline-none !left-3 !top-2"
                  containerClass="w-full"
                  enableSearch={true}
                  searchPlaceholder="Recherche"
                  disableDropdown={false}
                  masks={{ma: '..-..-..-..-..', fr: '..-..-..-..-..'}}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500">{formik.errors.phone}</div>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <Label htmlFor="email" className="text-black">E-mail</Label>
              <Input
                id="email"
                name="email"
                placeholder={"E-mail"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="placeholder:text-second border-second h-12 rounded-2xl"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500">{formik.errors.email}</div>
              )}
            </div>

            <div className="flex flex-col gap-2.5">
              <Label htmlFor="message" className="text-black">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={10}
                placeholder={"Message"}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="placeholder:text-second border-second rounded-2xl"
              />
              {formik.touched.message && formik.errors.message && (
                <div className="text-red-500">{formik.errors.message}</div>
              )}
            </div>

            <Button
              type="submit"
              className="bg-second border border-second /40 rounded-2xl h-12 hover:bg-transparent hover:text-second"
            >
              Envoyer
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormContact;
