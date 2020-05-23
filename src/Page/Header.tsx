import React from 'react';
import c from 'classnames';

import logo from '../assets/logo.svg';
import olymp from '../assets/olymp.svg';
import Section from '../Section/Section';
import Title from '../Section/Title';
import Paragraph from '../Section/Paragraph';
import Image from '../Section/Image';

import overview from '../assets/overview.svg';

function StatusLink({ title, to, className }: { title: string; to: string; className?: string }) {
  return (
    <a
      style={{ color: '#3E7700' }}
      className={c(className, 'text-lg mr-10 tracking-wider')}
      href={to}
    >
      {title}
    </a>
  );
}

function Statusbar() {
  return (
    <div className="w-full py-5 px-10">
      <div className="flex flex-row justify-start items-center h-12">
        <div className="h-full">
          <img className="h-full" src={logo} />
        </div>
        <span className="flex-grow" />
        <StatusLink title="Autor" to="https://evzen.dev" className="mr-10" />
        <StatusLink title="Kontakt" to="https://evzen.dev" className="mr-10" />
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
      className="pb-32"
    >
      <Statusbar />

      <div className="flex flex-col h-screen mt-32 p-32">
        <div className="w-1/2">
          <h1 className="text-5xl mb-4 font-extrabold tracking-wide" style={{ color: '#214200' }}>
            Soutěže, přehledně
          </h1>
          <h2 className="text-xl" style={{ color: '#305C00' }}>
            Olymp je koncept stránky, která má za cíl přivést více studentů středních škol k
            soutěžím. Studentům pomáhá soutěže objevovat, učitelům organizovat.
          </h2>
        </div>
      </div>

      <Section bg="bg-transparent">
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
