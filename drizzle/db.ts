import "@/drizzle/envConfig";
import { sql } from "@vercel/postgres";
import { ilike } from "drizzle-orm"; // Import the ilike function
import { drizzle } from "drizzle-orm/vercel-postgres";
import * as schema from "./schema";
import { ProductsTable } from "./schema";

export const db = drizzle(sql, { schema });

// query to get all products
export const getProducts = async () => {
  return db.query.ProductsTable.findMany();
};

export const getProductsByName = async (name?: string) => {
  return db
    .select()
    .from(ProductsTable)
    .where(name ? ilike(ProductsTable.name, `%${name}%`) : undefined); // Use ilike function to create the SQL expression
};
