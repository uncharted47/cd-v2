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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      {/* Fix: Responsive container with proper constraints */}
      <div className="container mx-auto px-4 sm:px-5 lg:px-8 max-w-7xl">
        {/* Fix: Responsive grid with better mobile handling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
        
          {/* Contact Items - Fix: Better mobile responsiveness */}
          <div className="space-y-6 sm:space-y-8 w-full max-w-full">
            <div className="space-y-4 sm:space-y-6">
              {contactItems.map((item, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 w-full max-w-full"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Fix: Responsive icon container */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-main/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-main/20 transition-colors duration-300">
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-main-black" />
                    </div>
                    
                    {/* Fix: Content with proper text wrapping */}
                    <div className="flex-1 min-w-0 max-w-full">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900 text-sm sm:text-base">{item.label}</span>
                      </div>
                      <a 
                        href={item.link}
                        className="text-base sm:text-lg text-main-black hover:text-main-black/80 transition-colors duration-300 font-medium block mb-1 break-words max-w-full"
                        style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                      >
                        {item.value}
                      </a>
                    </div>
                    
                    {/* Fix: Responsive external link icon */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-main-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
          {/* Form Section - Fix: Better mobile responsiveness */}
          <div className="lg:sticky lg:top-8 w-full max-w-full">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
