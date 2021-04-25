# [Presentation]()

## build
```bash
$ git https://github.com/michael199619/---CONTENT-SCREEN-TESTING
$ cd ---CONTENT-SCREEN-TESTING
$ cp .env.example .env # Update database 
$ yarn install
```

## start

```bash
$ yarn build
$ yarn start 
```
Server started at http://localhost:3000/

## start docker
```bash
$ cp .env.example .env
$ docker-compose up 
```

Server started at http://localhost:3000/ \
Admin panel started at http://localhost:3000/admin


## tests
```bash
$ yarn test
```

## debug
```bash
$ npm run debug
```

After connect to 9229