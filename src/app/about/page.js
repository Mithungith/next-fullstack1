import Image from "next/image";
import style from "./about.module.css";

export const metadata = {
  title: 'About Page',
  description: 'About description',
}

function AboutPage() {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.subtitle}>About Agency</h2>
        <h1 className={style.title}>We create digital ideas that are bigger, bloder, brever</h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          recusandae in eos temporibus soluta quos reprehenderit sit aliquam
          dignissimos non nulla suscipit accusamus, eius praesentium consequatur
          tempore! Sunt, aut delectus?
        </p>
        <div className={style.boxes}>
          <div className={style.box}>
            <h1>10K+</h1>
            <p>Yaers of experience</p>
          </div>
          <div className={style.box}>
            <h1>10K+</h1>
            <p>Yaers of experience</p>
          </div>
          <div className={style.box}>
            <h1>10K+</h1>
            <p>Yaers of experience</p>
          </div>
        </div>
      </div>
      <div className={style.imageContainer}>
        <Image src="/about.png" alt="About Image" fill className={style.img}/>
      </div>
    </div>
  );
}

export default AboutPage;
