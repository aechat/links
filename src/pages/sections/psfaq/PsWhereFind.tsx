import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PsWhereFind: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        tag="adobe, after effects, photoshop, premiere pro, скачать, установить, бесплатно, скрипты, расширения, плагины, templates, plugins, scripts, extensions"
        title="Где найти и скачать шаблоны, плагины и различные программы?"
      >
        <p>
          На <a href="/">главной странице</a>, в закреплённом сообщении в чате{" "}
          <a
            href="https://t.me/+3LF_B_VK-Nw4YzYy"
            title="DWChat в Telegram"
          >
            DWChat
          </a>{" "}
          и в списке ниже вы всегда сможете найти ссылки на наши каналы в{" "}
          <mark className="app">Telegram</mark> с полезным контентом.
        </p>
        <Addition type="info">
          {(() => {
            const userAgent = navigator.userAgent.toLowerCase();

            const isIOS = /iphone|ipad/.test(userAgent);

            const isAndroid = /android/.test(userAgent);

            const isMacOS = /macintosh|mac os x/.test(userAgent);

            if (isIOS) {
              return (
                <>
                  Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                  рекомендуется использовать официальное приложение{" "}
                  <mark className="app">Telegram</mark> вместо веб-версии. Его можно
                  установить из <a href="https://telegram.org/dl/ios">App Store</a>.
                </>
              );
            }

            if (isAndroid) {
              return (
                <>
                  Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                  рекомендуется использовать официальное приложение{" "}
                  <mark className="app">Telegram</mark> вместо веб-версии. Его можно
                  установить по <a href="https://telegram.org/android">этой ссылке</a>.
                </>
              );
            }

            if (isMacOS) {
              return (
                <>
                  Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                  рекомендуется использовать десктопную версию{" "}
                  <mark className="app">Telegram</mark> вместо веб-версии. Её можно
                  скачать по <a href="https://macos.telegram.org/">этой ссылке</a>.
                </>
              );
            }

            return (
              <>
                Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                рекомендуется использовать десктопную версию{" "}
                <mark className="app">Telegram</mark> вместо веб-версии. Её можно скачать
                по <a href="https://desktop.telegram.org/">этой ссылке</a>.
              </>
            );
          })()}
        </Addition>
        <Divider>Скачать шаблоны и различные материалы</Divider>
        <ul>
          <li>
            <a href="https://t.me/s/designworld">Design World</a> — канал со статичной
            графикой, эффектами и кистями для <mark className="app">Adobe Photoshop</mark>
            , которые можно использовать в ваших работах.
          </li>
          <li>
            <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
            <a href="https://t.me/s/premtemp">PremTemp</a> — каналы с материалами для{" "}
            <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Premiere Pro</mark>, откуда можно почерпнуть идеи
            для ваших проектов в <mark className="app">Adobe Photoshop</mark>.
          </li>
        </ul>
        <Addition type="info">
          Если вы не нашли в канале <a href="https://t.me/s/designworld">Design World</a>{" "}
          нужный шаблон, но у вас есть на него ссылка — воспользуйтесь нашим ботом{" "}
          <a
            href="https://t.me/HiStockBot?start=509060394"
            title="Бот HiStock для покупки шаблонов в Telegram"
          >
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
        </Addition>
        <Addition type="danger">
          Файлы из <mark>Videohive</mark>, <mark>Shutterstock</mark> и других сервисов,
          которые не используют подписочную модель распространения, —{" "}
          <b>
            <u>не поддерживаются</u>
          </b>
          .
        </Addition>
        <Addition type="warning">
          Контент, предоставленный в <a href="https://t.me/s/designworld">Design World</a>
          , <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
          <a href="https://t.me/s/premtemp">PremTemp</a>, не должен использоваться в
          коммерческих целях. Если вы планируете использовать какой-либо материал в
          коммерческих целях, вам нужно будет приобрести нужный шаблон во избежание
          проблем с правообладателями.
        </Addition>
        <Divider>Скачать программы и плагины</Divider>
        <ul>
          <li>
            <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> — канал с
            творческими программами, утилитами и плагинами к различным программам по
            демократичным ценам для пользователей устройств на операционной системе{" "}
            <mark>Windows</mark>.
          </li>
          <li>
            <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад</a> — такой же канал с
            программами, как и <mark>склад стройматериалов</mark>, но для пользователей
            устройств на <mark>macOS</mark>.
          </li>
        </ul>
        <Addition type="info">
          Если у вас возникли проблемы с установкой программ или плагинов — прочтите
          раздел <a href="#install-problems">«Проблемы с установкой»</a> или обратитесь к
          нам в <a href="https://t.me/+3LF_B_VK-Nw4YzYy">DWChat</a>.
        </Addition>
        <Addition type="warning">
          При установке программ с пометкой <mark>«репак от кролика»</mark> из{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склада стройматериалов (Windows)</a> не
          забывайте убирать галочку <mark className="select">«Реклама»</mark> и отключать
          антивирус перед установкой, иначе можете столкнуться с ошибкой{" "}
          <mark className="select">«helper.exe не найден»</mark>.
        </Addition>
        <Addition type="danger">
          Файлы из каналов <a href="https://t.me/s/designworld">Design World</a>,{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a>{" "}
          предоставляются «как есть» из открытых источников. Устанавливая или распаковывая
          содержимое из данных каналов — вы принимаете на себя все риски и берёте
          ответственность за использование «народных» материалов.
          <ul>
            <li>
              Администрация этих каналов не может всерьёз воспринимать вбросы вроде{" "}
              <mark className="quote">
                «В „складе”, „саду”, или „аетемпе” одни вирусы водятся!»
              </mark>{" "}
              без внятных доказательств наличия{" "}
              <mark className="app">вредоносного ПО</mark>. Ложное срабатывание вашего{" "}
              <mark className="app">антивируса</mark> и{" "}
              <mark className="app">Virustotal</mark> также не является доказательством
              наличия <mark className="app">зловредов</mark> в архиве или программе.
            </li>
            <li>
              Если вы доверяете нашим источникам, то во избежание проблем с установкой
              программ или плагинов — рекомендуется на время или полностью отключить{" "}
              <mark className="app">антивирусное ПО</mark>, установленное на вашем
              устройстве. В противном случае не предъявляйте администраторам свои
              претензии, основанные на вашей паранойе, и покупайте программы за свои
              деньги.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary title="Где я могу найти и скачать различную графику для своих проектов?">
        <p>
          Для таких случаев был создан канал{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            Design World
          </a>{" "}
          в <mark className="app">Telegram</mark> с полезными материалами для
          использования в различных графических редакторах, например{" "}
          <mark className="app">Adobe Photoshop</mark> и{" "}
          <mark className="app">Adobe Illustrator</mark>. В{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            данном канале
          </a>{" "}
          есть навигация по каналу для нахождения всякой всячины, например:{" "}
          <mark className="tag">#текстуры</mark>, <mark className="tag">#шрифты</mark>,{" "}
          <mark className="tag">#кисти</mark>, <mark className="tag">#паттерны</mark>.
        </p>
        <p>
          Если вам не хватило контента из{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            Design World
          </a>
          , то вы можете воспользоваться списком различных сайтов с различными
          графическими материалами.
        </p>
        <div className="flexible-links">
          {" "}
          <a
            href="https://unsplash.com/"
            title="Unsplash"
          >
            Unsplash
          </a>
          <a
            href="https://www.pexels.com/"
            title="Pexels"
          >
            Pexels
          </a>
          <a
            href="https://pickupimage.com/ru/"
            title="Pickup Image"
          >
            Pickup Image
          </a>
          <a
            href="https://www.freepik.com/"
            title="Freepik"
          >
            Freepik
          </a>
          <a
            href="https://gratisography.com/"
            title="Gratisography"
          >
            Gratisography
          </a>
          <a
            href="https://www.flickr.com/"
            title="The British Library"
          >
            Flickr
          </a>
          <a
            href="https://rupixel.ru/"
            title="RuPixel"
          >
            RuPixel
          </a>
          <a
            href="https://www.stockvault.net/"
            title="Stockvault"
          >
            Stockvault
          </a>
          <a
            href="https://picjumbo.com/"
            title="Picjumbo"
          >
            Picjumbo
          </a>
          <a
            href="https://www.flaticon.com/ru/"
            title="Flaticon"
          >
            Flaticon
          </a>
          <a
            href="https://www.stockio.com/"
            title="Stockio"
          >
            Stockio
          </a>
          <a
            href="https://creazilla.com/ru"
            title="Creazilla"
          >
            Creazilla
          </a>
          <a
            href="https://www.uidownload.com/ru"
            title="UIDownload"
          >
            UIDownload
          </a>
          <a
            href="https://stock.adobe.com/free"
            title="Adobe Stock"
          >
            Adobe Stock
          </a>
        </div>
        <Addition type="warning">
          <ul>
            <li>
              Перед использованием материалов, внимательно ознакомьтесь с условиями
              использования на каждом конкретном ресурсе. Некоторые ресурсы из списка
              могут потребовать оформить подписку на использование некоторых материалов.
            </li>
            <li>
              Некоторые ресурсы могут быть заблокированы на территории Российской
              Федерации или других стран.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="файрфляй, искуственный интеллект, нейросети, нейронная сеть, генерация изображений, стейбл дифьюжен, stable diffusion, sd"
        title="Где скачать Photoshop с рабочим Firefly? Какие есть аналоги?"
      >
        <p
          style={{
            fontFamily: "Onest, sans-serif",
            fontSize: "5rem",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Нигде!
        </p>
        <p style={{fontWeight: "600", lineHeight: "1.5"}}>
          Для использования <mark className="plugin">Adobe Firefly</mark> в{" "}
          <mark className="app">Adobe Photoshop</mark> оформите подписку Creative Cloud
          или активируйте пробную версию на 14 дней.
        </p>
        <Divider></Divider>
        <p>
          С выходом <mark className="app">Adobe Photoshop 2024</mark> многие начали из
          каждого угла спрашивать, мол{" "}
          <mark>«где народный фш с нейросетью можно скачать?»</mark>. Благодаря таким
          повсеместным вопросам от халявщиков - Adobe прикрыл эту функцию с сентября 2023
          года для тех, у кого отсутствует подписка Creative Cloud. Да, перестаньте об
          этом спрашивать, пожалуйста.
        </p>
        <Addition type="info">
          Источники, распространяющие в интернете{" "}
          <mark className="app">Adobe Photoshop с «генеративной заливкой»</mark> - либо
          распространяют устаревшую бету-версию или патчер-заменятор-файлов от{" "}
          <mark className="user">m0nkrus</mark>, которую тоже исправили давным давно, либо
          предлагают оформить пробную версию на 14 дней. Нам эти варианты не подходят.
        </Addition>
        <p>
          Но не стоит расстраиваться: использовать сторонние плагины и сервисы для
          генерации изображений и <mark className="word">инпеинта</mark> никто не
          запрещал, поэтому об аналогах мы и поговорим.
        </p>
        <Divider>Какие у нас есть варианты?</Divider>
        <ul>
          <li>
            Вы можете развернуть локальный <mark className="app">Stable Diffusion</mark> и
            использовать его в качестве плагина для{" "}
            <mark className="app">Adobe Photoshop</mark>. Данный способ требует хорошей
            видеокарты с объёмом VRAM не менее <mark>8 ГБ</mark>.
          </li>
          <li>
            Либо вы можете воспользоваться различными онлайн-сервисами по генерации
            изображений и редактирования уже существующих. Например,{" "}
            <a href="https://krea.ai">KreaAI</a> или{" "}
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
          <mark className="app">Adobe Photoshop</mark> через плагин.
        </p>
        <Divider>Связываем Stable Diffusion с Photoshop</Divider>
        <Addition type="warning">
          Действия проделываются на устройстве с операционной системой{" "}
          <mark>Windows</mark>. Способ соединения{" "}
          <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark> на устройствах с <mark>macOS</mark>{" "}
          не проверялся.
        </Addition>
        <p>
          Для начала нам нужно загрузить сам <mark className="app">Stable Diffusion</mark>
          . Это можно сделать с помощью программы{" "}
          <mark className="app">Stability Matrix</mark>, который можно загрузить из{" "}
          <a href="https://github.com/LykosAI/StabilityMatrix/releases">
            страницы релизов на GitHub
          </a>
          . Он доступен для <mark>Windows</mark> и <mark>macOS</mark>.
        </p>
        <Addition type="info">
          Если у вас уже установлен <mark className="app">Stable Diffusion</mark>, то вы
          можете пропустить этап установки и перейти сразу к установке плагинов.
        </Addition>
        <p>
          Программа портативная, то есть может устанавливаться где угодно на вашем
          компьютере и даже на внешнем носителе. Чтобы продолжить настройку - нажмите на{" "}
          <mark className="select">«Continue»</mark>. После перехода к окну{" "}
          <mark className="select">«Analytics»</mark> нажмите на{" "}
          <mark className="select">«Don&apos;t Share Analytics»</mark>.
        </p>
        <ContentFigure
          caption="Stability Matrix"
          imgTitle="Первый запуск Stability Matrix"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/first_start_stability_matrix.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          <ul>
            <li>
              Рекомендуется использовать скоростной накопитель для более быстрой загрузки
              моделей для генерации изображений.
            </li>
            <li>
              Рекомендуется иметь не менее <mark>20-30 ГБ</mark> свободного места на
              накопителе, так как среднестатистическая модель Stable Diffusion занимает
              около <mark>4-8 ГБ</mark> в зависимости от типа модели.
            </li>
            <li>
              {" "}
              Если у вас возникают проблемы со скачиванием интерфейсов - попробуйте
              использовать <mark className="app">VPN</mark> во время загрузки.
            </li>
          </ul>
        </Addition>
        <p>
          Далее программа предлагает нам установить любой интерфейс для{" "}
          <mark className="app">Stable Diffusion</mark>. В данной статье я выберу{" "}
          <mark className="select">«Stable Diffusion reForge»</mark>, так как она хорошо
          оптимизирована для слабых видеокарт. Вы же можете выбрать любой другой
          интерфейс, основанный на <mark>Automatic1111</mark> или следовать моему выбору.
        </p>
        <ContentFigure
          caption="Stability Matrix"
          imgTitle="Выбор интерфейса Stable Diffusion"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/stability_matrix_select_ui.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После выбора интерфейса нам предложат скачать популярные модели, но для
          генеративной заливки или расширения изображений они нам не особо подойдут,
          поэтому загрузку моделей мы пока что пропустим, нажав на{" "}
          <mark className="select">«Close»</mark>. После этого начнётся скачивание всего и
          вся, поэтому наберитесь терпения.
        </p>
        <ContentFigure
          caption="Stability Matrix"
          imgTitle="Выбор популярных моделей"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/select_popular_models_stability_matrix.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <Addition type="info">
          Если вы столкнулись с ошибкой <mark>«Package Modification Failed»</mark>, то
          повторите попытку установки интерфейса снова, нажав на кнопку{" "}
          <mark className="select">«Add Package»</mark> в вкладке{" "}
          <mark className="select">«Packages»</mark>.
        </Addition>
        <p>
          Более подробно о работе программы и интерфейсе{" "}
          <mark className="app">Stability Matrix</mark> вы можете посмотреть в видео ниже.
        </p>
        <ContentFigure
          caption="Самая быстрая установка Stable Diffusion через Stability Matrix"
          src="Fjl9dAoRqHM"
          type="youtube"
        />
        <p>
          Если у вас установка интерфейса прошла успешно, то время устанавливать плагин
          для соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>. Загрузку моделей для генеративной
          заливки и подобного мы отложим и вернёмся к нему позже.
        </p>
        <Addition type="warning">
          Для загрузки моделей возможно потребуется код API для CivitAI, который надо
          будет ввести в настройках <mark className="app">Stability Matrix</mark>. Его
          можно создать в{" "}
          <a href="https://civitai.com/user/account">настройках вашего профиля</a> после
          регистрации на ресурсе.
        </Addition>
        <p>
          Далее нам нужно запустить сам интерфейс{" "}
          <mark className="app">Stable Diffusion</mark>, нажав на{" "}
          <mark className="select">«Launch»</mark> в странице пакетов. Первый запуск
          интерфейса может продлиться некоторое время, особенно если не установлена ни
          одна модель, так как мы скачивание моделей пропустили. После успешной загрузки
          дополнительных зависимостей у вас откроется локальный сервер и автоматически
          откроется браузер с адресом <a href="http://127.0.0.1:7860/">127.0.0.1:7860</a>.
        </p>
        <p>
          Далее в интерфейсе <mark className="app">Stable Diffusion</mark> мы переходим в
          вкладку <mark className="select">«Extensions»</mark>, чтобы найти там плагин для
          соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ContentFigure
          caption="Firefox // Stable Diffusion"
          imgTitle="Открываем вкладку Extensions"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/select_extensions_sd.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          В вкладке <mark className="select">«Extensions»</mark> нам нужно перейти в
          вкладку <mark className="select">«Available»</mark> и загрузить список моделей,
          нажав на <mark className="select">«Load from»</mark> в верхней части окна. Затем
          нужно ввести в поиск расширений слово{" "}
          <mark className="company">Adobe Photoshop</mark> и нажать на{" "}
          <mark className="select">«Install»</mark> рядом с{" "}
          <mark className="plugin">Auto-Photoshop-StableDiffusion-Plugin</mark>.
        </p>
        <ContentFigure
          caption="Firefox // Stable Diffusion"
          imgTitle="Загрузка плагина для соединения Stable Diffusion и Adobe Photoshop"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/download_ps_sd_extension.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После установки расширения в <mark className="app">Stable Diffusion</mark>{" "}
          вернитесь на вкладку <mark className="select">«Installed»</mark> и нажмите на
          кнопку <mark className="select">«Apply and quit»</mark>. Таким образом вы
          перезагрузите сервер <mark className="app">Stable Diffusion</mark> и активируете
          плагин.
        </p>
        <ContentFigure
          caption="Firefox // Stable Diffusion"
          imgTitle="Перезагрузка сервера Stable Diffusion для применения расширений"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/apply_and_restart_sd.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          С установкой плагина для <mark className="app">Stable Diffusion</mark> мы
          разобрались, осталось установить плагин для{" "}
          <mark className="app">Adobe Photoshop</mark>. Для этого переходим на{" "}
          <a href="https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases">
            страницу релизов плагина на GitHub
          </a>{" "}
          и выбираем любой удобный вам способ установки плагина. Я же выберу вариант
          установки плагина через распаковку <mark className="file">ZIP</mark> архива и
          скачиваю именно <mark className="file">ZIP</mark> файл. Его нужно распаковать в
          папку{" "}
          <mark className="path">
            C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
          </mark>
          , создав дополнительную папку с любым названием на латинице, чтобы не было хаоса
          в этой папке.
        </p>
        <p>
          Казалось бы, можно уже запускать <mark className="app">Adobe Photoshop</mark> и
          творить чудеса. Но мы всё-таки не установили модели для генерации изображений.
          Для этого вернитесь в <mark className="app">Stability Matrix</mark> и перейдите
          в раздел с моделями.
        </p>
        <p>
          Там нам нужно найти любую вам понравившуюся модель именно с пометкой{" "}
          <mark>Inpainting</mark>. Различные версии можно найти на странице модели.
        </p>
        <ContentFigure
          caption="Stability Matrix"
          imgTitle="Скачиваем Inpainting модель в Stability Matrix"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/download_inpainting_model.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          Далее нам нужно открыть сам плагин в{" "}
          <mark className="app">Adobe Photoshop</mark>. Для этого переходим в{" "}
          <mark className="select">«Plugins»</mark> и выбираем{" "}
          <mark className="plugin">
            «Auto Photoshop StableDiffusion Plugin» → «Auto-Photoshop-SD»
          </mark>
          .
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Открываем плагин Stable Diffusion в Adobe Photoshop"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/open_sd_plugin_in_ps.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          В открытом окне плагина мы переходим на вкладку{" "}
          <mark className="select">«Settings»</mark> и выбираем тип интерфейса, в моем
          случае это <mark className="select">«Automatic1111»</mark> и вводим чуть выше
          адрес сервера <mark className="app">Stable Diffusion</mark>, который открывается
          в браузере.
        </p>
        <Addition type="info">
          Если у вас установлен <mark>ComfyUI</mark>, то вы можете оставить стандартную
          галочку и указать другой адрес сервера при необходимости.
        </Addition>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Меняем настройки привязки"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/change_server_sd_settings.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Нам может выбить ошибка про отсутствие флага <mark>--api</mark>, который мы не
          вставляли перед запуском <mark className="app">Stable Diffusion</mark>. И
          естественно из-за этого пока не получится подключить{" "}
          <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Предупреждение о том, что мы забыли флаг для запуска в SD"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/forgotten_api_flag.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Решается это просто, нам нужно снова вернуться в{" "}
          <mark className="app">Stability Matrix</mark>, открыть настройки запуска,
          пролистать вниз и в поле{" "}
          <mark className="select">«Extra Launch Arguments»</mark> впишите{" "}
          <mark>--api</mark>.
        </p>
        <ContentFigure
          caption="Stability Matrix"
          imgTitle="Вводим дополнительные аргументы для запуска"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/enter_launch_arguments.png"
          theme="dark"
          type="image"
          variant="windows"
        />
        <p>
          После этого перезагрузите сервер <mark className="app">SD</mark>, если он был
          запущен, а затем в <mark className="app">Adobe Photoshop</mark> в вкладке{" "}
          <mark className="select">«Stable Diffusion»</mark> плагина нажмите на кнопку{" "}
          <mark className="select">«Refresh»</mark>. После этого соединение между двумя
          вселенными произойдет корректно и даже появится возможность выбрать модель.
          Установку плагина можно считать завершённым, осталось разобраться с интерфейсом
          плагина.
        </p>
        <Addition type="info">
          Если соединение между двумя вселенными всё ещё не может установиться -
          попробуйте разрешить соединение по порту, на котором работает{" "}
          <mark className="app">Stable Diffusion</mark>, в{" "}
          <mark className="app">брандмауэре Windows</mark>. Возможно он был заблокирован
          для блокировки доступа <mark className="app">Adobe Photoshop</mark> в интернет.
        </Addition>
        <Addition type="warning">
          Перед использованием параметров <mark className="select">«Img2Img»</mark>,{" "}
          <mark className="select">«Outpainting»</mark> или{" "}
          <mark className="select">«Inpainting»</mark> - не забудьте переключиться на
          соответствующую модель, иначе можете наткнуться на неожиданные генерации.
        </Addition>
        <ContentFigure
          caption="Stable Diffusion в Adobe Photoshop"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/sd_in_ps_example.mp4"
          theme="light"
          type="video"
          variant="windows"
        />
        <p>
          Результат генераций без первоначальных настроек может быть ни о чём, но никто не
          запрещал настраивать ваши генерации более детально. Но об этом я не буду
          заострять внимание, ведь информации об{" "}
          <mark className="app">Stable Diffusion</mark> довольно много на просторах
          интернета. А ещё лучше - создать изображения в браузерном интерфейсе (WebUI)
          генератора изображений.
        </p>
        <Addition type="warning">
          Прежде чем использовать плагин для соединения <mark className="app">SD</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark> - интерфейс{" "}
          <mark className="app">Stable Diffusion</mark> нужно каждый раз запускать через{" "}
          <mark className="app">Stability Matrix</mark>, если он не был запущен. Да, это
          может быть не удобно, но куда деваться.
        </Addition>
        <Divider>Firefly в Lightroom для устройств на Android</Divider>
        <p>
          Если вам прям позарез нужно использовать{" "}
          <mark className="company">Adobe Firefly</mark> для одноразового использования,
          то вы можете установить «народную» версию{" "}
          <mark className="app">Adobe Lightroom</mark> для{" "}
          <a href="https://4pda.to/forum/index.php?showtopic=636042">
            устройств на Android
          </a>
          . Почему «одноразовое» использование? Потому что{" "}
          <mark className="company">Adobe Firefly</mark> работает на серверах и для
          пользователей без активной подписки любого плана от Adobe предоставляется малое
          количество «генеративных баллов».
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Для работоспособности генеративной заливки для удаления требуется вход в
              аккаунт <mark className="company">Adobe</mark>.
            </li>
            <li>
              Генеративная заливка с помощью{" "}
              <mark className="company">Adobe Firefly</mark> будет работать только для
              удаления объектов без возможности указать свой{" "}
              <mark className="word">промпт</mark>.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        tag="neural filters"
        title="Где и как скачать нейро-фильтры в Photoshop?"
      >
        <p>
          Вы, наверное, не раз натыкались на то, что вкладка{" "}
          <mark className="select">«Neural Filters»</mark> не доступна на «народных»
          версиях <mark className="app">Adobe Photoshop</mark>. Она не активна по той
          причине, что вы не вошли в аккаунт Adobe.
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Вкладка Neural Filters неактивна"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/disabled_neural_filters.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Чтобы активировать вкладку <mark className="select">«Neural Filters»</mark> вам
          нужно зарегистрировать (если у вас нет аккаунта Adobe) и войти в аккаунт. Для
          этого перейдите в <mark className="select">«Help»</mark> и нажмите на{" "}
          <mark className="select">«Sign In»</mark>. В открывшемся окне произведите вход в
          аккаунт.
        </p>
        <Addition type="info">
          Не переживайте, псевдо-лицензия после входа в аккаунт не слетит. Если после
          нажатия на <mark className="select">«Sign In»</mark> вместо окна входа в аккаунт
          появляется окно об отсутствии интернета, то просто попробуйте включить{" "}
          <mark className="app">VPN</mark>. Обычно они игнорируют правила блокировки
          доступа программе в интернет.
        </Addition>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Вход в аккаунт"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/help_sign_in.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          После входа в аккаунт - вкладка <mark className="select">«Neural Filters»</mark>{" "}
          в контекстном меню <mark className="select">«Filter»</mark> станет активной и вы
          сможете загрузить нейро-фильтры, нажав на иконку загрузки рядом с ними.
        </p>
        <ContentFigure
          caption="Adobe Photoshop"
          imgTitle="Загружаем нейро-фильтры"
          // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
          src="images/legacy/photoshop/download_neural_filters.png"
          theme="light"
          type="image"
          variant="windows"
        />
        <p>
          Но не тут то было, иногда загрузка нейро-фильтров сразу прерывается, не объясняя
          причину. Чтобы это исправить - нужно внести несколько адресов в файл{" "}
          <mark className="file">HOSTS</mark>. Для этого вам нужно перейти в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопировать файл{" "}
          <mark className="path">hosts</mark> в любое удобное место, открыть любой
          текстовый редактор, например <mark className="app">Notepad++</mark> или{" "}
          <mark className="app">VS Code</mark>, и внести строки чуть ниже в конец файла.
          Затем сохраните отредактированный файл и перенесите его обратно в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc\hosts</mark> с заменой и
          перезагрузите <mark className="app">Adobe Photoshop</mark>, если он у вас был
          открыт.
        </p>
        <Addition type="warning">
          Для изменения системных файлов требуются права администратора.
        </Addition>
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
          <mark className="select">«Help» → «About Photoshop»</mark>. Эта информация вам
          пригодится, если вы хотите удалить файлы нейро-фильтров или распаковать их в
          нужную папку из другого источника в интернете.
        </p>
      </DetailsSummary>
      <DetailsSummary
        tag="идентификация шрифта, найти нужное начертание, find font, likefont"
        title="Как я могу распознать шрифт по имеющемуся фото?"
      >
        <p>
          Для распознавания нужного начертания из изображения вы можете воспользоваться
          сервисом{" "}
          <a
            href="https://en.likefont.com"
            title="Сервис по нахождению шрифтов LikeFont"
          >
            LikeFont
          </a>
          . Данный сервис может распознавать шрифты как на латинице, так и на кириллице.
          Как начать им пользоваться? Всё просто.
        </p>
        <ul>
          <li>
            <p>
              Для начала перейдите на сайт{" "}
              <a
                href="https://en.likefont.com"
                title="Сервис по нахождению шрифтов LikeFont"
              >
                LikeFont
              </a>{" "}
              и загрузите туда своё изображение с помощью проводника или{" "}
              <mark className="key">Ctrl + V</mark>.
            </p>
            <Addition type="danger">
              Учтите, что по умолчанию на странице стоит чекбокс напротив{" "}
              <mark className="select">
                «I agree to post it in Identification Community»
              </mark>
              , которая выкладывает ваш скриншот на общее обозрение. Если не хотите
              выкладывать скриншот в сеть - уберите галочку.
            </Addition>
            <ContentFigure
              caption="Главная страница LikeFont"
              imgTitle="Главная страница LikeFont"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/likefont/likefont_mainpage.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            <p>
              Предположим, что на вход вы дали скриншот, но с одной проблемой - он
              неконтрастный и весь контент сливается. Что же делать? Для этого нужно
              предварительно обработать изображение.
            </p>
            <ContentFigure
              caption="Пример плохого исходника"
              imgTitle="Пример плохого исходника"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/likefont/psfaq_likefont_example.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            <p>
              После загрузки изображения сайт предлагает инструменты для обработки
              изображения, например <mark className="select">«Threshold»</mark>. Мы его
              повышаем до максимально возможного значения, чтобы отделить текст от фона.
              Также есть инструменты для поворота, отзеркаливания и наклона изображения
              при необходимости.
            </p>
            <ContentFigure
              caption="Изображение после обработки средствами сайта"
              imgTitle="Изображение после обработки средствами сайта"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/likefont/psfaq_likefont_fixed.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            <p>
              После этого пролистайте страницу ниже и вы увидите несколько изображений,
              поделённых на буквы. К каждому такому изображению нужно вписать нужную букву
              для точности распознавания. Если на таких изображениях нет букв или символа,
              то такие ячейки можно пропустить. После того как вы вписали буквы, нажмите
              на <mark className="select">«Identify Now»</mark> и сервис начнёт
              распознавать шрифт, а затем выдаст результат.
            </p>
            <Addition type="info">
              Чем больше вы впишете букв, тем лучше будет результат распознавания шрифта!
            </Addition>
            <ContentFigure
              caption="Изображения к которым нужно вписать букву"
              imgTitle="Изображения к которым нужно вписать букву"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/likefont/psfaq_likefont_recognition.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
          <li>
            После обработки изображения ниже у вас появится список возможных шрифтов. В
            моём примере был использован шрифт <mark>Broadway</mark> и с его нахождением
            сервис справился прекрасно.
            <ContentFigure
              caption="Результат распознавания"
              imgTitle="Результат распознавания"
              // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
              src="images/legacy/likefont/psfaq_likefont_result.png"
              theme="light"
              type="image"
              variant="windows"
            />
          </li>
        </ul>
      </DetailsSummary>
    </div>
  );
};

export default PsWhereFind;
