import { Tables } from "@/db/types";
import { createClient } from "@/utils/supabase/server";

export async function getProductsByName(
  name: string = "",
): Promise<Tables<"products">[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${name}%`);
  if (error) {
    throw error;
  }
  return data;
}

export async function getAllProducts(): Promise<Tables<"products">[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    throw error;
  }
  return data;
}
