import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const questions = [
    {
      question: "Quels types de logements sont proposés ?",
      answer:
        "Le projet propose des appartements de luxe, des villas contemporaines ainsi que des duplex avec jardin ou terrasse.",
    },
    {
      question: "Quels sont les équipements disponibles ?",
      answer:
        "La Clé Blanche Souissi offre des équipements modernes : sécurité 24h/24, parking souterrain, espaces verts, salle de sport, et aire de jeux pour enfants.",
    },
    {
      question: "Est-ce que le projet est sécurisé ?",
      answer:
        "Oui, le complexe est entièrement sécurisé avec un système de surveillance et des agents de sécurité présents en permanence.",
    },
    {
      question: "Quel est le standing de finition des logements ?",
      answer:
        "Les logements sont livrés avec des finitions haut de gamme : marbre, parquet, cuisine équipée, climatisation centralisée et domotique dans certaines unités.",
    },
    {
      question: "Comment peut-on visiter un appartement témoin ?",
      answer:
        "Vous pouvez prendre rendez-vous avec le service commercial via leur site web ou par téléphone pour visiter un appartement témoin.",
    },
    {
      question: "Est-il possible de financer l'achat via une banque ?",
      answer:
        "Oui, des partenariats avec plusieurs banques marocaines sont disponibles pour vous accompagner dans le financement de votre logement.",
    },
  ];

  return (
    <div className="container mx-auto my-12 md:my-24 px-5">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col gap-3 mb-8 lg:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-main-black mt-12">
            Questions fréquemment posées
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            VOUS AVEZ UNE QUESTION? NOUS SOMMES LÀ POUR VOUS AIDER
          </p>
        </div>
        <div className="lg:col-span-2">
          <Accordion type="single" collapsible>
            {questions.map((question) => (
              <AccordionItem 
                key={question.question} 
                value={question.question}
                className="border-b border-gray-200 py-4"
              >
                <AccordionTrigger className="text-sm md:text-xl text-left hover:no-underline py-2">
                  <span className="hover:underline">{question.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-base pt-2 text-gray-700">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;