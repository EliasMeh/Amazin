import { NextResponse } from 'next/server';
import { query } from '../db';

export async function GET() {
  try {
    const result = await query('SELECT * FROM "Produit"');
    return NextResponse.json(result.rows);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}