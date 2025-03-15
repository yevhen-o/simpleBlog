"use client";
import { ZodSchema } from "zod";
import { getAuth } from "firebase/auth";

import { PostInterface, PostValidationSchema } from "../types/PostInterface";

// use env by default
const baseUrl =
  "https://myblog-1c34a-default-rtdb.europe-west1.firebasedatabase.app"; //"http://localhost:3000/api";

export type AdditionalRequestOption<T> = {
  successMessage?: string;
  deriveSuccessMessage?: (response: T) => string;
  errorMessage?: string;
  deriveErrorMessage?: (error: unknown) => string;
};

export type RequestConfig<T> = {
  method?: "PATCH" | "POST" | "GET" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: string;
  signal?: AbortSignal;
  additionalOptions?: AdditionalRequestOption<T>;
};

const httpClient = async <T>(
  url: string,
  validationSchema?: ZodSchema<T>,
  options?: RequestConfig<T>
) => {
  const user = getAuth().currentUser;
  const token = await user?.getIdToken();
  const response = await fetch(
    `${baseUrl}${url}${url.includes("?") ? "&" : "?"}auth=${token}`,
    {
      method: options?.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options?.headers,
      },
      ...(options?.body ? { body: options.body } : {}),
      ...(options?.signal ? { signal: options.signal } : {}),
    }
  );
  // If additional options display success/error toasts/ set error pages etc
  const data = await response.json();
  if (validationSchema) {
    const result = validationSchema.safeParse(data);
    if (!result.success) {
      console.log(result);
      //console.error("Validation error:", result.error);
      //use some logger to quickly fix such cases :)
      //throw new Error("Invalid response schema");
    }
  }
  return data as T;
};

export const isSlugInUse = async (slug: string) => {
  const post = await httpClient<boolean>(
    `/blogs.json?orderBy="slug"&equalTo="${slug}"`
  );
  console.log(post);
  console.log(Object.keys(post).length);
  return !!Object.keys(post).length;
};

export const postNewBlog = async (data: Omit<PostInterface, "id">) => {
  return await httpClient(`/blogs.json`, PostValidationSchema, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
