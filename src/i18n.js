import { createI18n } from 'vue-i18n';

const messages = {
  ru: {
    header: {
        forWhom: "Для кого",
        clients: "Клиенты",
        features: "Функционал",
        pricing: "Стоимость",
        contact: "Связаться",
        close: "Закрыть",
        title: "ЗАЙМИТЕ ЛИДИРУЮЩИЕ ПОЗИЦИИ РЫНКА ТАКСИ ИЛИ ДОСТАВКИ",
        text: "Цифровая экосистема для взаимодействия с исполнителями. White-Label решение, которое адаптируется под ваши задачи и функционирует под вашим брендом. Создавайте собственные тарифы и закладывайте любую доходность."
    },
    servicesSection: {
        title: "Идеально подходит",
        description: "Владельцам бизнеса, кто не желает тратить несколько лет на разработку и инвестировать сотни миллионов рублей...",
        bankOption: "Банкам или кредитным организациям",
        taxiOption: "Крупным участникам рынка такси и доставки"
    },
    clientsSection: {
        heading: "Кто ваши клиенты",
        clientDescription: "Юридические лица, работающие с агрегаторами заказов",
        additionalAggregators: "а также любые другие агрегаторы заказов."
    },
    functionalSection: {
        functionalTitle: "Функционал сервиса",
        feature1: "Поддержка пользователей",
        feature2: "Встроенный конструктор сайтов",
        feature3: "Автоматизированный документооборот",
        feature4: "Пожписание договора с исполнителем",
        feature5: "Мобильное приложение",
        feature6: "Прием платежей и выплаты",
        feature7: "CRM-система с роботами",
        feature8: "Гибкие настройки по выплатам",
        feature9: "Нет скрытой комиссии",
        feature10: "Реферальная программа"
    },
    costSection: {
        priceText: "от <span class='cost__price'>1 000 000₽</span>/месяц",
        includesTitle: "В&nbsp;указанную стоимость входит:",
        option1: "Развертывание сервиса на&nbsp;серверах заказчика",
        option2: "Сборка брендированных приложений",
        option3: "2&nbsp;бесплатных интеграции (с&nbsp;банком и&nbsp;СМС-шлюзом)",
        option4: "Обсуждаемые доп.интеграции",
        orderButton: "ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ"
    },
    footerSection: {
        sectionTitle: "Эксклюзивность",
        textContent: "Мы&nbsp;готовы обсуждать использование эксклюзивного права на&nbsp;использование нашего продукта в&nbsp;определенной стране.",
        formHeading: "Заказать презентацию",
        placeholderCompany: "Компания",
        placeholderName: "Введите ваше имя*",
        placeholderPhone: "Ваш номер телефона*",
        placeholderEmail: "email-адрес",
        submitButton: "Отправить заявку",
        serviceMessage: "Получите сервис, который на опыте показал эффективность бизнес-модели."
    }
  },
  en: {
    header: {
        forWhom: "For",
        clients: "Who is your customers",
        features: "Functionality",
        pricing: "Cost",
        contact: "Contact us",
        close: "Close",
        title: "TAKE A LEADING POSITION TAXI OR DELIVERY MARKET",
        text: "A digital ecosystem for interacting with performers. A White-Label solution that adapts to your needs and functions under your brand. Create your own tariffs and set any profitability."
    },
    servicesSection: {
        title: "Perfect for",
        description: "Business owners who do not want to spend several years developing and investing hundreds of millions of dollars...",
        bankOption: "To banks or credit organizations",
        taxiOption: "Major participants in the taxi and delivery market"
    },
    clientsSection: {
        heading: "Who are your clients",
        clientDescription: "Legal entities working with order aggregators",
        additionalAggregators: "as well as any other order aggregators."
    },
    functionalSection: {
        functionalTitle: "Service functionality",
        feature1: "User Support",
        feature2: "Built-in Website Builder",
        feature3: "Automated Document Management",
        feature4: "Signing an agreement with the contractor",
        feature5: "The Mobile APP",
        feature6: "Accepting payments and disbursements",
        feature7: "CRM system with robots",
        feature8: "Flexible payout settings",
        feature9: "There is no hidden commission",
        feature10: "Referral program"
    },
    costSection: {
        priceText: "from <span class='cost__price'>10 000 USD</span>/month",
        includesTitle: "The indicated price includes:",
        option1: "Deploying the service on the customer's servers",
        option2: "Building branded apps",
        option3: "2 free integrations (with bank and SMS gateway)",
        option4: "Discussed add-ons integrations",
        orderButton: "ORDER A CONSULTATION"
    },
    footerSection: {
        sectionTitle: "Exclusivity",
        textContent: "We are ready to discuss the use of the exclusive right to use our product in a particular country.",
        formHeading: "Order a presentation",
        placeholderCompany: "Company",
        placeholderName: "Your name*",
        placeholderPhone: "Your phone number*",
        placeholderEmail: "email",
        submitButton: "Send a request",
        serviceMessage: "Get a service that has proven effective through experience business models."
    }
  }
};

const i18n = createI18n({
  locale: 'ru', // Язык по умолчанию
  fallbackLocale: 'en',
  messages
});

export default i18n;