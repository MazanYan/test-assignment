import express, { Request, Response } from 'express';
import readData, { Movie, OrderBy, Order, orderData } from './helpers/dataProcessing';

const app = express();
const port = process.env.PORT || 4000;

/**
 * API route that returns page of movies in size of 20 records
 * @param {number} pg Page number to get. Must be integer greater than zero or equal
 * @param {string=} orderBy Optional parameter that tells how to order movies
 * @param {string=} order Optional parameter that tells in which order to order movies
 */
app.get('/movies/:pg', (req: Request, res: Response) => {
    let page;
    try {
        page = parseInt(req.params.pg, 10);
    } catch (e: any) {
        res.status(400).send("Page must be integer");
    }
    readData(page)
        .then((data: Movie[]) => {
            if (!!req.query.orderBy) {
                const orderBy: string = req.query.orderBy as string;
                const order: string = req.query.order as string;
                if (!(Object.values(OrderBy).includes(orderBy))) {
                    res.status(400).send("Data can be ordered only by name, year or genre");
                    return;
                }
                else if (!!order && !(Object.values(Order).includes(order))) {
                    res.status(400).send("Data can be ordered only 'asc' or 'desc'");
                    return;
                }
                data = orderData(data, orderBy, order);
            }
            res.json(data);
        })
        .catch(err => res.status(404).send(`Could not find data. Error: ${err}`));
});

app.get('/', async (req: Request, res: Response) => {
    res.status(200).send("Hello world!");
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${ port }`);
});
