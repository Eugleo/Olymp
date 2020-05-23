import React from 'react';
import Section, { Skew } from '../Section/Section';
import Paragraph from '../Section/Paragraph';
import Image from '../Section/Image';

import contestHeader from '../assets/contest-header.svg';
import faq from '../assets/faq.svg';
import quickQuestions from '../assets/quick-questions.svg';
import reviews from '../assets/reviews.svg';
import notification from '../assets/notification.svg';
import recommendations from '../assets/recommendations.svg';

import reviewer from '../assets/peeps/reviewer.svg';
import mailer from '../assets/peeps/mailer.svg';
import notifier from '../assets/peeps/notifier.svg';
import angrer from '../assets/peeps/angrer.svg';
import interester from '../assets/peeps/interester.svg';
import inspirer from '../assets/peeps/inspirer.svg';

import Title from '../Section/Title';
import { EmailFieldYellow } from './EmailForm';

export default function Body() {
  return (
    <div className="flex flex-col items-stretch w-full">
      <div style={{ marginTop: '-2em' }}>
        <Section
          bgColor="bg-gold"
          hFull={false}
          bgSrc={mailer}
          bgPosition={{ x: '90%', y: 'calc(100% + 34px)' }}
        >
          <EmailFieldYellow
            title="Chcete se jako první dozvídat novinky o Olympu?"
            description="Zadejte níže svůj email pokud chcete abychom vám dali vědět, kdykoli bude u Olympu něco nového."
          />
        </Section>
      </div>

      <Section
        bgColor="bg-rosewood"
        hFull={false}
        skew={Skew.right}
        bgSrc={'mailer'}
        bgPosition={{ x: '100%', y: '100%' }}
      >
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

      <Section bgColor="bg-gold" bgSrc={inspirer} bgPosition={{ x: '90%', y: 'calc(100% + 35px)' }}>
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

      <Section
        bgColor="bg-gold-dark"
        bgSrc={reviewer}
        bgPosition={{ x: '10%', y: 'calc(100% + 35px)' }}
      >
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

      <div>
        <Section
          bgColor="bg-rosewood"
          hFull={false}
          bgSrc={notifier}
          bgPosition={{ x: '100%', y: 'calc(100% + 35px)' }}
        >
          <Image source={notification} />
          <div className="mx-12" />
          <div>
            <Title text="Termíny pod kontrolou" color="text-white" />
            <Paragraph color="text-white">
              Nemusíte už každý den kontrolovat, jestli nebyl vyhlášen termín dalšího kola vaší
              oblené soutěže. Olymp vám dá vědět.
            </Paragraph>
          </div>
        </Section>
      </div>

      <Section
        bgColor="bg-gold"
        bgSrc={interester}
        bgPosition={{ x: '5%', y: 'calc(100% + 35px)' }}
      >
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

      <Section
        bgColor="bg-gold-dark"
        bgSrc={angrer}
        bgPosition={{ x: '100%', y: 'calc(100% + 35px)' }}
      >
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
