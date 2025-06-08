import React from "react";

import {Breadcrumb} from "antd";

import {Link, useLocation} from "react-router-dom";

import {motion} from "framer-motion";

import {Helmet} from "react-helmet-async";

import {AdditionDanger, AdditionInfo, AdditionWarning} from "../components/Additions";

import Footer from "../components/Footer";

import Header from "../components/Header";

const ChatRules = () => {
  const {hash} = useLocation();
  React.useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
        setTimeout(() => {
          history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
          );
        }, 5000);
      }
    }
  }, [hash]);

  return (
    <div>
      <Helmet>
        <title>rules@aechat</title>
        <meta
          content="Правила чатов AEChat и DWChat"
          name="description"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://aechat.ru/"
          property="og:url"
        />
        <meta
          content="aechat&dwchat-rules"
          property="og:title"
        />
        <meta
          content="Правила чатов AEChat и DWChat"
          property="og:description"
        />
      </Helmet>
      <Header title="rules" />
      <motion.main
        animate={{x: 0, opacity: 1}}
        className="main"
        exit={{x: -50, opacity: 0}}
        initial={{x: 100, opacity: 0}}
        transition={{duration: 0.5, ease: [0.25, 0, 0, 1]}}
      >
        <div className="faq-container-flex">
          <div className="faq-container">
            <div className="faq-title">
              <h1>Правила AEChat и DWChat</h1>
              <Breadcrumb
                items={[
                  {
                    title: <Link to="/rules">Правила AEChat и DWChat</Link>,
                  },
                ]}
              />
            </div>
            <h2
              className="faq-section-title"
              id="about"
            >
              О чате и принципах
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <AdditionDanger>
                  Предупреждение для иноязычных пользователей: In{" "}
                  <a
                    href="https://t.me/joinchat/F1DdXtG9LephYWUy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    AEChat
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://t.me/+3LF_B_VK-Nw4YzYy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DWChat
                  </a>{" "}
                  we communicate exclusively in Russian. If you don&apos;t know Russian,
                  we recommend using an{" "}
                  <a
                    href="https://translate.google.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    online-translator
                  </a>{" "}
                  or looking for a chat in a language that you understand.
                </AdditionDanger>
                <p>
                  В наших чатах{" "}
                  <a
                    href="https://t.me/joinchat/F1DdXtG9LephYWUy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    AEChat
                  </a>{" "}
                  и{" "}
                  <a
                    href="https://t.me/+3LF_B_VK-Nw4YzYy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DWChat
                  </a>{" "}
                  вы можете обсудить любые вопросы касающиеся тематики чата. В{" "}
                  <a
                    href="https://t.me/joinchat/F1DdXtG9LephYWUy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    AEChat
                  </a>{" "}
                  мы обычно обсуждаем <mark className="app">After Effects</mark>,{" "}
                  <mark className="app">Premiere Pro</mark> и плагины для этих программ. А
                  в{" "}
                  <a
                    href="https://t.me/+3LF_B_VK-Nw4YzYy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DWChat
                  </a>{" "}
                  мы обсуждаем <mark className="app">Photoshop</mark>,{" "}
                  <mark className="app">Illustrator</mark>,{" "}
                  <mark className="app">Figma</mark> и прочие дизайнерские программы.
                </p>
                <AdditionInfo>
                  Пожалуйста, старайтесь не уходить за пределы тематики чатов обсуждая,
                  например, другой софт или компьютерное железо. Для этого есть{" "}
                  <Link to="/">другие чаты</Link>. Могут быть исключения в зависимости от
                  настроения администрации.
                </AdditionInfo>
                <p>
                  Прежде чем рассказать о проблеме - нажимайте на галочку рядом с пунктом{" "}
                  <mark className="ui">&quot;сжать изображение&quot;</mark> при загрузке
                  фото, не делайте фото/видео монитора на телефон и опишите проблему
                  текстом, а не голосом. Также{" "}
                  <b>
                    <u>убедитесь в том, что ответ на ваш вопрос уже имеется</u>
                  </b>{" "}
                  в чате или в{" "}
                  <a
                    href="/aefaq"
                    rel="noreferrer"
                    target="_blank"
                  >
                    aefaq
                  </a>
                  ,{" "}
                  <a
                    href="/prfaq"
                    rel="noreferrer"
                    target="_blank"
                  >
                    prfaq
                  </a>{" "}
                  или{" "}
                  <a
                    href="/psfaq"
                    rel="noreferrer"
                    target="_blank"
                  >
                    psfaq
                  </a>
                  .
                </p>
                <AdditionInfo>
                  Для записи экрана и скриншотов на устройств <mark>Windows</mark>{" "}
                  подойдут следующие программы:{" "}
                  <ul>
                    <li>
                      <a
                        href="https://github.com/ShareX/ShareX/releases"
                        rel="noreferrer"
                        target="_blank"
                      >
                        ShareX
                      </a>{" "}
                      - популярная программа для создания скриншотов или записи экрана на{" "}
                      <mark>Windows</mark>.
                    </li>
                    <li>
                      <a
                        href="https://www.ntwind.com/software/wincam.html"
                        rel="noreferrer"
                        target="_blank"
                      >
                        WinCam
                      </a>{" "}
                      - легковесная программа для записи экрана на <mark>Windows</mark>.
                    </li>
                    <li>
                      <a
                        href="https://www.nvidia.com/ru-ru/software/nvidia-app/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        NVIDIA App
                      </a>{" "}
                      - программа для пользователей видеокарт NVIDIA.
                    </li>
                    <li>
                      <a
                        href="https://www.amd.com/en/products/software/adrenalin.html"
                        rel="noreferrer"
                        target="_blank"
                      >
                        AMD Software: Adrenalin Edition
                      </a>{" "}
                      - аналогичная программа для пользователей видеокарт AMD.
                    </li>
                  </ul>
                  Чтобы записать видео экрана на <mark>macOS</mark> - воспользуйтесь
                  комбинацией клавиш{" "}
                  <a
                    href="https://support.apple.com/ru-ru/102618"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Shift + Command + 5
                  </a>{" "}
                  или встроенной программой QuickTime Player. Скриншоты можно сделать с
                  помощью комбинации клавиш{" "}
                  <a
                    href="https://support.apple.com/ru-ru/102646"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Shift + Command + 3
                  </a>
                  .
                </AdditionInfo>
                <p>
                  При описании проблемы давайте более подробное описание ваших действий,
                  характеристики вашего ПК <sub>(при необходимости)</sub>, в каком кодеке
                  и формате исходники <sub>(при необходимости)</sub>, откуда установлена
                  программа, на каком диске она стоит и что вы делали до того, как ошибка
                  появилась. Мы не экстрасенсы, поэтому будьте добры - предоставляйте
                  информацию по возможности более развёрнуто.
                </p>
                <AdditionWarning>
                  Незнание правил не освобождает вас от ответственности. Для действующих
                  членов администрации чата правила могут не применяться.
                </AdditionWarning>
              </section>
            </div>
            <h2
              className="faq-section-title"
              id="work"
            >
              О вакансиях и резюме
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <p>
                  Если вы хотите опубликовать заказ в чате для потенциального исполнителя
                  или вакансию, то будьте добры соблюдать простые требования по
                  размещению. Это делается для того, чтобы не тратить ни ваше время, ни
                  время вашего потенциального исполнителя.
                </p>
                <AdditionWarning>
                  Администрация оставляет за собой право удалить ваше объявление, если в
                  вашем объявлении толком не указано ничего, кроме как &quot;есть заказ,
                  подробности в лс&quot;. Большинству потенциальных исполнителей не
                  интересно бегать в личные сообщения ради того, чтобы узнать, какую нужно
                  выполнить задачу.
                </AdditionWarning>
                <ul>
                  <li>
                    Укажите хештег <mark className="tag">#работа</mark> в начале вашего
                    объявления. Этого хватит, чтобы быстро найти ваш пост среди тонны
                    остальных вопросов в чате.
                  </li>
                  <li>
                    Опишите подробно ваше техническое задание или что нужно сделать,
                    желательно с примерами, если имеется. Постарайтесь не гнать людей в
                    личные сообщения для его получения. Таким образом вы сузите круг
                    &quot;слишком любопытных&quot; лиц и сможете найти хорошего
                    исполнителя.
                    <AdditionInfo>
                      Если вы по каким-то причинам не хотите разглашать техническое
                      задание, то хотя бы опишите кратко тему и примерно что нужно
                      сделать.
                    </AdditionInfo>
                  </li>
                  <li>
                    Укажите в вашем объявлении бюджет, цену или ставку. Не удивляйтесь,
                    если на ваше объявление люди отреагируют негативно, если вы не указали
                    ставку или указали слишком низкую цену.
                    <AdditionInfo>
                      Если вы не знаете, сколько стоит выполнение вашего заказа - укажите
                      в объявлении сколько вы готовы потратиться на заказ и что
                      исполнитель может сам предложить свою цену. Таким образом, скорее
                      всего, вы сойдетесь на оптимальной и для вас, и для исполнителя
                      сумме.
                    </AdditionInfo>
                  </li>
                  <li>
                    Также укажите, где вам будет удобнее общаться с потенциальным
                    заказчиком. Если у вас установлено в настройках конфиденциальности{" "}
                    <mark className="ui">Кто может отправлять мне сообщения</mark>{" "}
                    значение <mark className="ui">Контакты и Premium-подписчики</mark>, то
                    установите на время значение <mark className="ui">Все</mark> или
                    напишите потенциальному исполнителю личное сообщение первым, если он
                    сам попросит это сделать.
                  </li>
                </ul>
                <p>
                  Если вы хотите устроить &quot;самопиар&quot; или же опубликовать ваше
                  намерение принимать заказы от других участников чата, то вам тоже нужно
                  будет соблюсти некоторые требования.
                </p>
                <ul>
                  <li>
                    Укажите хештег <mark className="tag">#резюме</mark> в начале вашей
                    записи.
                  </li>
                  <li>
                    Приложите несколько ваших работ как фото или видео. Если вы по
                    каким-то причинам не хотите перезаливать ваши видео, то прикрепите
                    ссылку на ваше портфолио, например на Behance, Яндекс.Диск, Kwork или
                    других площадках.
                    <AdditionWarning>
                      Ссылки на Telegram-каналы с вашим портфолио могут удаляться ботом в
                      чате. Если портфолио находится только в Telegram-канале, то вы
                      можете его прикрепить в вашем профиле и указать в вашем резюме, что
                      оно находится именно там. Для прикрепления канала в ваш профиль - он
                      должен быть публичным и доступен каждому пользователю.
                    </AdditionWarning>
                  </li>
                  <li>
                    Укажите ваше направление или с чем вы умете работать. Также не
                    забудьте указать софт, в котором вы можете работать спокойно. Для
                    самого минимума хватит уверенного знания базы{" "}
                    <mark className="app">After Effects</mark>,{" "}
                    <mark className="app">Premiere Pro</mark> и{" "}
                    <mark className="app">Photoshop</mark>, а также поверхностных знаний в
                    3D-софте, например <mark className="app">Blender</mark> или{" "}
                    <mark className="app">Cinema 4D</mark>.
                  </li>
                  <li>
                    Укажите вашу минимальную ставку или стоимость определённых работ.
                    Учтите, что указав слишком высокую цену при несоответствии качеству
                    ваших работ - вы вряд ли сможете быстро найти заказчика.
                    <AdditionInfo>
                      Если вы не знаете стоимость ваших работ, то укажите, что заказчик
                      может сам установить цену для его заказа. По цене не обижайте себя,
                      но не переоценивайте. Вы можете при необходимости сторговаться с
                      заказчиком, если посчитаете его цену слишком низким или
                      необоснованным. Возможно вам повезёт взять за заказ больше денег,
                      чем в среднем по рынку.
                    </AdditionInfo>
                  </li>
                </ul>
                <AdditionDanger>
                  Бывают случаи, когда заказчик или исполнитель может кинуть
                  противоположную сторону на деньги или выполненную работу. В таком
                  случае, если проблема не решается лично, то вы можете пожаловаться и
                  придать огласке вашей ситуации в чате или в каналах на главной странице
                  в разделе <mark className="ui">Черный список</mark>. Это, возможно,
                  заставит &quot;правонарушителя&quot; пошевелиться и решить вопрос, или
                  же предостережёт остальных людей от связей с &quot;кидалой&quot;.
                </AdditionDanger>
              </section>
            </div>
            <h2
              className="faq-section-title"
              id="admins"
            >
              Администраторы чата никому и ничего не обязаны!
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <p>
                  Администраторы следят за порядком чата и время от времени помогают
                  участникам, но не нужно принимать нас как за единственных спасителей. Мы
                  не обязаны отвечать на все вопросы до единого, также как и остальные
                  участники чата.
                </p>
                <AdditionDanger>
                  Не стоит писать администраторам в &quot;личку&quot;, если ваш вопрос
                  никак не касается работы чата, каналов{" "}
                  <a
                    href="https://t.me/s/aetemp"
                    title="AETemp в Telegram"
                  >
                    AETemp
                  </a>
                  ,{" "}
                  <a
                    href="https://t.me/s/designworld"
                    title="Design World в Telegram"
                  >
                    Design World
                  </a>{" "}
                  и бота{" "}
                  <a
                    href="https://t.me/HiStockBot?start=509060394"
                    title="Бот HiStock в Telegram"
                  >
                    HiStock
                  </a>
                  . Если вы не можете писать в чат - убедитесь в том, что вы нажали на
                  кнопку &quot;Начать общаться&quot; перед входом и не нарушали правила.
                </AdditionDanger>
                <AdditionWarning>
                  Бот в нашем чате удаляет сообщения с упоминанием пользователей, поэтому
                  старайтесь при формулировке вопроса не использовать упоминание через
                  &quot;собаку&quot;.
                </AdditionWarning>
                <AdditionInfo>
                  Если ваш вопрос остался незамеченным, не надо жаловаться и ныть об этом.
                  Достаточно удалить старое сообщение и написать снова. Пожалуйста, не
                  пренебрегайте этим. Слишком частое повторение вопроса может привести к
                  запрету на отправку сообщений по усмотрению администрации.
                </AdditionInfo>
              </section>
            </div>
            <h2 className="faq-section-title">Не гадим в чате и не злимся на других</h2>
            <div className="faq-content">
              <section className="faq-section">
                <p>
                  В чате запрещён спам, флуд (отход от темы, вопросы не по продуктам Adobe
                  или много бессмысленных сообщений) и чрезмерное употребление матов.
                  Также в нашем уставе неприемлемо явное оскорбление других пользователей,
                  упоминание родных и токсичность.
                </p>
                <AdditionWarning>
                  Если вы после блокировки или запрета на отправку сообщений решите зайти
                  с второго аккаунта (&quot;твинка&quot;) или же с другого аккаунта, чтобы
                  &quot;поязвить&quot; дальше - в бан пойдут оба аккаунта вне зависимости
                  от наказания.
                </AdditionWarning>
              </section>
            </div>
            <h2
              className="faq-section-title"
              id="nometa"
            >
              Ребята, давайте жить без мета-вопросов!
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <p>
                  Предположим, что вы только что зашли в чат и у вас явно есть вопрос. Не
                  нужно писать:{" "}
                  <mark className="quote">
                    &quot;а разбирается кто-то в [название плагина]????&quot;
                  </mark>
                  , <mark className="quote">&quot;нужна помощь, пишите в лс&quot;</mark>,{" "}
                  <mark className="quote">
                    &quot;сложно описать вопрос, помогите в лс&quot;
                  </mark>
                  , <mark className="quote">&quot;ау а че все молчат??&quot;</mark> и
                  подобные сообщения.
                </p>
                <div className="message-flex">
                  <div className="message-incorrect">
                    <div className="message-left">всем плотнейший салам</div>
                    <div
                      style={{opacity: 0.5, fontSize: "0.625rem", textAlign: "center"}}
                    >
                      Прошло 30 секунд
                    </div>
                    <div className="message-left">алё, все спят что-ли бл&?????</div>
                    <div className="message-right">
                      Привет, здесь не техподдержка Adobe. Если у тебя есть вопрос - задай
                      его. Для разговоров &quot;по душам&quot; у нас есть флудилка.
                    </div>
                    <div className="message-left">
                      ты разбираешся в интерфейсе автор эффекта?
                    </div>
                    <div className="message-right">
                      Предположим, что да. Твой вопрос собственно в чём заключается?
                    </div>
                    <div className="message-left">
                      я не могу нормально объяснить, можно в личку плз?
                    </div>
                    <div className="message-right">
                      Нет, нельзя. Сформулируйте свой вопрос как есть в этом чате, иначе
                      зачем вы зашли? Просто привлечь своё внимание и тянуть время у
                      других?
                    </div>
                    <div
                      style={{opacity: 0.5, fontSize: "0.625rem", textAlign: "center"}}
                    >
                      Прошло N минут
                    </div>
                    <div className="message-left">
                      ладно... я установил скрипт, но не могу закрепить его в рабочей
                      области как панель. что делать?
                    </div>
                    <div className="message-right">
                      Вот так бы сразу... Тебе достаточно расположить .jsx скрипт в
                      подпапку ScriptsUI Panels в директории с программой, а не сразу в
                      папку Scripts. После переноса твой скрипт переместится в раздел
                      Window и оттуда ты можешь открыть окно с нужным скриптом и
                      прикрепить куда тебе удобно.
                    </div>
                    <div
                      style={{opacity: 0.5, fontSize: "0.625rem", textAlign: "center"}}
                    >
                      Время переписки около 5-30 минут
                      <br />
                      (с учётом времени бездействия спрашивающего)
                    </div>
                  </div>
                  <div className="message-correct">
                    <div className="message-left">
                      Всем привет! Как можно закрепить окно скрипта в рабочем
                      пространстве, если он установлен в папку Scripts?
                    </div>
                    <div className="message-right">
                      Привет, нужно переместить .jsx скрипт в дочернюю папку ScriptsUI
                      Panels, а не сразу в папку Scripts. После переноса твой скрипт
                      переместится в раздел Window и оттуда ты можешь открыть окно с
                      нужным скриптом и прикрепить куда тебе удобно.
                    </div>
                    <div className="message-left">Спасибо за оперативный ответ!</div>
                    <div
                      style={{opacity: 0.5, fontSize: "0.625rem", textAlign: "center"}}
                    >
                      Время переписки около 30 секунд
                    </div>
                  </div>
                </div>
                <p>
                  Вы спросите: <mark>а почему?</mark>. В примере с зелёным фоном видно,
                  что переписка выглядит гораздо адекватнее и занимает куда меньше
                  времени, чем пример с красным фоном. У спрашивающего в примере с зелёным
                  фоном уже имеется чёткий и сформулированный вопрос, в следствии чего
                  любой участник чата может спокойно ответить на вопрос оперативно. Что
                  касается переписки на красном фоне: спрашивающий считает, что участники
                  чата являются победителями &quot;Битвы экстрасенсов&quot; и могут понять
                  в чём у вас там проблема или в чём заключается ваша просьба помощи с
                  помощью силы мысли и эзотерики. Это не так. Пустые вопросы, которые
                  подразумевают вопросы в ответ - тратят время и на них тупо не хочется
                  отвечать.
                </p>
                <p>
                  Из-за ваших мета-вопросов вы не сможете получить внятный ответ, пока не
                  объясните ваш вопрос полностью.
                </p>
                <AdditionWarning>
                  Если вы всё ещё не понимаете суть проблемы мета-вопросов, то
                  администрация оставляет за собой право замутить вас для того, чтобы за
                  это время вы смогли внятно сформулировать вопрос.
                </AdditionWarning>
              </section>
            </div>
            <h2 className="faq-section-title">
              Никакой порнухи, политики, сомнительного и шокирующего контента
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <p>
                  Мы не одобряем политические или около-политические дискуссии в наших
                  чатах. Также в наших чатах нельзя размещать порнографию или любой другой
                  NSFW-контент вне зависимости от контекста.
                </p>
                <AdditionWarning>
                  Администрация оставляет за собой право банить пользователей за
                  провокационные ники и сомнительные аватарки, например с изображением
                  нацистской символики.
                </AdditionWarning>
              </section>
            </div>
            <h2 className="faq-section-title">
              Никаких барыг, попрошаек и рекламодателей
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <p>
                  Запрещена купля, продажа и перепродажа товаров, шаблонов, «доступов», а
                  также самопиар своей страницы в соцсетях, реферальные ссылки и реклама
                  без разрешения администрации.
                </p>
                <AdditionInfo>
                  Бот может удалять ссылки на Telegram-каналы в чате, которых нет в
                  закреплённом сообщении. Если вы хотите поделиться с кем-то каналом -
                  перешлите его собеседнику в личные сообщения.
                </AdditionInfo>
              </section>
            </div>
            <Footer
              initialYear={2021}
              title="aechat"
            />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default ChatRules;
