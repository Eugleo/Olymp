import React from 'react';
import { Formik, Form, Field } from 'formik';

import emailjs from 'emailjs-com';

function submitEmail(values: { email: string }) {
  emailjs.send('gmail', 'template_Z2J36vTg', values, 'user_jxxm36Q8serIbYwo7Qc6S').then(
    () => {
      alert('Podařilo se! Děkujeme!');
    },
    () => {
      alert('Vyskytla se nějaká chyba. Zkusíte to znovu, prosím?');
    },
  );
}

export function EmailFieldYellow({ title, description }: { title: string; description: string }) {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={submitEmail}>
      <Form className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4 text-gray-800">{description}</p>
        <div className="flex flex-row">
          <Field
            aria-label="Email"
            required
            className="flex-grow rounded-l-md px-4 py-2 text-lg text-black bg-gold-dark placeholder-gold-darkest"
            type="email"
            name="email"
            placeholder="jan.novak@seznam.cz"
          />
          <button type="submit" className="bg-yellow-800 px-4 py-2 rounded-r-md text-white">
            Potvrdit
          </button>
        </div>
        <p className="text-xs uppercase text-gold-darkest mt-2 tracking-wider">
          Vaši adresu s nikým nesdílíme. Posíláme cca 1 mail měsíčně.
        </p>
      </Form>
    </Formik>
  );
}

export function EmailFieldGreen({ title, description }: { title: string; description: string }) {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={submitEmail}>
      <Form className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4 text-gray-800">{description}</p>
        <div className="flex w-full flex-row">
          <Field
            required
            aria-label="Email"
            className="flex-grow rounded-l-md px-4 py-2 text-lg text-black bg-green-100 placeholder-forest"
            type="email"
            name="email"
            placeholder="jan.novak@seznam.cz"
          />
          <button type="submit" className="bg-green-800 px-4 py-2 rounded-r-md text-white">
            Potvrdit
          </button>
        </div>
        <p className="text-xs uppercase text-green-900 mt-2 tracking-wider">
          Vaši adresu s nikým nesdílíme. Posíláme cca 1 mail měsíčně.
        </p>
      </Form>
    </Formik>
  );
}
