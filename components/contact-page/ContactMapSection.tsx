import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactMapSection = () => (
  <section className="py-16 bg-gradient-to-br from-main/10 via-white to-main/5">
    <div className="container mx-auto px-5 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-main mb-6 tracking-tight drop-shadow-lg">
        <span className="inline-block bg-main/10 px-4 py-2 rounded-lg border border-main/20 shadow">
          Plan de situation
        </span>
      </h2>
      <Link
        href={"https://maps.app.goo.gl/Ga6zXXQZ3Z6ijxKr8"}
        target="_blank"
        className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border-4 border-main/20 bg-white"
      >
        <Image
          src="/contact/IMAGE PLAN CLE BLANCHE.png"
          alt="Plan Clé Blanche"
          width={800}
          height={600}
          className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
          priority
        />
      </Link>
      <div className="mt-6 text-center text-gray-600 text-lg max-w-xl">
        Découvrez l&apos;emplacement exact de{" "}
        <span className="text-main font-semibold">Clé Blanche</span> à Rabat.
      </div>
    </div>
  </section>
);

export default ContactMapSection;
