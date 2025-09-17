import React from 'react';
import '../styles/content.css';

function Content() {
  return (
    <main className="content">
      <section className="content__section">
        <h2 className="content__title">О проекте</h2>
        <p className="content__text">
          Здесь может быть текстовое описание. Оно занимает всю ширину, но
          ограничено контейнером и не наезжает на соседние блоки.
        </p>
      </section>

      <section className="content__section">
        <h2 className="content__title">Карточки</h2>
        <div className="content__grid">
          <div className="card">Первая</div>
          <div className="card">Вторая</div>
          <div className="card">Третья</div>
        </div>
      </section>
    </main>
  );
}

export default Content;
