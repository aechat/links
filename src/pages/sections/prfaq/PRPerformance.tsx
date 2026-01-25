import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";
import {ContentFigure} from "../../../components/content/ContentFigure";
import ContentFilter from "../../../components/content/ContentFilter";
import DetailsSummary from "../../../components/content/DetailsSummary";

const PRPerformance: React.FC = () => {
  return (
    <div className="faq-content">
      <DetailsSummary
        tag="pc, железо, выбор пк, сборка, системные требования, hardware recommendations"
        title="Какой компьютер или ноутбук нужен для работы в программе?"
      >
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        anchor="choose-version"
        tag="версия программы для старых устройств"
        title="Какая версия программы считается самой стабильной и какую лучше установить?"
      >
        <Addition type="tldr">
          <ul>
            <li>
              «Самой стабильной» версии <mark className="app">Adobe Premiere</mark> не
              существует. Если последние версии вас не устраивают, в качестве отправной
              точки можно рассмотреть <mark>24.6</mark> или <mark>23.6</mark>, но не более
              ранние. В то же время не стоит спешить с обновлением сразу после выхода
              крупного релиза — в нём могут встречаться проблемы, которые исправляют в
              последующих обновлениях.
            </li>
            <li>
              Аналогично, нет и «самой быстрой» версии. Скорость работы зависит от
              сложности проекта и «железа» устройства, однако на одном и том же проекте
              новые версии программы могут отрисовывать секвенцию быстрее.
            </li>
          </ul>
        </Addition>
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        anchor="about-app-performance"
        tag="тормозит, ускорить работу, оптимизация, увеличить скорость рендера, лаги, медленно работает, низкая скорость, производительность, применение эффектов, системные требования, артефакты, искажения, потребление оперативной памяти"
        title="Почему у меня, б%@#ь, лагает е&#!%й Adobe Premiere, с$%а?"
      >
        {/* FIXME: написать!! */}
      </DetailsSummary>
      <DetailsSummary
        anchor="mercury-acceleration"
        tag="mercury gpu acceleration, software rendering only, рендеринг на процессоре"
        title="Как переключить тип рендеринга и зачем это нужно делать?"
      >
        {/* FIXME: дописать что в 25.6 уже нельзя, в 25.1-25.5 делается через шифт */}
      </DetailsSummary>
      <DetailsSummary
        anchor="configure-swapfile"
        tag="файл подкачки, виртуальная память, swapfile, paging file, virtual memory"
        title="Для чего нужен файл подкачки и почему его не стоит отключать?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                <mark className="file">Файл подкачки</mark>, или{" "}
                <mark className="file">PAGEFILE.SYS</mark>, — это специальный файл,
                который служит виртуальным расширением оперативной памяти. Когда системе
                не хватает физической оперативной памяти для выполнения ресурсоёмких
                задач, она начинает использовать файл подкачки для временного хранения
                данных. По умолчанию, если в вашей системе не отключён{" "}
                <mark className="file">PAGEFILE.SYS</mark>, система автоматически
                управляет его размером, однако делает это зачастую неэффективно, поэтому
                рекомендуется настроить его параметры вручную.
              </p>
              <p>
                В интернете и от некоторых создателей самодельных образов{" "}
                <mark>Windows</mark> нередко можно встретить мнение, что файл подкачки
                лучше отключить — якобы он «вредит» вашему твёрдотельному накопителю.
                Отчасти в этом есть смысл, однако современные накопители рассчитаны на
                такие нагрузки, и вы, скорее всего, смените своё устройство на новое
                гораздо раньше, чем диск выйдет из строя.
              </p>
              <p>
                С отключённым файлом подкачки в{" "}
                <mark className="app">Adobe Premiere</mark> или других творческих
                программах вы можете столкнуться с различными ошибками, например{" "}
                <mark className="warning">«Out of Memory»</mark>. Кроме того, при нехватке
                оперативной памяти и отсутствии файла подкачки возможны вылеты приложений,
                появление сообщения{" "}
                <mark className="select">«В системе недостаточно памяти»</mark>, различные
                подвисания или даже появление «чёрного экрана», устраняемого только
                перезагрузкой устройства.
              </p>
              <p>
                Чтобы настроить размер файла подкачки в <mark>Windows</mark> или включить
                его, следуйте пошаговой инструкции, приведённой ниже.
              </p>
              <Divider>Инструкция для Windows 10 и 11</Divider>
              <ul>
                <li>
                  Откройте окно <mark className="app">Выполнить</mark> с помощью
                  комбинации клавиш <mark className="key">Win + R</mark>, введите в поле{" "}
                  <mark className="select">«Открыть»</mark> команду{" "}
                  <mark className="code">SystemPropertiesAdvanced.exe</mark>, а затем
                  нажмите <mark className="key">Enter</mark> дважды. Таким образом вы
                  откроете окно <mark className="select">«Свойства системы»</mark> и сразу
                  же попадёте в <mark className="select">«Параметры быстродействия»</mark>
                  .
                  <ContentFigure
                    caption="Выполнить"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/run_systempropertiesadvanced.png"
                    theme="dark"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  В окне <mark className="select">«Параметры быстродействия»</mark>{" "}
                  перейдите на вкладку <mark className="select">«Дополнительно»</mark>.
                  <ContentFigure
                    caption="Параметры быстродействия"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/systempropertiesadvanced_select_advanced.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  Во вкладке <mark className="select">«Дополнительно»</mark> нажмите
                  кнопку <mark className="select">«Изменить»</mark> в разделе{" "}
                  <mark className="select">«Виртуальная память»</mark>.
                  <ContentFigure
                    caption="Параметры быстродействия"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/systempropertiesadvanced_open_change_size.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  Если у вас установлен флажок у параметра{" "}
                  <mark className="select">
                    «Автоматически выбирать объем файла подкачки»
                  </mark>
                  , снимите его.
                  <ContentFigure
                    caption="Виртуальная память"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/systempropertiesadvanced_disable_auto_size.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                </li>
                <li>
                  <p>
                    Выберите раздел, на котором установлена система. Если для выбранного
                    раздела установлено значение{" "}
                    <mark className="select">«Без файла подкачки»</mark> или{" "}
                    <mark className="select">«Размер по выбору системы»</mark>, измените
                    его на <mark className="select">«Указать размер»</mark>.
                  </p>
                  <p>
                    Далее укажите исходный и максимальный размер файла подкачки. После
                    ввода значений не забудьте нажать кнопку{" "}
                    <mark className="select">«Задать»</mark> для сохранения, а затем —{" "}
                    <mark className="select">«ОК»</mark> внизу окна.
                  </p>
                  <ContentFigure
                    caption="Виртуальная память"
                    // NOTE: заменить на новое изображение, видео или пример, желательно с бОльшим разрешением
                    src="images/legacy/systempropertiesadvanced_set_swap_size.png"
                    theme="light"
                    type="image"
                    variant="windows"
                  />
                  <Addition type="info">
                    <ul>
                      <li>
                        Для файла подкачки выбирайте самый производительный диск на вашем
                        устройстве. Как правило, это тот же диск, на котором установлена
                        система. Размещение файла подкачки на медленном диске может
                        ухудшить работу как с <mark className="app">Adobe Premiere</mark>,
                        так и с <mark>Windows</mark> в целом.
                        <Addition type="warning">
                          В некоторых случаях, если указать для файла подкачки не
                          системный раздел, это может привести к ошибкам, связанным с
                          оперативной памятью, которые проявятся не только в приложениях{" "}
                          <mark className="company">Adobe</mark>, но и по всей системе.
                        </Addition>
                      </li>
                      <li>
                        <mark className="select">«Исходный размер»</mark> — это начальный
                        размер файла подкачки, который всегда будет зарезервирован в
                        системе.
                      </li>
                      <li>
                        <mark className="select">«Максимальный размер»</mark> — это
                        граница, до которой <mark>Windows</mark> будет автоматически
                        расширять файл при необходимости. Если система достигнет этой
                        границы, файл больше расширяться не будет.
                      </li>
                      <li>
                        В качестве <mark className="select">«исходного размера»</mark> вы
                        можете установить значение от <mark>1024 МБ</mark> до любого
                        числа. <mark>Windows</mark> позволяет задать и более низкое
                        значение, но этого делать не рекомендуется, особенно если у вас
                        установлен медленный накопитель.
                      </li>
                      <li>
                        В качестве <mark className="select">«максимального размера»</mark>{" "}
                        для повседневных задач можно установить значение по формуле{" "}
                        <mark>
                          «текущий объём оперативной памяти, умноженный на 3 или 4»
                        </mark>{" "}
                        или сразу задать своё максимальное значение, например{" "}
                        <mark className="copy">65536</mark> (64 ГБ) или{" "}
                        <mark className="copy">131072</mark> (128 ГБ). Убедитесь, что на
                        выбранном разделе достаточно свободного места для файла подкачки.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Задав нужный размер файла подкачки, перезагрузите устройство. Теперь{" "}
                  <mark className="file">PAGEFILE.SYS</mark> будет работать в соответствии
                  с выбранными параметрами, и проблемы с нехваткой оперативной памяти
                  будут возникать заметно реже.
                </li>
              </ul>
            </>
          }
        />
      </DetailsSummary>
    </div>
  );
};

export default PRPerformance;
