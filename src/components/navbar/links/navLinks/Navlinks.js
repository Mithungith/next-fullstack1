"use client";
import Link from "next/link";
import style from "./navLinks.module.css";
import { usePathname } from "next/navigation";
function Navlinks({item}){  
    const pathName = usePathname();
    console.log(pathName,item);
    return (
        <Link href={`${item.path}`} className={`${style.container} ${pathName === item.path && style.active}`}>{item.title}</Link>
    )
}

export default Navlinks;