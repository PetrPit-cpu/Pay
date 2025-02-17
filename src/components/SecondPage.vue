<template>
  <div class="wrapper">
    <main class="page_container">
      <section class="header">
        <div class="header__container">
            <router-link to="/" class="header__back-link">Назад</router-link>
          <div class="header__block-list flex">
            <a class="header__link" href="#">
                <img
              class="header__logo"
              src="@/assets/Pay-taxi-logo.svg"
              alt="Логотип"
            />
            </a>
            <button class="header__btn btn">Подключиться</button>
          </div>
          <div class="header__block-name flex">
            <h1 class="header__title title">
              Сделайте ваш бизнес такси безопасным. И&nbsp;пусть ФНС будет
              уверена, что вы&nbsp;добросовестный налогоплательщик.
            </h1>
            <span class="header__founder-name">Рустам Юськаев</span>
            <p class="header__founder-name-text">основатель сервиса</p>
          </div>
        </div>
      </section>
      <section class="panacea">
        <div class="panacea__container container">
          <h1 class="panacea__title title">
            Почему наличие хорошего бухгалтера не&nbsp;панацея при проверках ФНС
          </h1>
          <p class="panacea__text text-1">
            Помимо декларации УСН или КУДиР есть процессы, которые необходимо
            осуществлять в&nbsp;течении всего времени:
          </p>
        </div>
        <ul class="panacea__list-items list-reset flex">
          <div class="panacea__block-1 flex">
            <li class="panacea__item-1">
              <p class="panacea__text-element-1 element-one-card text-2">
                Иметь акцепт правильного договора-оферты с&nbsp;каждым
                водителем;
              </p>
            </li>
            <li class="panacea__item-2">
              <p class="panacea__text-element-2 element-two-card text-2">
                Регулярно формировать отчеты агентов и&nbsp;направлять всем
                водителям (например, в&nbsp;мобильное приложение);
              </p>
            </li>
          </div>
          <li class="panacea__item-3">
            <p class="panacea__text-element-3 element-three-card text-2">
              Фискализировать ваш доход и&nbsp;направлять кассовые чеки
              водителям (можно также в&nbsp;мобильное приложение).
            </p>
          </li>
        </ul>
      </section>
      <section class="retribution">
        <div class="retribution__container container">
          <h1 class="retribution__title title-2">
            Что будет, если этого не&nbsp;делать?
          </h1>
          <ul class="retribution__list-items list-reset flex">
            <li class="retribution__item-1 flex">
              <span class="retribution__circle">
                <span class="retribution__number">1</span>
              </span>
              <div class="retribution__line"></div>
              <span class="retribution__circle">
                <span class="retribution__number">2</span>
              </span>
            </li>
            <div class="retribution__block-thesis flex">
              <li class="retribution__item-2 retribution-element-1">
                <p class="retribution__text-1 text-1">
                  Отсутствие контрольно-кассовой техники и&nbsp;фискализации
                  дохода парка грозит внушительными штрафами, а&nbsp;также
                  дисквалификацию должностных лиц на&nbsp;срок от&nbsp;одного
                  года до&nbsp;двух лет и&nbsp;административное приостановление
                  деятельности юридического лица на&nbsp;срок
                  <span class="retribution__bold"
                    >до&nbsp;90&nbsp;суток (ст.&nbsp;14.5 КоАП&nbsp;РФ).</span
                  >
                </p>
              </li>
              <li class="retribution__item-3 retribution-element-2">
                <p class="retribution__text-2 text-1">
                  Непредоставление отчетов агента говорит о&nbsp;том, что Агент
                  не&nbsp;выполнил свои агентские обязательства. Что позволит
                  инспектору усомнится в&nbsp;агентских отношениях. Вследствие
                  чего возможна переквалификация в&nbsp;трудовые отношения
                  и&nbsp;<span class="retribution__bold"
                    >доначисление 13% НДФЛ за&nbsp;весь оборот парка.</span
                  >
                </p>
              </li>
            </div>
          </ul>
        </div>
      </section>
      <section class="processes">
        <div class="processes__container container">
          <div class="processes__card">
            <ul class="processes__list-items list-reset flex">
              <li class="processes__item">
                <h1 class="processes__title title-2">
                  Почему лучше доверить процессы нам?
                </h1>
              </li>
              <li class="processes__item">
                <p class="processes__text text-3">
                  Мы&nbsp;работаем на&nbsp;рынке с&nbsp;2016-го года
                  и&nbsp;обладаем большой экспертизой, как правильно платить
                  исполнителям.
                </p>
              </li>
              <li class="processes__item">
                <p class="processes__text text-3">
                  Более 1500 камеральных проверок мы&nbsp;прошли с&nbsp;нашими
                  клиентами, и&nbsp;не&nbsp;было ни&nbsp;одного доначисления
                  налогов.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="services">
        <div class="services__container container">
          <h1 class="services__title title-2">
            Как происходит процесс подключения к&nbsp;сервису?
          </h1>
          <p class="services__text-thesis text-1">
            Процесс интеграции полностью дистанционный, и&nbsp;даже регистрация
            кассы происходит онлайн:
          </p>
          <ul class="services__list-items list-reset flex">
            <li class="services__item-1">
              <span class="services__circle-1">
                <span class="services__number-1"> 1 </span>
              </span>
              <p class="services__text-1 text-2 services-element">
                Вы&nbsp;оставляете заявку на&nbsp;нашем сайте
              </p>
            </li>
            <li class="services__item-2">
              <span class="services__circle-2">
                <span class="services__number-2"> 2 </span>
              </span>
              <p class="services__text-2 text-2 services-element">
                Мы&nbsp;связываемся с&nbsp;вами и&nbsp;уточняем потребности
              </p>
            </li>
            <li class="services__item-1">
              <span class="services__circle-1">
                <span class="services__number-1"> 3 </span>
              </span>
              <p class="services__text-1 text-2 services-element">
                Разворачиваем облачный сервис
              </p>
            </li>
            <li class="services__item-2">
              <span class="services__circle-2">
                <span class="services__number-2"> 4 </span>
              </span>
              <p class="services__text-2 text-2 services-element">
                Производим интеграцию с&nbsp;Яндекс.Про и&nbsp;подключаем
                виртуальную кассу
              </p>
            </li>
            <li class="services__item">
              <span class="services__circle">
                <span class="services__number"> 5 </span>
              </span>
              <p class="services__text text-2 services-element">
                Организуем онлайн встречу с&nbsp;вашими сотрудниками для
                обучения.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="functional">
        <div class="functional__container container">
          <h1 class="functional__title title-2">Кому необходим функционал</h1>
          <ul class="functional__list-items list-reset flex">
            <div class="functional__block-result flex">
              <li class="functional__item">
                <div class="functional__block">
                  <span class="functional__bold-text"> Всем паркам: </span>
                  <p class="functional__normal-text">
                    железным и&nbsp;виртуальным;
                  </p>
                </div>
              </li>
              <li class="functional__item">
                <div class="functional__block-services">
                  <span class="functional__bold-text-services">
                    Вне зависимости от&nbsp;того, каким сервисом выплат
                    пользуетесь&nbsp;&mdash; мы&nbsp;умеем работать
                    со&nbsp;всеми крупными сервисами. </span
                  ><span class="functional__normal-text">
                    Интеграция будет только с&nbsp;Яндекс.Про, дополнительные
                    интеграции с&nbsp;вашими сервисами выплат
                    не&nbsp;потребуются.
                  </span>
                </div>
              </li>
            </div>
            <li class="functional__item-conclusion flex">
              <img
                class="functional__img"
                src="@/assets/rocket.png"
                alt="Ракета"
              />
              <p class="functional__text-conclusion text-1">
                Таким образом вам не&nbsp;обязательно менять сервис выплат,
                чтобы работать максимально безопасно для вашего бизнеса.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="cost">
        <div class="cost__container container">
          <div class="cost__block">
            <h1 class="cost__title title-2">
              Сколько стоит услуга и&nbsp;как подключить?
            </h1>
            <p class="cost__text">
              Стоимость полного списка услуг нашего сервиса составляет
              25&nbsp;тыс. рублей в&nbsp;месяц, но&nbsp;мы&nbsp;готовы
              предоставить скидку&nbsp;50% всем партнерам
              <img
                class="cost__img"
                src="@/assets/Clip-cost.svg"
                alt="Яндекс Про"
              />, если требуется только услуги, описанные выше.
            </p>
          </div>
        </div>
      </section>
      <section class="advantages">
        <div class="advantages__container container">
          <h1 class="advantages__title title-2">
            Важные преимущества сервиса:
          </h1>
          <ul class="advantages__list-items list-reset flex">
            <li class="advantages__item">
              <span class="advantages__circle">
                <span class="advantages__number"> 1 </span>
              </span>
              <p class="advantages__text text-2 advantages-element">
                <span class="advantages__text-bold">Инновационные роботы,</span>
                позволяющие полноценно заменить Call-центр.
              </p>
            </li>
            <li class="advantages__item">
              <span class="advantages__circle-2">
                <span class="advantages__number-2"> 2 </span>
              </span>
              <p class="advantages__text-2 text-2 advantages-element">
                <span class="advantages__text-bold"
                  >Сверка платежей с&nbsp;Яндекс Про.</span
                >
                Показываем какие поездки были оплачены, а&nbsp;какие нет.
              </p>
            </li>
            <li class="advantages__item">
              <span class="advantages__circle-3">
                <span class="advantages__number-3"> 3 </span>
              </span>
              <p class="advantages__text-3 text-2 advantages-element">
                <span class="advantages__text-bold"
                  >Отчеты агента глубиной 3&nbsp;года.</span
                >
                Контролирующие органы затребовали отчеты глубиной
                в&nbsp;3&nbsp;года? Мы&nbsp;поможем сформировать необходимые
                документы.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="form">
        <div class="form__container container">
          <ul class="form__list-items list-reset flex">
            <li class="form__item">
              <form class="form__modifier">
                <div class="form__group">
                  <input
                    type="text"
                    id="company"
                    class="form__input"
                    placeholder="Компания"
                  />
                </div>
                <div class="form__group">
                  <input
                    type="text"
                    id="name"
                    class="form__input"
                    placeholder="Введите ваше имя*"
                    required
                  />
                </div>
                <div class="form__group">
                  <input
                    type="tel"
                    id="phone"
                    class="form__input"
                    placeholder="Ваш номер телефона*"
                    required
                  />
                </div>
                <div class="form__group">
                  <input
                    type="email"
                    id="email"
                    class="form__input"
                    placeholder="email-адрес"
                  />
                </div>
                <button type="submit" class="form__button btn">
                  Отправить заявку
                </button>
              </form>
            </li>
            <li class="form__item-2">
              <h1 class="form__title title-2">
                Становитесь добросовестным налогоплательщиком
              </h1>
              <p class="form__text text-1">
                Заполните анкету, мы&nbsp;с&nbsp;вами свяжемся. Обычно
                интеграция занимает 1&nbsp;рабочий день.
              </p>
              <div class="form__block-icon flex">
                <a class="form__link" href="#">
                    <img
                  class="form__img-icon-1"
                  src="@/assets/RuStore.svg"
                  alt="Иконка RuStore"
                />
                </a>
                <a class="form__link" href="#">
                    <img
                  class="form__img-icon-2"
                  src="@/assets/AppStore.svg"
                  alt="Иконка AppStore"
                />
                </a>
                <a class="form__link" href="#">
                    <img
                  class="form__img-icon-3"
                  src="@/assets/GooglePlay.svg"
                  alt="Иконка GooglePlay"
                />
                </a>
                <a class="form__link" href="#">
                    <img
                  class="form__img-icon-4"
                  src="@/assets/AppGallery.svg"
                  alt="Иконка AppGallery"
                />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="footer">
        <div class="footer__container container">
          <div class="footer__content flex">
            <div class="footer__block flex">
              <a class="footer__link" href="#">
                <img
                class="footer__logo logo-img"
                src="@/assets/footer-logo.svg"
                alt="Логотип"
              />
              </a>
              <span class="footer__text-city text-1">
                ООО &laquo;Доступный город&raquo;
              </span>
              <span class="footer__text-inn text-1"> ИНН 6686079161 </span>
              <span class="footer__text-ogrn text-1"> ОГРН 1169658044742 </span>
            </div>
            <div class="footer__block-2">
              <button class="footer__btn btn">Подключиться</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script></script>

<style scoped>
.header {
  margin: 20px 0 20px 0;
  padding: 0 20px;
}

.header__container {
  max-width: 1880px;
  width: 100%;
  min-height: 1040px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("@/assets/second-page.png");
  background-position: 80% 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
}

.header__block-list {
  padding: 109px 0 257px 0;
  margin: 0 121px 0 364px;
  justify-content: space-between;
}

.header__btn {
  max-width: 174px;
  width: 100%;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  border-radius: 10px;
  border: none;
}

.btn {
  font-weight: 700;
  background-color: #f5b034;
  color: #ffffff;
  cursor: pointer;
}

.header__logo,
.footer__logo {
  max-width: 124px;
  width: 100%;
  min-height: 36.8px;
}

.header__block-name {
  flex-direction: column;
  margin: 0 364px;
}

.title {
  font-weight: 700;
  font-size: 45px;
  line-height: 57.6px;
}

.header__title {
  color: #ffffff;
  max-width: 1192px;
  width: 100%;
  min-height: 174px;
  margin-bottom: 43px;
}

.header__founder-name {
  font-weight: 700;
  font-size: 27px;
  line-height: 34.56px;
  color: #ffffff;
  max-width: 345px;
  width: 100%;
}

.header__founder-name-text {
  max-width: 345px;
  width: 100%;
  font-weight: 400;
  font-size: 27px;
  line-height: 34.56px;
  color: #ffffff;
}

/*panacea*/

.panacea {
  margin: 0 20px;
  padding: 94px 0 104px 0;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.panacea__title {
  max-width: 1192px;
  width: 100%;
  color: #21201f;
  margin-bottom: 25px;
}

.panacea__text {
  max-width: 1192px;
  width: 100%;
  min-height: 62px;
  color: #21201f;
  margin-bottom: 33px;
}

.text-1 {
  font-weight: 400;
  font-size: 24px;
  line-height: 30.72px;
}

.text-2 {
  font-weight: 400;
  font-size: 22px;
  line-height: 28.16px;
}

.panacea__text-element-1 {
  max-width: 308px;
  width: 100%;
  /*min-height: 84px;*/
  height: auto;
  color: #21201f;
}

.panacea__text-element-2 {
  max-width: 451px;
  width: 100%;
  /*min-height: 84px;*/
  height: auto;
  color: #21201f;
}

.panacea__text-element-3 {
  max-width: 777px;
  width: 100%;
  /*min-height: 56px;*/
  height: auto;
}

.element-three-card {
  padding: 97px 276px 97px 139px;
}

.element-one-card {
  padding: 83px 139px;
}

.element-two-card {
  padding: 83px 68px;
}

.panacea__item-1,
.panacea__item-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 586px;
  width: 100%;
  min-height: 250px;
  background-color: #f5f4f2;
  border-radius: 25px;
}

.panacea__block-1 {
  gap: 20px;
  margin-bottom: 26px;
}

.panacea__list-items {
  align-items: center;
  flex-direction: column;
}

.panacea__item-3 {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1192px;
  width: 100%;
  min-height: 250px;
  background-color: #f5f4f2;
  border-radius: 25px;
}

.title-2 {
  font-weight: 700;
  font-size: 48px;
  line-height: 61.44px;
}

/*retribution*/

.retribution {
  margin: 0 20px;
  padding: 0 0 102px;
}

.retribution__title {
  max-width: 1192px;
  width: 100%;
  min-height: 50px;
  color: #21201f;
  margin-bottom: 54px;
}

.retribution__circle {
  width: 54px;
  height: 54px;
  background-color: #f53734;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.retribution__number {
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  line-height: 26.63px;
}

.retribution__line {
  width: 4px;
  height: 153px;
  background-color: #f5f4f2;
}

.retribution__list-items {
  gap: 67px;
}

.retribution__item-1 {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

.retribution__item-2,
.retribution__item-3 {
  border-radius: 25px;
  border: 3px solid #f5f4f2;
}

.retribution__block-thesis {
  flex-direction: column;
  gap: 37px;
}

.retribution-element-1 {
  padding: 56px 47px 40px;
}

.retribution-element-2 {
  padding: 48px 47px 48px 41px;
}

.retribution__bold {
  font-weight: 700;
  font-size: 24px;
  line-height: 30.72px;
  color: #21201f;
}

.retribution__text-1 {
  max-width: 978px;
  width: 100%;
  min-height: 124px;
}

.retribution__text-2 {
  max-width: 983px;
  width: 100%;
  min-height: 124px;
}

/*processes*/

.processes__card {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1192px;
  width: 100%;
  min-height: 350px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("@/assets/yandex-cars.jpeg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
}

.processes__list-items {
  flex-direction: column;
  align-items: center;
}

.processes__title {
  max-width: 931px;
  width: 100%;
  min-height: 61px;
  color: #ffffff;
  margin-bottom: 27px;
}

.text-3 {
  font-weight: 400;
  font-size: 20px;
  line-height: 25.6px;
}

.processes__text {
  max-width: 1087px;
  width: 100%;
  min-height: 78px;
  color: #ffffff;
  margin-bottom: 25px;
}

.processes__text:last-child {
  margin-bottom: 0;
}

.processes {
  margin: 0 20px;
  padding: 0 0 108px 0;
}

/*services*/

.services__title {
  max-width: 1192px;
  width: 100%;
  min-height: 60px;
  color: #2d2e2e;
  margin-bottom: 18px;
}

.services__text-thesis {
  max-width: 1192px;
  width: 100%;
  min-height: 31px;
  height: auto;
  margin-bottom: 46px;
  text-align: center;
}

.services__item {
  display: flex;
  flex-direction: column;
  max-width: 787px;
  width: 100%;
  min-height: 250px;
  background-color: #f5f4f2;
  border-radius: 25px;
}

.services__item-1 {
  display: flex;
  flex-direction: column;
  max-width: 383px;
  width: 100%;
  min-height: 250px;
  background-color: #f5f4f2;
  border-radius: 25px;
}

.services__item-2 {
  display: flex;
  flex-direction: column;
  max-width: 382px;
  width: 100%;
  min-height: 250px;
  background-color: #f5b034;
  border-radius: 25px;
}

.services__circle {
  width: 36px;
  height: 36px;
  background-color: #f5b034;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 20px 40px 20px;
}

.services__circle-1 {
  width: 36px;
  height: 36px;
  background-color: #f5b034;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 20px 40px 20px;
}

.services__circle-2 {
  width: 36px;
  height: 36px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 20px 40px 20px;
}

.services__number-1,
.services__number {
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  line-height: 26.63px;
}

.services__number-2 {
  color: #f5b034;
  font-size: 22px;
  font-weight: bold;
  line-height: 26.63px;
}

.services__text {
  max-width: 421px;
  width: 100%;
  min-height: 56px;
  height: auto;
  margin: 0 auto;
}

.services__text-1 {
  max-width: 222px;
  width: 100%;
  min-height: 56px;
  height: auto;
  margin: 0 auto;
}

.services__text-2 {
  max-width: 293px;
  width: 100%;
  min-height: 56px;
  height: auto;
  margin: 0 auto;
  color: #ffffff;
}

.services-element {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.services__list-items {
  flex-wrap: wrap;
  max-width: 1192px;
  width: 100%;
  gap: 22px;
  justify-content: center;
}

.services {
  margin: 0 20px;
  padding: 0 0 95px 0;
}

/*functional*/

.functional__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 586px;
  width: 100%;
  min-height: 250px;
  background-color: #f5f4f2;
  border-radius: 25px;
}

.functional__title {
  max-width: 1192px;
  width: 100%;
  min-height: 50px;
  color: #2d2e2e;
  margin-bottom: 46px;
}

.functional__list-items {
  flex-wrap: wrap;
  max-width: 1192px;
  width: 100%;
  min-height: auto;
  gap: 46px;
}

.functional__block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 331px;
  width: 100%;
  min-height: 60px;
}

.functional__block-services {
  margin: 0 auto;
  max-width: 509px;
  width: 100%;
  min-height: 130px;
}

.functional__bold-text {
  font-weight: 700;
  font-size: 28px;
  line-height: 35.84px;
  color: #21201f;
}

.functional__bold-text-services {
  font-weight: 700;
  font-size: 20px;
  line-height: 25.6px;
  color: #21201f;
}

.functional__normal-text {
  font-weight: 400;
  font-size: 20px;
  line-height: 25.6px;
  color: #21201f;
}

.functional__img {
  width: 65px;
  height: 65px;
}

.functional__text-conclusion {
  max-width: 1068px;
  width: 100%;
  min-height: 62px;
  height: auto;
}

.functional__block-result {
  max-width: 1192px;
  width: 100%;
  gap: 20px;
}

.functional__item-conclusion {
  gap: 56px;
}

.functional {
  margin: 0 20px;
  padding: 0 0 84px 0;
}

/*cost*/

.cost__title {
  max-width: 1192px;
  width: 100%;
  min-height: 50px;
  color: #2d2e2e;
  margin-bottom: 23px;
}

.cost__text {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  max-width: 1068px;
  width: 100%;
  min-height: 62px;
  height: auto;
}

.cost {
  margin: 0 20px;
  padding: 0 0 82px 0;
}

.cost__img {
  max-width: 152.43px;
  width: 100%;
  min-height: 26.16px;
  transform: translateY(5px);
}

.cost__block {
  max-width: 1192px;
  width: 100%;
}

/*Advantages*/

.advantages__title {
  max-width: 1192px;
  width: 100%;
  min-height: 50px;
  color: #2d2e2e;
  margin-bottom: 53px;
}

.advantages__item {
  display: flex;
  flex-direction: column;
  max-width: 383px;
  width: 100%;
  min-height: 250px;
  background-color: #f5f4f2;
  border-radius: 25px;
}

.advantages__circle {
  width: 36px;
  height: 36px;
  background-color: #34a853;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 20px 19px 20px;
}

.advantages__circle-2 {
  width: 36px;
  height: 36px;
  background-color: #34a853;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 20px 26px 20px;
}

.advantages__circle-3 {
  width: 36px;
  height: 36px;
  background-color: #34a853;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 20px 3px 20px;
}

.advantages__number,
.advantages__number-2,
.advantages__number-3 {
  color: #ffffff;
  font-size: 22px;
  font-weight: bold;
  line-height: 26.63px;
}

.advantages__text {
  max-width: 333px;
  width: 100%;
  min-height: 78px;
  height: auto;
  margin: 0 auto;
}

.advantages__text-2 {
  max-width: 346px;
  width: 100%;
  min-height: 78px;
  height: auto;
  margin: 0 auto;
}

.advantages__text-3 {
  max-width: 346px;
  width: 100%;
  min-height: 130px;
  height: auto;
  margin: 0 auto;
}

.advantages-element {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.advantages__list-items {
  max-width: 1192px;
  width: 100%;
  height: auto;
  gap: 21px;
}

.advantages__text-bold {
  font-weight: 700;
}

.advantages {
  margin: 0 20px;
  padding: 0 0 82px 0;
}

/*форма*/

.form__list-items {
  max-width: 1192px;
  width: 100%;
  gap: 68px;
}

.form__item {
  max-width: 587px;
  width: 100%;
  min-height: 631px;
  background-color: #f4f4f4;
  border-radius: 25px;
  border: 2px solid #e6e8ea;
}

.form__item-2 {
  padding: 105px 0 0 0;
}

.form__modifier {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 41px;
  margin: 0 auto;
  border: none;
  padding: 40px 0 37px;
}

.form__group {
  max-width: 400px;
  width: 100%;
  min-height: 77px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  border: 2px solid #e6e8ea;
}

.form__input {
  padding: 23px 0;
  font-size: 25px;
  line-height: 32px;
  text-align: center;
  color: #d7d7d7;
  opacity: 40%;
  border-radius: 20px;
  border: 2px solid #e6e8ea;
}

.form__button {
  font-weight: 700;
  padding: 26px 88px;
  line-height: 29.95px;
  font-size: 25px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.form__title {
  max-width: 608px;
  width: 100%;
  min-height: 184px;
  color: #2d2e2e;
  margin-bottom: 11px;
}

.form__text {
  max-width: 537px;
  width: 100%;
  min-height: 62px;
  height: auto;
  margin-bottom: 31px;
}

.form__img-icon-1 {
  width: 109.13px;
  height: 39.62px;
}

.form__img-icon-2 {
  width: 118.19px;
  height: 39.62px;
}

.form__img-icon-3 {
  width: 134.55px;
  height: 39.62px;
}

.form__img-icon-4 {
  width: 131.56px;
  height: 39.62px;
}

.form__block-icon {
  gap: 15px;
}

.form {
  margin: 0 20px;
  padding: 0 0 84px 0;
}

/*footer*/

.footer__container {
    margin: 0 20px;
}

.footer {
  max-width: 1920px;
  width: 100%;
  min-height: 486px;
  background-color: #f5f4f2;
}

.footer__block {
  flex-direction: column;
  max-width: 284px;
  width: 100%;
  min-height: 93px;
}

.logo-img {
  margin-bottom: 19.2px;
}

.footer__btn {
  padding: 25px 111.5px;
  font-size: 25px;
  line-height: 32px;
  text-align: center;
  border-radius: 20px;
  border: none;
}

.footer__content {
    padding: 168px 0;
    max-width: 1192px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
</style>
