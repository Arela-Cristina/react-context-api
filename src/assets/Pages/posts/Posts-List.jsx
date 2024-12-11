import { useEffect } from "react";
import { useContext } from "react";
import PostsContext from "../../../Context/globalContext";
import style from "./Posts-List.module.css"
import Card from "../../Componentss/Card/Card";


export default function Posts() {

   
    //chiamata Axios grazie a Context
    const { posts, fetchPosts } = useContext(PostsContext)
    

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <main>
                <section>
                    <div className={style.title}>
                        <h2 className=''>Popular Brawlers</h2>
                    </div>
                    <div className={style.cardContainer}>
                        <ul>
                            {posts.map(posts => (
                                <li key={posts.id}>
                                    <Card posts={posts} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>


        </>
    )
}