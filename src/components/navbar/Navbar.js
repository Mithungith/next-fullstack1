import Links from "./links/Links.js";
import style from "./navbar.module.css";
import Link from "next/link.js";
function Navbar(){
    return <div className={style.container}>
        <Link className={style.logo} href="/">Logo</Link>
        <div>
        <Links/>
        </div>
    </div>
}

export default Navbar;