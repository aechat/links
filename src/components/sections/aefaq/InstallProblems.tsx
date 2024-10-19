import ContentSwitcher from "../../features/OperatingSystemFilter";

export const AEInstallProblems = () => (
  <div className="faq-block">
    <h2
      className="faq-separator"
      id="InstallProblems"
    >
      Проблемы с установкой
    </h2>
    <div className="faq-content">
      <details>
        <summary>
          <h3>
            Забыли положить инструкцию для установки и использования рядом с файлом, куда
            что ставить?
          </h3>
        </summary>
        <div className="addition-warning">
          Прежде чем использовать <mark className="file">.aep</mark> и{" "}
          <mark className="file">.mogrt</mark> шаблоны или пакеты для{" "}
          <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> и подобных расширений - убедитесь,
          что они полностью распакованы и расположены в пути не длиннее 256 символов без
          кириллицы!
        </div>
        <li>
          Если в архиве находится файл <mark className="file">.aep</mark> или{" "}
          <mark className="file">.mogrt</mark>, то такие файлы просто импортируются в ваш
          проект с помощью <mark className="ui">File &gt; Import</mark> или{" "}
          <mark className="key">Ctrl+I</mark> и никуда не устанавливаются.
        </li>
        <ContentSwitcher
          windowsContent={
            <div>
              <ul>
                <li>
                  Если в архиве находится файл <mark className="file">.aex</mark>, то
                  такие плагины обычно распаковываются в общую папку плагинов{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  .
                </li>
                <div className="addition-warning">
                  Если вы ищете куда расположить файл{" "}
                  <mark className="file">.plugin</mark>, то спешу огорчить: данный файл не
                  является плагином для устройств на Windows.
                </div>
              </ul>
            </div>
          }
          macContent={
            <div>
              <li>
                Если в архиве находится файл <mark className="file">.plugin</mark>, то
                такие плагины обычно распаковываются в общую папку плагинов{" "}
                <mark className="path">
                  ~/Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                </mark>
                .
              </li>
              <div className="addition-warning">
                Если вы ищете куда расположить файл <mark className="file">.aex</mark>, то
                спешу огорчить: этот файл не является плагином для устройств на macOS.
              </div>
            </div>
          }
        />
      </details>
      <details>
        <summary>
          <h3>
            В Telegram-записи лежат файлы .part1, .part2 и дальше по списку. Что это такое
            и как такие файлы корректно распаковать?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Скачал архив, а внутри него есть папка "_MACOSX". Там действительно лежат
            файлы специально для устройств на macOS?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Этот проект содержит ошибки выражений или This project contains an expression
            error
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Error: Extension Manager init failed, status = -193! A required resource is
            missing. Please relaunch the Creative Cloud app and try again
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            В названиях установщиков плагинов увидел обозначения. Для каких программ они
            предназначены?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>Скачал репак от KpoJluK, а мне выдают "Не удаётся найти helper.exe"</h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Скачал репак от KpoJluK, а мне пишут "Некоторые установочные файлы были
            повреждены"
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>

      <details>
        <summary>
          <h3>
            Скачал репак от KpoJluK, а мне утверждают, что "rsload.net заблокирован в
            hosts"
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Перед установой программы с помощью репака от KpoJluK, я забыл убрал галку с
            "Реклама". Что делать и как её убрать потом?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Правда ли, что в репаках Кролика, Монкруса и остальных релизеров водятся
            вирусы?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Не доверяю Кролику, Монкрусу и впринципе всем репакам, но установить программы
            от Adobe хочу. Какие есть ещё варианты?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Установил After Effects и Media Encoder, но они не видят друг друга и не
            подключатся. Как это исправить?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
    </div>
  </div>
);
