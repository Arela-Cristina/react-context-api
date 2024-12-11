import style from "./Header.module.css"
import Nav from "../../../Menu-Nav/Nav"

export default function Header() {
    return (
        <>
            <div className={style.container}>
                <h1>Posts</h1>
                <Nav />
            </div>

        </>
    )
}
