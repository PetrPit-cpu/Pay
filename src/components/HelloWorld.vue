<template>
  <div class="wrapper">
    <main class="page_container">
      <section class="header">
        <div class="header__container">
          <div class="header__block-list flex">
            <img
              class="header__logo"
              src="@/assets/Pay-taxi-logo.svg"
              alt="Логотип"
            />
            <div class="header__menu">

              <!-- Основное меню, скрывается при `max-width: 998px` -->
              <nav :class="['header__nav', { 'is-active': isMenuOpen }]">
                <ul class="header__list-items list-reset flex">
                  <li class="header__item">
                    <a class="header__link" href="#" @click="toggleMenu">{{
                      $t("header.forWhom")
                    }}</a>
                  </li>
                  <li class="header__item">
                    <a class="header__link" href="#" @click="toggleMenu">{{
                      $t("header.clients")
                    }}</a>
                  </li>
                  <li class="header__item">
                    <a class="header__link" href="#" @click="toggleMenu">{{
                      $t("header.features")
                    }}</a>
                  </li>
                  <li class="header__item">
                    <a class="header__link" href="#" @click="toggleMenu">{{
                      $t("header.pricing")
                    }}</a>
                  </li>
                </ul>
                <button class="header__btn btn" @click="toggleMenu">
                  {{ $t("header.contact") }}
                </button>

                <!-- Кнопка закрытия бургера -->
                <button class="header__burger-close" @click="toggleMenu">
                  {{ $t("header.close") }}
                </button>
              </nav>
                <div class="header__top flex">
                <!-- Блок переключения языка -->
                <div class="header__rus flex">
                  <button
                    @click="toggleLanguage"
                    class="header__lang-button flex"
                  >
                    <img
                      class="header__lang-icon"
                      :src="currentFlag"
                      :alt="currentLang"
                    />
                    <span class="header__lang-text">{{ currentLang }}</span>
                    <img class="header__icon-ru" src="@/assets/icon-ru.svg" />
                  </button>

                  <!-- БУРГЕР-МЕНЮ (рядом с `header__rus`) -->
                  <button class="header__burger" @click="toggleMenu" :class="{ 'is-active': isMenuOpen }">
                    <span class="header__burger-line"></span>
                    <span class="header__burger-line"></span>
                    <span class="header__burger-line"></span>
                  </button>
                </div>
              </div>
            </div>

          </div>
          <div class="header__block-name flex">
            <h1 class="header__title">{{ $t("header.title") }}</h1>
            <p class="header__text">{{ $t("header.text") }}</p>
          </div>
          <router-link class="header__link-click" to="/second">
            <img
            class="header__link-svg"
            src="@/assets/header-svg-icon-link.svg"
            alt="Ссылка"
          />
          </router-link>
        </div>
      </section>
      <section class="services">
        <div class="services__container">
          <div class="services__block-1 flex">
            <h3 class="services__title title">
              {{ $t("servicesSection.title") }}
            </h3>
            <p class="services__text text">
              {{ $t("servicesSection.description") }}
            </p>
          </div>
          <ul class="services__list-items list-reset flex">
            <li class="services__item-left flex">
              <img
                class="services__auto"
                src="@/assets/section-auto.jpg"
                alt="Авто"
              />
              <button class="services__btn btn">
                {{ $t("servicesSection.bankOption") }}
              </button>
            </li>
            <li class="services__item-right flex">
              <img
                class="services__auto"
                src="@/assets/section-card.jpg"
                alt="Авто"
              />
              <button class="services__btn btn">
                {{ $t("servicesSection.taxiOption") }}
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section class="clients">
        <div class="clients__container flex">
          <div class="clients__image-stack">
            <div
              class="clients__image-stack__item image-stack__item--bottom"
            ></div>
            <div
              class="clients__image-stack__item image-stack__item--top"
            ></div>
          </div>
          <div class="clients__two-block-right flex">
            <div class="clients__list-items-right list-reset flex">
              <h2 class="clients__title title">
                {{ $t("clientsSection.heading") }}
              </h2>
              <p class="clients__text-1 text">
                {{ $t("clientsSection.clientDescription") }}
              </p>
            </div>
            <ul class="clients__list-items-right-2 list-reset flex">
              <li class="clients__item-1 flex">
                <img
                  class="clients__img-1"
                  src="@/assets/Yandex-go.svg"
                  alt="Yandex"
                />
                <img
                  class="clients__img-2"
                  src="@/assets/Gett.svg"
                  alt="Gett"
                />
                <img
                  class="clients__img-3"
                  src="@/assets/Grab.svg"
                  alt="Grab"
                />
              </li>
              <li class="clients__item-2 flex">
                <img
                  class="clients__img-2-1"
                  src="@/assets/Uber.svg"
                  alt="Uber"
                />
                <img
                  class="clients__img-2-2"
                  src="@/assets/Lua.svg"
                  alt="Lua"
                />
                <img
                  class="clients__img-2-3"
                  src="@/assets/Didi.svg"
                  alt="Didi"
                />
              </li>
              <li class="clients__item-3 flex">
                <img
                  class="clients__img-3-1"
                  src="@/assets/Wheely.svg"
                  alt="Wheely"
                />
                <img
                  class="clients__img-3-2"
                  src="@/assets/Uber-Eats.svg"
                  alt="Uber Eats"
                />
                <img
                  class="clients__img-3-3"
                  src="@/assets/Careem.svg"
                  alt="Careem"
                />
              </li>
            </ul>
            <p class="clients__text-2 text">
              {{ $t("clientsSection.additionalAggregators") }}
            </p>
          </div>
        </div>
      </section>
      <section class="functional">
        <div class="functional__container container">
          <h2 class="functional__title title">
            {{ $t("functionalSection.functionalTitle") }}
          </h2>
          <ul class="functional__list-items list-reset flex">
            <li class="functional__item-1">
              <img
                class="functional__iphone"
                src="@/assets/iphone-taxi.png"
                alt="iphone"
              />
            </li>
            <li class="functional__item-2 flex">
              <a class="functional__link" href="#"
                ><img
                  class="functional__rs"
                  src="@/assets/RuStore.svg"
                  alt="RuStore"
              /></a>
              <a class="functional__link" href="#"
                ><img
                  class="functional__as"
                  src="@/assets/AppStore.svg"
                  alt="AppStore"
              /></a>
              <a class="functional__link" href="#"
                ><img
                  class="functional__gp"
                  src="@/assets/GooglePlay.svg"
                  alt="GooglePlay"
              /></a>
              <a class="functional__link" href="#"
                ><img
                  class="functional__ag"
                  src="@/assets/AppGallery.svg"
                  alt="AppGallery"
              /></a>
            </li>
            <li class="functional__item-3 flex">
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-icon-gray.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature1")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-icon-gray.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature2")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-icon-gray.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature3")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-icon-gray.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature4")
                }}</span>
              </div>
              <div class="functional__group group-mobile flex">
                <img
                  class="functional__icon-mobile"
                  src="@/assets/functional-gray-b.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature5")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-gray-b.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature6")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-gray-b.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature7")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-gray-b.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature8")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-gray-b.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature9")
                }}</span>
              </div>
              <div class="functional__group flex">
                <img
                  class="functional__img-gray-icon"
                  src="@/assets/functional-gray-b.svg"
                />
                <span class="functional__text">{{
                  $t("functionalSection.feature10")
                }}</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section class="cost">
        <div class="cost__container container">
          <ul class="cost__list-items list-reset flex">
            <li class="cost__item-1 flex">
              <span
                class="cost__description"
                v-html="$t('costSection.priceText')"
              ></span>
              <strong
                class="cost__include"
                v-html="$t('costSection.includesTitle')"
              ></strong>
              <div class="cost__content-element flex">
                <div class="cost__block-list flex">
                  <img class="cost__img" src="@/assets/cost-img-svg.svg" />
                  <p class="cost__text" v-html="$t('costSection.option1')"></p>
                </div>
                <div class="cost__block-list flex">
                  <img class="cost__img" src="@/assets/cost-img-svg.svg" />
                  <p class="cost__text" v-html="$t('costSection.option2')"></p>
                </div>
                <div class="cost__block-list flex">
                  <img class="cost__img" src="@/assets/cost-img-svg.svg" />
                  <p class="cost__text" v-html="$t('costSection.option3')"></p>
                </div>
                <div class="cost__block-list flex">
                  <img class="cost__img" src="@/assets/cost-img-svg.svg" />
                  <p class="cost__text" v-html="$t('costSection.option4')"></p>
                </div>
              </div>
              <button class="cost__btn btn">
                {{ $t("costSection.orderButton") }}
              </button>
            </li>
            <li class="cost__item-2">
              <img class="cost__photo" src="@/assets/cost-img.jpg" />
            </li>
          </ul>
        </div>
      </section>
      <section class="footer">
        <div class="footer__container container">
          <ul class="footer__list-items-1 list-reset flex">
            <li class="footer__item-1">
              <h2 class="footer__title title">
                {{ $t("footerSection.sectionTitle") }}
              </h2>
              <p
                class="footer__text text"
                v-html="$t('footerSection.textContent')"
              ></p>
            </li>
            <li class="footer__item-2">
              <img
                class="footer__img-map"
                src="@/assets/footer-map-img.svg"
                alt="Map"
              />
            </li>
          </ul>
          <ul class="footer__list-items-2 list-reset flex">
            <li class="footer__item-3">
              <h2 class="footer__form-title">
                {{ $t("footerSection.formHeading") }}
              </h2>
              <form class="footer__form">
                <div class="footer__form-group">
                  <input
                    type="text"
                    id="company"
                    class="footer__form-input"
                    :placeholder="$t('footerSection.placeholderCompany')"
                  />
                </div>
                <div class="footer__form-group">
                  <input
                    type="text"
                    id="name"
                    class="footer__form-input"
                    :placeholder="$t('footerSection.placeholderName')"
                    required
                  />
                </div>
                <div class="footer__form-group">
                  <input
                    type="tel"
                    id="phone"
                    class="footer__form-input"
                    :placeholder="$t('footerSection.placeholderPhone')"
                    required
                  />
                </div>
                <div class="footer__form-group">
                  <input
                    type="email"
                    id="email"
                    class="footer__form-input"
                    :placeholder="$t('footerSection.placeholderEmail')"
                  />
                </div>
                <button type="submit" class="footer__form-button btn">
                  {{ $t("footerSection.submitButton") }}
                </button>
              </form>
            </li>
            <li class="footer__item-4 flex">
              <h2 class="footer__title-right">
                {{ $t("footerSection.serviceMessage") }}
              </h2>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isRussian: true
    };
  },
  computed: {
    currentFlag() {
      return this.isRussian ? require('@/assets/rus-logo.svg') : require('@/assets/eng-logo.svg');
    },
    currentLang() {
      return this.isRussian ? "РУ" : "ENG";
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleLanguage() {
      this.isRussian = !this.isRussian;
      this.$i18n.locale = this.isRussian ? "ru" : "en";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Переиспользуемые стили всей стрницы*/

.btn {
  font-weight: 700;
  background-color: #f5b034;
  color: #ffffff;
  cursor: pointer;
}

/*header*/
/*тест*/
/* Контейнер для языка и бургера */
.header__rus {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Бургер-меню (по умолчанию скрыт) */
.header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

/* Линии бургера */
.header__burger-line {
  width: 30px;
  height: 4px;
  background-color: #F5B034;
  border-radius: 5px;
  transition: 0.3s;
}

/* Бургер открывается — линии превращаются в крестик */
.header__burger.open .header__burger-line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.header__burger.open .header__burger-line:nth-child(2) {
  opacity: 0;
}
.header__burger.open .header__burger-line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* тест*/
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
/*тест*/
.header {
  margin: 20px 0 20px 0;
  padding: 0 20px;
}

.header__burger-close {
  display: none;
}

.header__container {
  position: relative;
  max-width: 1880px;
  width: 100%;
  min-height: 1040px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)),
    url("@/assets/header-background-img.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  overflow: hidden;
}

.header__container::before {
  content: "";
  position: absolute;
  width: 383px;
  height: 383px;
  background-color: rgba(245, 176, 52, 1);
  border-radius: 50%;
  top: 396px;
  left: 1364px;
  transform: translate(-50%, -50%);
  filter: blur(200px);
  z-index: 1;
}

.header__nav {
  display: flex;
  margin-right: 9.7vw;
}

.header__menu {
  display: flex;
}

.header__item {
  white-space: nowrap;
}

.header__logo {
  max-width: 124px;
  width: 100%;
  min-height: 36.8px;
}

.header__block-list {
  padding: 50px 0 279px 0;
  margin: 0 220px 0 223px;
  justify-content: space-between;
}

.header__list-items {
  gap: 99px;
  margin-right: 3vh;
}

.header__link {
  font-weight: 400;
  font-size: 20px;
  line-height: 64px;
  color: #ffffff;
}

.header__btn {
  padding: 0px 50px;
  max-width: 205px;
  width: 100%;
  font-size: 20px;
  line-height: 64px;
  text-align: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}

.header__ru-img {
  max-width: 29px;
  width: 100%;
  min-height: 29px;
}

.header__icon-ru {
  max-width: 12px;
  width: 100%;
  min-height: 6px;
}

.header__link-ru-1 {
  font-weight: 400;
  font-size: 20px;
  line-height: 64px;
  color: #ffffff;
}

.header__rus {
  gap: 16px;
}

.header__click {
  gap: 6px;
  align-items: center;
}

.header__block-name {
  flex-direction: column;
  margin: 0 220px 0 223px;
  gap: 17px;
  padding-bottom: 171px;
}

.header__title {
  font-weight: 700;
  font-size: 60px;
  line-height: 76.8px;
  color: #ffffff;
  max-width: 1153px;
  width: 100%;
  min-height: 154px;
}

.header__text {
  font-weight: 400;
  font-size: 35px;
  line-height: 45px;
  color: #ffffff;
  max-width: 1397px;
  width: 100%;
  min-height: 165px;
}

.header__link-svg {
  max-width: 80px;
  width: 100%;
  min-height: 80px;
  margin-right: 101px;
  display: block;
  margin-left: auto;
}

/*services*/

.services {
  padding: 74px 0 73px 0;
}

.services__container {
  max-width: 1920px;
  width: 100%;
  min-height: auto;
}

.title {
  font-weight: 700;
  font-size: 60px;
  line-height: 76.8px;
  color: #000000;
}

.services__text {
  max-width: 1435px;
  width: 100%;
  min-height: 42px;
  text-align: center;
}

.text {
  font-weight: 400;
  font-size: 24px;
  line-height: 34px;
  color: #000000;
}

.services__block-1 {
  align-items: center;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 34px;
}

.services__auto {
  max-width: 707.5px;
  width: 100%;
  min-height: 323px;
}

.services__btn {
  max-width: 707.5px;
  width: 100%;
  height: auto;
  font-weight: 700;
  font-size: 28px;
  line-height: 35.84px;
  padding: 40px 20px;
  border-radius: 20px;
  border: none;
  text-align: left;
  letter-spacing: -1.8px;
}

.services__item-left {
  flex-direction: column;
  gap: 20px;
}

.services__item-right {
  flex-direction: column-reverse;
  gap: 20px;
}

.services__list-items {
  gap: 20px;
  justify-content: center;
}

/* clients */

.clients {
  margin: 0 243px;
  padding: 119px 0 93px 0;
}

.clients__container {
  justify-content: space-between;
  gap: 20px;
}

.clients__container,
.container {
  max-width: 1920px;
  width: 100%;
  min-height: auto;
}

.clients__image-stack {
  display: grid;
  grid-template-columns: 554px;
  grid-template-rows: 442px;
}

.clients__image-stack__item {
  grid-column: 1 / -1;
  grid-row: 1 / -1;
}

.image-stack__item--bottom {
  max-width: 363px;
  width: 100%;
  min-height: 442px;
  background-image: url("../assets/clients-image-1.jpeg");
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  transform: rotate(0deg) scaleX(-1);
  background-position: center;
}

.image-stack__item--top {
  max-width: 363px;
  width: 100%;
  min-height: 442px;
  background-image: url("../assets/clients-image-2.jpeg");
  border-radius: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  transform: translate(192px, 61px);
}

.clients__list-items-right {
  flex-direction: column;
  margin-bottom: 52px;
}

.clients__list-items-right-2 {
  margin-bottom: 38px;
}

.clients__item-1,
.clients__item-2,
.clients__item-3 {
  flex-direction: column;
}

.clients__item-1,
.clients__item-2,
.clients__item-3 {
  gap: 62px;
}

.clients__item-1 {
  margin-right: 5.27%;
}

.clients__item-2 {
  margin-right: 2.01%;
}

.clients__img-1 {
  max-width: 172.44px;
  width: 100%;
  min-height: 40px;
}

.clients__img-2 {
  max-width: 108.09px;
  width: 100%;
  min-height: 40px;
  padding-bottom: 16px;
}

.clients__img-3 {
  max-width: 116px;
  width: 100%;
  min-height: 41px;
}

.clients__img-2-1 {
  max-width: 115.14px;
  width: 100%;
  min-height: 41px;
  padding-left: 36px;
}

.clients__img-2-2 {
  max-width: 72px;
  width: 100%;
  min-height: 49px;
}

.clients__img-2-3 {
  max-width: 150.18px;
  width: 100%;
  min-height: 47px;
  padding-left: 14px;
}

.clients__two-block-right {
  flex-direction: column;
}

.clients__img-3-1 {
  max-width: 223px;
  width: 100%;
  min-height: 26.69px;
  padding-top: 13.31px;
  padding-bottom: 9.31px;
  padding-left: 57px;
}

.clients__img-3-2 {
  max-width: 194.68px;
  width: 100%;
  min-height: 40px;
}

.clients__img-3-3 {
  max-width: 207.88px;
  width: 100%;
  min-height: 41px;
  padding-left: 72px;
}

.clients__text-1,
.clients__text-2 {
  max-width: 829px;
  width: 100%;
  min-height: 50px;
}

/*functional*/

.functional__iphone {
  max-width: 708px;
  width: 100%;
  min-height: 565px;
}

.functional__rs {
  max-width: 180px;
  width: 100%;
  min-height: 66px;
}

.functional__ap {
  max-width: 180px;
  width: 100%;
  min-height: 60.34px;
}

.functional__gp {
  max-width: 180px;
  width: 100%;
  min-height: 53px;
}

.functional__ag {
  max-width: 180px;
  width: 100%;
  min-height: 54.2px;
}

.functional__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 20.48px;
  color: #3a3a3a;
}

.functional__icon-mobile {
  max-width: 15px;
  width: 100%;
  min-height: 12px;
}

.functional__img-gray-icon {
  max-width: 9.33px;
  width: 100%;
  min-height: 7px;
}

.functional__group {
  gap: 12px;
}

.group-mobile {
  max-width: 235px;
  width: 100%;
  padding: 8px 12px;
  border-radius: 24px;
  border: 1px solid #94949480;
}

.functional__item-3 {
  justify-content: center;
  flex-direction: column;
  gap: 24px;
}

.functional__container {
  max-width: 1920px;
  width: 100%;
  min-height: auto;
}

.functional {
  padding: 42px 0px;
  margin: 0 243px;
}

.functional__title {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 36px;
  transform: translate(150px, 0px);
}

.functional__item-2 {
  margin-right: 4.82%;
  gap: 30px;
  justify-content: center;
  flex-direction: column;
  /*transform: translate(-70px, 0px);*/
}

.functional__item-3 {
  position: relative;
}

.functional__item-3::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    0deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0) 50%,
    #ffffff 100%
  );
}

/*cost*/

.cost {
  padding: 159px 0 87px;
  margin: 0 243px;
}

.cost__container {
  max-width: 1920px;
  width: 100%;
  min-height: auto;
}

.cost__item-1 {
  flex-direction: column;
  padding-bottom: 149px;
  justify-content: flex-end;
}

.cost__description {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

::v-deep(.cost__price) {
  font-weight: 700;
  font-size: 70px;
  line-height: 30px;
  color: #000000;
}

.cost__include {
  max-width: 507px;
  width: 100%;
  min-height: 33px;
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  margin-bottom: 25px;
  color: #000000;
}

.cost__img {
  max-width: 28px;
  width: 100%;
  min-height: 28px;
}

.cost__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}

.cost__block-list {
  gap: 32px;
}

.cost__content-element {
  flex-direction: column;
  gap: 8px;
  margin-bottom: 44px;
}

.cost__btn {
  padding: 16px 115.5px;
  max-width: 465px;
  width: 100%;
  border: none;
  border-radius: 20px;
}

.cost__photo {
  max-width: 708px;
  width: 100%;
  min-height: 565px;
  border-radius: 24px;
}

.cost__list-items {
  justify-content: space-between;
  gap: 20px;
}

/*footer*/

.footer__container {
  max-width: 1920px;
  width: 100%;
  min-height: auto;
  background-color: #000000;
  padding: 168px 0 140px 0;
}

.footer__title {
  color: #ffffff;
  margin-bottom: 20px;
}

.footer__text {
  max-width: 685px;
  width: 100%;
  min-height: 88px;
  color: #ffffff;
}

.footer__img-map {
  max-width: 708px;
  width: 100%;
  min-height: 404.64px;
}

.footer__item-1 {
  position: relative;
  padding-top: 51px;
}

.footer__item-1::before {
  content: "";
  position: absolute;
  width: 349px;
  height: 349px;
  background-color: rgba(245, 176, 52, 1);
  border-radius: 50%;
  top: 169px;
  left: 237px;
  transform: translate(-50%, -50%);
  filter: blur(200px);
  z-index: 1;
}

.footer__list-items-1 {
  justify-content: space-between;
  gap: 42px;
  padding-bottom: 45.36px;
  margin: 0 243px;
}

/*форма*/

.footer__item-3 {
  max-width: 587px;
  width: 100%;
  min-height: 788px;
  background-color: #f4f4f4;
  border-radius: 10px;
}

.footer__form-title {
  padding: 41px 0;
  font-weight: 700;
  font-size: 35px;
  line-height: 84px;
  text-align: center;
}

.footer__form {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 41px;
  margin: 0 auto;
  border: none;
}

.footer__form-group {
  max-width: 400px;
  width: 100%;
  min-height: 77px;
  display: flex;
  flex-direction: column;
  border: none;
}

.footer__form-input {
  padding: 23px 0;
  font-size: 25px;
  line-height: 32px;
  text-align: center;
  color: #d7d7d7;
  opacity: 40%;
  border-radius: 20px;
  border: 2px solid #e6e8ea;
}

.footer__form-input:focus {
  border-color: #007bff;
  outline: none;
}

.footer__form-button {
  font-weight: 700;
  padding: 26px 88px;
  line-height: 29.95px;
  font-size: 25px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.footer__form-button:hover {
  background-color: #0056b3;
  transition: (0, 0);
}

.footer__title-right {
  max-width: 712px;
  width: 100%;
  min-height: 280px;
  font-weight: 700;
  font-size: 55px;
  line-height: 70.4px;
  color: #ffffff;
}

.footer__list-items-2 {
  margin: 0 243px;
  justify-content: space-between;
  gap: 140px;
}

.footer__item-4 {
  position: relative;
  align-items: center;
}

.footer__item-4::before {
  content: "";
  position: absolute;
  width: 349px;
  height: 349px;
  background-color: rgba(245, 176, 52, 1);
  border-radius: 50%;
  top: 500px;
  left: 520px;
  transform: translate(-50%, -50%);
  filter: blur(200px);
  z-index: 1;
}

@media (max-width: 1785px) {
  .header__list-items {
    gap: 40px;
  }
}

/*1440*/
@media (max-width: 1586px) {
  .header__list-items {
    gap: 20px;
  }

  .header__nav {
    margin-right: 4.7vw;
  }

  .header__container::before {
    left: 1030px;
  }

  .header__btn {
    padding: 0px 25px;
  }

  .header__block-list,
  .header__block-name {
    margin: 0 120px 0 123px;
  }

  .header__link-svg {
    padding: 40px 0;
  }

  .header__block-name {
    padding-bottom: 70px;
  }

  .services__text {
    font-size: 21px;
  }

  .services__list-items {
    margin: 0 123px;
    justify-content: space-between;
  }

  .services__btn {
    max-width: 507.5px;
    font-size: 23px;
    letter-spacing: -1.4px;
  }

  .services__auto {
    max-width: 507.5px;
    min-height: 223px;
  }

  .clients {
    margin: 0 123px;
  }

  .clients__container {
    gap: 80px;
  }

  .functional {
    margin: 0 123px;
  }

  .functional__title {
    justify-content: center;
    transform: translate(0px, 0px);
  }

  ::v-deep(.cost__price) {
    font-size: 50px;
  }

  .cost {
    margin: 0 123px;
  }

  .cost__list-items {
    gap: 80px;
  }

  .footer__list-items-1 {
    margin: 0 123px;
    gap: 80px;
  }

  .footer__list-items-2 {
    margin: 0 123px;
    gap: 50px;
  }

  .footer__item-1::before {
    width: 300px;
    height: 300px;
  }

  .footer__item-4::before {
    left: 360px;
    width: 300px;
    height: 300px;
  }
}

/*1024*/
@media (max-width: 1280px) {
  .header__container::before {
    left: 885px;
  }

  .header__block-list,
  .header__block-name {
    margin: 0 60px 0 63px;
  }

  .header__list-items {
    gap: 40px;
  }

  .header__link-svg {
    margin-right: 50px;
  }

  .header__title {
    max-width: 1037px;
    width: 100%;
    height: auto;
    font-size: 50px;
    line-height: 65px;
  }

  .header__text {
    font-size: 30px;
    max-width: 1037px;
    width: 100%;
    height: auto;
  }

  .header__btn {
    padding: 0px 10px;
    font-size: 16px;
  }

  .header__link {
    font-size: 16px;
  }

  .title {
    font-size: 50px;
  }

  .services__title {
    max-width: 496px;
    width: 100%;
    height: auto;
  }

  .services__list-items {
    margin: 0 63px;
  }

  .services__text {
    max-width: 954px;
    width: 100%;
    height: auto;
    font-size: 21px;
  }

  .services__btn {
    font-size: 18px;
    letter-spacing: 0px;
  }

  .clients {
    margin: 0 63px;
  }

  .clients__title {
    line-height: 50px;
    margin-bottom: 20px;
  }

  .clients__list-items-right {
    margin-bottom: 10px;
  }

  .clients__item-1,
  .clients__item-2,
  .clients__item-3 {
    gap: 32px;
  }

  .clients__list-items-right-2 {
    margin-bottom: 20px;
  }

  .clients__text-1,
  .clients__text-2 {
    max-width: 320px;
    width: 100%;
    min-height: auto;
  }

  .functional {
    margin: 0 63px;
  }

  .functional__iphone {
    min-height: 365px;
  }

  .cost {
    padding: 129px 0 57px;
    margin: 0 63px;
  }

  .cost__btn {
    padding: 16px 75px;
  }

  ::v-deep(.cost__price) {
    font-size: 45px;
  }

  .footer__container {
    padding: 128px 0 100px 0;
  }

  .footer__title-right {
    font-size: 45px;
    line-height: 60px;
  }

  .footer__form-title {
    font-size: 25px;
    line-height: 45px;
    padding: 21px 0;
  }

  .footer__form {
    max-width: 300px;
    gap: 21px;
  }

  .footer__form-group {
    max-width: 300px;
  }

  .footer__form-button {
    padding: 26px 30px;
    font-size: 20px;
  }

  .footer__item-3 {
    max-width: 587px;
    width: 100%;
    min-height: 665px;
    height: 100%;
  }

  .footer__item-4::before {
    left: 230px;
  }
}

/*768*/
@media (max-width: 998px) {
  /*тест*/
  .header__burger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1001;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  /* При открытии меню бургер становится прозрачным */
  .header__burger.is-active {
    opacity: 0;
  }

  .header__nav {
    position: absolute;
    top: 0;
    right: -100%;
    width: 250px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: right 0.3s ease-in-out;
    margin-right: 0;
  }

  .header__nav.is-active {
    right: 0;
  }

  .header__list-items {
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;
    margin-right: 0;
  }

  .header__link {
    line-height: 40px;
  }

  .header__link-svg {
    margin-right: 50px;
  }

  .header__title {
    font-size: 45px;
    line-height: 55px;
  }

  .header__btn {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
    width: 100%;
    font-size: 18px;
    line-height: 50px;
  }

  /* Показываем кнопку и кнопку закрытия только когда меню активно */
  .header__nav.is-active .header__btn,
  .header__nav.is-active .header__burger-close {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    margin-right: 0;
  }

  .header__nav.is-active .header__burger-close {
    display: block;
  }

  /* Кнопка закрытия меню */
  .header__burger-close {
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
    max-width: 205px;
    width: 100%;
    margin-top: 20px;
    padding: 0px 10px;
    background-color: #FFFFFF;
    color: #000000;
    border: none;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    line-height: 50px;
  }
  /*тест*/
  .functional {
    padding: 23px 0;
  }

  .functional__title {
    margin-bottom: 0;
  }

  .functional__list-items {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .services {
    padding: 24px 0 23px 0;
  }

  .services__list-items {
    flex-wrap: wrap;
    justify-content: center;
  }

  .services__text {
    max-width: 721px;
  }

  .services__item-right {
    flex-direction: column;
  }

  .services__auto {
    max-width: 100%;
  }

  .services__btn {
    max-width: 100%;
    line-height: 15px;
  }

  .clients {
    padding: 24px 0 95px 0;
  }

  .clients__container {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 50px;
    align-items: center;
  }

  .clients__title {
    text-align: center;
  }

  .clients__text-1,
  .clients__text-2 {
    max-width: 100%;
  }

  .clients__list-items-right {
    margin-bottom: 20px;
  }

  .cost {
    padding: 40px 0 40px 0;
  }

  .cost__list-items {
    flex-direction: column-reverse;
    align-items: center;
    gap: 40px;
  }

  .cost__item-1 {
    padding-bottom: 0;
  }

  .footer__container {
    padding: 48px 0 48px 0;
  }

  .footer__title {
    text-align: center;
  }

  .footer__item-1 {
    padding-top: 0;
  }

  .footer__list-items-1 {
    flex-direction: column;
    align-items: center;
    margin: 0 63px;
  }

  .footer__list-items-2 {
    margin: 0 63px;
    flex-direction: column-reverse;
    align-items: center;
  }

  .footer__title-right {
    min-height: auto;
  }

  .footer__item-4::before {
    top: 5px;
    left: 569px;
    width: 250px;
    height: 250px;
  }
}

/*568*/
@media (max-width: 720px) {
  .header__container::before {
    left: 350px;
    width: 283px;
    height: 283px;
  }

  .header__block-list,
  .header__block-name {
    margin: 0 30px 0 33px;
  }

  .services__list-items {
    margin: 0 33px;
  }

  .clients {
    margin: 0 33px;
  }

  .functional {
    margin: 0 33px;
  }

  .cost {
    margin: 0 33px;
  }

  .footer__list-items-1 {
    margin: 0 33px;
  }

  .footer__item-4::before {
    left: 300px;
  }

  .footer__list-items-2 {
    margin: 0 33px;
  }
}

/*320*/
@media (max-width: 568px) {

  .header {
    margin: 10px 0 10px 0;
    padding: 0 10px;
  }

  .header__nav {
    text-align: center;
    height: auto;
    width: 100%;
    padding: 40px 0;
  }

  .header__link-svg {
    padding: 20px 20px;
    margin-right: 0;
    max-width: 50px;
  }

  .header__logo {
    max-width: 85px;
  }
  .header__container {
    min-height: auto;
  }

  .header__block-list,
  .header__block-name,
  .services__list-items {
    margin: 0 10px 0 10px;
  }

  .header__block-list {
    padding: 10px 0 50px 0;
  }

  .header__lang-text {
    font-size: 17px;
  }

  .header__lang-icon {
    max-width: 20px;
    min-height: 20px;
    margin-right: 5px;
  }

  .title {
    line-height: 50px;
  }

  .header__container::before {
    left: 138px;
    width: 150px;
    height: 150px;
  }

  .header__title {
    font-size: 30px;
    line-height: 40px;
  }

  .header__text {
    font-size: 17px;
    line-height: 25px;
  }

  .header__block-list {
    padding: 10px 0 50px 0;
  }

  .header__block-name {
    padding-bottom: 40px;
  }

  .services__title {
    text-align: center;
    font-size: 30px;
  }

  .services__btn {
    padding: 15px 10px;
    line-height: 25px;
  }

  .clients__image-stack {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .clients__title {
    font-size: 30px;
    line-height: 30px;
  }
  .image-stack__item--top {
    display: none;
  }

  .clients__text-1,
  .clients__text-2 {
    line-height: 28px;
  }

  .clients__img-2-1,
  .clients__img-2-3,
  .clients__img-3-1,
  .clients__img-3-3 {
    padding-left: 0;
  }

  .clients {
    margin: 0 10px;
    padding: 24px 0 24px 0;
  }

  .image-stack__item--bottom {
    display: block;
    margin: 0 auto;
  }

  .functional {
    margin: 0 10px;
  }

  .functional__title {
    text-align: center;
    font-size: 30px;
    line-height: 30px;
  }

  .functional__iphone {
    max-width: 100%;
    min-height: auto;
  }

  .functional__item-2 {
    margin-right: 0;
    gap: 10px;
  }

  .functional__item-3 {
    padding: 0 15px;
    gap: 18px;
  }

  .cost {
    margin: 0 10px;
  }

  .cost__btn {
    padding: 16px 50px;
  }

  .cost__photo {
    max-width: 100%;
    min-height: 100%;
  }

  ::v-deep(.cost__price) {
    font-size: 30px;
  }

  .cost__block-list {
    gap: 18px;
  }

  .footer__title {
    font-size: 30px;
    line-height: 30px;
  }

  .footer__img-map {
    max-width: 100%;
    min-height: 100%;
  }

  .footer__list-items-1,
  .footer__list-items-2 {
    margin: 0 10px;
  }

  .footer__title-right {
    font-size: 35px;
    line-height: 40px;
  }

  .footer__form-title {
    padding: 10px 0;
  }

  .footer__form-group {
    max-width: 260px;
  }

  .footer__form-input {
    font-size: 18px;
    line-height: 20px;
  }
  .footer__form {
    gap: 10px;
    align-items: center;
  }

  .footer__item-3 {
    min-height: 550px;
  }

  .footer__item-1::before {
    width: 150px;
    height: 150px;
  }

  .footer__item-4::before {
    left: 175px;
    width: 150px;
    height: 150px;
  }
}
</style>
