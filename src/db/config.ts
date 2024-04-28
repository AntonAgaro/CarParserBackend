import {Pool} from 'pg';

export const pool = new Pool({
    user: 'anton',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'car_parser_app'
})