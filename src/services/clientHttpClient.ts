"use client";

import { PostInterface } from "../types/PostInterface";
import supabase from "./supabase";
import { PostAuthorCreateInterface } from "@src/types/AuthorInterface";
import { useAuthStore } from "@src/store/authStore";

export const isSlugInUse = async (slug: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from("blog-posts")
    .select("id")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    return false;
  }

  return !!data;
};

export const postNewBlog = async (
  data: Omit<PostInterface, "id" | "created_at" | "author"> & {
    image?: File | null;
  }
) => {
  if (data.image) {
    const imageUrl = await uploadImage(data.image);
    if (imageUrl) {
      data.image_url = imageUrl;
    }
  }
  delete data.image;

  const { data: result } = await supabase
    .from("blog-posts")
    .insert([data])
    .select();
  return result;
};

export const hasAuthorProfile = async (author_id: string): Promise<boolean> => {
  const { data, error } = await supabase
    .from("blog-authors")
    .select("id")
    .eq("author_id", author_id)
    .maybeSingle();

  if (error) {
    return false;
  }

  return !!data;
};

export const createAuthorProfile = async (
  data: PostAuthorCreateInterface & {
    image?: File | null;
    author_id: string;
  }
) => {
  if (data.image) {
    const imageUrl = await uploadImage(data.image);
    if (imageUrl) {
      data.image_url = imageUrl;
    }
  }
  delete data.image;

  const { data: result } = await supabase
    .from("blog-authors")
    .insert([data])
    .select();
  useAuthStore.setState({ isAuthor: true });
  return result;
};

export const uploadImage = async (file: File): Promise<string | null> => {
  const fileName = `${Date.now()}-${file.name}`;
  const { error } = await supabase.storage
    .from("blog-images")
    .upload(fileName, file);

  if (error) {
    console.error("Error uploading image:", error);
    return null;
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/blog-images/${fileName}`;
};
