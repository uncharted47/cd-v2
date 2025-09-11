import React, { useState } from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 w-full max-w-md relative border border-main">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-main-black text-2xl font-bold"
          onClick={onClose}
          aria-label="Fermer le modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4 text-main-black text-center">Télécharger la brochure</h2>
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
            <input
              type="tel"
              name="telephone"
              placeholder="Votre téléphone"
              value={form.telephone}
              onChange={handleChange}
              required
              className="border border-main/30 rounded px-3 py-2 text-black placeholder:text-gray-400 focus:outline-main bg-white"
              autoComplete="off"
            />
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
