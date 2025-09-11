import React from "react";

import { Phone, MapPin, Mail } from "lucide-react";
import FormContact from "@/components/ui/FormContact";

const ContactInfoSection = () => {
  const contactItems = [
    {
      icon: Phone,
      label: "Téléphone",
      value: "+212 5 22 10 70 10",
      link: "tel:+212522107010",
   
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: "Rue Sahel, Rabat 10220",
      link: "https://maps.google.com/?q=Rue+Sahel+Rabat+10220",
     
    },
    {
      icon: Mail,
      label: "E-mail",
      value: "contact@cleblanche.ma",
      link: "mailto:contact@cleblanche.ma",
      
    }
  ];


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
        
          <div className="space-y-8">
         
            <div className="space-y-4">
             
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900">
                Contactez-nous
              </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Notre équipe d&apos;experts est là pour répondre à toutes vos questions 
                    et vous accompagner dans votre projet immobilier.
                  </p>
            </div>
        
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-main/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-main/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-main-black" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">{item.label}</span>
                      </div>
                      <a 
                        href={item.link}
                        className="text-lg text-main-black hover:text-main-black/80 transition-colors duration-300 font-medium block mb-1"
                      >
                        {item.value}
                      </a>
                    
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-main-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
          <div className="lg:sticky lg:top-8">
            <FormContact />
          </div>
        </div>
      </div>
  </section>
  )}


export default ContactInfoSection;
