import React from "react";
import GithubUpdateInfo from "../../../components/features/GithubUpdateInfo";
import {
  AdditionDanger,
  AdditionInfo,
  AdditionWarning,
} from "../../../components/Additions";
import DetailsSummary from "../../../components/DetailsSummary";
import {Divider} from "antd";
import {ImageFigure, VideoFigure, YouTubeVideo} from "../../../components/ContentFigure";

const PSWhereFind: React.FC = () => {
  return (
    <div className="faq-content">
      <GithubUpdateInfo filePath="src/pages/sections/psfaq/WhereFind.tsx" />
      <DetailsSummary title="Где найти шаблоны, программы и плагины?">
        <p>
          На <a href="/">главной странице</a>, в закреплённом сообщении в чате{" "}
          <a
            href="https://t.me/joinchat/F1DdXtG9LephYWUy"
            title="AEChat в Telegram"
          >
            AEChat
          </a>{" "}
          и в списке ниже вы всегда сможете найти ссылки на наши каналы с полезным
          контентом.
        </p>
        <ul>
          <li>
            <a href="https://t.me/s/designworld">Design World</a> - канал с статичной
            графикой, эффектами и кистями для <mark className="app">Photoshop</mark>,
            которые в дальнейшем можно использовать в Ваших композициях{" "}
            <mark className="app">After Effects</mark>.
          </li>
          <li>
            <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
            <a href="https://t.me/s/premtemp">PremTemp</a> - каналы с переходами,
            шаблонами, расширениями и прочими ништяками для ваших проектов в{" "}
            <mark className="app">After Effects</mark> и{" "}
            <mark className="app">Premiere Pro</mark>. Оттуда можно почерпнуть идеи для
            ваших проектов в <mark className="app">Photoshop</mark>.
          </li>
        </ul>
        <AdditionWarning>
          Контент, предоставленный по ссылкам выше,{" "}
          <b>
            <u>не должен использоваться</u>
          </b>{" "}
          в коммерческих целях!
        </AdditionWarning>
        <ul>
          <li>
            <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> - канал с
            творческими программами, утилитами и плагинами к различным программам по
            демократичным ценам для пользователей компьютеров на базе Windows.
          </li>
          <li>
            <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад</a> - аналогичный канал
            с программами, как склад, но для пользователей устройств на macOS.
          </li>
        </ul>
        <AdditionInfo>
          Если у вас возникли проблемы с установкой программ или плагинов - прочтите
          раздел <a href="#install-problems">Проблемы с установкой</a> или обратитесь к
          нам в <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </AdditionInfo>
        <AdditionWarning>
          При установке программ с пометкой <mark>репак от кролика</mark> из{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склада стройматериалов (Windows)</a> не
          забывайте убирать галочку с пункта &quot;Реклама&quot; и отключать антивирус
          перед установкой, иначе можете наткнуться на проблему{" "}
          <mark className="ui">helper.exe не найден</mark>.
        </AdditionWarning>
        <AdditionDanger>
          Устанавливая содержимое на ваше устройство из каналов{" "}
          <a href="https://t.me/s/designworld">Design World</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> - вы
          принимаете на себя все риски и берёте ответственность за использование
          нелегальных материалов. Мы не можем принимать вбросы по типу{" "}
          <mark className="quote">
            ой в складе, саду или дизайн ворлде одни вирусы водятся
          </mark>{" "}
          на полном серьёзе без внятных доказательств. Ложное срабатывание антивируса
          также не является доказательством действительного наличия зловредов в том или
          ином архиве или программе. Если вы доверяете нашим источникам - отключайте
          антивирусное ПО при установке программ и плагинов, либо не предъявляйте
          претензии на основе вашей паранои и оформляйте покупку софта за свои кровные.
        </AdditionDanger>
      </DetailsSummary>
      <DetailsSummary
        title="Как скачать нужный мне шаблон, если у меня есть на него ссылка?"
        tag="енвато, моушен аррей, фрипик, артлист"
      >
        <p>
          Если вы не нашли то, что вам нужно из ссылок, то у нас имеется бот{" "}
          <a
            href="https://t.me/HiStockBot?start=509060394"
            title="Бот HiStock для покупки шаблонов в Telegram"
          >
            {" "}
            HiStock в Telegram
          </a>{" "}
          для оперативной покупки шаблонов с платформ{" "}
          <a
            href="https://elements.envato.com"
            title="Envato Elements"
          >
            Envato Elements
          </a>
          ,{" "}
          <a
            href="https://freepik.com/"
            title="Freepik"
          >
            Freepik
          </a>
          ,{" "}
          <a
            href="https://motionarray.com/"
            title="Motion Array"
          >
            Motion Array
          </a>{" "}
          и{" "}
          <a
            href="https://artlist.io/"
            title="Artlist"
          >
            Artlist
          </a>{" "}
          по выгодным ценам.
        </p>
        <AdditionWarning>
          Файлы из Videohive, Shutter Stock и других сервисов, которые не используют
          подписочную модель распространения файлов, не поддерживаются ботом.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary
        title="Где скачать Photoshop с рабочим Firefly? Какие есть аналоги?"
        tag="файрфляй, искуственный интеллект, нейросети, нейронная сеть, генерация изображений, стейбл дифьюжен, stable diffusion, sd"
      >
        <p style={{fontSize: "5rem", fontWeight: "900", textAlign: "center"}}>Нигде!</p>
        <p style={{fontWeight: "600", lineHeight: "1.2"}}>
          Для использования <mark className="plugin">Adobe Firefly</mark> в{" "}
          <mark className="app">Photoshop</mark> оформите подписку Creative Cloud или
          активируйте пробную версию на 14 дней.
        </p>
        <Divider></Divider>
        <p>
          С выходом <mark className="app">Photoshop 2024</mark> многие начали из каждого
          угла спрашивать, мол <mark>где народный фш с нейросетью можно скачать?</mark>.
          Благодаря таким повсеместным вопросам от халявщиков - Adobe прикрыл эту функцию
          с сентября 2023 года для тех, у кого отсутствует подписка Creative Cloud. Да,
          перестаньте об этом спрашивать, пожалуйста.
        </p>
        <AdditionInfo>
          Источники, распространяющие в интернете{" "}
          <mark className="app">Photoshop с &quot;генеративной заливкой&quot;</mark> -
          либо распространяют устаревшую бету-версию или патчер-заменятор-файлов от
          m0nkrus, которую тоже исправили давным давно, либо предлагают оформить пробную
          версию на 14 дней.
        </AdditionInfo>
        <p>
          Но не стоит расстраиваться: использовать сторонние плагины и сервисы для
          генерации изображений и &quot;инпеинта&quot; никто не запрещал, поэтому о них мы
          и поговорим.
        </p>
        <Divider>Какие у нас есть варианты?</Divider>
        <ul>
          <li>
            Вы можете развернуть локальный <mark className="app">Stable Diffusion</mark> и
            использовать его в качестве плагина для <mark className="app">Photoshop</mark>
            . Данный способ требует хорошей видеокарты с объёмом VRAM не менее 8 Гб.
          </li>
          <li>
            Либо вы можете воспользоваться различными онлайн-сервисами по генерации
            изображений и редактирования уже существующих. Например,{" "}
            <a href="https://fusionbrain.ai/">Fusion Brain</a> на основе модели Kandinsky
            от Сбера, <a href="https://krea.ai">KreaAI</a> или{" "}
            <a href="https://www.recraft.ai/">RecraftAI</a>.
          </li>
          <li>
            Из онлайн-сервисов, заменяющий Adobe Firefly был популярен плагин{" "}
            <mark className="plugin">Alpaca ML</mark>, но его работа была прекращена 25
            октября 2024 года, а ссылки на регистрацию и скачивание были удалены, поэтому
            поговорить о нём мы не можем.
          </li>
          <li>
            Ну и крайний способ - оформлять пробную версию на 14 дней и каждый раз
            регистрировать новый аккаунт Adobe. Это нам в любом случае не подходит, так
            как в некоторых случаях при активации пробной версии с вас попросят данные
            банковской карты или PayPal.
          </li>
        </ul>
        <p>
          Более подробно поговорим только о самом локальном{" "}
          <mark className="app">Stable Diffusion</mark> и его внедрении в{" "}
          <mark className="app">Photoshop</mark> через плагин.
        </p>
        <Divider>Связываем Stable Diffusion с Photoshop</Divider>
        <AdditionWarning>
          Действия проделываются на устройстве с операционной системой Windows. Способ
          соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Photoshop</mark> на устройствах с macOS не проверялся.
        </AdditionWarning>
        <p>
          Для начала нам нужно загрузить сам <mark className="app">Stable Diffusion</mark>
          . Это можно сделать с помощью программы{" "}
          <mark className="app">Stability Matrix</mark>, который можно загрузить из{" "}
          <a href="https://github.com/LykosAI/StabilityMatrix/releases">
            страницы релизов на GitHub
          </a>
          . Он доступен для Windows и macOS.
        </p>
        <AdditionInfo>
          Если у вас уже установлен <mark className="app">Stable Diffusion</mark>, то вы
          можете пропустить этап установки и перейти сразу к установке плагинов.
        </AdditionInfo>
        <p>
          Программа портативная, то есть может устанавливаться где угодно на вашем
          компьютере и даже на внешнем носителе. Чтобы продолжить настройку - нажмите на{" "}
          <mark className="ui">Continue</mark>. После перехода к окну{" "}
          <mark className="ui">Analytics</mark> нажмите на{" "}
          <mark className="ui">Don&apos;t Share Analytics</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/first_start_stability_matrix.png"
          imgTitle="Первый запуск Stability Matrix"
          caption="Stability Matrix"
        />
        <AdditionInfo>
          <ul>
            <li>
              Рекомендуется использовать скоростной накопитель для более быстрой загрузки
              моделей для генерации изображений.
            </li>
            <li>
              Рекомендуется иметь не менее 20-30 Гб свободного места на накопителе, так
              как среднестатистическая модель Stable Diffusion занимает около 4-8 Гб в
              зависимости от типа модели.
            </li>
            <li>
              {" "}
              Если у вас возникают проблемы со скачиванием интерфейсов - попробуйте
              использовать <mark className="app">VPN</mark> во время загрузки.
            </li>
          </ul>
        </AdditionInfo>
        <p>
          Далее программа предлагает нам установить любой интерфейс для{" "}
          <mark className="app">Stable Diffusion</mark>. В данном пункте я выберу{" "}
          <mark className="ui">Stable Diffusion reForge</mark>, так как она хорошо
          оптимизирована для слабых видеокарт. Вы же можете выбрать любой другой
          интерфейс, основанный на <mark>Automatic1111</mark> или следовать моему выбору.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/stability_matrix_select_ui.png"
          imgTitle="Выбор интерфейса Stable Diffusion"
          caption="Stability Matrix"
        />
        <p>
          После выбора интерфейса нам предложат скачать популярные модели, но для
          генеративной заливки или расширения изображений они нам не особо подойдут,
          поэтому загрузку моделей мы пока что пропустим, нажав на{" "}
          <mark className="ui">Close</mark>. После этого начнётся скачивание всего и вся,
          поэтому наберитесь терпения.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/select_popular_models_stability_matrix.png"
          imgTitle="Выбор популярных моделей"
          caption="Stability Matrix"
        />
        <AdditionInfo>
          Если вы столкнулись с ошибкой <mark>Package Modification Failed</mark>, то
          повторите попытку установки интерфейса снова, нажав на кнопку{" "}
          <mark className="ui">Add Package</mark> в вкладке{" "}
          <mark className="ui">Packages</mark>.
        </AdditionInfo>
        <p>
          Более подробно о работе программы и интерфейсе{" "}
          <mark className="app">Stability Matrix</mark> вы можете посмотреть в видео ниже.
        </p>
        <YouTubeVideo
          link="Fjl9dAoRqHM"
          caption="Самая быстрая установка Stable Diffusion через Stability Matrix"
        />
        <p>
          Если у вас установка интерфейса прошла успешно, то время устанавливать плагин
          для соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Photoshop</mark>. Загрузку моделей для генеративной
          заливки и подобного мы отложим и вернёмся к нему позже.
        </p>
        <AdditionWarning>
          Для загрузки моделей возможно потребуется код API для CivitAI, который надо
          будет ввести в настройках <mark className="app">Stability Matrix</mark>. Его
          можно создать в{" "}
          <a href="https://civitai.com/user/account">настройках вашего профиля</a> после
          регистрации на ресурсе.
        </AdditionWarning>
        <p>
          Далее нам нужно запустить сам интерфейс{" "}
          <mark className="app">Stable Diffusion</mark>, нажав на{" "}
          <mark className="ui">Launch</mark> в странице пакетов. Первый запуск интерфейса
          может продлиться некоторое время, особенно если не установлена ни одна модель,
          так как мы скачивание моделей пропустили. После успешной загрузки дополнительных
          зависимостей у вас откроется локальный сервер и автоматически откроется браузер
          с адресом <a href="http://127.0.0.1:7860/">127.0.0.1:7860</a>.
        </p>
        <p>
          Далее в интерфейсе <mark className="app">Stable Diffusion</mark> мы переходим в
          вкладку <mark className="ui">Extensions</mark>, чтобы найти там плагин для
          соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Photoshop</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/select_extensions_sd.png"
          imgTitle="Открываем вкладку Extensions"
          caption="Firefox // Stable Diffusion"
        />
        <p>
          В вкладке <mark className="ui">Extensions</mark> нам нужно перейти в вкладку{" "}
          <mark className="ui">Available</mark> и загрузить список моделей, нажав на{" "}
          <mark className="ui">Load from</mark> в верхней части окна. Затем нужно ввести в
          поиск расширений слово <mark>Photoshop</mark> и нажать на{" "}
          <mark className="ui">Install</mark> рядом с{" "}
          <mark className="plugin">Auto-Photoshop-StableDiffusion-Plugin</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/download_ps_sd_extension.png"
          imgTitle="Загрузка плагина для соединения Stable Diffusion и Photoshop"
          caption="Firefox // Stable Diffusion"
        />
        <p>
          После установки расширения в <mark className="app">Stable Diffusion</mark>{" "}
          вернитесь на вкладку <mark className="ui">Installed</mark> и нажмите на кнопку{" "}
          <mark className="ui">Apply and quit</mark>. Таким образом вы перезагрузите
          сервер <mark className="app">Stable Diffusion</mark> и активируете плагин.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/apply_and_restart_sd.png"
          imgTitle="Перезагрузка сервера Stable Diffusion для применения расширений"
          caption="Firefox // Stable Diffusion"
        />
        <p>
          С установкой плагина для <mark className="app">Stable Diffusion</mark> мы
          разобрались, осталось установить плагин для{" "}
          <mark className="app">Photoshop</mark>. Для этого переходим на{" "}
          <a href="https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases">
            страницу релизов плагина на GitHub
          </a>{" "}
          и выбираем любой удобный вам способ установки плагина. Я же выберу вариант
          установки плагина через распаковку <mark className="file">.zip</mark> архива и
          скачиваю именно <mark className="file">.zip</mark> файл. Его нужно распаковать в
          папку{" "}
          <mark className="path">
            C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
          </mark>
          , создав дополнительную папку с любым названием на латинице, чтобы не было хаоса
          в этой папке.
        </p>
        <p>
          Казалось бы, можно уже запускать <mark className="app">Photoshop</mark> и
          творить чудеса. Но мы всё-таки не установили модели для генерации изображений.
          Для этого вернитесь в <mark className="app">Stability Matrix</mark> и перейдите
          в раздел с моделями.
        </p>
        <p>
          Там нам нужно найти любую вам понравившуюся модель именно с пометкой{" "}
          <mark>Inpainting</mark>. Различные версии можно найти на странице модели.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/download_inpainting_model.png"
          imgTitle="Скачиваем Inpainting модель в Stability Matrix"
          caption="Stability Matrix"
        />
        <p>
          Далее нам нужно открыть сам плагин в <mark className="app">Photoshop</mark>. Для
          этого переходим в <mark className="ui">Plugins</mark> и выбираем{" "}
          <mark className="plugin">
            Auto Photoshop StableDiffusion Plugin &gt; Auto-Photoshop-SD
          </mark>
          .
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/photoshop/open_sd_plugin_in_ps.png"
          imgTitle="Открываем плагин Stable Diffusion в Photoshop"
          caption="Photoshop"
        />
        <p>
          В открытом окне плагина мы переходим на вкладку{" "}
          <mark className="ui">Settings</mark> и выбираем тип интерфейса, в моем случае
          это <mark>Automatic1111</mark> и вводим чуть выше адрес сервера{" "}
          <mark className="app">Stable Diffusion</mark>, который открывается в браузере.
        </p>
        <AdditionInfo>
          Если у вас установлен <mark>ComfyUI</mark>, то вы можете оставить стандартную
          галочку и указать другой адрес сервера при необходимости.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/photoshop/change_server_sd_settings.png"
          imgTitle="Меняем настройки привязки"
          caption="Photoshop"
        />
        <p>
          Нам может выбить ошибка про отсутствие флага <mark>--api</mark>, который мы не
          вставляли перед запуском <mark className="app">Stable Diffusion</mark>. И
          естественно из-за этого пока не получится подключить{" "}
          <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Photoshop</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/photoshop/forgotten_api_flag.png"
          imgTitle="Предупреждение о том, что мы забыли флаг для запуска в SD"
          caption="Photoshop"
        />
        <p>
          Решается это просто, нам нужно снова вернуться в{" "}
          <mark className="app">Stability Matrix</mark>, открыть настройки запуска,
          пролистать вниз и в поле <mark className="ui">Extra Launch Arguments</mark>{" "}
          впишите <mark>--api</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-dark"
          imgSrc="images/photoshop/enter_launch_arguments.png"
          imgTitle="Вводим дополнительные аргументы для запуска"
          caption="Stability Matrix"
        />
        <p>
          После этого перезагрузите сервер <mark className="app">SD</mark>, если он был
          запущен, а затем в <mark className="app">Photoshop</mark> в вкладке{" "}
          <mark className="ui">Stable Diffusion</mark> плагина нажмите на кнопку{" "}
          <mark className="ui">Refresh</mark>. После этого соединение между двумя
          вселенными произойдет корректно и даже появится возможность выбрать модель.
          Установку плагина можно считать завершённым, осталось разобраться с интерфейсом
          плагина.
        </p>
        <AdditionWarning>
          Перед использованием пунктов <mark className="ui">Img2Img</mark>,{" "}
          <mark className="ui">Outpainting</mark> или{" "}
          <mark className="ui">Inpainting</mark> - не забудьте переключиться на
          соответствующую модель, иначе можете наткнуться на неожиданные генерации.
        </AdditionWarning>
        <VideoFigure
          styleClass="figure_windows-light"
          videoSrc="images/photoshop/sd_in_ps_example.mp4"
          caption="Stable Diffusion в Photoshop"
        />
        <p>
          Результат генераций без первоначальных настроек может быть ни о чём, но никто не
          запрещал настраивать ваши генерации более детально. Но об этом я не буду
          заострять внимание, ведь информации об{" "}
          <mark className="app">Stable Diffusion</mark> довольно много на просторах
          интернета. А ещё лучше - создать изображения в браузерном интерфейсе (WebUI)
          генератора изображений.
        </p>
        <AdditionWarning>
          Прежде чем использовать плагин для соединения <mark className="app">SD</mark> и{" "}
          <mark className="app">Photoshop</mark> - интерфейс{" "}
          <mark className="app">Stable Diffusion</mark> нужно каждый раз запускать через{" "}
          <mark className="app">Stability Matrix</mark>, если он не был запущен. Да, это
          может быть не удобно, но куда деваться.
        </AdditionWarning>
      </DetailsSummary>
      <DetailsSummary title="Где и как скачать нейро-фильтры в Photoshop?">
        <p>
          Вы, наверное, не раз натыкались на то, что вкладка{" "}
          <mark className="ui">Neural Filters</mark> не доступна на &quot;народных
          версиях&quot; <mark className="app">Photoshop</mark>. Она не активна по той
          причине, что вы не вошли в аккаунт Adobe.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/photoshop/disabled_neural_filters.png"
          imgTitle="Вкладка Neural Filters неактивна"
          caption="Photoshop"
        />
        <p>
          Чтобы активировать вкладку <mark className="ui">Neural Filters</mark> вам нужно
          зарегистрировать (если у вас нет аккаунта Adobe) и войти в аккаунт. Для этого
          перейдите в <mark className="ui">Help</mark> и нажмите на{" "}
          <mark className="ui">Sign In</mark>. В открывшемся окне произведите вход в
          аккаунт.
        </p>
        <AdditionInfo>
          Не переживайте, псевдо-лицензия после входа в аккаунт не слетит. Если после
          нажатия на <mark className="ui">Sign In</mark> вместо окна входа в аккаунт
          появляется окно об отсутствии интернета, то просто попробуйте включить{" "}
          <mark className="app">VPN</mark>. Обычно они игнорируют правила блокировки
          доступа программе в интернет.
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/photoshop/help_sign_in.png"
          imgTitle="Вход в аккаунт"
          caption="Photoshop"
        />
        <p>
          После входа в аккаунт - вкладка <mark className="ui">Neural Filters</mark> в
          пункте <mark className="ui">Filter</mark> станет активной и вы сможете загрузить
          нейро-фильтры, нажав на иконку загрузки рядом с ними.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/photoshop/download_neural_filters.png"
          imgTitle="Загружаем нейро-фильтры"
          caption="Photoshop"
        />
        <p>
          Но не тут то было, иногда загрузка нейро-фильтров сразу прерывается, не объясняя
          причину. Чтобы это исправить - нужно внести несколько адресов в файл{" "}
          <mark className="file">hosts</mark>. Для этого вам нужно перейти в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопировать файл{" "}
          <mark className="path">hosts</mark> в любое удобное место, открыть любой
          текстовый редактор (например <mark className="app">Notepad++</mark> или{" "}
          <mark className="app">VS Code</mark>) и внести строки чуть ниже в конец файла.
          Затем сохраните отредактированный файл и перенесите его обратно в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc\hosts</mark> с заменой и
          перезагрузите <mark className="app">Photoshop</mark>, если он у вас был открыт.
        </p>
        <AdditionWarning>
          Для изменения системных файлов требуются права администратора.
        </AdditionWarning>
        <code>
          127.0.0.1 cc-api-data.adobe.io
          <br />
          127.0.0.1 ic.adobe.io
          <br />
          127.0.0.1 genuine.adobe.com
          <br />
          127.0.0.1 prod.adobegenuine.com
          <br />
          127.0.0.1 assets.adobedtm.com
        </code>
        <p>
          После этого загрузка нейро-фильтров должна начаться нормально. Нейро-фильтры
          обычно загружаются в папку{" "}
          <mark className="path">
            %AppData%\Adobe\UXP\PluginsStorage\PHSP\XX\Internal\com.adobe.nfp.gallery\PluginData
          </mark>
          , где <mark>XX</mark> - версия программы, указаная в первой части числа в{" "}
          <mark className="ui">Help &gt; About Photoshop</mark>. Эта информация вам
          пригодится, если вы хотите удалить файлы нейро-фильтров или распаковать их в
          нужную папку из другого источника в интернете.
        </p>
      </DetailsSummary>
      <DetailsSummary title="Где найти шрифт по имеющемуся фото?">
        <p>
          Вы можете использовать сервисом{" "}
          <a
            href="https://en.likefont.com"
            title="Сервис по нахождению шрифтов LikeFont"
          >
            LikeFont
          </a>{" "}
          для определения шрифта по фотографии. Этот сервис способен распознавать шрифты
          как на латинице, так и на кириллице.
        </p>
        <p>
          Как начать им пользоваться? Всё просто: зайдите на сайт и загрузите своё
          изображение с помощью проводника или <mark className="key">Ctrl + V</mark>.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/likefont_mainpage.png"
          imgTitle="Главная страница LikeFont"
          caption="Главная страница LikeFont"
        />
        <AdditionDanger>
          Учтите, что по умолчанию на странице стоит галка на{" "}
          <mark className="ui">I agree to post it in Identification Community</mark>,
          которая выкладывает ваш скриншот на общее обозрение. Если не хотите выкладывать
          скриншот в сеть - уберите галочку.
        </AdditionDanger>
        <p>
          Предположим, что на вход мы дали скриншот. Но вот незадача: он неконтрастный и
          весь контент сливается. Что же делать?
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/psfaq_likefont_example.png"
          imgTitle="Пример плохого исходника"
          caption="Пример плохого исходника"
        />
        <p>
          Для этого нужно предварительно обработать изображение. После загрузки
          изображения сайт предлагает инструменты для обработки изображения, например{" "}
          <mark className="ui">Threshold</mark>. Мы его повышаем до максимально возможного
          значения, чтобы отделить текст от фона. Также есть инструменты для поворота,
          отзеркаливания и наклона изображения при необходимости.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/psfaq_likefont_fixed.png"
          imgTitle="Изображение после обработки средствами сайта"
          caption="Изображение после обработки средствами сайта"
        />
        <p>
          Как мы видим, Threshold помог, но не сильно, так как фрактальный шум по яркости
          совпал с яркостью текста. Но не унываем, у нас есть как минимум три чистых
          буквы. После обработки пролистываем страницу ниже и мы видим несколько
          изображений к которым нужно вписать букву.
        </p>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/psfaq_likefont_recognition.png"
          imgTitle="Изображения к которым нужно вписать букву"
          caption="Изображения к которым нужно вписать букву"
        />
        <p>
          Если на таких изображениях нет букв или символа, то такие ячейки можно
          пропустить. После того как вы вписали буквы, нажмите на{" "}
          <mark className="ui">Identify Now</mark> и сервис начнёт распознавать шрифт, а
          затем выдаст результат.
        </p>
        <AdditionInfo>
          Чем больше вы впишете букв, тем лучше будет результат распознавания шрифта!
        </AdditionInfo>
        <ImageFigure
          styleClass="figure_windows-light"
          imgSrc="images/likefont/psfaq_likefont_result.png"
          imgTitle="Результат распознавания"
          caption="Результат распознавания"
        />
        <p>
          В моём примере был использован шрифт <mark>Broadway</mark> и с его нахождением
          сервис справился прекрасно.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PSWhereFind;
