import {
  integer,
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
    imageUrl: text("image_url").notNull(),
    price: numeric("price").notNull(),
    categoryId: integer("category_id").references(() => CategoriesTable.id),
  },
  (products) => {
    return {
      uniqueIdx: uniqueIndex("unique_product_idx").on(products.id),
    };
  }
);

export const CategoriesTable = createTable(
  "categories",
  {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description").notNull(),
  },
  (categories) => {
    return {
      uniqueIdx: uniqueIndex("unique_category_idx").on(categories.id),
    };
  }
);
