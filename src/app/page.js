"use client";
import Image from 'next/image';
import style from './home.module.css';
import { useEffect,useState } from 'react';

export default function Home() {

  // const [isSsr,setIsSsr] = useState(false);

  // useEffect(()=>{
  //   setIsSsr(true);
  // },[]);
  // const a = Math.random();
  // console.log(a);
  
  //throw new  Error("Error Bhaiya");
  return (
    <div className={style.container}>
        <div className={style.textContainer}>
          <h1 className={style.title}>Creative Tought Agency</h1>
          {/* <p>{isSsr && a}</p> */}
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quibusdam deleniti, ab fugit at dolorem eum.
          </p>
          <div className={style.buttons}>
              <button className={style.button}>Learn More</button>
              <button className={style.button}>Contact</button>
          </div>

          <div className={style.brands}>
              <Image src="/brands.png" alt="img" fill className={style.branding}/>
          </div>
        </div>
        <div className={style.imgContainer}>
          <Image src="/hero.gif" alt="" fill className={style.heroImg}/>
        </div>
    </div>
  )
}
