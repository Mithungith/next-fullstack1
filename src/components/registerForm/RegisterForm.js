"use client";
import style from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { register } from "../../lib/action";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <form action={formAction} className={style.form}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button type="submit">Register</button>

      {state?.error}
      <Link href="/login">
        Have an Account? <b>Login</b>
      </Link>
    </form>
  );
};
export default RegisterForm;
