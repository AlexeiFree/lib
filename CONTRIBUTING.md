Разработка
==========

Монорепозиторий создан с помощью системы сборки [nx](https://nx.dev/getting-started/intro).

Библиотеки
----------

Сейчас в репозитории есть две [публикуемые билбиотеки](https://nx.dev/concepts/more-concepts/buildable-and-publishable-libraries#publishable-libraries): common и components. Возможно, еще добавится core. Названия пакетов начинаются с префикса @my-lib.

Вторичные точки входа библиотек
-------------------------------

Используются для группировки сущностей по смыслу. Например, в библиотеке @my-lib/common есть вторичная точка directives. Импорты из нее выглядит так: @my-lib/common/directives.
В common все разделено на несколько общих групп: directives, pipes, services и тд. А в components разделение идет по модулям компонентов.

Создание вторичной точки входа
------------------------------

Чтобы создать вторичную точку, нужно в корне библиотеки создать для нее папку и положить в нее файл [ng-package.json](https://github.com/ng-packagr/ng-packagr/blob/HEAD/docs/secondary-entrypoints.md).
Далее в package.json библиотеки в объекте exports добавить поле <путь к entrypoint>: <путь к индексу <strong>формата ESM</strong>>.
Это особенно полезно в библиотеке common, т.к. используемый по умолчанию формат FESM не позволяет сборщику разделить код. При импорте из FESM entrypoint все остальное из entrypoint тоже [попадет в сборку](https://angular.io/guide/angular-package-format#entrypoints-and-code-splitting).

Документация
------------

Документация и песочница ведутся в [storybook](https://storybook.js.org/docs/api/csf). Стори лежат [тут](./libs/storybook-host/src/stories). Именование файлов: <название-группы-сторей>.stories.ts

Линтер
------
 
[Библиотека с конфигом линтера](./libs/eslint-config)
