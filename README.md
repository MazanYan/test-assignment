# Simple Movies API

This mini-project includes simple API for movies database, created from a csv file, and client Angular app to process
basic requests.

## API documentation

The API returns basic data about movie (IMDB id, name, year, genres) in form of page that includes 20 movies
* ```/movies/{page}``` - request some page, where page >= 0

Request all data in form ```{your local address}/movies/{page}?apikey=[value]&```

### Parameters (API keys)

Parameter | Required | Possible values                    | Default value | Description |
----------|:--------:|:----------------------------------:|:-------------:|:-----------:|
orderBy   |optional  |```name```, ```year```, ```genre``` | no            | Order movies on page by name, genre or year. Movies are ordered by id by default
order     |optional  |```asc```, ```desc```               | asc           | sort in ascending or descending order

## Run a project

1. ```git clone https://github.com/MazanYan/test-assignment```
1. ```cd test-assignment```
1. ```npm i && cd client && npm i && cd -```
1. ```npm start```

Default address is ```localhost:4000```

To build application run ```npm run build``` The output will be located in ```build``` directory.
