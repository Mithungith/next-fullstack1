import AdminPosts from "@/components/adminPosts/adminPosts";
import style from "./admin.module.css";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import { Suspense } from "react";
import { auth } from "../../../lib/auth";


async function AdminPage(){

    const session = await auth();

    return (
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminPosts/>
                    </Suspense>
                </div>
                <div className={style.col}>
                     <AdminPostForm userId={session.user.id}/>
                </div>
            </div>

            <div className={style.row}>
                <div className={style.col}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminUsers/>
                    </Suspense>
                </div>
                <div className={style.col}>
                    <AdminUserForm/>
                </div>
            </div>
        </div>
    )
}

export default AdminPage;