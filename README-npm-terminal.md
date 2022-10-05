# js-22

- Терминал
  - [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet/)
  - [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)
  - Открыть
    - `control + ~`
    - `view > terminal`
    - через палитру `command + shift + p`
  - Основные полезные команды
    - путь (pwd)
    - лист (ls)
    - лист (ls -la) скрытые файлы
    - перейти на локальный диск cd C:
    - навигация (cd)
    - навигация (cd ../ на уровень вверх ../../c)
    - очистка `clear` или `control + l`
    - создание файлов (touch) touch index.html user.js ... создаст сразу сколько
      угодно файлов писать через пробел
    - создание папок (mkdir)
    - удаление папок c содержимым (rm -rf folderName) удаление пустой папки c
      (rmdir folderName)
    - переименование/перемещение (mv)
    - удаление (rm)
- Node.js и npm
  - установка
  - инициализация и package.json (init or i init -y)
  - [npmjs.com](https://www.npmjs.com/)
  - работа с пакетами
    - установка (npm instal mpmName)
    - удаление (npm remove mpmName)
  - CommonJS модули const mpmModule = require('mpmModule');
  - npm-скрипты (mpm run ... указываем в package.json > scripts > "app": "node
    npm start / npm test без run app.js")
    - pre и post "prestart": "echo \"This is prestart\"", "poststart": "echo
      \"This is poststart\"" может быть на каждую команду def- predef -postdef
- Транспиляция кода
  - [Babel](https://babeljs.io/)
  - CLI и npm-скрипты
  - Пресеты
  - [Browserslist](https://github.com/browserslist/browserslist)
- [Сборщик Parcel](https://parceljs.org/)
- [ECMAScript модули](https://exploringjs.com/es6/ch_modules.html)
  - Дефолтный (default) экспорт и импорт
  - Именованный (named) экспорт и импорт
  - Импорт пространства имён (namespace)
