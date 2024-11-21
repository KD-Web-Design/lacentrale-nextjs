import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import Image from "next/image";

export default function MobileFooter() {
  return (
    <footer className="bg-zinc-800 w-full flex flex-col mt-8 text-white px-4 py-6 lg:hidden">
      <div className="border-b pb-6 flex flex-col gap-4">
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="1" className="border-none">
            <AccordionTrigger className="font-semibold text-lg text-white [&>svg]:text-white">
              A propos de La Centrale
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Qui sommes-nous ?</a>
                </li>
                <li>
                  <a href="">Nos offres d&apos;emploi</a>
                </li>
                <li>
                  <a href="">Devenir annonceur pub</a>
                </li>
                <li>
                  <a href="">Devenir partenaire pro</a>
                </li>
                <li>
                  <a href="">Espace presse</a>
                </li>
                <li>
                  <a href="">Nos services</a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="2" className="border-none">
            <AccordionTrigger className="font-semibold text-lg text-white [&>svg]:text-white">
              FAQ
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Contacter un vendeur</a>
                </li>
                <li>
                  <a href="">Déposer et gérer mes annonces</a>
                </li>
                <li>
                  <a href="">Gérer mon compte</a>
                </li>
                <li>
                  <a href="">Livraison d&apos;un véhicule à domicile</a>
                </li>
                <li>
                  <a href="">Rechercher et consulter les annonces</a>
                </li>
                <li>
                  <a href="">Contacter le Service Client</a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="3" className="border-none">
            <AccordionTrigger className="font-semibold text-lg text-white [&>svg]:text-white">
              Informations légales
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Charte cookies</a>
                </li>
                <li>
                  <a href="">Charte rédactionnelle</a>
                </li>
                <li>
                  <a href="">Commentaire du vendeur</a>
                </li>
                <li>
                  <a href="">Informations sur le classement</a>
                </li>
                <li>
                  <a href="">Mentions légales</a>
                </li>
                <li>
                  <a href="">Politique de confidentialité</a>
                </li>
                <li>
                  <a href="">Conditions générales</a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="4" className="border-none">
            <AccordionTrigger className="font-semibold text-lg text-white [&>svg]:text-white">
              Sites du groupe
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href="">Caradisiac</a>
                </li>
                <li>
                  <a href="">Caradisiac Forum Auto</a>
                </li>
                <li>
                  <a href="">Promoneuve</a>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
          className="w-fit mx-auto bg-white text-black font-bold text-lg px-4 relative group overflow-hidden"
          size="lg"
          variant="myvariant2"
        >
          <span className="relative z-10">Accès client pro</span>
          <span className="absolute inset-0 bg-gray-200 scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left" />
        </Button>
      </div>
      <div className="border-b w-full py-6 flex flex-col gap-4">
        <h1 className="font-bold text-lg">Télécharger l&apos;application</h1>
        <div className="place-self-center flex gap-2">
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
        </div>
        <Image
          src="/logos/trustpilot.svg"
          alt="logo trustpilot"
          width={100}
          height={100}
        />
        <a href="#" className="text-sm inline-flex">
          Voir nos <span className="font-semibold mx-1 ">13 604</span> avis sur
          <Image
            src="/logos/trustpilot.svg"
            alt="logo trustpilot"
            width={80}
            height={80}
            className="ml-1"
          />
        </a>
        <div className="flex place-self-center gap-8">
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
      <div className="flex items-center flex-col gap-4 py-6">
        <a href="" className="underline font-semibold text-sm">
          Plan du site
        </a>
        <span className="text-sm text-center">
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
