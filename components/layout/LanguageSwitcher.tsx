"use client";

import { ChevronDown } from "lucide-react";
import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { useLocale } from "next-intl";
// import { usePathname, useRouter } from "@/i18n/navigation";

const countries = [
  {
    name: "Français",
    code: "fr",
    flagUrl: "https://flagcdn.com/fr.svg",
  },
  {
    name: "English",
    code: "en",
    flagUrl: "https://flagcdn.com/gb.svg",
  },
];

const LanguageSwitcher = () => {
  // const locale = useLocale();
  // const pathname = usePathname()
  // const router = useRouter()
  // const currentCountry = countries.find((country) => country.code === locale) || countries[0];

  // const switchLanguage = (countryCode: string) => {
  //   router.push(pathname, { locale: countryCode });
  // };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="text-sm flex items-center gap-2 p-2 rounded-md bg-transparent hover:bg-white/20 -700 transition-colors duration-200 group">
            <div
              className="h-5 w-5 bg-center bg-cover rounded-full"
              style={{ backgroundImage: `url(https://flagcdn.com/fr.svg)` }}
            ></div>
          <ChevronDown className="w-4 h-4 text-gray-400 transition-transform group-data-[state=open]:rotate-180" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="center"
        className="w-44 bg-gradient /80 -800 border border-main -200 -600 rounded-md shadow-2xl p-0"
      >
        <div className="space-y-1">
          {countries.map((country) => (
            <div
              key={country.code}
              // onClick={() => switchLanguage(country.code)}
              className="flex text-white items-center gap-3 px-5 py-2 rounded-lg transition-colors duration-200 hover:bg-main cursor-pointer"
            >
              <div
                className="h-5 w-5 bg-center bg-cover rounded-full"
                style={{ backgroundImage: `url(${country.flagUrl})` }}
              ></div>
              <p>
                {country.name}
              </p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSwitcher;