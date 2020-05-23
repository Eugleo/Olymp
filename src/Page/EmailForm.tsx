import React from 'react';
import { Formik, Form, Field } from 'formik';

export function EmailFieldYellow({ title, description }: { title: string; description: string }) {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={console.log}>
      <Form className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4 text-gray-800">{description}</p>
        <div className="flex flex-row">
          <Field
            className="flex-grow rounded-l-md px-4 py-2 text-lg text-black bg-gold-dark placeholder-gold-darkest"
            type="email"
            name="email"
            placeholder="jan.novak@seznam.cz"
          />
          <button type="submit" className="bg-yellow-600 px-4 py-2 rounded-r-md text-white">
            Potvrdit
          </button>
        </div>
        <p className="text-xs uppercase text-gold-darkest mt-2 tracking-wider">
          Posíláme maximálně jeden mail měsíčně
        </p>
      </Form>
    </Formik>
  );
}

export function EmailFieldGreen({ title, description }: { title: string; description: string }) {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={console.log}>
      <Form className="mx-auto max-w-xl">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4 text-gray-800">{description}</p>
        <div className="flex w-full flex-row">
          <Field
            className="flex-grow rounded-l-md px-4 py-2 text-lg text-black bg-green-100 placeholder-forest"
            type="email"
            name="email"
            placeholder="jan.novak@seznam.cz"
          />
          <button type="submit" className="bg-green-600 px-4 py-2 rounded-r-md text-white">
            Potvrdit
          </button>
        </div>
        <p className="text-xs uppercase text-green-900 mt-2 tracking-wider">
          Posíláme maximálně jeden mail měsíčně
        </p>
      </Form>
    </Formik>
  );
}
