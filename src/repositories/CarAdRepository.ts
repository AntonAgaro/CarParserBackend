import {pool} from "db/config";
import {CarAd} from "models/CarAd";
import {errorHandler} from "../utils/functions";
class CarAdRepository {
    async createTable(tableName: string) {
        return await errorHandler(async () => {
            await pool.query(`CREATE TABLE IF NOT EXISTS ${tableName} (
            id SERIAL PRIMARY KEY,
            title VARCHAR (255),
            price VARCHAR (255),
            description VARCHAR (255),
            link VARCHAR (255)
        )`);
            console.log(`Creating table ${tableName}`);
        })
    }

    async createAd(ad: CarAd, tableName: string ) {
       return await errorHandler(async () => {
           console.log(`Creating ad ${ad}`);
           return await pool.query(`
            INSERT INTO ${tableName} (title, price, description, link) 
            VALUES ($1, $2, $3, $4) RETURNING *`,
               [ad.title, ad.price, ad.description, ad.link]);
       });
    }

    async getAdByTitle(tableName: string, title: string) {
        return await errorHandler(async () => {
            console.log(`Getting ad by key value`);
            const res = await pool.query(`SELECT * FROM ${tableName} WHERE title = '${title}'`);
            return res.rows;
        });
    }

    async getAll(tableName: string) {
        return errorHandler(async () => {console.log(`Getting ads`);
            const res =  await pool.query(`SELECT * FROM ${tableName}`);
            return res.rows;
        });
    }
}

export default new CarAdRepository();