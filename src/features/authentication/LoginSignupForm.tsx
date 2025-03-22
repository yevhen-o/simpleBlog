"use client";
import { useState } from "react";
import { z } from "zod";
import { ControlledForm } from "@src/components/Form/ControlledForm";
import { useCustomFormContext } from "@src/hooks";
import { ControlledInputField } from "@src/components/Form/InputField";
import { Button } from "@src/components/Button";
import { useAuthStore } from "@src/store/authStore";

const authValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(256),
});
type AuthInterface = z.infer<typeof authValidationSchema>;

export const LoginSignupForm = ({
  onAuthenticate,
}: {
  onAuthenticate: () => void;
}) => {
  const [isLogin, setIsLogin] = useState(true);
  const signup = useAuthStore((state) => state.signUp);
  const login = useAuthStore((state) => state.login);
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (data: AuthInterface) => {
    try {
      if (isLogin) {
        await login(data.email, data.password);
      } else {
        await signup(data.email, data.password);
      }
      onAuthenticate();
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="post-form__wrapper" style={{ minWidth: "330px" }}>
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <ControlledForm<AuthInterface>
        schema={authValidationSchema}
        onSubmit={onSubmit}
        defaultValues={initialValues}
      >
        <LoginSignupFormFields isLogin={isLogin} />
      </ControlledForm>
      <center>
        <Button isFlat onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Switch to Sign Up" : "Switch to Login"}
        </Button>
      </center>
    </div>
  );
};

export const LoginSignupFormFields = ({ isLogin }: { isLogin: boolean }) => {
  const {
    reset,
    setAllFieldsTouched,
    formState: { isSubmitting, isDirty },
  } = useCustomFormContext<AuthInterface>();
  return (
    <div>
      <ControlledInputField<AuthInterface>
        name="email"
        placeholder="Your email"
      />
      <ControlledInputField<AuthInterface>
        name="password"
        placeholder="Your password"
        type="password"
      />

      <Button
        isPrimary
        type="submit"
        className="post-form__button"
        disabled={isSubmitting}
        onClick={setAllFieldsTouched}
      >
        {isSubmitting ? "Submitting" : isLogin ? "Login" : "Sign Up"}
      </Button>
      {isDirty && <Button onClick={() => reset()}>Reset</Button>}
    </div>
  );
};
