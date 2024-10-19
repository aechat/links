export const AEFromNewbies = () => (
  <div className="faq-block">
    <h2 className="faq-separator">Вопросы от новичков</h2>
    <div className="faq-content">
      <details>
        <summary>
          <h3>Только установил After Effects, с чего бы мне начать изучение?</h3>
        </summary>
        {/* fixme: больше курсов: по типу вольницы, видеосмайлов, панковского и тд и тп */}
        <p>
          Если вы ранее не работали в программах для композитинга, в том числе и{" "}
          <mark className="app">After Effects</mark>, то вы можете начать проходить курс
          от{" "}
          <a
            href="https://www.youtube.com/channel/UCmLY17yagzLy6GRiI1nVBow"
            title="Канал Ильи Зернова на YouTube"
          >
            Ильи Зернова
          </a>
          . Данный курс поможет вам разобраться в интерфейсе программы и не задавать
          глупых вопросов уже в начале своего пути.
        </p>
        <iframe
          loading="lazy"
          src="https://www.youtube.com/embed/nogR7eyhYug?si=J6cn-LEwLZasb5vR"
          title="Видеоплеер YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </details>
      <details>
        <summary>
          <h3>Не понимаю термины от других пользователей программы, проясните!</h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>А есть список популярных горячих клавиш для работы в After Effects?</h3>
        </summary>
        <p>Конечно!</p>
      </details>
      <details>
        <summary>
          <h3>Где я могу узнать об нововведениях в обновлениях After Effects?</h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>Зачем с каждого угла советуют мне поставить английский язык программы?</h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Как найти нужный эффект на английском языке, если у меня стоит русский язык в
            After Effects?
          </h3>
        </summary>
        <p>{/* про колхозный способ двойного языка и про таблицу эффектов */}</p>
      </details>
      <details>
        <summary>
          <h3>
            Зачем мне советуют не менять расположение установки After Effects? А если у
            меня нет места на жёстком диске?
          </h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>Почему предпросмотр проигрывается в хреновом качестве, в пикселях?</h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>Чем отличается Mocha AE от Mocha Pro?</h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
      <details>
        <summary>
          <h3>Где-то слышал про секретные настройки, что это такое?</h3>
        </summary>
        <p>{/* fixme: написать!! */}</p>
      </details>
    </div>
  </div>
);
