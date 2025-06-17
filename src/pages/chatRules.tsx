import React from "react";

import {Breadcrumb, Divider} from "antd";

import {Link, useLocation} from "react-router-dom";

import {motion} from "framer-motion";

import {Helmet} from "react-helmet-async";

import {AdditionDanger, AdditionInfo, AdditionWarning} from "../components/Additions";

import Footer from "../components/Footer";

import Header from "../components/Header";

import ContentSwitcher from "../components/features/ContentFilter";

const constants = {
  SCROLL_DELAY: 300,
  PADDING: {
    MIN: 10,
    MAX: 14,
    SCREEN: {
      MIN: 320,
      MAX: 768,
    },
  },
} as const;

const ChatRules = () => {
  const {hash} = useLocation();
  React.useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);

        if (element) {
          const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

          const padding = Math.min(
            constants.PADDING.MIN +
              (constants.PADDING.MAX - constants.PADDING.MIN) *
                ((window.innerWidth - constants.PADDING.SCREEN.MIN) /
                  (constants.PADDING.SCREEN.MAX - constants.PADDING.SCREEN.MIN)),
            constants.PADDING.MAX
          );

          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight -
            padding;
          window.scrollTo({top: y, behavior: "smooth"});
          setTimeout(() => {
            history.replaceState(
              null,
              "",
              window.location.pathname + window.location.search
            );
          }, 5000);
        }
      }, constants.SCROLL_DELAY);
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
          content="Правила AEChat & DWChat"
          property="og:title"
        />
        <meta
          content="Правила чатов AEChat и DWChat"
          property="og:description"
        />
      </Helmet>
      <Header title="rules" />
      <motion.main
        animate={{x: 0, y: 0, opacity: 1}}
        className="main"
        exit={{x: 0, y: 50, opacity: 0}}
        initial={{x: 100, y: 0, opacity: 0}}
        transition={{
          duration: 0.3,
          ease: [0.25, 0, 0, 1],
        }}
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
              О наших чатах
            </h2>
            <div className="faq-content">
              <section className="faq-section">
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
                  вы можете обсуждать вопросы, касающиеся тематики чата. В{" "}
                  <a
                    href="https://t.me/joinchat/F1DdXtG9LephYWUy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    AEChat
                  </a>{" "}
                  мы обычно обсуждаем <mark className="app">Adobe After Effects</mark>,{" "}
                  <mark className="app">Adobe Premiere Pro</mark> и плагины для этих
                  программ, а в{" "}
                  <a
                    href="https://t.me/+3LF_B_VK-Nw4YzYy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DWChat
                  </a>{" "}
                  - <mark className="app">Adobe Photoshop</mark>,{" "}
                  <mark className="app">Adobe Illustrator</mark>,{" "}
                  <mark className="app">Figma</mark> и другие дизайнерские программы. В
                  качестве основного языка общения используется русский язык.
                </p>
                <AdditionInfo>
                  Пожалуйста, старайтесь не выходить за рамки тематики чатов, обсуждая,
                  например, другое ПО или компьютерное железо. Для этого есть{" "}
                  <Link to="/">другие чаты</Link>.{" "}
                  <i style={{opacity: "0.5"}}>
                    Могут быть исключения в зависимости от настроения администрации.
                  </i>
                </AdditionInfo>
                <AdditionDanger>
                  <ul>
                    <li>
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
                      we communicate exclusively in Russian. If you don&apos;t know
                      Russian, we recommend using an{" "}
                      <a
                        href="https://translate.google.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        online-translator
                      </a>{" "}
                      or looking for a chat in a language that you understand.
                    </li>
                    <li>
                      Незнание правил{" "}
                      <b>
                        <u>не освобождает</u>
                      </b>{" "}
                      от ответственности.{" "}
                      <i style={{opacity: "0.5"}}>
                        Для действующих членов администрации чата правила могут не
                        применяться.
                      </i>
                    </li>
                  </ul>
                </AdditionDanger>
              </section>
            </div>
            <h2
              className="faq-section-title"
              id="questions"
            >
              О задаваемых вопросах в чате
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <AdditionInfo>
                  Прежде чем задать свой вопрос - убедитесь, что ответа на него нет в чате
                  <sup>1</sup> или в разделах FAQ по{" "}
                  <a href="#aefaq">Adobe After Effects</a>,{" "}
                  <a href="#prfaq">Adobe Premiere Pro</a> или{" "}
                  <a href="#psfaq">Adobe Photoshop</a>.
                  <li>
                    <sup>1</sup> Вы можете воспользоваться поиском по чату. На мобильных
                    устройствах оно прячется в контекстном меню в правом углу экрана, а на
                    десктопе - вызывается с помощью <mark className="key">Ctrl + F</mark>.
                  </li>
                </AdditionInfo>
                <ul>
                  <li>
                    Если у вас возникла ошибка или недопонимание с программой - опишите,
                    что именно вы делали перед тем, как что-то пошло не так. Чем подробнее
                    будет описание, тем быстрее можно понять проблему, решить её и
                    исключить лишние догадки.
                  </li>
                  <li>
                    Указывайте программу и его версию, с которой вы работаете, и, при
                    необходимости, прикладывайте характеристики вашего устройства.
                  </li>
                  <li>
                    Показывая проблему - пожалуйста, не делайте{" "}
                    <mark className="image">снимки экрана</mark> или видео вашего
                    устройства с помощью камеры телефона. В них ничего толком не видно и
                    захватывается не вся нужна область. Также публикуя{" "}
                    <mark className="image">скриншот</mark>,{" "}
                    <mark className="image">фото</mark> или{" "}
                    <mark className="video">видео</mark> - стоит написать сам вопрос в
                    поле для отправки сообщения, а не следующим сообщением.
                    <ContentSwitcher
                      macContent={
                        <div>
                          <p>
                            Администраторы часто замечают, что пользователи устройств на{" "}
                            <mark>macOS</mark> ещё более ленивы на{" "}
                            <mark className="image">скриншоты</mark>, нежели те, кто сидит
                            на <mark>Windows</mark>. Для решения этой проблемы
                            купертиновцы оставили вам полезные комбинации клавиш, которые
                            не раз пригодятся вам в жизни.
                          </p>
                          <ul>
                            <li>
                              <mark className="key">Ctrl + Command + Shift + 3</mark> -
                              эта комбинация клавиш позволяет сделать{" "}
                              <mark className="image">скриншот</mark> всего экрана.
                              Изображение автоматически сохранится в буфере обмена, откуда
                              его можно вставить в <mark className="app">Telegram</mark>.
                            </li>
                            <li>
                              <mark className="key">Ctrl + Command + Shift + 4</mark> -
                              позволяет выделить и сделать{" "}
                              <mark className="image">скриншот</mark> только определенной
                              области экрана. Как и в предыдущем случае, изображение
                              попадет в буфер обмена для дальнейшего использования.
                            </li>
                            <li>
                              <mark className="key">Command + Shift + 5</mark> откроет
                              утилиту<sup>1</sup> для записи всего экрана или только
                              выбранной его части.
                              <AdditionWarning>
                                <sup>1</sup> Стандартные средства <mark>macOS</mark>{" "}
                                записывают видео так, что не у всех участников чата оно
                                может открыться. Чтобы ваш полученный{" "}
                                <mark className="video">скринкаст</mark> открылся у
                                каждого - перекодируйте видео в{" "}
                                <mark className="video">H.264</mark> через{" "}
                                <mark className="app">Shutter Encoder</mark> или
                                используйте сторонние утилиты, например{" "}
                                <mark className="app">
                                  OBS<sup>2</sup>
                                </mark>
                                .
                                <ul>
                                  <li>
                                    <sup>2</sup> В <mark className="app">OBS</mark>{" "}
                                    рекомендуется изменить формат записи с{" "}
                                    <mark className="video">MKV</mark>, который
                                    используется по умолчанию, на{" "}
                                    <mark className="video">MP4</mark>. Это можно сделать
                                    в настройках программы:{" "}
                                    <mark className="ui">
                                      Файл &gt; Настройки &gt; Вывод &gt; Формат записи
                                    </mark>{" "}
                                    или{" "}
                                    <mark className="ui">
                                      File &gt; Settings &gt; Output &gt; Recording Format
                                    </mark>
                                    .
                                  </li>
                                </ul>
                              </AdditionWarning>
                            </li>
                          </ul>
                          <AdditionInfo>
                            Подробнее о стандартных средствах создания{" "}
                            <a href="https://support.apple.com/ru-ru/102646">
                              скриншотов
                            </a>{" "}
                            и{" "}
                            <a href="https://support.apple.com/ru-ru/102618">
                              скринкастов
                            </a>{" "}
                            на <mark>macOS</mark> вы можете прочитать на официальном сайте{" "}
                            <mark>Apple</mark>.
                          </AdditionInfo>
                        </div>
                      }
                      windowsContent={
                        <div>
                          <p>
                            Для того чтобы сделать <mark className="image">скриншот</mark>{" "}
                            - воспользуйтесь прекрасной клавишей{" "}
                            <mark className="key">Print Screen</mark> на вашей клавиатуре.
                            Если вы не смогли найти эту клавишу на вашей клавиатуре - это
                            не означает, что можно снимать экран камерой телефона. Если на
                            вашей клавиатуре действительно нет этой клавиши - вы можете
                            воспользоваться стандартным в <mark>Windows</mark>{" "}
                            инструментом{" "}
                            <mark className="app">
                              Ножницы<sup>1</sup>
                            </mark>
                            , которую можно вызвать с помощью комбинации клавиш{" "}
                            <mark className="key">Win + Shift + S</mark>. Также с помощью
                            этой программы в последних обновлениях вы можете записать{" "}
                            <mark className="video">скринкаст</mark> вашего экрана без
                            необходимости доставать мобильное устройство.
                          </p>
                          <AdditionInfo>
                            <sup>1</sup> Если <mark className="app">Ножницы</mark> были
                            вырезаны из вашей сборки <mark>Windows</mark> - скачать их
                            обратно можно в <mark className="app">Microsoft Store</mark>{" "}
                            по{" "}
                            <a href="https://apps.microsoft.com/detail/9MZ95KL8MR0L">
                              этой ссылке
                            </a>
                            .
                          </AdditionInfo>
                          <p>
                            Если по каким-то причинам вы не можете или не хотите
                            использовать <mark className="app">Ножницы</mark> - есть ряд
                            сторонних утилит для съёмки экрана или создания{" "}
                            <mark className="image">скриншотов</mark>.
                          </p>
                          <ul>
                            <li>
                              <a
                                href="https://github.com/ShareX/ShareX/releases"
                                rel="noreferrer"
                                target="_blank"
                              >
                                ShareX
                              </a>{" "}
                              - популярная программа для создания скриншотов или записи
                              экрана. Легко кастомизируется и настраивается.
                            </li>
                            <li>
                              <a
                                href="https://www.ntwind.com/software/wincam.html"
                                rel="noreferrer"
                                target="_blank"
                              >
                                WinCam
                              </a>{" "}
                              - простая и легковесная программа для записи экрана.
                            </li>
                            <li>
                              <a
                                href="https://www.nvidia.com/ru-ru/software/nvidia-app/"
                                rel="noreferrer"
                                target="_blank"
                              >
                                NVIDIA App
                              </a>{" "}
                              - программа для пользователей видеокарт <mark>NVIDIA</mark>.
                            </li>
                            <li>
                              <a
                                href="https://www.amd.com/en/products/software/adrenalin.html"
                                rel="noreferrer"
                                target="_blank"
                              >
                                AMD Software: Adrenalin Edition
                              </a>{" "}
                              - аналогичная программа для пользователей видеокарт{" "}
                              <mark>AMD</mark>.
                            </li>
                          </ul>
                        </div>
                      }
                    />
                  </li>
                  <li>
                    Если хотите приложить к вашему вопросу{" "}
                    <mark className="image">скриншот</mark> или{" "}
                    <mark className="video">скринкаст</mark> - не обрезайте его слишком
                    сильно, особенно если речь идёт об интерфейсе. Иногда решение
                    находится именно в той области, которую вы вырезали.
                  </li>
                  <li>
                    Пожалуйста, воздержитесь от{" "}
                    <a href="https://nometa.xyz/ru.html">мета-вопросов</a>. Чтобы
                    сэкономить время - сразу формулируйте свой вопрос, а не начинайте с
                    общих фраз:{" "}
                    <mark className="quote">
                      а есть ли здесь знатоки [название плагина]?
                    </mark>
                    , <mark className="quote">нужна помощь, пишите в ЛС</mark>,{" "}
                    <mark className="quote">сложно описать проблему, помогите в ЛС</mark>,{" "}
                    <mark className="quote">ау, что все молчат?</mark> и подобных.
                    Вопросы, которые подразумевают дополнительные вопросы - не вызывают
                    желания отвечать и затрудняют получение быстрого и конкретного ответа,
                    пока вы не сформулируете свой вопрос полностью. В примере с зелёным
                    фоном сразу задан четкий и понятный вопрос, на который любой участник
                    чата может быстро ответить. В примере с красным фоном создается
                    впечатление, что участники чата должны обладать экстрасенсорными
                    способностями и угадывать, в чем именно заключается проблема или
                    просьба о помощи.
                    <div className="message-flex">
                      <div className="message-incorrect">
                        <div className="message-left">всем плотнейший салам</div>
                        <div
                          style={{
                            opacity: 0.5,
                            fontSize: "0.725rem",
                            textAlign: "center",
                          }}
                        >
                          Прошло 3 минуты
                        </div>
                        <div className="message-left">бля але, кто живой есть?</div>
                        <div className="message-right">
                          Привет, это не техподдержка <mark>Adobe</mark>. Если у вас есть
                          вопрос - задайте его сразу. Для нетематических разговоров у нас
                          есть флудилка.
                        </div>
                        <div className="message-left">
                          есть кто шарит в интерфейсе афтера?
                        </div>
                        <div className="message-right">
                          Допустим, есть. Что конкретно вас интересует?
                        </div>
                        <div className="message-left">
                          не могу объяснить норм, в лс плиз
                        </div>
                        <div className="message-right">
                          Нет, в личные сообщения не получится. Опишите свой вопрос здесь,
                          в чате. Иначе, зачем вы здесь оказались? Просто привлечь
                          внимание и отнимать чужое время?
                        </div>
                        <div
                          style={{
                            opacity: 0.5,
                            fontSize: "0.725rem",
                            textAlign: "center",
                          }}
                        >
                          Прошло N минут
                        </div>
                        <div className="message-left">
                          ок... поставил скрипт, а как его закрепить в рабочей области,
                          чтоб как панель был?
                        </div>
                        <div className="message-right">
                          Вот, другое дело. Нужно поместить .jsx скрипт в подпапку{" "}
                          <mark className="path">ScriptsUI Panels</mark> в папке с
                          программой, а не просто в папку{" "}
                          <mark className="path">Scripts</mark>. После этого скрипт
                          появится в меню <mark className="ui">Window</mark>, где вы
                          можете его открыть и закрепить, где вам будет удобно.
                        </div>
                        <div
                          style={{
                            opacity: 0.5,
                            fontSize: "0.725rem",
                            textAlign: "center",
                          }}
                        >
                          Время переписки: ~5-30 минут с учетом времени ожидания ответа
                        </div>
                      </div>
                      <div className="message-correct">
                        <div className="message-left">
                          Всем привет! Как закрепить окно скрипта в рабочей области, если
                          он установлен в папку <mark className="path">Scripts</mark>?
                        </div>
                        <div className="message-right">
                          Переместите .jsx скрипт в папку{" "}
                          <mark className="path">ScriptsUI Panels</mark>, расположенную
                          внутри папки <mark className="path">Scripts</mark>. После этого
                          скрипт появится в меню <mark className="ui">Window</mark>, где
                          его можно будет открыть и закрепить.
                        </div>
                        <div className="message-left">Спасибо, всё получилось!</div>
                        <div
                          style={{
                            opacity: 0.5,
                            fontSize: "0.725rem",
                            textAlign: "center",
                          }}
                        >
                          Время переписки: ~30 секунд
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    Если ваш вопрос остался незамеченным - не нужно жаловаться и ныть об
                    этом. Достаточно удалить<sup>1</sup> старое сообщение и написать его
                    снова.
                    <AdditionWarning>
                      <sup>1</sup> Пожалуйста, не пренебрегайте этим - слишком частое
                      повторение вопроса может привести к запрету на отправку сообщений по
                      усмотрению администрации чата.
                    </AdditionWarning>
                  </li>
                </ul>
              </section>
            </div>
            <h2
              className="faq-section-title"
              id="answers"
            >
              Об ответах на вопросы
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <ul>
                  <li>
                    В чате разрешено делиться ссылками<sup>1</sup> на обучающие материалы,
                    включая <mark className="app">YouTube</mark>, в качестве ответа на
                    вопросы других пользователей. Приветствуется публикация собственных
                    решений<sup>2</sup> различных проблем, в том числе нестандартных.
                    <AdditionInfo>
                      <ul>
                        <li>
                          <sup>1</sup> Учтите, что бот может удалять некоторые ссылки{" "}
                          <mark className="app">Telegram</mark> в чате, которых нет в
                          закреплённом сообщении. Если вы хотите поделиться с кем-то
                          каналом - перешлите его собеседнику в личные сообщения.
                        </li>
                        <li>
                          <sup>2</sup> Если ваш ответ или решение содержит полезную
                          информацию, релевантную популярному вопросу - он может быть
                          добавлен в раздел FAQ по{" "}
                          <a href="#aefaq">Adobe After Effects</a>,{" "}
                          <a href="#prfaq">Adobe Premiere Pro</a> или{" "}
                          <a href="#psfaq">Adobe Photoshop</a>.
                        </li>
                      </ul>
                    </AdditionInfo>
                  </li>
                  <li>
                    В связи с популярностью различных нейросетей, например{" "}
                    <mark className="app">ChatGPT</mark>,{" "}
                    <mark className="app">DeepSeek</mark> или{" "}
                    <mark className="app">Qwen</mark>,{" "}
                    <b>
                      <u>не рекомендуется публиковать в чате ответ</u>
                    </b>
                    , полностью сгенерированный с помощью этих инструментов. Как минимум,
                    нейросети могут (и любят) давать неверную информацию о продуктах{" "}
                    <mark>Adobe</mark>, особенно если модуль для поиска при генерации
                    ответа был отключен. Это может ввести в заблуждение человека,
                    задающего вопрос.
                    <AdditionWarning>
                      Администрация чата может удалять такие ответы без предупреждения,
                      если они не несут практической ценности.
                    </AdditionWarning>
                  </li>
                  <li>
                    Если вопрос участника чата касается выражений для{" "}
                    <mark className="app">Adobe After Effects</mark>, и вы хотите
                    сгенерировать для него код - проверьте его работоспособность в своей
                    программе, объясните, как его использовать, и, при необходимости,
                    доведите его до рабочего состояния.
                  </li>
                </ul>
              </section>
            </div>
            <h2
              className="faq-section-title"
              id="admins"
            >
              Никто никому ничего не обязан
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <p>
                  Администрация следит за порядком и по мере возможности помогает
                  участникам, но, к сожалению, мы не всесильны. Не стоит ожидать, что
                  кто-то обязательно решит именно ваш вопрос, и не рассчитывайте на
                  мгновенный ответ - ни от администраторов, ни от других участников чата.
                </p>
                <AdditionDanger>
                  <ul>
                    <li>
                      Если ваш вопрос не касается работы чата, каналов{" "}
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
                      </a>{" "}
                      - не нужно писать администраторам в личные сообщения. Если не
                      получается войти в чат или писать сообщения - убедитесь, что вы
                      нажали на кнопку <mark className="ui">Перейти в чат</mark> и не
                      нарушали правила.
                    </li>
                    <li>
                      Если на ваш вопрос откликнулся участник чата - не надо сразу звать
                      его в личные сообщения. Ему может быть неудобно, да и другим
                      участникам будет полезно, если обсуждение продолжится в чате.
                    </li>
                    <li>
                      Бот в чате может удалять сообщения с упоминанием пользователей,
                      поэтому старайтесь при формулировке вопроса не использовать
                      упоминание через <mark>@</mark>.
                    </li>
                  </ul>
                </AdditionDanger>
              </section>
            </div>
            <h2
              className="faq-section-title"
              id="discipline"
            >
              Ведём себя прилично, не гадим в чате и не злимся на других
            </h2>
            <div className="faq-content">
              <section className="faq-section">
                <ul>
                  <li>
                    В чате запрещены спам, флуд<sup>1</sup> и чрезмерное употребление
                    нецензурной лексики. Также недопустимы оскорбления пользователей,
                    упоминание родственников в негативном ключе и токсичное поведение.
                    <AdditionInfo>
                      <sup>1</sup> Под флудом подразумевается отход от темы обсуждения,
                      вопросы не по продуктам <mark>Adobe</mark> или много бессмысленных
                      сообщений.
                    </AdditionInfo>
                  </li>
                  <li>
                    В чате не приветствуются политические дискуссии, а также публикация
                    порнографии или любого другого NSFW-контента, вне зависимости от
                    контекста.
                  </li>
                  <li>
                    Запрещены купля, продажа и перепродажа товаров, шаблонов,
                    &quot;доступов&quot;, реферальных ссылок, а также реклама каких-либо
                    ресурсов без согласования с администрацией.
                  </li>
                </ul>
                <AdditionWarning>
                  <ul>
                    <li>
                      Администрация оставляет за собой право банить пользователей за
                      провокационные ники и сомнительные аватарки, например, с
                      изображением нацистской символики.
                    </li>
                    <li>
                      Если после блокировки или запрета на отправку сообщений вы решите
                      зайти с <mark className="word">твинка</mark> или же с другого
                      аккаунта, чтобы поязвить дальше - в постоянный бан пойдут оба
                      аккаунта вне зависимости от наказания.
                    </li>
                  </ul>
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
                  Если вы хотите опубликовать вакансию, заказ или резюме - соблюдайте
                  простые требования по размещению. Это поможет сэкономить время как вам,
                  так и вашему потенциальному клиенту или исполнителю.
                </p>
                <AdditionWarning>
                  Администрация оставляет за собой право удалить ваше объявление, если в
                  нём толком не указано ничего, кроме{" "}
                  <mark className="quote">есть заказ пишите в лс</mark>. Большинству
                  потенциальных исполнителей не интересно бегать в личные сообщения, чтобы
                  узнать, какую задачу нужно выполнить.
                </AdditionWarning>
                <Divider>Правила для публикации вакансии</Divider>
                <ul>
                  <li>
                    Укажите хештег <mark className="tag">#работа</mark> в начале вашего
                    объявления. Этого хватит, чтобы быстро найти ваш пост среди множества
                    остальных вопросов в чате.
                  </li>
                  <li>
                    Опишите подробно ваше техническое задание или что нужно сделать,
                    желательно с примерами, если они есть. Постарайтесь не отправлять
                    людей в личные сообщения для его получения. Таким образом, вы сузите
                    круг слишком любопытных лиц и сможете найти хорошего исполнителя.
                    <AdditionInfo>
                      Если вы по каким-то причинам не хотите разглашать техническое
                      задание, хотя бы кратко опишите тему и примерно что нужно сделать.
                    </AdditionInfo>
                  </li>
                  <li>
                    Укажите в вашем объявлении бюджет, цену или ставку. Не удивляйтесь,
                    если на ваше объявление люди отреагируют негативно, если вы не указали
                    ставку или указали слишком низкую цену.
                    <AdditionInfo>
                      Если вы не знаете, сколько стоит выполнение вашего заказа - укажите
                      в объявлении, сколько вы готовы потратить на заказ, и что
                      исполнитель может сам предложить свою цену. Таким образом, скорее
                      всего, вы сойдётесь на оптимальной сумме и для вас, и для
                      исполнителя.
                    </AdditionInfo>
                  </li>
                  <li>
                    Также укажите, где вам будет удобнее общаться с потенциальным
                    заказчиком. Если у вас в настройках конфиденциальности{" "}
                    <mark className="ui">Кто может отправлять мне сообщения</mark>{" "}
                    установлено значение{" "}
                    <mark className="ui">Контакты и Premium-подписчики</mark>, установите
                    на время значение <mark className="ui">Все</mark> или напишите
                    потенциальному исполнителю личное сообщение первым, если он сам
                    попросит это сделать.
                  </li>
                </ul>
                <Divider>Правила для самопиара или резюме</Divider>
                <ul>
                  <li>
                    Укажите хештег <mark className="tag">#резюме</mark> в начале вашей
                    записи и приложите<sup>1</sup> несколько ваших работ в виде фото или
                    видео для демонстрации ваших навыков.
                    <AdditionInfo>
                      <p>
                        <sup>1</sup> Если вы по каким-то причинам не хотите перезаливать
                        ваши видео - прикрепите ссылку на ваше портфолио<sup>2</sup>,
                        например, на Behance, Яндекс.Диск, Kwork или других площадках.
                      </p>
                      <ul>
                        <li>
                          <sup>2</sup> Ссылка на канал в{" "}
                          <mark className="app">Telegram</mark> с вашим портфолио может
                          удаляться ботом в чате. Если портфолио находится только там - вы
                          можете прикрепить его к вашему профилю и указать об этом в
                          резюме. Чтобы прикрепить канал в ваш профиль - он должен быть
                          публичным и доступен каждому пользователю.
                        </li>
                      </ul>
                    </AdditionInfo>
                  </li>
                  <li>
                    Укажите ваше направление или с чем вы умеете работать. Также не
                    забудьте указать софт, в котором вы можете работать свободно. Для
                    самого минимума хватит уверенного знания базы{" "}
                    <mark className="app">Adobe After Effects</mark>,{" "}
                    <mark className="app">Adobe Premiere Pro</mark> и{" "}
                    <mark className="app">Adobe Photoshop</mark>, а также поверхностных
                    знаний в 3D-софте, например, <mark className="app">Blender</mark> или{" "}
                    <mark className="app">Cinema 4D</mark>.
                  </li>
                  <li>
                    Укажите вашу минимальную ставку или стоимость определённых работ.
                    Учтите, что, указав слишком высокую цену при несоответствии качеству
                    ваших работ, вы вряд ли сможете быстро найти заказчика.
                    <AdditionInfo>
                      Если вы не можете определиться со стоимостью ваших работ - укажите,
                      что заказчик может сам установить цену для его заказа. Не обижайте
                      себя, но и не переоценивайте. Вы можете при необходимости
                      договориться с заказчиком, если посчитаете его цену слишком низкой
                      или необоснованной. Возможно, вам повезёт взять за заказ больше
                      денег, чем в среднем по рынку.
                    </AdditionInfo>
                  </li>
                </ul>
                <AdditionDanger>
                  Бывают случаи, когда заказчик или исполнитель может обмануть
                  противоположную сторону и не заплатить за выполненную работу или не
                  выполнить оплаченную работу. В таком случае, если проблема не решается
                  лично - вы можете пожаловаться и придать огласке вашей ситуации в наших
                  чатах или в каналах на <Link to="/">главной странице</Link> в разделе{" "}
                  <mark className="ui">Черный список</mark>.
                </AdditionDanger>
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
