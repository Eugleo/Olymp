import React from 'react';
import Section, { Skew, Spacer } from '../Section/Section';
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
    <div className="flex flex-col items-stretch">
      <div id="emailForm" style={{ marginTop: '-2em' }}>
        <Section
          bgColor="bg-gold"
          hFull={false}
          bgSrc={mailer}
          bgPosition={{ x: '90%', y: 'calc(100% + 34px)' }}
        >
          <EmailFieldYellow
            title="Chcete se jako první dozvídat novinky o Olympu?"
            description="Olymp je zatím ve fázi plánování. Zadejte níže svůj email pokud chcete dostávat novinky o jeho vývoji."
          />
        </Section>
      </div>

      <Section
        bgColor="bg-rosewood"
        hFull={false}
        skew={Skew.right}
        bgSrc=""
        bgPosition={{ x: '100%', y: '100%' }}
        reverse={true}
      >
        <div>
          <Title text="Jeden pohled stačí" color="text-white" />
          <Paragraph color="text-white">
            Všechny informace na jednom místě. Místo zdlouhavého procházení nespočtu stránek si
            můžete soutěž jednoduše vyhledat na Olympu a ihned se o ní dozvědět vše, co potřebujete.
          </Paragraph>
          <Paragraph color="text-white">
            Proč trávit čas dohledáváním informací, když ho můžete vyplnit i zajímavějšími věcmi —
            například další soutěží!
          </Paragraph>
        </div>
        <Spacer />
        <Image source={contestHeader} alt=""></Image>
      </Section>

      <Section bgColor="bg-gold" bgSrc={inspirer} bgPosition={{ x: '90%', y: 'calc(100% + 35px)' }}>
        <Image source={recommendations} alt="Automatická doporučení podobných soutěží" />
        <Spacer />
        <div>
          <Title text="Nechte se inspirovat" />
          <Paragraph>
            Olymp vám doporučí podobné soutěže, nebo soutěže oblíbené mezi lidmi s podobným vkusem,
            a pomůže vám tak objevit nové výzvy a rozšířit si obzory.
          </Paragraph>
          <Paragraph>
            Automatické doporučování jistě přijde vhod každému, koho už omrzí funkce filtrování a
            vyhledávání, které Olymp nabízí.
          </Paragraph>
        </div>
      </Section>

      <Section
        bgColor="bg-gold-dark"
        bgSrc={reviewer}
        bgPosition={{ x: '10%', y: 'calc(100% + 35px)' }}
        reverse={true}
      >
        <div>
          <Title text="Informace z první ruky" />
          <Paragraph>
            Ne nadarmo se říká, že není nad osobní zkušenost. Na Olympu si vašeho názoru vážíme, a
            proto si u každé soutěže můžete přečíst, jak soutěž hodnotí její bývalí účastníci a
            učitelé.
          </Paragraph>
        </div>
        <Spacer />
        <Image source={reviews} alt="Recenze účastníků soutěží v Olympu" />
      </Section>

      <div>
        <Section
          bgColor="bg-rosewood"
          hFull={false}
          bgSrc={notifier}
          bgPosition={{ x: '100%', y: 'calc(100% + 35px)' }}
        >
          <Image source={notification} alt="Upozornění na blížící se termín soutěže" />
          <Spacer />
          <div>
            <Title text="Termíny pod kontrolou" color="text-white" />
            <Paragraph color="text-white">
              S Olympem už nemusíte každý den kontrolovat, zda už vyšly výsledky nebo byl vyhlášen
              nový termín. Olymp vám dá vědět.
            </Paragraph>
          </div>
        </Section>
      </div>

      <Section
        bgColor="bg-gold"
        bgSrc={interester}
        bgPosition={{ x: '5%', y: 'calc(100% + 35px)' }}
        reverse={true}
      >
        <div>
          <Title text="Víme, co vás zajímá" />
          <Paragraph>
            Ušetřete si práci s kontaktováním organizátorů — přečtěte si odpovědi na často pokládané
            otázky přímo na Olympu! Tuto funkci kromě učitelů jistě ocení i organizátoři.
          </Paragraph>
        </div>
        <Spacer />
        <Image source={faq} alt="Seznam FAQ v Olympu" />
      </Section>

      <Section
        bgColor="bg-gold-dark"
        bgSrc={angrer}
        bgPosition={{ x: '100%', y: 'calc(100% + 35px)' }}
      >
        <Image
          source={quickQuestions}
          alt="Okno se zatrhnutelnými předpřipravenými otázkami, které lze odeslat organizátorům"
        />
        <Spacer />
        <div>
          <Title text="...nebo nevíme?" />
          <Paragraph>
            Často kladené dotazy, které v seznamu výše zodpovězeny být nemohou, můžete organizátorům
            jednoduše poslat přímo z naší stránky.
          </Paragraph>
          <Paragraph>Klik, klik, vyplníte svou adresu — a hotovo.</Paragraph>
        </div>
      </Section>

      <Section bgColor="bg-rosewood" bgSrc="" bgPosition={{ x: '100%', y: 'calc(100% + 35px)' }}>
        <div>
          <Title text="Chytré plánování" color="text-white" />
          <Paragraph color="text-white">
            Soutěž trvá dvě hodiny, účastní se jí septimy a oktávy, nechci, aby byla přes oběd, a
            nesmí nikomu zasahovat do hodin matematiky. Jak tohle vyřešit?
          </Paragraph>
          <Paragraph color="text-white">
            Jednoduše — nahrejte rozvrhy do Olympu, popište své podmínky a nechte počítač, ať udělá
            složitou práci za vás.
          </Paragraph>
        </div>
        <Spacer />
        <div>
          <Title text="Buďte v obraze" color="text-white" />
          <Paragraph color="text-white">
            Termíny okresních a krajských kol soutěží můžete plánovat rovnou na Olympu.
          </Paragraph>
          <Paragraph color="text-white">
            Nejen, že všem relevantním studentům přijde upozornění, že byl vyhlášen nový termín, ale
            navíc rovnou uvidíte, že se v daný den ve vašem okrese už jedna olympiáda koná a že by
            se mohly překrývat.
          </Paragraph>
        </div>
      </Section>
    </div>
  );
}
