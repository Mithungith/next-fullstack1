import Image from "next/image";
import style from "./about.module.css";

function AboutPage() {
  return (
    <div className={style.imgContainer}>
      {/* <Image src="/about.png" alt="" fill/> */}
      <Image src="https://images.pexels.com/photos/18273081/pexels-photo-18273081/free-photo-of-scenic-cliff-at-stokksnes-on-iceland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill/>
    </div>
  )
}

export default AboutPage;
