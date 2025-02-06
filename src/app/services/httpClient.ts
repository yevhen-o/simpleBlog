import { PostInterface } from "../types/PostInterface";
import { UserInterface } from "../types/UserInterface";

// use env by default
const baseUrl = "http://localhost:3000/api";

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

const httpClient = async <T>(url: string, options?: RequestConfig<T>) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: options?.method || "GET",
    ...(options?.headers ? { headers: options.headers } : {}),
    ...(options?.body ? { body: options.body } : {}),
    ...(options?.signal ? { signal: options.signal } : {}),
  });
  // If additional options display success/error toasts/ set error pages etc
  return (await response.json()) as T;
};

export const getBlogPosts = async () => {
  return await httpClient<PostInterface[]>("/blogs");
};

export const getBlogBySlug = async (slug: string) => {
  return await httpClient<PostInterface>(`/blogs/${slug}`);
};

export const postNewBlog = async (data: Omit<PostInterface, "id">) => {
  return await httpClient("/blogs", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

// User routes can be in their own file httpClient also goes to it own file in this case

export const getUsers = async () => {
  return await httpClient<UserInterface[]>("/users");
};

export const getUserById = async (id: number) => {
  return await httpClient<UserInterface>(`/users/${id}`);
};

export const postNewUser = async (data: Partial<UserInterface>) => {
  return await httpClient("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updateUserById = async (data: UserInterface) => {
  return await httpClient(`/users/${data.id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};
