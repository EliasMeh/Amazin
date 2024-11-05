//npm install pg
import { Pool } from 'pg';

const pool = new Pool({
  user: 'usera',
  host: 'localhost',
  database: 'amazin',
  password: 'azerty',
  port: 5432,
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};