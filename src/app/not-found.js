import Link from "next/link";
function notFound(){
    return <>
        <h2>Not Found</h2>
        <Link href={"/"}>Back To Home</Link>
    </>
}

export default notFound;