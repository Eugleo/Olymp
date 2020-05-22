import React from 'react';
import { Formik, Form, Field } from 'formik';

export default function EmailField({ title, description }: { title: string; description: string }) {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={console.log}>
      <Form className="mx-auto">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-lg mb-4 text-gray-800">{description}</p>
        <div className="flex w-full flex-row">
          <Field
            className="bg-yellow-300 flex-grow rounded-l-md px-4 py-2 text-lg text-yellow-300 placeholder-yellow-400"
            type="email"
            name="email"
            placeholder="jan.novak@seznam.cz"
          />
          <button type="submit" className="bg-yellow-600 px-4 py-2 rounded-r-md text-white">
            Potvrdit
          </button>
        </div>
        <p className="text-sm text-gray-700 mt-2 tracking-wider">
          Posíláme maximálně jeden mail měsíčně
        </p>
      </Form>
    </Formik>
  );
}
