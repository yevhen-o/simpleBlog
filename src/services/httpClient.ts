import { ZodSchema } from "zod";

import {
  PostInterface,
  PostValidationSchema,
  FirebasePostsSchema,
  FirebasePostInterface,
} from "../types/PostInterface";
import {
  UserInterface,
  UserValidationSchema,
  UserListValidationSchema,
} from "../types/UserInterface";

// use env by default
const baseUrl = ""; //"http://localhost:3000/api";

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
  const response = await fetch(`${baseUrl}${url}`, {
    method: options?.method || "GET",
    ...(options?.headers ? { headers: options.headers } : {}),
    ...(options?.body ? { body: options.body } : {}),
    ...(options?.signal ? { signal: options.signal } : {}),
  });
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

export const getBlogPosts = async () => {
  return await httpClient<FirebasePostInterface>(
    "https://myblog-1c34a-default-rtdb.europe-west1.firebasedatabase.app/blogs.json",
    FirebasePostsSchema
  );
};

export const getBlogBySlug = async (slug: string) => {
  return await httpClient<PostInterface>(
    `https://myblog-1c34a-default-rtdb.europe-west1.firebasedatabase.app/blogs/${slug}.json`,
    PostValidationSchema
  );
};

export const postNewBlog = async (data: PostInterface) => {
  return await httpClient(
    `https://myblog-1c34a-default-rtdb.europe-west1.firebasedatabase.app/blogs/${data.id}.json`,
    PostValidationSchema,
    {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );
};

// User routes can be in their own file httpClient also goes to it own file in this case

export const getUsers = async () => {
  return await httpClient<UserInterface[]>(
    "https://jsonplaceholder.typicode.com/users",
    UserListValidationSchema
  );
};

export const getUserById = async (id: number) => {
  return await httpClient<UserInterface>(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    UserValidationSchema
  );
};

export const postNewUser = async (data: Partial<UserInterface>) => {
  return await httpClient(
    "http://localhost:3000/api/users",
    UserValidationSchema,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
};

export const updateUserById = async (data: UserInterface) => {
  return await httpClient(
    `http://localhost:3000/api/users/${data.id}`,
    UserValidationSchema,
    {
      method: "PATCH",
      body: JSON.stringify(data),
    }
  );
};
