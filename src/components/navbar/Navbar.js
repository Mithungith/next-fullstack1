import { auth } from "../../lib/auth";
import Links from "./links/Links.js";
import style from "./navbar.module.css";
import Link from "next/link.js";

async function Navbar() {
  const session = await auth();
  console.log(session);

  return (
    <div className={style.container}>
      <Link className={style.logo} href="/">
        DIGITECH
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
}

export default Navbar;
