import { Tag } from "@/lib/store/persistStore";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Project = Database["public"]["Tables"]["Projects"]["Row"];
export type Task = Database["public"]["Tables"]["Tasks"]["Row"];
export interface ConvertedTask extends Omit<Task, "tags"> {
  tags: Tag[];
}

export interface Database {
  public: {
    Tables: {
      Projects: {
        Row: {
          created_at: string | null;
          id: string;
          name: string;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          id?: string;
          name: string;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          name?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Projects_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      Tasks: {
        Row: {
          created_at: string | null;
          description: string | null;
          expires_at: string | null;
          id: string;
          projectId: string | null;
          tags: Json | null;
          title: string;
          user_id: string;
        };
        Insert: {
          created_at?: string | null;
          description?: string | null;
          expires_at?: string | null;
          id?: string;
          projectId: string | null;
          tags?: Json | null;
          title: string;
          user_id: string;
        };
        Update: {
          created_at?: string | null;
          description?: string | null;
          expires_at?: string | null;
          id?: string;
          projectId?: string;
          tags?: Json | null;
          title?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "Tasks_projectId_fkey";
            columns: ["projectId"];
            referencedRelation: "Projects";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Tasks_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
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
}
