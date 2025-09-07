import {
  AnimationRounded,
  Apple,
  ArchitectureRounded,
  AssistantRounded,
  BlockRounded,
  BurstModeRounded,
  BusinessCenterRounded,
  CarRepairRounded,
  ContentCutRounded,
  DesktopWindowsRounded,
  DevicesOtherRounded,
  DomainRounded,
  Download,
  FormatListBulletedRounded,
  ForumRounded,
  GavelRounded,
  GradientRounded,
  HandymanRounded,
  ImageRounded,
  MmsRounded,
  MovieFilterRounded,
  MovieRounded,
  MusicNoteRounded,
  PermMediaRounded,
  SlowMotionVideoRounded,
  SmartToyRounded,
  SpellcheckRounded,
  SportsEsportsRounded,
  SubtitlesRounded,
  TextureRounded,
  VideoSettingsRounded,
  ViewInArRounded,
  VolumeUpRounded,
  WebRounded,
  WhatshotRounded,
  WorkRounded,
} from "@mui/icons-material";

import {Divider} from "antd";

import {motion} from "framer-motion";

import React from "react";

import {Helmet} from "react-helmet-async";

import Addition from "../components/Addition";

import Footer from "../components/Footer";

import Header from "../components/Header";

import {LinkCard, LinkCardNoDescription, LinkInAppCard} from "../components/LinkCards";

import {/* AEExprIcon, */ AEIcon, PRIcon, PSIcon} from "./faqIcon";

const Links = () => {
  return (
    <div className="page">
      <Helmet>
        <title>links@aechat</title>
        <link
          href="icons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
      </Helmet>
      <Header title="links" />
      <motion.main
        animate={{x: 0, opacity: 1}}
        className="main"
        exit={{x: -50, opacity: 0}}
        initial={{x: 100, opacity: 0}}
        transition={{
          duration: 0.3,
          ease: [0.25, 0, 0, 1],
        }}
      >
        <div
          className="logo-container"
          style={{display: "none"}}
        >
          <h1 className="logo-title">links@aechat</h1>
          <p className="logo-slogan">Собрали полезные ссылки для вас</p>
        </div>
        <div className="links">
          <Divider>Ответы на частые вопросы</Divider>
          <div className="links-grid">
            <LinkInAppCard
              description="Преодолеваем трудности при работе с Adobe After Effects"
              href="/aefaq"
              icon={<AEIcon />}
              name="aefaq"
            />{" "}
            <LinkInAppCard
              description="Поясняем за монтаж и нюансы в Adobe Premiere Pro"
              href="/prfaq"
              icon={<PRIcon />}
              name="prfaq (WIP)"
            />{" "}
            <LinkInAppCard
              description="Базарим за обработку изображений в Adobe Photoshop"
              href="/psfaq"
              icon={<PSIcon />}
              name="psfaq (WIP)"
            />
            {/* <LinkInAppCard
              description="Шпаргалка по использованию выражений в Adobe After Effects"
              href="/aeexpr"
              icon={<AEExprIcon />}
              name="aeexpr (WIP)"
            /> 
            // aeexpr скоро будет возвращён, ссылка временно скрыта из-за пустоты этого раздела
            */}
          </div>
          <Divider>Наши каналы</Divider>
          <Addition type="info">
            {(() => {
              const userAgent = navigator.userAgent.toLowerCase();

              const isIOS = /iphone|ipad/.test(userAgent);

              const isAndroid = /android/.test(userAgent);

              const isMacOS = /macintosh|mac os x/.test(userAgent);

              if (isIOS) {
                return (
                  <>
                    Для скачивания файлов из каналов ниже рекомендуется использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии. Его можно установить через{" "}
                    <a href="https://telegram.org/dl/ios">App Store</a>.
                  </>
                );
              }

              if (isAndroid) {
                return (
                  <>
                    Для скачивания файлов из каналов ниже рекомендуется использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии. Его можно установить по{" "}
                    <a href="https://telegram.org/android">этой ссылке</a>.
                  </>
                );
              }

              if (isMacOS) {
                return (
                  <>
                    Для скачивания файлов из каналов ниже рекомендуется использовать
                    десктопную версию <mark className="app">Telegram</mark> вместо
                    веб-версии. Её можно скачать по{" "}
                    <a href="https://macos.telegram.org/">этой ссылке</a>.
                  </>
                );
              }

              return (
                <>
                  Для скачивания файлов из каналов ниже рекомендуется использовать
                  десктопную версию <mark className="app">Telegram</mark> вместо
                  веб-версии. Её можно скачать по{" "}
                  <a href="https://desktop.telegram.org/">этой ссылке</a>.
                </>
              );
            })()}
          </Addition>
          <div className="links-grid">
            <LinkCard
              description="Шаблоны и плагины для Adobe After Effects со всего интернета"
              href="https://t.me/s/aetemp"
              icon={<PermMediaRounded />}
              name="AETemp"
            />
            <LinkCard
              description="Шаблоны и плагины для Adobe Premiere Pro со всего интернета"
              href="https://t.me/s/premtemp"
              icon={<MovieFilterRounded />}
              name="PremTemp"
            />
            <LinkCard
              description="Шаблоны для Adobe Photoshop, Adobe Illustrator и Figma"
              href="https://t.me/s/designworld"
              icon={<MmsRounded />}
              name="Design World"
            />
            <LinkCard
              description="Приватный канал с различными обучающими курсами"
              href="https://teletype.in/@aetemp/Courses"
              icon={<SlowMotionVideoRounded />}
              name="Курсы от AETemp"
            />
            <LinkCard
              description="программы для творчества на windows"
              href="https://t.me/+Qd9xu7A4TeIwNzY6"
              icon={<HandymanRounded />}
              name="склад стройматериалов"
            />
            <LinkCard
              description="невошедшее в стройматериалы на тематику операционных систем"
              href="https://t.me/+gSmpjWyhd5w3ZGFi"
              icon={<CarRepairRounded />}
              name="купить запчасти на форд фокус"
            />
            <LinkCard
              description="как склад стройматериалов, но для macOS"
              href="https://t.me/+ZqiaMfQRFgM4YmEy"
              icon={<Apple />}
              name="Яблоневый сад"
            />
          </div>
          <Divider>Сервисы и утилиты</Divider>
          <div className="links-grid">
            <LinkCard
              description="Бот для покупки шаблонов с Envato Element и других сервисов"
              href="https://t.me/HiStockBot?start=509060394"
              icon={<SmartToyRounded />}
              name="HiStockBot"
            />
            <LinkCard
              description="Популярный онлайн конвертер видео файлов в GIF"
              href="https://ezgif.com/"
              icon={<BurstModeRounded />}
              name="Ezgif"
            />
            <LinkCard
              description="Проигрыватель анимации Lottie, принимает файлы формата JSON"
              href="https://www.svgsprite.com/tools/lottie-player/"
              icon={<AnimationRounded />}
              name="Lottie Player"
            />
            <LinkCard
              description="Просмотрщик и конвертер изображений для Windows"
              href="https://www.faststone.org/FSIVDownload.htm"
              icon={<ImageRounded />}
              name="FastStone Image Viewer"
            />
            <LinkCard
              description="Оффлайн конвертер видео файлов в различные кодеки, в том числе монтажные"
              href="https://www.shutterencoder.com/"
              icon={<VideoSettingsRounded />}
              name="Shutter Encoder"
            />
            <LinkCard
              description="Кросс-платформенная утилита для работы с видеоконтейнерами MKV и WEBM"
              href="https://mkvtoolnix.download/downloads.html"
              icon={<VideoSettingsRounded />}
              name="MKVToolNix"
            />
            <LinkCard
              description="Онлайн-версия MediaInfo, позволяющая просматривать мета-информацию о файлах"
              href="https://mediaarea.net/MediaInfoOnline"
              icon={<FormatListBulletedRounded />}
              name="MediaInfo Online"
            />
            <LinkCard
              description="Сервис для скачивания видео с различных источников, в том числе YouTube"
              href="https://cobalt.tools/"
              icon={<Download />}
              name="кобальт"
            />
            <LinkCard
              description="Альтернативный сервис для скачивания видео с различных источников"
              href="https://ru.savefrom.net/"
              icon={<Download />}
              name="SaveFrom"
            />
            <LinkCard
              description="Локальная Windows-программа для скачивания видео из YouTube"
              href="https://github.com/kazukikasama/youtube-dlp-gui-installer"
              icon={<Download />}
              name="yt-dlp-gui"
            />
            <LinkCard
              description="Программа для разделения аудиофайла на несколько дорожек"
              href="https://www.stemroller.com/"
              icon={<MusicNoteRounded />}
              name="StemRoller"
            />
            <LinkCard
              description="Кросс-платформенная портативная программа для быстрой подрезки видео и аудио"
              href="https://github.com/mifi/lossless-cut"
              icon={<ContentCutRounded />}
              name="LossLessCut"
            />
            <LinkCard
              description="Программа для редактирования и генерации субтитров с помощью Whisper и других движков"
              href="https://github.com/SubtitleEdit/subtitleedit/releases"
              icon={<SubtitlesRounded />}
              name="Subtitle Edit"
            />
          </div>
          <Divider>Чаты в Telegram</Divider>
          <Addition type="warning">
            Перед вступлением в какой-либо чат - прочитайте его правила, чтобы избежать
            недоразумений или внезапных блокировок и ограничений. Обычно правила чатов
            находятся в закреплённом сообщении или в описании чата.
          </Addition>
          <div className="links-grid">
            <LinkCard
              description="Обсуждаем Adobe After Effects и Adobe Premiere Pro"
              href="https://t.me/joinchat/F1DdXtG9LephYWUy"
              icon={<ForumRounded />}
              name="AEChat"
            />
            <LinkCard
              description="Обсуждаем дизайн, Adobe Photoshop, Adobe Illustrator и Figma"
              href="https://t.me/+3LF_B_VK-Nw4YzYy"
              icon={<ForumRounded />}
              name="DWChat"
            />
            <LinkInAppCard
              description="Рассказываем об уставе наших чатов"
              href="rules"
              icon={<GavelRounded />}
              name="Правила чатов AEChat и DWChat"
            />
            <LinkCard
              description="Обсуждаем компьютерные технологии и проблемы"
              href="https://t.me/technical_chat"
              icon={<DevicesOtherRounded />}
              name="Technical Chat"
            />
            <LinkCard
              description="Обсуждаем компьютерное железо в тяжелых задачах"
              href="https://t.me/HARD_TALK"
              icon={<DesktopWindowsRounded />}
              name="HARD_TALK"
            />
            <LinkCard
              description="Обсуждаем монтаж в любой монтажной программе"
              href="https://t.me/ru_montage"
              icon={<MovieRounded />}
              name="ru_montage"
            />
            <LinkCard
              description="Обсуждаем работу в DaVinci Resolve"
              href="https://t.me/DaVinci_Resolve_ru"
              icon={<MovieRounded />}
              name="DaVinci Resolve RU"
            />
            <LinkCard
              description="Сообщество от @TimesaverVFX, где обсуждают DaVinci Resolve и Fusion"
              href="https://t.me/timesaverchat"
              icon={<MovieRounded />}
              name="Чат Таймсейвера"
            />
            <LinkCard
              description="Обсуждаем цветокоррекцию в видео"
              href="https://t.me/ExitLight_Chat"
              icon={<GradientRounded />}
              name="ExitLight Community Chat"
            />
            <LinkCard
              description="Угадываем шрифт по фото от других пользователей"
              href="https://t.me/whatthefontt"
              icon={<SpellcheckRounded />}
              name="Что за шрифт?"
            />
            <LinkCard
              description="Обсуждаем саунд-дизайн, музыку и звук в целом"
              href="https://t.me/sound_tut"
              icon={<VolumeUpRounded />}
              name="Sound Chat"
            />
            {/* <LinkCard
              description="Публикуем вакансии и обсуждаем рабочую жизнь"
              href="https://t.me/"
              icon={<BusinessCenterRounded />}
              name="Work Chat"
            /> */}
            <LinkCard
              description="Обсуждаем Blender и всё что с ним связано"
              href="https://t.me/blender3dchat"
              icon={<ViewInArRounded />}
              name="Blender 3D Chat"
            />
            <LinkCard
              description="Чат в формате вопрос-ответ по Blender"
              href="https://t.me/blender_ru"
              icon={<ViewInArRounded />}
              name="Blender_ru: вопрос-ответ"
            />
            <LinkCard
              description="Обсуждаем Maxon Cinema 4D и всё что с ним связано"
              href="https://t.me/cinema4dchat"
              icon={<AnimationRounded />}
              name="Cinema 4D Chat"
            />
            <LinkCard
              description="Обсуждаем текстурирование в программах Substance"
              href="https://t.me/+Utwk54hiRyjGorFJ"
              icon={<TextureRounded />}
              name="Substance Chat"
            />
            <LinkCard
              description="Обсуждаем Autodesk 3DS Max"
              href="https://t.me/ohmy3dsmax"
              icon={<DomainRounded />}
              name="3DS Max"
            />
            <LinkCard
              description="Альтернативный чат по обсуждению Autodesk 3DS Max"
              href="https://t.me/chat3dsmax"
              icon={<DomainRounded />}
              name="3DSMax (Визуализаторы)"
            />
            <LinkCard
              description="Общение о Unity в формате вопрос-ответ"
              href="https://t.me/unity3d_ru"
              icon={<SportsEsportsRounded />}
              name="Unity Engine: вопрос - ответ"
            />
            <LinkCard
              description="Обсуждаем игровой движок Unreal Engine"
              href="https://t.me/ue_chat"
              icon={<SportsEsportsRounded />}
              name="Unreal Engine Chat"
            />
            <LinkCard
              description="Обсуждаем SideFX Houdini"
              href="https://t.me/houdinitut"
              icon={<WhatshotRounded />}
              name="Houdini Chat"
            />
            <LinkCard
              description="Обсуждаем нейросети"
              href="https://t.me/neuralnetworkstut"
              icon={<AssistantRounded />}
              name="Neural Networks Chat"
            />
            <LinkCard
              description="Обсуждаем фронтенд-разработку сайтов"
              href="https://t.me/friendlyfrontendchat"
              icon={<WebRounded />}
              name="Friendly Frontend Chat"
            />
            <LinkCard
              description="Обсуждаем работу в сервисе Figma"
              href="https://t.me/figmachat"
              icon={<ArchitectureRounded />}
              name="Фигма-чат"
            />
          </div>
          <Divider>Вакансии и работа</Divider>
          <Addition type="danger">
            <p>
              Пожалуйста, будьте внимательны при выполнении заказов на фрилансе - вы
              можете нарваться на недобросовестного заказчика или ловкую схему
              мошенничества!
            </p>
            <ul>
              <li>
                Если заказчик просит оплатить гарантийный взнос, перевести средства на
                &quot;безопасный счёт&quot; или оформить банковскую карту -{" "}
                <b>
                  <u>немедленно завершите диалог</u>
                </b>{" "}
                и{" "}
                <b>
                  <u>никому не называйте коды из SMS</u>
                </b>
                . Вы никому не должны переводить деньги для получения того или иного
                заказа, а также для получения вознаграждения.
              </li>
              <li>
                Если биржа или площадка для &quot;безопасного счёта&quot; заявляет, мол
                она получила сертификат от <mark>Webmoney</mark> или других популярных
                денежных сервисов из прошлого -{" "}
                <b>
                  <u>сразу покиньте сайт</u>
                </b>
                , это не признак для доверия к такому сервису.
              </li>
              <li>
                <b>
                  <u>
                    Не переходите по ссылкам для получения оплаты из &quot;универсальных
                    форм получения средств&quot;!
                  </u>
                </b>{" "}
                Зачастую это скам, в котором вас попросят заполнить три поля данных вашей
                банковской карты - номер, срок действия и CVC и попытаются украсть ваши
                деньги.{" "}
              </li>
              <li>
                Если вы работаете на какой-либо бирже, по типу{" "}
                <a
                  href="https://kwork.ru/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Kwork
                </a>
                ,{" "}
                <a
                  href="https://www.fiverr.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Fiverr
                </a>
                ,{" "}
                <a
                  href="https://www.fl.ru/"
                  rel="noreferrer"
                  target="_blank"
                >
                  FL
                </a>{" "}
                или аналогичной -{" "}
                <b>
                  <u>не покидайте диалог</u>
                </b>{" "}
                с клиентом вне биржи. Некоторые площадки блокируют исполнителей и
                заказчиков, которые просят перенести диалог в{" "}
                <mark className="app">Telegram</mark>,{" "}
                <mark className="app">Whatsapp</mark> или другой мессенджер/социальную
                сеть. Диалог вне биржи никем не регулируется и никто в таком случае не
                гарантирует вам возврат средств в случае обмана.
              </li>
              <li>
                <b>
                  <u>Всегда проверяйте профиль</u>
                </b>{" "}
                заказчика или исполнителя, если вы взяли заказ в социальной сети или
                мессенджере. Просите поставить имя и никнейм, если он отсутствует.
              </li>
              <li>
                Если в профиле заказчика в <mark className="app">Telegram</mark> или любом
                другом мессенджере установлены два-три фото подряд в одну и ту же дату или
                даже сегодняшним днём - это явный признак нового или угнанного аккаунта.
                Цель таких аккаунтов - развести вас на деньги или втереться в доверие.
              </li>
            </ul>
          </Addition>
          <Addition type="warning">
            Если вы передали данные карты или совершили перевод мошеннику - обратитесь в
            ваш банк и сообщите о факте мошенничества, а также немедленно заблокируйте
            банковскую карту и перевыпустите её в банковском приложении. Чем раньше вы
            свяжетесь с банком - тем лучше.
          </Addition>
          <div className="links-grid">
            <LinkCardNoDescription
              href="https://t.me/ru_montage_pins"
              icon={<WorkRounded />}
              name="ru_montage_pins"
            />
            <LinkCardNoDescription
              href="https://t.me/prodjob"
              icon={<WorkRounded />}
              name="Работа видеопродакшн"
            />
            <LinkCardNoDescription
              href="https://t.me/kinopeople"
              icon={<WorkRounded />}
              name="Работники Кино Pro"
            />
            <LinkCardNoDescription
              href="https://t.me/cgfreelance"
              icon={<WorkRounded />}
              name="CG Freelance"
            />
            <LinkCardNoDescription
              href="https://t.me/video_academy"
              icon={<WorkRounded />}
              name="VA Видео для бизнеса"
            />
            <LinkCardNoDescription
              href="https://t.me/platform_film"
              icon={<WorkRounded />}
              name="ПЛОЩАДКА"
            />
            <LinkCardNoDescription
              href="https://t.me/tochnop"
              icon={<WorkRounded />}
              name="Точно продюсер"
            />
            <LinkCardNoDescription
              href="https://t.me/vdhl_good"
              icon={<WorkRounded />}
              name="ВДХЛ - Вакансии для хороших людей"
            />
            <LinkCardNoDescription
              href="https://t.me/KAADchanel"
              icon={<WorkRounded />}
              name="КААД"
            />
            <LinkCardNoDescription
              href="https://t.me/+3vHv2p2bRdRlOTMy"
              icon={<WorkRounded />}
              name="Design Career"
            />
            <LinkCardNoDescription
              href="https://t.me/s/motionhunter"
              icon={<WorkRounded />}
              name="Motion designer hunter"
            />
            <LinkCardNoDescription
              href="https://t.me/s/job_2dfa"
              icon={<WorkRounded />}
              name="Вакансии для аниматоров"
            />
            <LinkCardNoDescription
              href="https://t.me/s/fordesigner"
              icon={<WorkRounded />}
              name="Jobs for Designers"
            />
            <LinkCardNoDescription
              href="https://t.me/s/CGWorkHub"
              icon={<WorkRounded />}
              name="CGWorkHub"
            />
            <LinkCardNoDescription
              href="https://t.me/s/jobforjunior"
              icon={<WorkRounded />}
              name="Job for Junior"
            />
            <LinkCardNoDescription
              href="https://t.me/s/dprofilejob"
              icon={<WorkRounded />}
              name="Dprofile.Работа"
            />
            <LinkCardNoDescription
              href="https://t.me/s/artdesignjob"
              icon={<WorkRounded />}
              name="HSE CHANCE"
            />
            <LinkCardNoDescription
              href="https://t.me/s/freelancetaverna"
              icon={<WorkRounded />}
              name="Фриланс Таверна"
            />
            <LinkCardNoDescription
              href="https://t.me/s/workindesign"
              icon={<WorkRounded />}
              name="Work for Designers"
            />
            <LinkCardNoDescription
              href="https://t.me/s/designer_ru"
              icon={<WorkRounded />}
              name="ИЩУ_ДИЗАЙНЕРА"
            />
          </div>
          <Divider>Чёрные списки</Divider>
          <div className="links-grid">
            <LinkCardNoDescription
              href="https://t.me/cgblacklist"
              icon={<BlockRounded />}
              name="CG Blacklist"
            />
            <LinkCardNoDescription
              href="https://t.me/kinostop"
              icon={<BlockRounded />}
              name="Чёрный список кино индустрии"
            />
            <LinkCardNoDescription
              href="https://t.me/AEnedozakaz"
              icon={<BlockRounded />}
              name="AEНедозаказчики"
            />
            <LinkCardNoDescription
              href="https://t.me/Brickspacer_blacklist"
              icon={<BlockRounded />}
              name="Brickspacer Blacklist"
            />
            <LinkCardNoDescription
              href="https://t.me/moshenniki_frilans"
              icon={<BlockRounded />}
              name="Мошенники в фрилансе"
            />
          </div>
          <Footer
            initialYear={2024}
            title="aechat"
          />
        </div>
      </motion.main>
    </div>
  );
};

export default Links;
