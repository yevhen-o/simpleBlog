import { create } from "zustand";
import { AuthError, User } from "@supabase/supabase-js";
import sb from "../services/supabase";
import { hasAuthorProfile } from "@src/services/clientHttpClient";

interface LoadingState {
  isLoading: boolean;
}

interface AuthState {
  user: User | null;
  isAuthor: boolean | null;
  initState: LoadingState;
  loginState: LoadingState;
  signupState: LoadingState;
  logoutState: LoadingState;
  checkIsAuthor: (userId: string) => Promise<void>;
  initAuth: () => () => void;
  login: (
    email: string,
    password: string
  ) => Promise<{ data: { user: User | null }; error: AuthError | null }>;
  signUp: (
    email: string,
    password: string
  ) => Promise<{ data: { user: User | null }; error: AuthError | null }>;
  logOut: () => Promise<void>;
}

const initialLoading = { isLoading: false };

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthor: null,
  initState: initialLoading,
  loginState: initialLoading,
  signupState: initialLoading,
  logoutState: initialLoading,
  login: async (email: string, password: string) => {
    set({ loginState: { isLoading: true } });
    const response = await sb.auth.signInWithPassword({
      email,
      password,
    });
    set({ loginState: { isLoading: false } });
    if (response.data.user) {
      set({ user: response.data.user });
      get().checkIsAuthor(response.data.user.id);
    }
    return response;
  },
  signUp: async (email: string, password: string) => {
    set({ signupState: { isLoading: true } });
    const response = await sb.auth.signUp({
      email,
      password,
    });
    set({ signupState: { isLoading: false } });
    if (response.data.user) {
      set({ user: response.data.user });
    }
    return response;
  },
  logOut: async () => {
    set({ logoutState: { isLoading: true } });
    await sb.auth.signOut();
    set({ logoutState: { isLoading: false }, user: null, isAuthor: null });
  },
  checkIsAuthor: async (userId: string) => {
    set({ initState: { isLoading: true } });
    const response = await hasAuthorProfile(userId);
    set({ isAuthor: response, initState: { isLoading: false } });
  },
  initAuth: () => {
    sb.auth.getSession().then((session) => {
      const user = session.data.session?.user ?? null;
      set({ user });
      if (user) {
        get().checkIsAuthor(user.id);
      }
    });

    const { data: authListener } = sb.auth.onAuthStateChange(
      (_event, session) => {
        set({ user: session?.user ?? null });
      }
    );
    return authListener.subscription.unsubscribe;
  },
}));
