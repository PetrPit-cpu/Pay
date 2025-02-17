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
    },
    // Переводы для второй страницы
    secondPage: {
        contactOne: "Подключиться",
        backToHome: "На главную",
        title: "Сделайте ваш бизнес такси безопасным. И пусть ФНС будет уверена, что вы добросовестный налогоплательщик.",
        founder: "Рустам Юськаев",
        founderDescription: "основатель сервиса"
    },
    panacea: {
        title: "Почему наличие хорошего бухгалтера не панацея при проверках ФНС",
        text: "Помимо декларации УСН или КУДиР есть процессы, которые необходимо осуществлять в течении всего времени:",
        item1: "Иметь акцепт правильного договора-оферты с каждым водителем;",
        item2: "Регулярно формировать отчеты агентов и направлять всем водителям (например, в мобильное приложение);",
        item3: "Фискализировать ваш доход и направлять кассовые чеки водителям (можно также в мобильное приложение)."
    },
    retribution: {
        title: "Что будет, если этого не делать?",
        item1: "Отсутствие контрольно-кассовой техники и фискализации дохода парка грозит внушительными штрафами, а также дисквалификацией должностных лиц на срок от одного года до двух лет и административным приостановлением деятельности юридического лица на срок до 90 суток (ст. 14.5 КоАП РФ).",
        item2: "Непредоставление отчетов агента говорит о том, что Агент не выполнил свои агентские обязательства. Что позволит инспектору усомниться в агентских отношениях. Вследствие чего возможна переквалификация в трудовые отношения и доначисление 13% НДФЛ за весь оборот парка."
    },
    processes: {
        title: "Почему лучше доверить процессы нам?",
        item1: "Мы работаем на рынке с 2016-го года и обладаем большой экспертизой, как правильно платить исполнителям.",
        item2: "Более 1500 камеральных проверок мы прошли с нашими клиентами, и не было ни одного доначисления налогов."
    },
    services: {
        title: "Как происходит процесс подключения к сервису?",
        text: "Процесс интеграции полностью дистанционный, и даже регистрация кассы происходит онлайн:",
        item1: "Вы оставляете заявку на нашем сайте",
        item2: "Мы связываемся с вами и уточняем потребности",
        item3: "Разворачиваем облачный сервис",
        item4: "Производим интеграцию с Яндекс.Про и подключаем виртуальную кассу",
        item5: "Организуем онлайн встречу с вашими сотрудниками для обучения."
    },
    functional: {
        title: "Кому необходим функционал",
        bold1: "Всем паркам:",
        text1: "железным и виртуальным;",
        bold2: "Вне зависимости от того, каким сервисом выплат пользуетесь — мы умеем работать со всеми крупными сервисами.",
        text2: "Интеграция будет только с Яндекс.Про, дополнительные интеграции с вашими сервисами выплат не потребуются.",
        conclusion: "Таким образом вам не обязательно менять сервис выплат, чтобы работать максимально безопасно для вашего бизнеса."
    },
    cost: {
        title: "Сколько стоит услуга и как подключить?",
        text1: "Стоимость полного списка услуг нашего сервиса составляет 25 тыс. рублей в месяц, но мы готовы предоставить скидку 50% всем партнерам",
        text2: ", если требуется только услуги, описанные выше."
    },
    advantages: {
        title: "Важные преимущества сервиса:",
        item1Bold: "Инновационные роботы,",
        item1: "позволяющие полноценно заменить Call-центр.",
        item2Bold: "Сверка платежей с Яндекс Про.",
        item2: "Показываем какие поездки были оплачены, а какие нет.",
        item3Bold: "Отчеты агента глубиной 3 года.",
        item3: "Контролирующие органы затребовали отчеты глубиной в 3 года? Мы поможем сформировать необходимые документы."
    },
    form: {
        title: "Становитесь добросовестным налогоплательщиком",
        text: "Заполните анкету, мы с вами свяжемся. Обычно интеграция занимает 1 рабочий день.",
        placeholderCompany: "Компания",
        placeholderName: "Введите ваше имя*",
        placeholderPhone: "Ваш номер телефона*",
        placeholderEmail: "email-адрес",
        submitButton: "Отправить заявку"
    },
    footer: {
        companyName: "ООО «Доступный город»",
        inn: "ИНН 6686079161",
        ogrn: "ОГРН 1169658044742",
        connectButton: "Подключиться"
    },
    modal: {
        placeholderCompany: "Компания",
        placeholderName: "Введите ваше имя*",
        placeholderPhone: "Ваш номер телефона*",
        placeholderEmail: "email-адрес",
        submitButton: "Отправить заявку"
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
    },
    // Переводы для второй страницы
    secondPage: {
        contactOne: "Connect",
        backToHome: "Back to home",
        title: "Make your taxi business safe. Let the tax authorities be sure that you are a conscientious taxpayer.",
        founder: "Rustam Yuskayev",
        founderDescription: "service founder"
    },
    panacea: {
        title: "Why having a good accountant is not a panacea during tax audits",
        text: "In addition to the USN declaration or KUDiR, there are processes that must be carried out continuously:",
        item1: "Have the acceptance of a correct offer agreement with each driver;",
        item2: "Regularly generate agent reports and send them to all drivers (for example, in a mobile app);",
        item3: "Fiscalize your income and send receipts to drivers (can also be in a mobile app)."
    },
    retribution: {
        title: "What happens if you don't do this?",
        item1: "The absence of cash register equipment and income fiscalization of the fleet threatens with significant fines, as well as disqualification of officials for a period from one to two years and administrative suspension of the legal entity's activities for up to 90 days (Article 14.5 of the Administrative Code of the Russian Federation).",
        item2: "Failure to provide agent reports indicates that the Agent has not fulfilled their agency obligations. This will lead the inspector to doubt the agency relationship, which may result in reclassification as an employment relationship and an additional 13% personal income tax on the entire turnover of the fleet."
    },
    processes: {
        title: "Why is it better to entrust the processes to us?",
        item1: "We have been operating in the market since 2016 and have extensive expertise in how to properly pay contractors.",
        item2: "We have undergone more than 1,500 compliance checks with our clients, and there has not been a single tax reassessment."
    },
    services: {
        title: "How does the connection process to the service work?",
        text: "The integration process is completely remote, and even the registration of the cash register is done online:",
        item1: "You leave a request on our website",
        item2: "We contact you and clarify your needs",
        item3: "We deploy the cloud service",
        item4: "We integrate with Yandex.Pro and connect the virtual cash register",
        item5: "We organize an online meeting with your employees for training."
    },
    functional: {
        title: "Who needs functionality",
        bold1: "For all fleets:",
        text1: "both physical and virtual;",
        bold2: "Regardless of which payout service you use — we can work with all major services.",
        text2: "Integration will only be with Yandex.Pro, additional integrations with your payout services will not be required.",
        conclusion: "Thus, you do not need to change the payout service to work as securely as possible for your business."
    },
    cost: {
        title: "How much does the service cost and how to connect?",
        text1: "The cost of the full list of services of our service is 25 thousand rubles per month, but we are ready to provide a 50% discount to all partners",
        text2: ", if only the services described above are required."
    },
    advantages: {
        title: "Key service advantages:",
        item1Bold: "Innovative robots,",
        item1: "allowing to fully replace a Call Center.",
        item2Bold: "Payment reconciliation with Yandex Pro.",
        item2: "We show which trips were paid for and which were not.",
        item3Bold: "Agent reports with a 3-year depth.",
        item3: "Regulatory authorities requested reports for 3 years? We will help generate the necessary documents."
    },
    form: {
        title: "Become a conscientious taxpayer",
        text: "Fill out the form, and we will contact you. Integration usually takes 1 business day.",
        placeholderCompany: "Company",
        placeholderName: "Enter your name*",
        placeholderPhone: "Your phone number*",
        placeholderEmail: "email address",
        submitButton: "Submit request"
    },
    footer: {
        companyName: "LLC 'Accessible City'",
        inn: "TIN 6686079161",
        ogrn: "OGRN 1169658044742",
        connectButton: "Connect"
    },
    modal: {
        placeholderCompany: "Company",
        placeholderName: "Enter your name*",
        placeholderPhone: "Your phone number*",
        placeholderEmail: "email address",
        submitButton: "Submit request"
    }
  }
};



const i18n = createI18n({
  locale: 'ru', // Язык по умолчанию
  fallbackLocale: 'en',
  messages
});

export default i18n;