# Тестовое задание - Книжная полка:
1. Имеется модель Книга, Поля
- Название
- Автор
- Год выпуска
2. Сделать одну страницу, со списком книг (таблица), там же на этой странице форма для создания / редактирования книг;
3. Создание, удаление, редактирование должно происходить без перезагрузки страницы;
4. Технологии: Django / DRF (на выбор), база Postgresql, UI фреймворк любой, можно и без него. JS стэк - vue / jquery / native (на выбор);
5. Обязательно использовать CBV;

# Описание API
/list [GET]- Список книг  
/create [POST] - создание новой книги  
/ [GET] - фронтэнд

# Развертывание в контейнерах
1. docker-compose up -d
2. docker exec -ti [id контейнера с именем books_web3] /bin/ash
3. там в папке /code/ запускаем python manage.py createsuperuser 
4. можно заходить в админку (/admin/), но, в принципе, работает и без нее
5. Приложение на 84 порту!!!
6. База одноразовая, если надо многоразовую, делаем в разделе volumes раздела базы docker-compose.yml - /my/own/datadir:/var/lib/postgresql/data

