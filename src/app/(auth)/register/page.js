import RegisterForm from "../../../components/registerForm/RegisterForm";
import style from "./register.module.css";
const Register = ()=>{
   return (
    <div className={style.container}>
        <div className={style.wrapper}>
         <RegisterForm/>
      </div>
    </div>
   )
}
export default Register;