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
    <div className="w-full py-5 px-10">
      <div className="flex flex-row justify-start items-center h-12">
        <div className="h-full">
          <img className="h-full" src={logo} />
        </div>
        <span className="flex-grow" />
        <a
          style={{ color: '#3E7700' }}
          className="text-lg mr-10 tracking-wider"
          href="https://evzen.dev"
        >
          Autor
        </a>
        <button
          style={{ color: '#3E7700' }}
          className="text-lg mr-10 tracking-wider"
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
        WebkitTransform: 'translate3d(0,0,0)',
      }}
      className="pb-32"
    >
      <Statusbar />

      <div className="flex flex-col h-screen mt-32 p-32">
        <div className="w-1/2 mb-8">
          <h1 className="text-5xl mb-4 font-extrabold tracking-wide" style={{ color: '#214200' }}>
            Soutěže, přehledně
          </h1>
          <h2 className="text-xl" style={{ color: '#305C00' }}>
            Olymp je koncept stránky, která má za cíl přivést více studentů středních škol k
            soutěžím. Studentům pomáhá soutěže objevovat, učitelům organizovat.
          </h2>
        </div>
        <button
          style={{ backgroundColor: '#5F8427' }}
          className="text-white text-lg tracking-wider font-medium shadow-lg py-4 px-6 max-w-xs rounded-md hover:shadow-xs transition-all ease-in duration-100"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          Chci být u toho!
        </button>
      </div>

      <Section bgColor="bg-transparent" bgSrc={'mailer'} bgPosition={{ x: '100%', y: '100%' }}>
        <Image source={overview} />
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
