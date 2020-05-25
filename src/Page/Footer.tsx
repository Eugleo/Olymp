import React from 'react';

import olymp from '../assets/olymp-footer.svg';

import { EmailFieldGreen } from './EmailForm';
import privacy from '../assets/privacy.txt';

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url('${olymp}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionX: '75%',
        marginTop: '-2em',
      }}
      className="py-48 md:pb-48 pb-56 min-h-screen-3/4"
    >
      <div className="flex flex-col px-8 md:px-16 xl:px-32 p-8">
        <div className="max-w-lg mb-6">
          <EmailFieldGreen
            title="Zaujal vás Olymp?"
            description="Olymp je zatím ve fázi plánování. Přihlašte se k odběru novinek o Olympu a my vám průběžně budeme dávat vědět, jak probíhá jeho vývoj."
          />
        </div>

        <div className="max-w-lg mb-6">
          <p className="text-lg mb-4 text-gray-800">
            Váš e-mail je u nás v bezpečí. S nikým ho nesdílíme a používáme jej výhradně ke
            komunikaci o Olympu. Pokud vás zajímají detaily, můžete si přečíst naše{' '}
            <a className="text-green-800" href={privacy}>
              zásady ochrany osobních údajů
            </a>
            .
          </p>
        </div>

        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-2">Máte nápad, jak Olymp zlepšit?</h2>
          <p className="text-lg mb-4 text-gray-800">
            Všechny své nápady, návrhy a připomínky posílejte prosím na adresu{' '}
            <a
              className="font-bold cursor-pointer hover:text-green-900"
              href="mailto:napady@getolymp.com"
            >
              napady@getolymp.com
            </a>
            . Díky!
          </p>
        </div>
      </div>
    </div>
  );
}
