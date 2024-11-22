import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-zinc-800 w-full hidden lg:flex flex-col max-w-[1200px] mx-auto mt-8 text-white px-4 py-6">
      <div className="flex gap-8 mb-6">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">A propos de La Centrale</h1>
          <a href="#" className="text-sm">
            Qui sommes-nous ?
          </a>
          <a href="#" className="text-sm">
            Nos offres d&apos;emploi
          </a>
          <a href="#" className="text-sm">
            Devenir annonceur pub
          </a>
          <a href="#" className="text-sm">
            Devenir partenaire pro
          </a>
          <a href="#" className="text-sm">
            Espace presse
          </a>
          <a href="#" className="text-sm">
            Nos services
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">FAQ</h1>
          <a href="#" className="text-sm">
            Contacter un vendeur
          </a>
          <a href="#" className="text-sm">
            Déposer et gérer mes annonces
          </a>
          <a href="#" className="text-sm">
            Gérer mon compte
          </a>
          <a href="#" className="text-sm">
            Livraison d&apos;un véhicule à domicile
          </a>
          <a href="#" className="text-sm">
            Rechercher et consulter les annonces
          </a>
          <a href="#" className="text-sm">
            Contacter le Service Client
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">Informations légales</h1>
          <a href="#" className="text-sm">
            Charte cookies
          </a>
          <a href="#" className="text-sm">
            Charte rédactionnelle
          </a>
          <a href="#" className="text-sm">
            Commentaire du vendeur
          </a>
          <a href="#" className="text-sm">
            Informations sur le classement
          </a>
          <a href="#" className="text-sm">
            Mentions légales
          </a>
          <a href="#" className="text-sm">
            Politique de confidentialité
          </a>
          <a href="#" className="text-sm">
            Conditions générales
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">Sites du groupe</h1>
          <a href="#" className="text-sm">
            Caradisiac
          </a>
          <a href="#" className="text-sm">
            Caradisiac Forum Auto
          </a>
          <a href="#" className="text-sm">
            Promoneuve
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">
            Télécharger l&apos;application
          </h1>
          <a href="#" className="w-fit">
            <Image
              src="/logos/playstore.png"
              alt="logo Play Store"
              width={130}
              height={130}
            />
          </a>
          <a href="#" className="w-fit mb-4">
            <Image
              src="/logos/appstore.svg"
              alt="logo App Store"
              width={130}
              height={130}
            />
          </a>
          <Image
            src="/logos/trustpilot.svg"
            alt="logo trustpilot"
            width={100}
            height={100}
          />
          <a href="#" className="text-sm">
            Voir nos <span className="font-semibold ">13 604</span> avis sur{" "}
            <Image
              src="/logos/trustpilot.svg"
              alt="logo trustpilot"
              width={80}
              height={80}
            />
          </a>
        </div>
      </div>
      <Button
        className="w-fit mx-auto bg-white text-black font-bold text-lg px-4 relative group overflow-hidden"
        size="lg"
        variant="myvariant2"
      >
        <span className="relative z-10">Accès client pro</span>
        <span className="absolute inset-0 bg-gray-200 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
      </Button>
      <div className="w-full border-t border-gray-400 mt-6 flex flex-col justify-center items-center gap-4 p-6 pb-2">
        <div className="relative w-full flex items-center justify-center">
          <a href="" className="underline font-semibold text-sm">
            Plan du site
          </a>
          <div className="absolute top-0 right-0 flex gap-12">
            <Image
              src="/logos/facebook.svg"
              alt="logo facebook"
              width={22}
              height={22}
            />
            <Image
              src="/logos/linkedin.svg"
              alt="logo linkedin"
              width={22}
              height={22}
            />
            <Image
              src="/logos/youtube.svg"
              alt="logo youtube"
              width={22}
              height={22}
            />
          </div>
        </div>
        <span className="text-sm">
          Au quotidien, prenez les transports en commun #SeDéplacerMoinsPolluer
        </span>
        <span className="text-xs">
          Copyright ® Groupe La Centrale - Tous droits réservés
        </span>
        <span className="text-xs">Réalisé par KD Web Design</span>
      </div>
    </footer>
  );
}
