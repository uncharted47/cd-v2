import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactMapSection = () => (
  <section className="py-16 bg-gradient-to-br from-main/10 via-white to-main/5">
    <div className="container mx-auto px-5">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight drop-shadow-lg">
          <span className="inline-block bg-main/10 px-4 py-2 rounded-lg border border-main/20 shadow">
            Plan de situation
          </span>
        </h2>
        <div className="text-center text-gray-600 text-lg max-w-xl">
          Découvrez l&apos;emplacement exact de{" "}
          <span className="text-main-black font-semibold">Clé Blanche</span> à Rabat.
        </div>
      </div>

      {/* Two-column layout for desktop, stacked for mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Situation Plan - Enlarged */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-main mb-4 text-center">Plan de situation</h3>
          <Link
            href={"https://maps.app.goo.gl/GhEThjNwgyUoGhpw8"}
            target="_blank"
            className="block w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-main/20 bg-white hover:shadow-3xl transition-shadow duration-300"
          >
            <Image
              src="/contact/IMAGE PLAN CLE BLANCHE.png"
              alt="Plan Clé Blanche"
              width={1000}
              height={450}
              className="object-cover w-full transition-transform duration-300 hover:scale-105"
              style={{ height: '450px' }}
              priority
            />
          </Link>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-main mb-4 text-center">Carte interactive</h3>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-main/20 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6612.5!2d-6.8416812!3d33.9526197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda713372495f19d%3A0xd075b9047f518df9!2eCl%C3%A9%20Blanche%20Souissi!5e0!3m2!1sfr!2sma!4v1640000000000!5m2!1sfr!2sma&markers=color:red%7Clabel:C%7C33.9526197,-6.8416812"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Clé Blanche"
              className="w-full h-[450px]"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMapSection;
