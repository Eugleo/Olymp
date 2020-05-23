import React from 'react';

import logo from '../assets/logo.svg';
import olymp from '../assets/olymp.svg';
import Section from '../Section/Section';
import Title from '../Section/Title';
import Paragraph from '../Section/Paragraph';
import Image from '../Section/Image';

import overview from '../assets/overview.svg';

function Statusbar() {
  return (
    <div className="w-full py-5 px-4 md:px-16 xl:px-32">
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
      className="pb-16"
    >
      <Statusbar />

      <div className="flex flex-col h-screen mt-10 xl:mt-32 px-8 md:px-16 xl:px-32 p-8">
        <div className="max-w-lg">
          <h1 className="text-5xl mb-4 font-extrabold tracking-wide" style={{ color: '#214200' }}>
            Soutěže, přehledně
          </h1>
          <h2 className="text-xl mb-8" style={{ color: '#305C00' }}>
            Olymp je koncept stránky, která má za cíl přivést více studentů středních škol k
            soutěžím. Studentům pomáhá soutěže objevovat, učitelům organizovat.
          </h2>
          <button
            className="text-white text-lg bg-green-800 tracking-wider font-medium shadow-lg py-4 px-6 w-full rounded-md hover:shadow-xs transition-all ease-in duration-100 sm:max-w-xs"
            onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
          >
            Chci být u toho!
          </button>
        </div>
      </div>

      <Section bgColor="bg-transparent" bgSrc="" bgPosition={{ x: '100%', y: '100%' }}>
        <Image source={overview} alt="Elegantní seznam soutěží v Olympu" />
        <div className="mx-12" />
        <div>
          <Title text="Nástěnky + mail + Google = Olymp" />
          <Paragraph>
            Dejte sbohem složitému prohledávání dokumentů z MŠMT, každodennímu prohlížení školních
            nástěnek a desítkám reklamních mailů od organizátorů!
          </Paragraph>
          <Paragraph>
            V Olympu jsou soutěže obarvené podle předmětu, kterého se nejvíce týkají. Soutěže lze
            samozřejmě třídit nejen podle předmětu, ale například také podle hodnocení účastníků,
            věkové kategorie, nebo bodů excelence.
          </Paragraph>
          <Paragraph>
            To spolu s dalšími funkcemi Olympu ulehčuje studentům i učitelům objevování nových
            soutěží.
          </Paragraph>
        </div>
      </Section>
    </div>
  );
}
