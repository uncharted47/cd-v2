// import { color } from "framer-motion";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Optionally, send form data to backend here
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-main"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-main text-2xl font-bold"
          onClick={onClose}
          aria-label="Fermer le modal"
        >
          ×
        </button>
        <style>
          {`
            .react-tel-input .country-list {
              background-color: rgba(255, 255, 255, 0.9) !important;
            }
            .react-tel-input .country-list .country {
              color: black !important;
            }
            .react-tel-input .country-list .country:hover {
              background-color: rgba(0, 0, 0, 0.1) !important;
            }
            .react-tel-input .country-list .country.highlight {
              background-color: rgba(0, 0, 0, 0.1) !important;
            }
            .react-tel-input .search {
              background-color: transparent !important;
              color: black !important;
            }
            .react-tel-input .search-box {
              background-color: transparent !important;
            }
          `}
        </style>
        <h2 className="text-2xl font-bold mb-4 text-main text-center">Télécharger la brochure</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-2">
              <input
                type="text"
                name="nom"
                placeholder="Votre nom"
                value={form.nom}
                onChange={handleChange}
                required
                className="border border-main/30 rounded px-3 py-2 w-1/2 text-black placeholder:text-gray-400 focus:outline-main bg-white"
                autoComplete="off"
              />
              <input
                type="text"
                name="prenom"
                placeholder="Votre prénom"
                value={form.prenom}
                onChange={handleChange}
                required
                className="border border-main/30 rounded px-3 py-2 w-1/2 text-black placeholder:text-gray-400 focus:outline-main bg-white"
                autoComplete="off"
              />
            </div>
            <div className="relative">
              <PhoneInput
                country={'ma'}
                preferredCountries={['ma', 'fr']}
                value={form.telephone}
                onChange={(phone) => setForm({ ...form, telephone: phone })}
                placeholder="Votre téléphone"
                autoFormat={false}
                inputProps={{
                  name: 'telephone',
                  required: true,
                  // placeholder: 'Votre téléphone', // This is moved to the component root
                  className: 'pl-14 h-10 w-full rounded border border-main/30 placeholder:text-gray-400 text-black bg-white focus:outline-main',
                }}
                buttonClass="!border-none !bg-transparent !outline-none !w-10 !h-8 !flex !items-center !justify-center !rounded"
                buttonStyle={{ position: 'absolute', top: '4px', left: '8px' }}
                containerClass="w-full"
                enableSearch={true}
                searchPlaceholder="Recherche"
                dropdownClass="bg-white/90"
                searchStyle={{ backgroundColor: 'transparent', color: 'black' }}
                disableDropdown={false}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={form.email}
              onChange={handleChange}
              required
              className="border border-main/30 rounded px-3 py-2 text-black placeholder:text-gray-400 focus:outline-main bg-white"
              autoComplete="off"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-main text-white rounded hover:bg-second transition font-semibold shadow"
            >
              Télécharger
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-main-black text-center">Merci ! Cliquez ci-dessous pour télécharger la brochure.</p>
            <a
              href="/brochure.pdf"
              download
              className="px-4 py-2 bg-main text-white rounded hover:bg-second transition font-semibold shadow"
            >
              Télécharger la brochure
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrochureModal;
