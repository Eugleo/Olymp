import React from 'react';

import logo from '../assets/logo.svg';
import olymp from '../assets/olymp.svg';
import Title from '../Section/Title';
import { Spacer } from '../Section/Section';
import Paragraph from '../Section/Paragraph';
import Image from '../Section/Image';

import overview from '../assets/overview.svg';

function Statusbar() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-start items-center h-12">
        <div className="h-full">
          <img className="h-full" src={logo} alt="Logo Olympu" />
        </div>
        <span className="flex-grow" />
        <a
          style={{ color: '#3E7700' }}
          className="text-lg mr-4 md:mr-10 tracking-wider"
          href="https://evzen.dev"
        >
          Autor
        </a>
        <button
          style={{ color: '#3E7700' }}
          className="text-lg tracking-wider"
          onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
        >
          Kontakt
        </button>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div
      style={{
        backgroundImage: `url('${olymp}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionX: '75%',
      }}
    >
      <div className="flex flex-col px-8 md:px-16 p-8">
        <div className="min-h-screen flex flex-col">
          <Statusbar />

          <div className="max-w-lg xl:flex-grow xl:flex xl:flex-col xl:justify-center">
            <h1
              className="text-5xl mt-32 xl:mt-0 mb-4 font-extrabold tracking-wide"
              style={{ color: '#214200' }}
            >
              Soutěže, přehledně
            </h1>
            <h2 className="text-xl mb-8" style={{ color: '#305C00' }}>
              Olymp je interaktivní katalog středoškolských soutěží, který je určený pro studenty i
              pedagogy. Studentům usnadňuje objevování nových soutěží a učitelům pomáhá s jejich
              plánováním a organizací.
            </h2>
            <a
              className="text-white text-lg bg-green-800 text-center tracking-wider font-medium shadow-lg py-4 px-6 w-full rounded-md hover:shadow-xs transition-all ease-in duration-100 mb-8 sm:max-w-xs"
              href="https://forms.gle/HiFDrQJf5ECzjbBVA"
              onClick={() => window.plausible('Form')}
            >
              Vyplnit dotazník (5 minut)
            </a>
          </div>
        </div>

        <div className="pb-16">
          <div className="flex flex-col lg:flex-row justify-around items-center max-w-6xl mx-auto">
            <Image source={overview} alt="Elegantní seznam soutěží v Olympu" />
            <Spacer />
            <div>
              <Title text="Nástěnky + mail + Google = Olymp" />
              <Paragraph>
                Olymp je především přehledný a strukturovaný katalog středoškolských soutěží.
                Vyhledávat v něm lze například dle věkových kategorií, podle úrovně programu
                Excelence, nebo podle předmětu, kterého se soutěže týkají.
              </Paragraph>
              <Paragraph>
                Olymp vám pomůže také s plánováním soutěží. Pomocí dostupných informací pomůže
                například s výběrem termínů, které vyhovují všem účastníkům.
              </Paragraph>
              <Paragraph>
                U každé soutěže najdete kontakty na organizátory, často kladené dotazy a recenze
                účastníků, mimo jiné.
              </Paragraph>
              <Paragraph>
                Chceme, aby se Olymp stal jediným zdrojem informací o soutěžích, který budete muset
                navštěvovat — rychlejší a spolehlivější alternativou k desítkám mailů od
                organizátorů, zdlouhavému googlování a neustálému kontrolování nástěnek.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
