import React from 'react';
import c from 'classnames';

import olymp from '../assets/olymp-footer.svg';

import { EmailFieldGreen } from './EmailForm';

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
      className="py-48 px-32 min-h-screen-3/4 flex flex-col content-center"
    >
      <div className="max-w-lg mb-12">
        <EmailFieldGreen
          title="Zaujal vás Olymp?"
          description="Přihlašte se k odběru novinek o Olympu a my vám průběžně budeme dávat vědět, jak probíhá jeho vývoj."
        />
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
  );
}
