# FunBox
FunBox test


# Level I
#### Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения
1. **Пользователя:** 
  Для пользователя важнее всего доступность, понимание взаимодействия с интерфейсом. Он должен легко ориентироваться в своих действиях, ну и, разумеется, интерфейс не должен никаким образом "разваливаться", а корректно оторажаться во всех браузерах и на всех устройствах, для которых он проектировался.
2. **Менеджера проекта:**
  Хоршая верстка это та, к которой у заказчика нет претензий.
3. **Дизайнера:**
  Хорошая верстка должна одинаково хорошо _выглядеть_ во всех браузерах и на всех устройствах, для которых проектировался интерфейс.
4. **Верстальщика:**
  Хорошая верстка должна одинаково хорошо выглядеть во всех браузерах и на всех устройствах, для которых проектировался интерфейс. Интерфейс не должен "разваливаться". Во всех вариантах использования ничего не должно "расползаться", "выходить за границы" и тд.
5. **Клиентского программиста:**
  Зачастую верстальщик не всегда может предугадать, что от него ожидает фронтендер. Как вариант, можно какие-то моменты обсудить, или программист сам вносит необходимые правки в разметку/стили на этапе своей работы. Если есть необходимость, можно вернуть на доработку верстальщику.
  Короче говоря, с точки зрения фронтендера хорошая верстка - это та, которая не создает ему дополнительных проблем на его этапе работы + все описанное выше.
6. **Серверного программиста:**
  Обычно бэкэнд не имеет отношения к верстке ( с такими случаями я пока не сталкивался). Если речь идет о письмах - то тут скорее у бэкэндера должно быть понимание, как вставить переменные таким образом, чтобы ничего не сломать. В любом случае всегда можно обратиться за разьяснениями к верстальщику.
  Получается, что для бэкэндера хорошая верстка - это все то же самое, что описано выше.


#### Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.
1. Обязательное использование переменных для стилей. Во многих случаях это помогает быстро вносить множество правок. К примеру, дизайнер решил, что у primary кнопок надо сменить цвет. Вместо того, чтобы "бродить" по всему проекту и менять его в каждом нужном месте, можно просто поменять его у переменной.
2. На мой взгляд, для крупных проектов нужно использовать соответствующие методологии, которые помогают избежать дублирования стилей, например, БЭМ. Если у какого-то из блоков нужно будет изменить дизайн - он измениться везде, что тоже ускоряет и облегчает работу. Что касательно разметки - там то же самое, при использовании pug, например, или react, мы разметку блока делаем независимой, а в нужных местах просто вставляем как блок или компонент. Т.е. получается, что меняя разметку в одном месте, мы меняем ее во всем проекте.

#### Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.
Из поддерживаемых устройств были как правило, телефоны и планшеты. В первую очередь верстку тестировал в браузере, меняя размер вьюпорта (видимая часть окна браузера). Если в браузере все ок - смотрю на телефоне. В этом помогают инструменты разработки, которые поднимают локальный сервер, что позволяет через wifi просматривать страницы с телефона/планшета. В Chrome в инструментах разработчика есть соответствующий раздел, который позволяет увидеть примерное отображение на том или ином устройстве, им я пользуюсь в последнюю очередь, так как некоторые вещи там отображаются неккоректно. В мобильных браузерах есть свои нюансы, но большинство из них реально победить с помощью CSS.
Если сайт адаптивный/отзывчивый, считаю необходимым применять подход mobile-first, это помогает избежать "грязного кода", а так же помогает сделать интерфейс более стабильным в своей работе.

#### Q4 Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.
Пишу в VS Code, вижу его очень удобным. Из инструментов разработки в зависимости от поставленной задачи использую или Gulp, или Webpack. Умею в PerfectPixel, верстаю всегда с его использованием (тут важно помнить, что небольшие различия с дизайном всегда могут быть, ведь браузеры немного по-своему отображают шрифты, например). Недавно открыл для себя два замечательных инструмента оптимизации - PageSpeed и GTMetrix. Если в работе времени хватает, картинки могу дополнительно оптимизировать через TinyPNG, он лучше всех обжимает).
Для JS все обычно - console.log(), debugger, Панель разработчика в Google Chrome.


#### Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?
И в Safari и в IE есть инструменты разработки, которые позволяют провести хотя бы небольшой "аудит". Насчет проблем в этих браузерах - частенько сталкивался, и еще не известно, у кого из них багов больше). БОльшую часть проблем берет на себя autoprefixer, остальные баги правятся либо другим кодои, либо не правятся. Как пример, IE не воспринимает min-height, и если он есть в стилях, надо искать альтернативу.

#### Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?
Пишу/звоню/иду к дизайнеру с соответствующим вопросом. Если он далеко-далеко в отпуске в Таиланде и нет возможности с ним связаться, делаю самый минимум. Как пример - pointer для кнопок и прочих интерактивных элементов.

#### Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS- верстка или и то, и другое? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?
Верстке я научился благодаря курсам HTML-Academy, нюансам учусь на практике. При проблемах в первую очередь обращаюсь к Google, документации и [справочникам](https://webref.ru/). По javascript пока прочитал только эту [книжку](https://learn.javascript.ru/), которой периодически пользуюсь как справочником, кроме этого еще [MDN](https://developer.mozilla.org/ru/docs/Web/JavaScript). Ну и никто не отменял [stackoverflow](https://ru.stackoverflow.com/), но к нему я прихожу, как правило, когда проблема нестандартная.
Если говорить о направлении развития, то я вижу себя в будущем как Javascript-разработчик, причем я нацелен на высокий уровень знаний и компетенции. Не имею презрительного отношения к верстке, она мне нравится, но программирование интересует больше.

#### Q8 Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.
Я довольно замкнутый человек, но при необходимости нахожу с людьми общий язык. WEBом, как сферой своего развития начал заниматься относительно недавно, суммарный опыт коммерческой работы около двух лет. Стремлюсь расти и развиваться как профессионал, как и большинство людей хочу достичь профессионального и материального благополучия.
Пару последних проектов:
1. [Ресурс подбора арендуемых площадей для EXPOFORUM](http://efcatalog-test.dwpr.ru)
Всю верстку делал я

2. [Ресурс подбора страховок для туристической компании, iframe](http://turavins-test.dwpr.ru/travel/results)
Всю верстку делал я. Раздел "У вас есть вопросы?" - делал я (JS). Если на первом шаге выбрать много стран для путешествий, то на втором шаге можно увидеть еще кое-что, что делал я - скрытие/раскрытие списка стран. Кроме этого еще производил правки с форматами дат, но показать этого никак не смогу)