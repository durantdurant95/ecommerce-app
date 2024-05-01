import {
  numeric,
  pgTableCreator,
  serial,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `ecommerce-app_${name}`);

export const ProductsTable = createTable(
  "products",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    price: numeric("price").notNull(),
  },
  (products) => {
    return {
      uniqueIdx: uniqueIndex("unique_idx").on(products.name),
    };
  }
);
