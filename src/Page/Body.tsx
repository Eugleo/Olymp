import React from 'react';
import Section from '../Section/Section';
import Paragraph from '../Section/Paragraph';
import Image from '../Section/Image';

import contestHeader from '../assets/contest-header.svg';
import faq from '../assets/faq.svg';
import quickQuestions from '../assets/quick-questions.svg';
import reviews from '../assets/reviews.svg';
import olymp from '../assets/olymp.svg';
import notification from '../assets/notification.svg';
import recommendations from '../assets/recommendations.svg';

import Title from '../Section/Title';

export default function Body() {
  return (
    <div className="flex flex-col items-stretch w-full">
      <Section bg="gold">
        <Image source={olymp} />
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

      <Section bg="bg-rosewood">
        <div>
          <Title text="Jeden pohled stačí" color="text-white" />
          <Paragraph color="text-white">
            Chceme, aby se studenti a učitelé mohli soustředit především na tu zajímavou stránku
            soutěží, ne na dohledávání informací o nich.
          </Paragraph>
          <Paragraph color="text-white">
            Proto základní informace o každé soutěži najdete hned nahoře na její stránce, v
            elegantní a přehledné formě.
          </Paragraph>
        </div>
        <div className="mx-12" />
        <Image source={contestHeader}></Image>
      </Section>

      <Section bg="bg-gold">
        <Image source={recommendations} />
        <div className="mx-12" />
        <div>
          <Title text="Nechte se inspirovat" />
          <Paragraph>
            Koho by bavilo pořád jen procházet a třídit seznamy? Olymp vám doporučí podobné soutěže,
            nebo soutěže oblíbené mezi lidmi s podobným vkusem, a pomůže vám tak objevit nové výzvy
            a rozšířit si obzory.
          </Paragraph>
        </div>
      </Section>

      <Section bg="bg-gold-darker">
        <div>
          <Title text="Informace z první ruky" />
          <Paragraph>
            Osobní zkušenost je často důležitější než to, co vám o soutěži řeknou její organizátoři.
            Na Olympu si přečtete, jak soutěž hodnotí její bývalí účastníci a učitelé.
          </Paragraph>
        </div>
        <div className="mx-12" />
        <Image source={reviews} />
      </Section>

      <Section bg="bg-rosewood">
        <Image source={notification} />
        <div className="mx-12" />
        <div>
          <Title text="Termíny pod kontrolou" color="text-white" />
          <Paragraph color="text-white">
            Nemusíte už každý den kontrolovat, jestli nebyl vyhlášen termín dalšího kola vaší oblené
            soutěže. Olymp vám dá vědět.
          </Paragraph>
        </div>
      </Section>

      <Section bg="bg-gold">
        <div>
          <Title text="Víme, co vás zajímá" />
          <Paragraph>
            Ušetřete si práci s kontaktováním organizátorů — přečtěte si odpovědi na často pokládané
            otázky přímo na Olympu!
          </Paragraph>
        </div>
        <div className="mx-12" />
        <Image source={faq} />
      </Section>

      <Section bg="bg-gold-darker">
        <Image source={quickQuestions} />
        <div className="mx-12" />
        <div>
          <Title text="...nebo nevíme?" />
          <Paragraph>
            Často kladené dotazy, které v seznamu výše zodpovězeny být nemohou, můžete organizátorům
            jednoduše poslat přímo z naší stránky.
          </Paragraph>
          <Paragraph>Klik, klik, vyplnit svou adresu — a hotovo.</Paragraph>
        </div>
      </Section>
    </div>
  );
}
