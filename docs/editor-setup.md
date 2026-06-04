# Редактор и запуск

Проект использует Yarn 4.

## Установка

```shell
yarn install
```

Если вы запускаете проект на новой машине, включите `Git LFS`, чтобы корректно подтягивались большие бинарные файлы, такие как медиа:

```shell
git lfs install
git lfs pull
```

Если `git lfs` не распознаётся, сначала установите Git LFS в систему, затем повторите команды выше.

## Разработка

```shell
yarn dev
```

## Проверки и форматирование

```shell
yarn format
```

Команда запускает `tsc`, `stylelint --fix`, `eslint --fix`, `prettier --write`.

## VS Code и Yarn PnP

```shell
yarn dlx @yarnpkg/sdks vscode
```

## Docker

```shell
docker-compose up
```
