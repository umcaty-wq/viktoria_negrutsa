import { Toolbar } from "@/components/document/toolbar"
import { Cover } from "@/components/document/cover"
import { WhatsAppButton } from "@/components/document/whatsapp-cta"
import { Section, Heading, Lead, Body, PullQuote, AccentQuote } from "@/components/document/primitives"
import {
  PracticeCard,
  CheckItem,
  OutcomeRow,
} from "@/components/document/blocks"
import { SessionStructure } from "@/components/document/session-block"
import { Testimonial } from "@/components/document/testimonial"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Toolbar />
      <Cover />

      {/* стр. 1 — Вступление и обещание статьи */}
      <Section page="стр. 01" eyebrow="Вступление">
        <Body className="mb-6">
          Это не очередная статья про «просто отпусти» и «живи для себя». Здесь — разбор того, что реально
          происходит в психике, когда отношения заканчиваются. Как это влияет на твоё окружение, твои
          деньги и твой доход.
        </Body>
        <Body className="mb-8">
          Конкретный механизм, который включается у тебя снова и снова — и как его увидеть.
        </Body>
        <Lead>
          Дочитав до конца, ты поймёшь: почему боль после расставания — это не про него; почему один и тот
          же тип мужчин и один и тот же сценарий преследует тебя снова; и что конкретно нужно сделать, чтобы
          это, наконец, изменилось — а не просто пережить очередной раз.
        </Lead>
      </Section>

      {/* 92% — стат (техническое объяснение голова/тело) */}
      <Section tone="navy">
        <div className="text-center">
          <p className="font-serif text-[5.5rem] font-semibold leading-none text-[#F5EFEB] md:text-[8rem]">
            92%
          </p>
          <p className="mx-auto mt-3 max-w-md text-lg leading-relaxed text-sky">
            решений измениться так и остаются фантазиями
          </p>
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center text-base leading-relaxed text-[#F5EFEB]/80">
          Не потому что не хватает силы воли. Знание живёт в голове, а привычная реакция — в теле, и
          включается она быстрее, чем успеваешь подумать.
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-[#F5EFEB]/80">
          Можно прекрасно понимать, что нужно поставить границу — и всё равно делать ровно то, что обещала
          себе не делать.
        </p>
      </Section>

      {/* стр. 2 — Эмоциональный пик + расширение на деньги и работу */}
      <Section page="стр. 02">
        <Body className="mb-6">
          Ты знаешь, что отношения закончились. Возможно, даже сама приняла решение уйти. Понимаешь, что
          многое давно не устраивало. Но внутри всё равно больно.
        </Body>
        <PullQuote tone="sky">Ты уже знаешь финал. Но психика всё ещё досматривает фильм.</PullQuote>
        <Body className="mb-6">
          И дело здесь чаще всего не в слабости. И не в том, что ты любила сильнее, чем он.
        </Body>
        <Body className="mb-6">
          И это не только про мужчин. Тот же механизм работает и в деньгах, и в работе — где бы ты ни была.
          Снова упираешься в один и тот же потолок, сколько бы ни росла экспертность. Занижаешь цену своим
          услугам или соглашаешься на зарплату, которая не отражает того, что ты реально даёшь. Тянешь всё
          сама — делегировать «страшно» или «никто не сделает так же хорошо». Терпишь условия, которые не
          устраивают, лишь бы не потерять место, клиента, стабильность.
        </Body>
        <Body>
          Потому что паттерн — не про тип мужчин и не про профессию. Это про то, с каким уровнем
          «достаточно» твоя психика молча согласна, считая его нормой. И этот уровень один и тот же: в
          отношениях, в деньгах, в том, сколько власти над своей жизнью ты себе разрешаешь —
          предпринимательница ты, наёмный специалист или фрилансер.
        </Body>
      </Section>

      {/* стр. 3 — Узнай себя (чек-лист) */}
      <Section page="стр. 03" eyebrow="Чек-лист" tone="beige">
        <Heading>Узнай себя — если хотя бы часть из этого откликается</Heading>
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          <CheckItem index="01">Хочешь большего, но внутри постоянно что-то останавливает.</CheckItem>
          <CheckItem index="02">
            Попадаешь в отношения, в которых надо заслуживать любовь, терпеть или вечно кого-то спасать.
          </CheckItem>
          <CheckItem index="03">
            Чувствуешь что в жизни нет радости — несмотря на новые достижения.
          </CheckItem>
          <CheckItem index="04">
            Всё «понимаешь» про себя — но мало что можешь поменять в реальности.
          </CheckItem>
          <CheckItem index="05">
            Обесцениваешь свои успехи и не замечаешь, какой путь уже прошла.
          </CheckItem>
          <CheckItem index="06">
            Предсказываешь своё будущее в самом негативном сценарии — и оно сбывается.
          </CheckItem>
        </ul>
        <div className="mt-10 rounded-2xl bg-sky p-6 text-navy shadow-[0_10px_30px_rgba(36,52,74,0.08)] md:p-8">
          <p className="text-base leading-relaxed md:text-lg">
            Если откликнулось хотя бы три пункта из шести — это не совпадение. Это один и тот же паттерн,
            который проявляется по-разному, но управляется одной и той же причиной внутри.
          </p>
        </div>
      </Section>

      {/* стр. 4 — Наш общий враг (объединено: кто враг + цена невидимого паттерна + три исхода) */}
      <Section page="стр. 04" eyebrow="Наш общий враг">
        <Heading>С кем на самом деле идёт борьба</Heading>
        <Body className="mt-6">
          Враг здесь не мужчина, не невезение и не обстоятельства. Враг — привычный паттерн, выученный ещё
          в детстве: связь между любовью и болью, между «меня любят» и «нужно заслужить» или «нужно
          терпеть». Мозг не выбирает лучшее. Он выбирает знакомое — и называет знакомое безопасным, даже
          если внутри от него больно, тревожно и одиноко.
        </Body>
        <Body className="mt-5">
          Это работает не только в отношениях. Тот же паттерн решает, сколько ты берёшь за свою работу,
          сколько власти отдаёшь другим, сколько «нормального» дискомфорта готова терпеть, лишь бы не
          выходить из зоны знакомого.
        </Body>
        <Body className="mt-5">
          Пока причина не найдена, ты продолжаешь оплачивать один и тот же счёт — просто под разными
          названиями: не те отношения, заниженный чек, отложенные решения, энергия, которая уходит на
          тревогу вместо дела.
        </Body>
        <Body className="mt-5">
          Пока этот механизм не увиден, он не останавливается сам — просто меняет лица. Три года с одним.
          Полтора с другим. Год мучительных «то сходимся, то нет» с третьим. Сложи это — и получится, что
          годы твоей жизни, которые могли быть годами роста, любви, спокойствия, ушли на то, чтобы снова и
          снова доказывать одному и тому же внутреннему сценарию, что в этот раз будет иначе.
        </Body>
        <PullQuote tone="plain">
          Спроси себя честно: сколько лет уже отдано этому сценарию? Сколько из них могли быть годами, где
          ты живёшь на полную, а не по привычному кругу?
        </PullQuote>

        <Heading as="h3" className="mb-6 mt-4">
          Без разбора причины происходит одно из трёх
        </Heading>
        <div className="space-y-6">
          <OutcomeRow>
            <span className="font-semibold text-teal">→</span>
            <span>
              <span className="font-semibold text-navy">Ты будешь говорить «позже».</span> Снова и снова
              откладывать момент когда «наконец возьмёшься за себя».
            </span>
          </OutcomeRow>
          <OutcomeRow>
            <span className="font-semibold text-teal">→</span>
            <span>
              <span className="font-semibold text-navy">Ты будешь строить планы.</span> Подробные,
              вдохновляющие — и не реализованные, потому что план живёт в голове, а паттерн — в теле.
            </span>
          </OutcomeRow>
          <OutcomeRow>
            <span className="font-semibold text-teal">→</span>
            <span>
              <span className="font-semibold text-navy">
                Ты окажешься в отношениях, которые обещала себе не повторять.
              </span>{" "}
              С другим лицом. С той же динамикой.
            </span>
          </OutcomeRow>
        </div>

        <Body className="mt-8">
          Разговоры с подругами, книги по саморазвитию, «само пройдёт» — всё это работает с симптомом, а не
          с причиной. Год за годом цепочка не сокращается — она растёт.
        </Body>
      </Section>

      {/* стр. 5 — Виктория (профиль) */}
      <Section page="стр. 05" eyebrow="Кто я" className="page-break">
        <div className="mx-auto flex max-w-2xl flex-col gap-10 md:flex-row md:items-center md:gap-12">
          <div className="aspect-[3/4] w-full flex-shrink-0 md:w-80">
            <img
              src="images/victoria-profile.jpg"
              alt="Виктория Негруца, глубинный психолог"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-3xl font-semibold text-navy md:text-4xl">
              Виктория Негруца
            </h2>
            <p className="mt-2 text-lg text-[#567C8D]">
              Глубинный психолог<br />
              Кандидат психологических наук
            </p>
            <div className="mt-8 space-y-4 border-l-2 border-teal pl-6">
              <div>
                <p className="font-serif text-xl italic text-navy">7 лет практики</p>
                <p className="mt-1 text-base text-navy">
                  Работаю с людьми, которым в отношениях больно. Более 3500 часов консультаций. Больше 100
                  клиенток выросли в отношениях, деньгах и самореализации благодаря моему методу.
                </p>
              </div>
              <div>
                <p className="font-serif text-xl italic text-navy">Не просто сочувствие</p>
                <p className="mt-1 text-base text-navy">
                  За это время я научилась видеть то, что человек не замечает в себе сам. Кандидат
                  психологических наук — за подходом стоит не только опыт, но и научная база.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* стр. 6 — Мой метод */}
      <Section page="стр. 06" eyebrow="Мой метод">
        <Heading>Мой метод</Heading>
        <Body className="mt-6">
          Мой метод — это не разговор о чувствах ради разговора и не готовые техники из книжки. Я работаю в
          глубинном подходе: смотрю не на то, что происходит на поверхности («он ушёл, мне больно»), а на
          то, что эта ситуация активирует внутри — какую более старую историю, какой более ранний опыт.
        </Body>
        <Body className="mt-5">
          Вот как это устроено. Любая сильная реакция во взрослой жизни — тревога, которая не отпускает,
          тяга написать первой, ощущение «я снова одна» — редко бывает пропорциональна текущей ситуации.
          Обычно за ней стоит более старый опыт, который был первым и запомнился психикой как «то, что
          бывает с любовью». Не потому что он был хорошим. Потому что он был первым.
        </Body>
        <PullQuote tone="sky">
          Ты не выбираешь определённый тип мужчин. Ты выбираешь определённый тип чувства.
        </PullQuote>
        <Body className="mt-5">
          Моя работа — не просто выслушать и посочувствовать. Я нахожу точку, где текущая реакция
          соединяется со своим источником, и показываю эту связь тебе — не как теорию, а как то, что ты сама
          видишь и узнаёшь в моменте. Именно увидеть самой — а не поверить мне на слово — вот что меняет
          паттерн, а не просто снимает боль на время.
        </Body>
      </Section>

      {/* Из практики */}
      <Section>
        <PracticeCard label="Из практики" title="«Меня снова бросили, я снова одна»">
          <p>
            Клиентка пришла через два месяца после расставания, уверенная, что проблема в неумении «найти
            новые отношения». На третьей встрече стало ясно: 14 лет назад она точно так же осталась одна
            после развода родителей, и расставание включило ту же детскую панику — «меня снова бросили, я
            снова одна». Когда она это увидела, тревога ушла не сразу, но впервые появилось понимание, что
            делать.
          </p>
        </PracticeCard>
      </Section>

      {/* стр. 7 — Приглашение на диагностику */}
      <Section page="стр. 07" tone="navy">
        <Body className="mb-5 text-[#F5EFEB]/90">
          Если дочитала до сюда — что-то в этом тексте уже откликнулось. Это уже больше, чем было час назад.
          Но давай честно: ты и раньше читала правильные вещи. И через неделю всё равно возвращалась туда
          же.
        </Body>
        <Body className="mb-5 text-[#F5EFEB]/90">
          Разница между текстом и диагностикой простая. На бумаге ты видишь паттерн в общем. На встрече —
          видишь его в себе, живьём, в моменте, когда я задаю вопрос и ты вдруг слышишь свой собственный
          ответ иначе. Это не пересказ теории. Это момент, после которого уже невозможно развидеть.
        </Body>
        <Body className="mb-5 text-[#F5EFEB]/90">
          Поэтому я зову не на терапию, а на диагностику. 30 минут, где мы просто разбираем твою конкретную
          историю — без домашних заданий и списков книг. Уходишь с тремя конкретными вещами: откуда растёт
          твой паттерн, что именно его запускает прямо сейчас, и что с этим реально делать тебе — а не
          абстрактной «любой женщине с похожей историей».
        </Body>
        <Body className="mb-5 text-[#F5EFEB]/90">
          Кому-то этого разговора достаточно, чтобы двинуться самостоятельно. Кто-то остаётся в более
          глубокой работе. Обычная консультация у меня стоит 80€. Диагностика — 5€, не потому что она стоит
          меньше, а чтобы решение прийти было лёгким, без внутреннего торга «а стоит ли тратить деньги».
          Дальше — без абонементов и давления, сама решаешь.
        </Body>
        <Body className="mb-8 text-[#F5EFEB]/90">
          Мест немного — беру ограниченное число клиентов в месяц, дальше просто нет свободного времени в
          графике.
        </Body>
        <div className="avoid-break flex flex-col items-center gap-3 text-center">
          <WhatsAppButton variant="dark">Написать в WhatsApp</WhatsAppButton>
          <p className="text-sm text-[#F5EFEB]/70">
            Диагностика — 5€ вместо обычных 80€ · отвечаю в течение дня
          </p>
        </div>
      </Section>

      {/* стр. 8 — Отзывы */}
      <Section page="стр. 08" eyebrow="Что говорят мои клиенты">
        <Heading>Что говорят мои клиенты</Heading>
        <Lead className="mt-6">
          Похожие истории я слышу часто. Вот что говорят те, кто уже прошёл этот путь.
        </Lead>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Testimonial
            quote="Несколько лет я была в Тиндере. Ходила на свидания, но всё либо быстро заканчивалось, либо вообще ни к чему не вело. Думала — мне просто не везёт с мужчинами."
            author="Анна"
            age={37}
            additional="В какой-то момент, уже в полном отчаянии, я нашла Викторию, и мы начали работать вместе. Шаг за шагом я начала понимать, чего на самом деле боюсь в отношениях — и это было неожиданно, я даже не подозревала, что дело в этом. Сейчас я в отношениях. Внутри спокойно и радостно. У меня такого никогда раньше не было."
            whatsappLink="https://wa.me/4915255374831"
            paymentLink="https://buy.stripe.com/7sYcN71v4bBp5mp1Nj2wU00"
          />

          <Testimonial
            quote="Мы жили вместе 7 лет. Всё это время я ждала свадьбы — была уверена, что всё идёт к этому. Когда он сказал что мы расстаёмся, у меня просто рухнул весь мир."
            author="Мария"
            age={35}
            additional="Пришла к Виктории в этом состоянии. Не знаю чего ожидала — наверное просто чтобы боль стала хоть немного тише. Но произошло что-то другое. Встреча за встречей я начала видеть — не его, а себя. Как я себя предавала в этих отношениях. Чего на самом деле ждала и почему. Сейчас я понимаю, что это расставание — лучшее, что могло случиться."
            whatsappLink="https://wa.me/4915255374831"
            paymentLink="https://buy.stripe.com/7sYcN71v4bBp5mp1Nj2wU00"
          />
        </div>
      </Section>

      {/* Кому подойдёт эта встреча */}
      <Section tone="beige">
        <Heading as="h3">Кому подойдёт эта встреча</Heading>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">Скорее всего да, если</p>
            <ul className="mt-4 space-y-3">
              <li className="text-base leading-relaxed text-navy md:text-lg">
                Ты готова смотреть и на свою часть картины — не только на то, что сделал он.
              </li>
              <li className="text-base leading-relaxed text-navy md:text-lg">
                Тебе нужен не тот, кто просто согласится «он козёл», а тот, кто поможет увидеть
                закономерность.
              </li>
              <li className="text-base leading-relaxed text-navy md:text-lg">
                Ты хочешь разобраться один раз — а не проживать то же самое в следующих отношениях.
              </li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal">Возможно не сейчас, если</p>
            <ul className="mt-4 space-y-3">
              <li className="text-base leading-relaxed text-navy md:text-lg">
                Тебе сейчас важнее просто выговориться, без разбора причин — это нормально, но это не то,
                что я делаю на первой встрече.
              </li>
              <li className="text-base leading-relaxed text-navy md:text-lg">
                Ты в остром кризисе и нужна экстренная помощь прямо сейчас — тогда лучше начать с горячей
                линии или врача, я работаю с более длительным разбором.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* стр. 9 — Финальный CTA */}
      <Section tone="navy" page="стр. 09" eyebrow="Диагностическая сессия" className="page-break">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-sky">
            Диагностическая сессия
          </p>
          <Heading as="h2" className="mt-5 text-[#F5EFEB]">
            30 минут, которые меняют угол зрения на всю ситуацию
          </Heading>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#F5EFEB]/80 md:text-lg">
            Я покажу где именно корень того, что происходит — конкретно в твоей истории, без шаблонов и
            общих советов.
          </p>

          <div className="mx-auto mt-12 max-w-2xl space-y-8 rounded-3xl border border-gold/20 bg-[#28384c] px-8 py-10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] md:px-10 md:py-12">
            <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-sky">Как проходит встреча</h3>
            <SessionStructure />
          </div>

          <p className="mx-auto mt-10 max-w-md text-sm leading-relaxed text-[#F5EFEB]/70">
            Это разовая встреча, а не абонемент на терапию — дальше решаешь только ты.
          </p>

          <div className="mt-6 flex flex-col items-center gap-4">
            <div className="flex flex-col gap-3 md:flex-row">
              <WhatsAppButton variant="dark">Написать в WhatsApp</WhatsAppButton>
              <a
                href="https://buy.stripe.com/7sYcN71v4bBp5mp1Nj2wU00"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#F5EFEB]/40 px-8 py-4 font-semibold text-[#F5EFEB] hover:bg-[#F5EFEB]/10 transition"
              >
                Оплатить сразу
              </a>
            </div>
            <p className="text-sm text-[#F5EFEB]/60">
              Диагностика: <span className="font-semibold text-[#F5EFEB]/80">5€</span>{" "}
              <span className="text-[#F5EFEB]/40 line-through">80€</span> · беру ограниченное число
              клиентов в месяц
            </p>
            <p className="text-xs text-[#F5EFEB]/50">
              Обычно отвечаю в WhatsApp в течение дня · всё, что ты расскажешь, останется между нами
            </p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-background px-6 py-12 text-center md:px-10">
        <p className="font-serif text-lg font-semibold text-navy">Victoria Negrutsa</p>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-teal">
          Психолог · @victoria_milmar
        </p>
      </footer>
    </main>
  )
}
