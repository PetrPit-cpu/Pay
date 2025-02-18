<template>
  <div class="wrapper">
    <main class="page_container">
      <section class="header">
        <div class="header__container">
          <div class="header__block-list flex">
            <a class="header__link" href="#">
              <img
                class="header__logo"
                src="@/assets/Pay-taxi-logo.svg"
                alt="Логотип"
              />
            </a>
            <button class="header__btn btn" @click="openModal">
              {{ $t("secondPage.contactOne") }}
            </button>
            <!-- Переключение языка -->
            <button @click="toggleLanguage" class="header__lang-button flex">
              <img
                class="header__lang-icon"
                :src="currentFlag"
                :alt="currentLang"
              />
              <span class="header__lang-text">{{ currentLang }}</span>
              <img class="header__icon-ru" src="@/assets/icon-ru.svg" />
            </button>
          </div>
          <div class="header__block-name flex">
            <router-link to="/" class="header__back-link">
              {{ $t("secondPage.backToHome") }}
            </router-link>
            <h1 class="header__title title">
              {{ $t("secondPage.title") }}
            </h1>
            <span class="header__founder-name">{{
              $t("secondPage.founder")
            }}</span>
            <p class="header__founder-name-text">
              {{ $t("secondPage.founderDescription") }}
            </p>
          </div>
        </div>
      </section>
      <section class="panacea">
        <div class="panacea__container container">
          <h1 class="panacea__title title">{{ $t("panacea.title") }}</h1>
          <p class="panacea__text text-1">{{ $t("panacea.text") }}</p>
          <ul class="panacea__list-items list-reset flex">
            <div class="panacea__block-1 flex">
              <li class="panacea__item-1">
                <p class="panacea__text-element-1 element-one-card text-2">
                  {{ $t("panacea.item1") }}
                </p>
              </li>
              <li class="panacea__item-2">
                <p class="panacea__text-element-2 element-two-card text-2">
                  {{ $t("panacea.item2") }}
                </p>
              </li>
            </div>
            <li class="panacea__item-3">
              <p class="panacea__text-element-3 element-three-card text-2">
                {{ $t("panacea.item3") }}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="retribution">
        <div class="retribution__container container">
          <h1 class="retribution__title title-2">
            {{ $t("retribution.title") }}
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
                  {{ $t("retribution.item1") }}
                </p>
              </li>
              <li class="retribution__item-3 retribution-element-2">
                <p class="retribution__text-2 text-1">
                  {{ $t("retribution.item2") }}
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
                  {{ $t("processes.title") }}
                </h1>
              </li>
              <li class="processes__item">
                <p class="processes__text text-3">
                  {{ $t("processes.item1") }}
                </p>
              </li>
              <li class="processes__item">
                <p class="processes__text text-3">
                  {{ $t("processes.item2") }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="services">
        <div class="services__container container">
          <h1 class="services__title title-2">{{ $t("services.title") }}</h1>
          <p class="services__text-thesis text-1">{{ $t("services.text") }}</p>
          <ul class="services__list-items list-reset flex">
            <li class="services__item-1">
              <span class="services__circle-1">
                <span class="services__number-1">1</span>
              </span>
              <p class="services__text-1 text-2 services-element">
                {{ $t("services.item1") }}
              </p>
            </li>
            <li class="services__item-2">
              <span class="services__circle-2">
                <span class="services__number-2">2</span>
              </span>
              <p class="services__text-2 text-2 services-element">
                {{ $t("services.item2") }}
              </p>
            </li>
            <li class="services__item-1 item-3">
              <span class="services__circle-1 circle-3">
                <span class="services__number-1 number-3">3</span>
              </span>
              <p class="services__text-1 text-2 color-text-3 services-element">
                {{ $t("services.item3") }}
              </p>
            </li>
            <li class="services__item-2 item-4">
              <span class="services__circle-2 circle-4">
                <span class="services__number-2 number-4">4</span>
              </span>
              <p class="services__text-2 text-2 color-text-4 services-element">
                {{ $t("services.item4") }}
              </p>
            </li>
            <li class="services__item">
              <span class="services__circle">
                <span class="services__number">5</span>
              </span>
              <p class="services__text text-2 services-element">
                {{ $t("services.item5") }}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="functional">
        <div class="functional__container container">
          <h1 class="functional__title title-2">
            {{ $t("functional.title") }}
          </h1>
          <ul class="functional__list-items list-reset flex">
            <div class="functional__block-result flex">
              <li class="functional__item">
                <div class="functional__block">
                  <span class="functional__bold-text">
                    {{ $t("functional.bold1") }}
                  </span>
                  <p class="functional__normal-text">
                    {{ $t("functional.text1") }}
                  </p>
                </div>
              </li>
              <li class="functional__item">
                <div class="functional__block-services">
                  <span class="functional__bold-text-services">
                    {{ $t("functional.bold2") }}
                  </span>
                  <span class="functional__normal-text">
                    {{ $t("functional.text2") }}
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
                {{ $t("functional.conclusion") }}
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section class="cost">
        <div class="cost__container container">
          <div class="cost__block">
            <h1 class="cost__title title-2">
              {{ $t("cost.title") }}
            </h1>
            <p class="cost__text">
              {{ $t("cost.text1") }}
              <img
                class="cost__img"
                src="@/assets/Clip-cost.svg"
                alt="Яндекс Про"
              />
              {{ $t("cost.text2") }}
            </p>
          </div>
        </div>
      </section>
      <section class="advantages">
        <div class="advantages__container container">
          <h1 class="advantages__title title-2">
            {{ $t("advantages.title") }}
          </h1>
          <ul class="advantages__list-items list-reset flex">
            <li class="advantages__item">
              <span class="advantages__circle">
                <span class="advantages__number">1</span>
              </span>
              <p class="advantages__text text-2 advantages-element">
                <span class="advantages__text-bold">{{
                  $t("advantages.item1Bold")
                }}</span>
                {{ $t("advantages.item1") }}
              </p>
            </li>
            <li class="advantages__item">
              <span class="advantages__circle-2">
                <span class="advantages__number-2">2</span>
              </span>
              <p class="advantages__text-2 text-2 advantages-element">
                <span class="advantages__text-bold">{{
                  $t("advantages.item2Bold")
                }}</span>
                {{ $t("advantages.item2") }}
              </p>
            </li>
            <li class="advantages__item">
              <span class="advantages__circle-3">
                <span class="advantages__number-3">3</span>
              </span>
              <p class="advantages__text-3 text-2 advantages-element">
                <span class="advantages__text-bold">{{
                  $t("advantages.item3Bold")
                }}</span>
                {{ $t("advantages.item3") }}
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
                    :placeholder="$t('form.placeholderCompany')"
                  />
                </div>
                <div class="form__group">
                  <input
                    type="text"
                    id="name"
                    class="form__input"
                    :placeholder="$t('form.placeholderName')"
                    required
                  />
                </div>
                <div class="form__group">
                  <input
                    type="tel"
                    id="phone"
                    class="form__input"
                    :placeholder="$t('form.placeholderPhone')"
                    required
                  />
                </div>
                <div class="form__group">
                  <input
                    type="email"
                    id="email"
                    class="form__input"
                    :placeholder="$t('form.placeholderEmail')"
                  />
                </div>
                <button type="submit" class="form__button btn">
                  {{ $t("form.submitButton") }}
                </button>
              </form>
            </li>
            <li class="form__item-2">
              <h1 class="form__title title-2">
                {{ $t("form.title") }}
              </h1>
              <p class="form__text text-1">
                {{ $t("form.text") }}
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
                {{ $t("footer.companyName") }}
              </span>
              <span class="footer__text-inn text-1">
                {{ $t("footer.inn") }}
              </span>
              <span class="footer__text-ogrn text-1">
                {{ $t("footer.ogrn") }}
              </span>
            </div>
            <div class="footer__block-2">
              <button class="footer__btn btn" @click="openModal">
                {{ $t("footer.connectButton") }}
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <!-- Модальное окно -->
        <div v-if="isModalOpen" class="modal" @click="closeModal">
          <div class="modal__content" @click.stop>
            <button class="modal__close" @click="closeModal">×</button>
            <form class="form__modifier">
              <div class="form__group">
                <input
                  type="text"
                  id="company"
                  class="form__input"
                  :placeholder="$t('modal.placeholderCompany')"
                />
              </div>
              <div class="form__group">
                <input
                  type="text"
                  id="name"
                  class="form__input"
                  :placeholder="$t('modal.placeholderName')"
                  required
                />
              </div>
              <div class="form__group">
                <input
                  type="tel"
                  id="phone"
                  class="form__input"
                  :placeholder="$t('modal.placeholderPhone')"
                  required
                />
              </div>
              <div class="form__group">
                <input
                  type="email"
                  id="email"
                  class="form__input"
                  :placeholder="$t('modal.placeholderEmail')"
                />
              </div>
              <button type="submit" class="form__button btn">
                {{ $t("modal.submitButton") }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isRussian: true,
      isModalOpen: false, // Управление модальным окном
    };
  },
  computed: {
    currentFlag() {
      return this.isRussian
        ? require("@/assets/rus-logo.svg")
        : require("@/assets/eng-logo.svg");
    },
    currentLang() {
      return this.isRussian ? "РУ" : "ENG";
    },
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleLanguage() {
      this.isRussian = !this.isRussian;
      this.$i18n.locale = this.isRussian ? "ru" : "en";
    },
    openModal() {
      this.isModalOpen = true;
      document.body.style.overflow = "hidden"; // Отключаем прокрутку при открытом модальном окне
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflow = ""; // Включаем прокрутку при закрытом модальном окне
    },
  },
};
</script>

<style scoped>
/*модальное окно*/

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal__content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  position: relative;
}

.modal__close {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

/*модальное окно*/

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

.header__back-link {
  font-size: 25px;
  color: #f5b034;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  white-space: nowrap;
  margin-bottom: 10px;
}

.header__back-link:hover {
  color: #ffffff;
}

.header__block-list {
  padding: 109px 0 257px 0;
  margin: 0 121px 0 364px;
  justify-content: space-between;
  align-items: center;
}

.header__btn {
  max-width: 174px;
  width: 100%;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  border-radius: 10px;
  border: none;
  margin-right: 20px;
  margin-left: auto;
}

.header__lang-button {
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
}

.header__lang-icon {
  max-width: 29px;
  width: 100%;
  min-height: 29px;
  margin-right: 16px;
}

.header__lang-text {
  font-size: 20px;
  font-weight: 400;
  line-height: 64px;
  color: #ffffff;
  margin-right: 6px;
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
  border-radius: 25px;
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

@media (max-width: 1641px) {
  .header__block-list,
  .header__block-name {
    margin: 0 204.8px;
  }
}

@media (max-width: 1236px) {
  .header__block-list,
  .header__block-name {
    margin: 0 50px;
  }

  .panacea,
  .retribution,
  .processes,
  .services,
  .functional,
  .cost,
  .advantages,
  .form,
  .footer__container {
    margin: 0 70px;
  }

  .panacea {
    padding: 44px 0 54px;
  }

  .retribution__list-items {
    gap: 37px;
  }

  .retribution__title {
    margin-bottom: 35px;
  }

  .retribution {
    padding: 0 0 61px;
  }

  .processes {
    padding: 0 0 50px 0;
  }

  .processes__card {
    padding: 0 23px;
  }

  .processes__text {
    text-align: center;
  }

  .services {
    padding: 0 0 55px 0;
  }

  .functional__title {
    min-height: 60px;
    margin-bottom: 18px;
  }

  .functional {
    padding: 0 0 64px 0;
  }

  .functional__item {
    padding: 0 40px;
  }

  .advantages__title {
    margin-bottom: 35px;
  }

  .advantages {
    padding: 0 0 62px 0;
  }

  .advantages__item {
    padding: 0 20px 20px;
  }

  .form__modifier {
    max-width: 300px;
    gap: 31px;
  }

  .form__button {
    padding: 26px 38px;
    font-size: 21px;
  }

  .form__input {
    font-size: 22px;
  }

  .footer__btn {
    padding: 25px 100.5px;
    font-size: 23px;
  }

  .title {
    font-size: 40px;
    line-height: 50px;
  }

  .title-2 {
    font-size: 38px;
    line-height: 48px;
  }

  .circle-3 {
    background-color: #ffffff;
  }

  .number-3 {
    color: #f5b034;
  }

  .item-3 {
    background-color: #f5b034;
  }

  .color-text-3 {
    color: #ffffff;
  }

  .circle-4 {
    background-color: #f5b034;
  }

  .number-4 {
    color: #ffffff;
  }

  .item-4 {
    background-color: #f5f4f2;
  }

  .color-text-4 {
    color: #2d2e2e;
  }

  .element-one-card {
    padding: 83px 115px;
  }

  .element-two-card {
    padding: 83px 44px;
  }

  .element-three-card {
    padding: 97px 276px 97px 115px;
  }

  .form__item {
    padding: 0 20px;
  }

  .form__list-items {
    gap: 25px;
  }
}

@media (max-width: 1024px) {

  .header__container {
    min-height: 740px;
  }

  .header__block-list {
    padding: 39px 0 159px 0;
  }

  .header__block-list,
  .header__block-name {
    margin: 0 30px;
  }

  .header__btn {
    line-height: 46px;
  }

  .title {
    font-size: 35px;
    line-height: 40px;
  }

  .title-2 {
    font-size: 33px;
    line-height: 40px;
  }

  .text-1 {
    font-size: 20px;
    line-height: 28px;
  }

  .retribution-element-1 {
    padding: 25px 25px 25px;
  }

  .retribution-element-2 {
    padding: 25px 25px 25px 25px;
  }

  .retribution__circle {
    width: 45px;
    height: 45px;
  }

  .processes__list-items {
    padding: 0 10px;
  }

  .processes__title {
    min-height: 50px;
    margin-bottom: 20px;
    text-align: center;
  }

  .processes__card {
    padding: 0 0;
  }

  .panacea__block-1 {
    width: 100%;
    flex-direction: column;
  }

  .panacea__item-1,
  .panacea__item-2 {
    max-width: 100%;
  }

  .panacea__text-element-1,
  .panacea__text-element-2,
  .panacea__text-element-3 {
    max-width: 100%;
  }

  .services__list-items {
    width: 100%
  }

  .services__item-1,
  .services__item-2 {
    max-width: 100%;
  }

  .header__title {
    margin-bottom: 30px;
  }

  .panacea,
  .retribution,
  .processes,
  .services,
  .functional,
  .cost,
  .advantages,
  .form,
  .footer__container {
    margin: 0 50px;
  }

  .advantages__list-items {
    flex-direction: column;
  }

  .advantages__item {
    max-width: 100%;
  }

  .form__list-items {
    flex-direction: column;
  }

  .circle-3 {
    background-color: #f5b034;
  }

  .number-3 {
    color: #ffffff;
  }

  .item-3 {
    background-color: #f5f4f2;
  }

  .color-text-3 {
    color: #2D2E2E;
  }

  .circle-4 {
    background-color: #ffffff;
  }

  .number-4 {
    color: #f5b034;
  }

  .item-4 {
    background-color: #f5b034;
  }

  .color-text-4 {
    color: #ffffff;
  }

  .functional__block-result {
    flex-direction: column;
  }

  .functional__block {
    margin: 0;
  }

  .functional__block-services {
    margin: 0;
  }

  .functional__item-conclusion {
    gap: 28px;
  }

  .functional__item {
    max-width: 100%;
    padding: 0 0 0 20px;
  }

  .functional__block-services {
    max-width: 100%;
  }

  .cost {
    padding: 0 0 62px 0;
  }

  .cost__text {
    line-height: 30px;
  }

  .advantages__item {
    padding: 0 0 0;
  }

  .form__list-items {
    width: 100%;
  }

  .form__item {
    max-width: 100%;
    padding: 0 0;
  }

  .form__item-2 {
    padding: 10px 0 0 0;
  }

  .form__title {
    text-align: center;
    max-width: 100%;
    min-height: auto;
  }

  .form__text {
    text-align: center;
    max-width: 100%;
    min-height: auto;
  }

  .form__block-icon {
    justify-content: space-evenly;
  }

  .form__block-icon {
    gap: 10px;
  }

  .footer__content {
    padding: 128px 0;
  }

  .footer__btn {
    padding: 20px 30px;
    font-size: 23px;
  }

  .element-one-card,
  .element-two-card,
  .element-three-card {
    padding: 83px 95px;
  }

  .footer {
    min-height: 402px;
  }
}

/*320*/
@media (max-width: 586px) {
  .form__block-icon {
    flex-direction: column;
    align-items: center;
  }

  .form__img-icon-1 {
    width: 134.55px;
    height: 49.62px;
  }

  .form__img-icon-2 {
    width: 134.55px;
    height: 39.62px;
  }

  .form__img-icon-4 {
    width: 134.55px;
    height: 44.62px;
  }

  .title-2 {
  font-size: 22px;
  line-height: 27px;
  }

  .form__title {
    text-align: left;
  }

  .form__text {
    text-align: left;
  }

  .title {
    font-size: 23px;
    line-height: 28px;
  }

  .header {
    margin: 10px 0 10px 0;
    padding: 0 10px;
  }

  .header__back-link {
    font-size: 21px;
  }

  .header__block-list,
  .header__block-name {
    margin: 0 10px;
  }

  .header__founder-name {
    font-size: 23px;
  }

  .header__founder-name-text {
    font-size: 21px;
    line-height: 22.56px;
  }

  .header__btn {
    max-width: 110px;
    font-size: 13px;
    line-height: 20px;
    margin-right: 5px;
  }

  .header__logo {
    max-width: 75px;
  }

  .header__icon-ru {
    max-width: 14px;
    width: 100%;
  }

  .header__container {
    min-height: 475px;
  }

  .header__block-list {
    padding: 10px 0 100px 0;
  }

  .header__lang-icon {
    max-width: 19px;
    min-height: 19px;
    margin-right: 6px;
  }

  .header__lang-text {
    font-size: 13px;
    line-height: 36px;
  }

  .element-one-card,
  .element-two-card,
  .element-three-card {
    padding: 53px 53px;
  }

  .panacea__text-element-1,
  .panacea__text-element-2,
  .panacea__text-element-3 {
    font-size: 20px;
    line-height: 22.16px;
  }

  .panacea,
  .retribution,
  .processes,
  .services,
  .functional,
  .cost,
  .advantages,
  .form,
  .footer__container {
    margin: 0 10px;
  }

  .panacea {
    padding: 24px 0 34px;
  }

  .panacea__title {
    margin-bottom: 15px;
  }

  .retribution__title {
    margin-bottom: 15px;
  }

  .text-1 {
    font-size: 20px;
    line-height: 24px;
  }

  .text-2 {
    font-size: 20px;
    line-height: 22.16px;
  }

  .retribution__list-items {
    gap: 10px;
  }

  .retribution__circle {
    width: 30px;
    height: 30px;
  }

  .retribution__number {
    font-size: 13px;
  }

  .retribution__block-thesis {
    gap: 20px;
  }

  .retribution {
    padding: 0 0 32px;
  }

  .processes {
    padding: 0 0 32px 0;
  }

  .services__title {
    margin-bottom: 15px;
  }

  .services__text-thesis {
    text-align: left;
    margin-bottom: 15px;
  }

  .services__circle-1,
  .services__circle-2 {
    width: 30px;
    height: 30px;
  }

  .services__number-1,
  .services__number-2,
  .services__number {
    font-size: 16px;
  }

  .functional__title {
    text-align: center;
  }

  .functional__bold-text {
    font-size: 21px;
    line-height: 24.84px;
  }

  .functional__bold-text-services {
    font-size: 18px;
    line-height: 21.6px;
  }

  .functional__normal-text {
    font-size: 18px;
    line-height: 21.6px;
  }

  .functional__item {
    padding: 0 0 0 10px;
  }

  .functional__item-conclusion {
    flex-direction: row-reverse;
  }

  .functional__img {
    padding: 51px 0;
  }

  .functional {
    padding: 0 0 32px 0;
  }

  .cost__text {
    font-size: 19px;
  }

  .cost {
    padding: 0 0 32px 0;
  }

  .advantages__title {
    margin-bottom: 20px;
  }

  .advantages__circle,
  .advantages__circle-2,
  .advantages__circle-3 {
    width: 30px;
    height: 30px;
  }

  .advantages__number,
  .advantages__number-2,
  .advantages__number-3 {
    font-size: 18px;
  }

  .advantages__item {
    display: flex;
    gap: 15px;
  }

  .advantages {
    padding: 0 0 32px 0;
  }

  .form__modifier {
    max-width: 243px;
    gap: 20px;
  }

  .form__group {
    max-width: 240px;
    min-height: 63px;
    border-radius: 18px;
  }

  .form__input {
    padding: 14px 0;
    font-size: 18px;
    border-radius: 18px;
  }

  .form__item {
    max-width: 587px;
    min-height: 488px;
  }

  .form__button {
    padding: 18px 18px;
    font-size: 21px;
  }

  .form {
    padding: 0 0 42px 0;
  }

  .footer__content {
    padding: 68px 0;
  }

  .footer {
    min-height: 391px;
  }

  .footer__btn {
    padding: 15px 40px;
    font-size: 20px;
  }

  .footer__content {
    flex-direction: column;
    gap: 40px;
  }

  .footer__block {
    text-align: center;
  }
}
</style>
