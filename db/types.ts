export type Database = {
  public: {
    Tables: {
      cart: {
        Row: {
          created_at: string | null;
          id: number;
          updated_at: string | null;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: never;
          updated_at?: string | null;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: never;
          updated_at?: string | null;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "cart_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      cart_items: {
        Row: {
          cart_id: number;
          category_id: number;
          created_at: string | null;
          description: string;
          id: number;
          image_url: string;
          name: string;
          price: number;
          product_id: number;
          quantity: number;
          updated_at: string | null;
        };
        Insert: {
          cart_id: number;
          category_id: number;
          created_at?: string | null;
          description: string;
          id?: never;
          image_url: string;
          name: string;
          price: number;
          product_id: number;
          quantity: number;
          updated_at?: string | null;
        };
        Update: {
          cart_id?: number;
          category_id?: number;
          created_at?: string | null;
          description?: string;
          id?: never;
          image_url?: string;
          name?: string;
          price?: number;
          product_id?: number;
          quantity?: number;
          updated_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "cart_items_cart_id_fkey";
            columns: ["cart_id"];
            isOneToOne: false;
            referencedRelation: "cart";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "cart_items_product_id_fkey";
            columns: ["product_id"];
            isOneToOne: false;
            referencedRelation: "products";
            referencedColumns: ["id"];
          },
        ];
      };
      categories: {
        Row: {
          description: string;
          id: number;
          name: string;
        };
        Insert: {
          description: string;
          id: number;
          name: string;
        };
        Update: {
          description?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          category_id: number | null;
          description: string;
          id: number;
          image_url: string;
          name: string;
          price: number;
        };
        Insert: {
          category_id?: number | null;
          description: string;
          id?: number;
          image_url: string;
          name: string;
          price: number;
        };
        Update: {
          category_id?: number | null;
          description?: string;
          id?: number;
          image_url?: string;
          name?: string;
          price?: number;
        };
        Relationships: [
          {
            foreignKeyName: "products_category_id_categories_id_fk";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "categories";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;
