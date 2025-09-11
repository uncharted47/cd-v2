import React from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "Notre Projet", href: "/notre-projet" },
    { label: "Nos appartements", href: "/nos-appartements" },
    { label: "Galerie", href: "/galerie" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div className="bg-gradient pt-24">
        <div className="grid grid-cols-1 px-5 lg:grid-cols-5 gap-10 container mx-auto py-12 text-white border-b border-white/20">
          <div className="flex flex-col gap-10 col-span-2">
            <Image
              width={300}
              height={25}
              padding-top={50}
              src={"/logo-footer.png"}
              alt="Le Centre de médiation et d’arbitrage de Casablanca (CMAC) est une institution indépendante et neutre qui offre des services de résolution des conflits aux entreprises, aux associations et aux particuliers."
            />
            {/* <p className="text-sm">
              En plein coeur de Rabat, un profil de projet encore inédit au
              Maroc, une expérience incomparable de l’immobilier durable de
              prestige.
            </p> */}
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-second">Menu</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3.5 hover:text-white/80 transition-colors duration-300"
                  >
                    <span className="group-hover:text-second relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-second group-hover:after:w-full after:transition-all after:duration-300">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 col-span-2">
            <p className="text-second">Contact</p>
            <ul className="flex flex-col gap-3">
              <li className="grid grid-cols-9 gap-5 items-center">
                <div className="flex bg-white/20 p-1.5 h-8 w-8 rounded-full justify-center items-center">
                  <MapPin />
                </div>
                <p className="col-span-8">
                  {`Rue Sahel, Rabat 10220`}
                </p>
              </li>
              <li className="grid grid-cols-9 gap-5 items-center">
                <div className="flex bg-white/20 p-1.5 h-8 w-8 rounded-full justify-center items-center">
                  <Mail />
                </div>
                <p className="col-span-8">{`contact@cleblanche.ma`}</p>
              </li>
              <li className="grid grid-cols-9 gap-5 items-center">
                <div className="flex bg-white/20 p-1.5 h-8 w-8 rounded-full justify-center items-center">
                  <Phone />
                </div>
                <p className="col-span-8">{`+212 5 22 10 70 10`}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-5 justify-between container mx-auto py-5 text-white text-xs px-5">
          <p>© Clé Blanche Souissi. Tous droits réservés</p>
          <div className="flex lg:flex-row flex-col justify-between gap-5">
            <Link href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</Link>
            <Link href="/conditions-utilisation" className="hover:underline">{`Conditions d'utilisation`}</Link>
          </div>
        </div>
   
    </div>
  );
};

export default Footer;
