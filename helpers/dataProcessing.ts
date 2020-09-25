import parse from 'csv-parse';
import fs from 'fs';

const PAGE_SIZE = 20;

/**
 * Possible parameters of orderBy queryString
 * @enum {string}
 */
export const OrderBy = {
    name: "name",
    year: "year",
    genre: "genre"
}

/**
 * Possible parameters of order queryString
 * @enum {string}
 */
export const Order = {
    asc: "asc",
    desc: "desc"
}

const compareFunctions = {
    name: (a: Movie, b: Movie): number => a.name.localeCompare(b.name),
    year: (a: Movie, b: Movie): number => a.year - b.year,
    genre: (a: Movie, b: Movie): number => {
        const genresMaxSize = Math.max(a.genre.length, b.genre.length);
        let i = 0;
        let firstBigger = 0;
        while (!firstBigger && i < genresMaxSize) {
            firstBigger = a.genre[i]?.localeCompare(b.genre[i]);
            i++;
        }
        return firstBigger;
    }
}

export interface Movie {
    id: string,
    name: string,
    genre: string[] | string,
    year: number
}

export default function readData(page: number) {
    const parser = parse({
        delimiter: ',',
        fromLine: PAGE_SIZE * page + 1,
        toLine: PAGE_SIZE * (page + 1)
    });

    const data: Movie[] = [];

    const readStream = fs.createReadStream('movies.csv')
        .pipe(parser)
        .on('data', (row: string[]) => {
            data.push({
                id: row[0],
                name: row[1],
                genre: row[2].split(','),
                year: parseInt(row[3], 10)
            });
        });

    return new Promise((resolve, reject) => {
        readStream.once('end', () => resolve(data));
        readStream.once('error', () => reject('Dataset read failed'));
    });
}

/**
 * Function to order movies data array by columns and by ascending or descending order
 * @param {Array<Movie>} data Source data array
 * @param {string} column Column to order by. Must equal to 'name', 'year' or 'genre'
 */
export function orderData(data: Movie[], column: string): Movie[] {
    // @ts-ignore
    return [...data].sort(compareFunctions[column]);
}
