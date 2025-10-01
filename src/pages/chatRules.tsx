import {Divider, Tooltip, message} from "antd";

import {motion} from "framer-motion";

import React, {useCallback, useEffect} from "react";

import {Helmet} from "react-helmet-async";

import {Link, useLocation} from "react-router-dom";

import Addition from "../components/Addition";

import ContentFilter from "../components/features/ContentFilter";

import {ShareRounded} from "@mui/icons-material";

import Footer from "../components/Footer";

import Header from "../components/Header";

import {useCopyToClipboard} from "../hooks/useCopyToClipboard";

import PageIntro from "../components/PageIntro";

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

  const {enableAutoCopy} = useCopyToClipboard();

  const handleCopyAnchor = useCallback((anchorId: string) => {
    const anchor = `${window.location.origin}${window.location.pathname}#${anchorId}`;
    navigator.clipboard.writeText(anchor);
    message.success(`Ссылка на раздел скопирована в буфер обмена`);
  }, []);

  const enableAnchorCopyButtons = useCallback(() => {
    const copyButtons = document.querySelectorAll(".copy-button");
    copyButtons.forEach((button) => {
      const anchorId = button.getAttribute("data-anchor-id");

      if (anchorId) {
        button.addEventListener("click", () => handleCopyAnchor(anchorId));
      }
    });
  }, [handleCopyAnchor]);
  useEffect(() => {
    enableAutoCopy();
    enableAnchorCopyButtons();
  }, [enableAutoCopy, enableAnchorCopyButtons]);
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
          content="Правила AEChat и DWChat"
          property="og:title"
        />
        <meta
          content="Правила чатов AEChat и DWChat"
          property="og:description"
        />
      </Helmet>
      <Header title="rules" />
      <PageIntro text="rules" />
      <motion.main
        animate={{x: 0, y: 0, opacity: 1}}
        className="main"
        exit={{x: 0, y: 50, opacity: 0}}
        initial={{x: 0, y: 0, opacity: 0}}
        transition={{
          duration: 0.3,
          ease: [0.25, 0, 0, 1],
        }}
      >
        <div className="faq-container-flex">
          <div
            className="faq-container"
            style={{marginBlockStart: "20px"}}
          >
            <div className="faq-title">
              <h1>Правила AEChat и DWChat</h1>
            </div>
            <h2
              className="rules-title"
              id="about"
            >
              Описание AEChat и DWChat
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <button
                  className="copy-button"
                  data-anchor-id="about"
                  style={{
                    flex: "none",
                  }}
                >
                  <ShareRounded />
                </button>
              </Tooltip>
            </h2>
            <div className="rules-content">
              <section className="rules-section faq-content">
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
                  вы можете обсуждать вопросы, соответствующие их тематике. В{" "}
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
                  — <mark className="app">Adobe Photoshop</mark>,{" "}
                  <mark className="app">Adobe Illustrator</mark>,{" "}
                  <mark className="app">Figma</mark> и другие дизайнерские программы.
                  Основной язык общения — русский.
                </p>
                <Addition type="info">
                  Пожалуйста, старайтесь не выходить за рамки тематики чатов, обсуждая,
                  например, другое ПО или компьютерное железо. Для этого есть{" "}
                  <Link to="/">другие чаты</Link>.{" "}
                  <i style={{opacity: "0.5"}}>
                    Возможны исключения по усмотрению администрации.
                  </i>
                </Addition>
                <Addition type="danger">
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
                        Правила могут не распространяться на действующих членов
                        администрации чата.
                      </i>
                    </li>
                  </ul>
                </Addition>
              </section>
            </div>
            <h2
              className="rules-title"
              id="tone"
            >
              Правила хорошего тона
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <button
                  className="copy-button"
                  data-anchor-id="tone"
                  style={{
                    flex: "none",
                  }}
                >
                  <ShareRounded />
                </button>
              </Tooltip>
            </h2>
            <div className="rules-content">
              <section className="rules-section faq-content">
                <p>
                  В наших чатах вы можете задавать различные вопросы, соответствующие
                  тематике. Однако, чтобы не раздражать остальных участников, — просто
                  соблюдайте простые правила хорошего тона.
                </p>
                <Addition type="info">
                  Прежде чем задать свой вопрос, — убедитесь, что ответа на него нет в
                  чате
                  <sup>1</sup> или в разделах FAQ по{" "}
                  <a href="#aefaq">Adobe After Effects</a>,{" "}
                  <a href="#prfaq">Adobe Premiere Pro</a> или{" "}
                  <a href="#psfaq">Adobe Photoshop</a>.
                  <li>
                    <sup>1</sup> Вы можете воспользоваться поиском по чату. На мобильных
                    устройствах он находится в контекстном меню в правом углу экрана, а на
                    десктопе — вызывается с помощью <mark className="key">Ctrl + F</mark>.
                  </li>
                </Addition>
                <ul>
                  <li>
                    В своём вопросе укажите используемую программу и её версию, а также
                    расскажите о проекте: что используется из эффектов, какой формат
                    исходников и прочие подробности. При необходимости вы можете приложить
                    характеристики вашего устройства. Это поможет сузить область поиска
                    проблемы.
                  </li>
                  <li>
                    Если у вас возникла ошибка или проблема с программой — опишите, что
                    именно вы делали перед тем, как что-то пошло не так. Чем подробнее
                    будет описание, тем быстрее получится понять и решить проблему,
                    исключив лишние догадки.
                  </li>
                  <li>
                    Если вы недавно установили программы от{" "}
                    <mark className="company">Adobe</mark> и хотите задать свои вопросы —
                    пожалуйста, не нужно давить на жалость и делать акцент на том, что вы
                    новичок и ничего не знаете. Это не ускорит получение ответа.
                    Большинство ответов на{" "}
                    <mark className="word">«ламерские» вопросы</mark>, возникающие в
                    начале изучения программ, находятся в закреплённом сообщении чата, в
                    разделах <mark>FAQ</mark> на этом сайте и в первых строках поисковой
                    выдачи условного <mark className="app">Яндекса</mark>.
                  </li>
                  <li>
                    Если ваш вопрос остался незамеченным — не нужно жаловаться и ныть об
                    этом. Достаточно удалить<sup>1</sup> старое сообщение и написать его
                    снова. Администрация следит за порядком и по мере возможности помогает
                    участникам, но, к сожалению, мы не всесильны. Не стоит ожидать, что
                    кто-то обязательно решит именно ваш вопрос, и не рассчитывайте на
                    мгновенный ответ — ни от администраторов, ни от других участников
                    чата.
                    <Addition type="warning">
                      <sup>1</sup> Пожалуйста, не пренебрегайте этим: слишком частое
                      повторение вопроса может привести к запрету на отправку сообщений по
                      усмотрению администрации чата.
                    </Addition>
                  </li>
                  <li>
                    Показывая проблему, пожалуйста, не делайте{" "}
                    <mark className="image">снимки экрана</mark> или видео вашего
                    устройства с помощью камеры телефона. На них ничего толком не видно и
                    захватывается не вся нужная область. Также, публикуя{" "}
                    <mark className="image">скриншот</mark>,{" "}
                    <mark className="image">фото</mark> или{" "}
                    <mark className="video">видео</mark>, стоит написать сам вопрос в
                    одном сообщении с ними, а не в следующем. Не стоит публиковать и
                    перевод окна ошибки через условный{" "}
                    <mark className="app">Google Lens</mark> — это, наоборот, замедляет
                    поиск решения из-за неточного перевода.
                    <Addition type="warning">
                      Администрация может на первое время пропустить фото монитора с
                      телефона, но если такое поведение повторяется — сообщения могут
                      удаляться, чтобы участник научился делать скриншоты.
                    </Addition>
                    <ContentFilter
                      macContent={
                        <div>
                          <p>
                            Администраторы часто замечают, что пользователи устройств на{" "}
                            <mark>macOS</mark> делают{" "}
                            <mark className="image">скриншоты</mark> ещё неохотнее, чем
                            те, кто сидит на <mark>Windows</mark>. Для решения этой
                            проблемы Apple оставила вам полезные комбинации клавиш,
                            которые не раз пригодятся в жизни.
                          </p>
                          <ul style={{marginInline: "-15px"}}>
                            <li>
                              <mark className="key">Ctrl + Command + Shift + 3</mark> —
                              эта комбинация клавиш позволяет сделать{" "}
                              <mark className="image">скриншот</mark> всего экрана.
                              Изображение автоматически сохранится в буфере обмена, откуда
                              его можно вставить в <mark className="app">Telegram</mark>.
                            </li>
                            <li>
                              <mark className="key">Ctrl + Command + Shift + 4</mark> —
                              позволяет выделить и сделать{" "}
                              <mark className="image">скриншот</mark> только определённой
                              области экрана. Как и в предыдущем случае, изображение
                              попадёт в буфер обмена для дальнейшего использования.
                            </li>
                            <li>
                              <mark className="key">Command + Shift + 5</mark> — откроет
                              утилиту<sup>1</sup> для записи всего экрана или только
                              выбранной его части.
                              <Addition type="warning">
                                <sup>1</sup> Стандартные средства <mark>macOS</mark> могут
                                записывать видео так, что не у всех участников чата оно
                                открывается корректно. Чтобы ваш полученный{" "}
                                <mark className="video">скринкаст</mark> открылся у
                                каждого — перекодируйте видео в{" "}
                                <mark className="video">H.264</mark> и немного понизьте
                                его разрешение через{" "}
                                <mark className="app">Shutter Encoder</mark> или
                                используйте сторонние утилиты для записи экрана, например{" "}
                                <mark className="app">OBS</mark>
                                <sup>2</sup>.
                                <ul>
                                  <li>
                                    <sup>2</sup> В <mark className="app">OBS</mark>{" "}
                                    рекомендуется изменить формат записи с{" "}
                                    <mark className="video">MKV</mark>, который
                                    используется по умолчанию, на{" "}
                                    <mark className="video">MP4</mark>. Это можно сделать
                                    в настройках программы:{" "}
                                    <mark className="select">
                                      Файл → Настройки → Вывод → Формат записи
                                    </mark>{" "}
                                    или{" "}
                                    <mark className="select">
                                      File → Settings → Output → Recording Format
                                    </mark>
                                    .
                                  </li>
                                </ul>
                              </Addition>
                            </li>
                          </ul>
                          <Addition type="info">
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
                          </Addition>
                        </div>
                      }
                      windowsContent={
                        <div>
                          <p>
                            Чтобы сделать <mark className="image">скриншот</mark>,
                            воспользуйтесь клавишей{" "}
                            <mark className="key">Print Screen</mark> на вашей клавиатуре.
                            Если вы не смогли найти эту клавишу — это не означает, что
                            можно снимать экран камерой телефона. Если на вашей клавиатуре
                            действительно нет этой клавиши — воспользуйтесь стандартным
                            для <mark>Windows</mark> инструментом{" "}
                            <mark className="app">
                              «Ножницы»<sup>1</sup>
                            </mark>
                            , который можно вызвать комбинацией клавиш{" "}
                            <mark className="key">Win + Shift + S</mark>. Также с помощью
                            этой программы в последних обновлениях можно записать{" "}
                            <mark className="video">скринкаст</mark> вашего экрана без
                            необходимости доставать мобильное устройство.
                          </p>
                          <Addition type="info">
                            <sup>1</sup> Если <mark className="app">«Ножницы»</mark> были
                            вырезаны из вашей сборки <mark>Windows</mark> — скачать их
                            обратно можно в <mark className="app">Microsoft Store</mark>{" "}
                            по{" "}
                            <a href="https://apps.microsoft.com/detail/9MZ95KL8MR0L">
                              этой ссылке
                            </a>
                            .
                          </Addition>
                          <p>
                            Если по каким-то причинам вы не можете или не хотите
                            использовать <mark className="app">«Ножницы»</mark> — есть ряд
                            сторонних утилит для съёмки экрана или создания{" "}
                            <mark className="image">скриншотов</mark>.
                          </p>
                          <div
                            className="flexible-links"
                            style={{marginInline: "0"}}
                          >
                            <a
                              href="https://github.com/ShareX/ShareX/releases"
                              rel="noreferrer"
                              target="_blank"
                            >
                              ShareX
                            </a>
                            <a
                              href="https://www.ntwind.com/software/wincam.html"
                              rel="noreferrer"
                              target="_blank"
                            >
                              WinCam
                            </a>
                            <a
                              href="https://www.nvidia.com/en-eu/software/nvidia-app/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              NVIDIA App
                            </a>
                            <a
                              href="https://www.amd.com/en/products/software/adrenalin.html"
                              rel="noreferrer"
                              target="_blank"
                            >
                              AMD Software: Adrenalin Edition
                            </a>
                          </div>
                        </div>
                      }
                    />
                  </li>
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
                    </a>
                    , — не нужно писать администраторам в личные сообщения. Если не
                    получается войти в чат или писать сообщения — убедитесь, что вы нажали
                    на кнопку <mark className="select">«Перейти в чат»</mark> и не
                    нарушали правила.
                  </li>
                  <li>
                    В чате разрешено делиться ссылками<sup>1</sup> на обучающие материалы,
                    включая <mark className="app">YouTube</mark>, в качестве ответа на
                    вопросы других пользователей. Приветствуется публикация собственных
                    решений<sup>2</sup> различных проблем, в том числе нестандартных.
                    <Addition type="info">
                      <ul>
                        <li>
                          <sup>1</sup> Учтите, что бот может удалять некоторые ссылки на{" "}
                          каналы в <mark className="app">Telegram</mark>, которых нет в
                          закреплённом сообщении. Если вы хотите поделиться с кем-то
                          каналом — перешлите его собеседнику в личные сообщения.
                        </li>
                        <li>
                          <sup>2</sup> Если ваш ответ или решение содержит полезную
                          информацию, релевантную популярному вопросу, — они могут быть
                          добавлены в <mark>FAQ</mark> по{" "}
                          <a href="#aefaq">Adobe After Effects</a>,{" "}
                          <a href="#prfaq">Adobe Premiere Pro</a> или{" "}
                          <a href="#psfaq">Adobe Photoshop</a>.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <p>
                      В связи с популярностью различных нейросетей, например{" "}
                      <mark className="app">ChatGPT</mark>,{" "}
                      <mark className="app">DeepSeek</mark> или{" "}
                      <mark className="app">Qwen</mark>, не рекомендуется публиковать в
                      чате ответ, полностью сгенерированный с помощью этих инструментов, а
                      также верить их ответам. Как минимум, нейросети могут и любят давать
                      неверную информацию о продуктах{" "}
                      <mark className="company">Adobe</mark>, особенно если модуль для
                      поиска при генерации ответа был отключён.
                    </p>
                    <Addition type="warning">
                      Администрация чата оставляет за собой право удалять такие ответы без
                      предупреждения, если они не несут практической ценности.
                    </Addition>
                    <p>
                      Если вы не уверены в своём ответе на вопрос, лучше ничего не писать
                      — это может ввести в заблуждение человека, задающего вопрос, а
                      простой диалог может растянуться на множество сообщений из-за
                      неверного ответа.
                    </p>
                    <p>
                      Другое дело, если вопрос участника чата касается выражений для{" "}
                      <mark className="app">Adobe After Effects</mark>, и вы хотите
                      сгенерировать для него код — сначала проверьте его работоспособность
                      в своей программе, объясните, как его использовать, и при
                      необходимости доведите до рабочего состояния. После этого вы можете
                      спокойно поделиться выражением или самодельным скриптом.
                    </p>
                  </li>
                  <li>
                    <p>
                      Если вы только что зашли в чат и у вас есть вопрос, не нужно
                      говорить <mark className="quote">«Привет!»</mark> или{" "}
                      <mark className="quote">«У меня есть вопрос, помогите!!!!»</mark>, а
                      сам вопрос умалчивать. Такое явление называется{" "}
                      <mark className="word">«метавопрос»</mark>. Вопросы, которые требуют
                      встречных вопросов, не вызывают желания отвечать и затрудняют
                      получение быстрого и конкретного ответа, пока вы не сформулируете
                      свою проблему полностью.
                    </p>
                    <Addition type="danger">
                      <ul>
                        <li>
                          Если на ваш вопрос откликнулся участник чата — не надо сразу
                          звать его в личные сообщения. Ему может быть неудобно, да и
                          другим участникам будет полезно, если обсуждение продолжится в
                          чате.
                        </li>
                        <li>
                          Бот в чате может удалять сообщения с упоминанием пользователей,
                          поэтому старайтесь при формулировке вопроса не использовать
                          упоминания через <mark>@</mark>.
                        </li>
                      </ul>
                    </Addition>
                    <p>
                      В примере с зелёным фоном сразу задан чёткий и понятный вопрос, на
                      который любой участник чата может быстро ответить. Не нужно зазывать
                      пользователей в личные сообщения, если вы по каким-то причинам не
                      хотите задавать вопрос в чате. В примере с красным фоном создаётся
                      впечатление, что участники чата должны обладать экстрасенсорными
                      способностями и угадывать, в чём именно заключается проблема или
                      просьба о помощи.
                    </p>
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
                          Привет, это не техподдержка{" "}
                          <mark className="company">Adobe</mark>. Если у вас есть вопрос —
                          задайте его сразу. Для нетематических разговоров у нас есть
                          флудилка.
                        </div>
                        <div className="message-left">
                          есть кто шарит в интерфейсе афтера?
                        </div>
                        <div className="message-right">
                          Допустим, есть. Что конкретно вас интересует?
                        </div>
                        <div className="message-left">
                          не могу объяснить норм, можете в лс плиз??
                        </div>
                        <div className="message-right">
                          Опишите свой вопрос здесь, в чате. Иначе зачем вы здесь
                          оказались? Просто привлечь внимание и отнимать чужое время?
                        </div>
                        <div className="message-left">чел ебать ты токсик</div>
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
                          ладно, исправляюсь... поставил скрипт, а как его закрепить в
                          рабочей области, чтобы как панель был?
                        </div>
                        <div className="message-right">
                          Вот, другое дело. Нужно поместить .jsx-скрипт в подпапку{" "}
                          <mark className="path">ScriptsUI Panels</mark> в папке с
                          программой, а не просто в папку{" "}
                          <mark className="path">Scripts</mark>. После этого скрипт
                          появится в меню <mark className="select">Window</mark>, где вы
                          можете его открыть и закрепить где вам удобно.
                        </div>
                        <div
                          style={{
                            opacity: 0.5,
                            fontSize: "0.725rem",
                            textAlign: "center",
                          }}
                        >
                          Время переписки: ~5–30 минут с учётом времени ожидания ответа
                        </div>
                      </div>
                      <div className="message-correct">
                        <div className="message-left">
                          Всем привет! Как закрепить окно скрипта в рабочей области, если
                          он установлен в папку <mark className="path">Scripts</mark>?
                        </div>
                        <div className="message-right">
                          Переместите .jsx-скрипт в папку{" "}
                          <mark className="path">ScriptsUI Panels</mark>, расположенную
                          внутри папку <mark className="path">Scripts</mark>. После этого
                          скрипт появится в меню <mark className="select">Window</mark>,
                          где его можно будет открыть и закрепить.
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
                </ul>
              </section>
            </div>
            <h2
              className="rules-title"
              id="ban"
            >
              Что нельзя делать в чатах?
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <button
                  className="copy-button"
                  data-anchor-id="ban"
                  style={{
                    flex: "none",
                  }}
                >
                  <ShareRounded />
                </button>
              </Tooltip>
            </h2>
            <div className="rules-content">
              <section className="rules-section faq-content">
                <ul>
                  <li>
                    В чатах запрещены спам, флуд<sup>1</sup> и чрезмерное употребление
                    нецензурной лексики. Также недопустимы оскорбления, упоминание
                    родственников в негативном ключе и токсичное поведение.
                    <Addition type="info">
                      <sup>1</sup> Под флудом подразумевается отход от темы обсуждения,
                      вопросы не по продуктам <mark className="company">Adobe</mark>,
                      повторяющиеся вопросы или множество бессмысленных сообщений.
                    </Addition>
                  </li>
                  <li>
                    В чатах не приветствуются политические дискуссии, а также коверканье
                    наций и стран. Также не стоит использовать в своем профиле
                    провокационные ники и сомнительные аватарки, например, с изображением
                    нацистской символики или расистскими высказываниями.
                  </li>
                  <li>
                    В чатах не место порнографии или любого другого NSFW-контента вне
                    зависимости от контекста.
                  </li>
                  <li>
                    Запрещены купля, продажа и перепродажа товаров, шаблонов, «доступов»,
                    реферальных ссылок, а также реклама любых ресурсов без согласования с
                    администрацией.
                  </li>
                  <li>
                    Не рекомендуется отправлять в чат ссылки на опросы, созданные в{" "}
                    <mark className="app">Google Forms</mark> или аналогах, особенно если
                    вы только вошли в чат или мало участвуете в дискуссиях. Дело в том,
                    что опросы часто воспринимаются участниками как спам и мало кому
                    интересны.
                  </li>
                </ul>
                <Addition type="warning">
                  Если после блокировки или запрета на отправку сообщений вы решите зайти
                  с «твинка» или другого аккаунта, чтобы поязвить дальше, — в перманентный
                  бан отправятся оба аккаунта вне зависимости от первоначального
                  наказания.
                </Addition>
              </section>
            </div>{" "}
            <h2
              className="rules-title"
              id="work"
            >
              О вакансиях и резюме
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <button
                  className="copy-button"
                  data-anchor-id="work"
                  style={{
                    flex: "none",
                  }}
                >
                  <ShareRounded />
                </button>
              </Tooltip>
            </h2>
            <div className="rules-content">
              <section className="rules-section faq-content">
                <p>
                  Если вы хотите опубликовать вакансию, заказ или резюме — соблюдайте
                  простые требования к размещению. Это поможет сэкономить время и вам, и
                  вашему потенциальному клиенту или исполнителю.
                </p>
                <Addition type="warning">
                  Администрация оставляет за собой право удалить ваше объявление, если в
                  нём толком ничего не указано, кроме{" "}
                  <mark className="quote">«есть заказ, пишите в лс»</mark>. Большинству
                  потенциальных исполнителей неинтересно бегать в личные сообщения, чтобы
                  узнать, какую задачу нужно выполнить.
                </Addition>
                <Divider>Правила для публикации вакансии</Divider>
                <ul>
                  <li>
                    Укажите хештег <mark className="tag">#работа</mark> в начале вашего
                    объявления. Этого хватит, чтобы быстро найти ваш пост среди множества
                    других вопросов в чате.
                  </li>
                  <li>
                    Опишите подробно ваше техническое задание или что нужно сделать,
                    желательно с примерами, если они есть. Постарайтесь не отправлять
                    людей в личные сообщения для его получения. Таким образом вы сузите
                    круг слишком любопытных лиц и сможете найти хорошего исполнителя.
                    <Addition type="info">
                      Если вы по каким-то причинам не хотите разглашать техническое
                      задание, хотя бы кратко опишите тему и что примерно нужно сделать.
                    </Addition>
                  </li>
                  <li>
                    Укажите в вашем объявлении бюджет, цену или ставку. Не удивляйтесь,
                    если на ваше объявление отреагируют негативно, если вы не указали
                    ставку или предложили слишком низкую цену.
                    <Addition type="info">
                      Если вы не знаете, сколько стоит выполнение вашего заказа, — укажите
                      в объявлении, сколько вы готовы потратить, и добавьте, что
                      исполнитель может предложить свою цену. Скорее всего, так вы
                      сойдётесь на оптимальной сумме и для вас, и для исполнителя.
                    </Addition>
                  </li>
                  <li>
                    Также укажите, где вам будет удобнее общаться с потенциальным
                    исполнителем. Если у вас в настройках конфиденциальности{" "}
                    <mark className="select">«Кто может отправлять мне сообщения»</mark>{" "}
                    установлено значение{" "}
                    <mark className="select">«Контакты и Premium-подписчики»</mark>,
                    установите на время значение <mark className="select">«Все»</mark> или
                    напишите потенциальному исполнителю первым, если он сам об этом
                    попросит.
                  </li>
                </ul>
                <Divider>Правила для самопиара или резюме</Divider>
                <ul>
                  <li>
                    Укажите хештег <mark className="tag">#резюме</mark> в начале вашей
                    записи и приложите<sup>1</sup> несколько ваших работ в виде фото или
                    видео для демонстрации своих навыков.
                    <Addition type="info">
                      <p>
                        <sup>1</sup> Если вы по каким-то причинам не хотите перезаливать
                        ваши видео — прикрепите ссылку на своё портфолио<sup>2</sup>,
                        например, на <a href="https://www.behance.net/">Behance</a>,{" "}
                        <a href="https://disk.yandex.ru/">Яндекс.Диск</a>,{" "}
                        <a href="https://kwork.ru/">Kwork</a> или других площадках.
                      </p>
                      <ul>
                        <li>
                          <sup>2</sup> Ссылка на канал в{" "}
                          <mark className="app">Telegram</mark> с вашим портфолио может
                          удаляться ботом. Если портфолио находится только там —
                          прикрепите его к своему профилю и укажите это в резюме. Чтобы
                          прикрепить канал к профилю — он должен быть публичным и доступен
                          каждому пользователю.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    Укажите ваше направление и с чем вы умеете работать. Также не забудьте
                    указать софт, в котором вы работаете свободно. Для минимума хватит
                    уверенного знания базы{" "}
                    <mark className="app">Adobe After Effects</mark>,{" "}
                    <mark className="app">Adobe Premiere Pro</mark> и{" "}
                    <mark className="app">Adobe Photoshop</mark>, а также поверхностных
                    знаний в 3D-софте, например, <mark className="app">Blender</mark> или{" "}
                    <mark className="app">Cinema 4D</mark>.
                  </li>
                  <li>
                    Укажите вашу минимальную ставку или стоимость определённых работ.
                    Учтите, что, указав слишком высокую цену при несоответствии качеству
                    работ, вы вряд ли быстро найдёте заказчика.
                    <Addition type="info">
                      Если вы не можете определиться со стоимостью своих работ — укажите,
                      что заказчик может сам установить цену. Не обижайте себя, но и не
                      переоценивайте. При необходимости вы можете договориться с
                      заказчиком, если посчитаете его цену слишком низкой. Возможно, вам
                      повезёт взять за заказ больше денег, чем в среднем по рынку.
                    </Addition>
                  </li>
                </ul>
                <Addition type="danger">
                  Бывают случаи, когда заказчик или исполнитель обманывает другую сторону:
                  не платит за выполненную работу или не выполняет оплаченную. В таком
                  случае, если проблема не решается лично, — вы можете пожаловаться и
                  придать ситуацию огласке в наших чатах или в каналах из раздела{" "}
                  <mark className="select">«Чёрный список»</mark> на{" "}
                  <Link to="/">главной странице</Link>.
                </Addition>
              </section>
            </div>
            <Footer
              initialYear={2021}
              title="aechat + dwchat"
            />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default ChatRules;
