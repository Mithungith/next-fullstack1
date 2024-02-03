import { handleGithubLogin } from "../../../../lib/action";
import LoginForm from "@/components/loginForm/loginForm";
import style from "./login.module.css";
function LoginPage() {
  // const session = await auth();
  // console.log(session);

  return (
    <div class={style.container}>
      <div class={style.wrapper}>
        <form action={handleGithubLogin}>
          <button type="submit" className={style.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
