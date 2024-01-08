"use client";
import Link from "next/link";
import style from "./links.module.css";
import Navlinks from "./navLinks/Navlinks";
import { useState } from "react";

function Links() {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;
  return (
    <div>
      <div className={style.links}>
        {links.map((item) => {
          return <Navlinks item={item} key={item.title} />;
        })}

        {session ? (
          <>
            {isAdmin && <Navlinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={style.logout}>Logout</button>
          </>
        ) : (
          <Navlinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <div>
        <button className={style.menuButton} onClick={()=>setOpen((prev) => !prev)}>Menu</button>
        {
        open &&
        <div className={style.mobileLinks}>
          {links.map((item) => {
            return <Navlinks item={item} key={item.title} />;
          })}
        </div>
        }
      </div>
    </div>
  );
}

export default Links;
