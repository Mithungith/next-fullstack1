import Image from "next/image";
import style from "./contact.module.css";

export const metadata = {
    title: 'Next App Contact Page',
    description: 'Contact description',
  }

function Contact(){
    return (
        <div className={style.container}>
            <div className={style.imgContainer}>
                <Image src="/contact.png" alt="" fill className={style.img}/>
            </div>
            <div className={style.formContainer}>
                <form action="" className={style.form}>
                    <input type="text" placeholder="Name and Surname"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Phone Number (Optional)"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;