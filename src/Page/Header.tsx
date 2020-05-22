import React from 'react';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <div>
      <div
        style={{ backgroundColor: '#BBD8B3' }}
        className="w-full h-16 flex flex-row justify-start items-center px-8 py-4"
      >
        <img src={logo} className="h-full"></img>
        <span className="flex-grow" />
        <a className="text-lg mr-10">Autor</a>
        <a className="text-lg">Kontakt</a>
      </div>
      <div
        style={{ backgroundColor: '#BBD8B3' }}
        className="bg-yellow-300 h-screen flex flex-col justify-center p-32"
      >
        <div className="w-1/2">
          <h1 className="text-4xl mb-4">Soutěže, přehledně</h1>
          <h2 className="text-xl">
            Olymp je koncept stránky, která má za cíl přivést více studentů středních škol k
            soutěžím. Studentům pomáhá soutěže objevovat, učitelům organizovat.
          </h2>
        </div>
      </div>
    </div>
  );
}
