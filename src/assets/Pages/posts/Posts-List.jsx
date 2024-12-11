import { useEffect } from "react";
import { useContext } from "react";
import PostsContext from "../../../Context/globalContext";
import TagsContext from "../../../Context/tagContext";
import style from "./Posts-List.module.css"
import Card from "../../Componentss/Card/Card";


export default function Posts() {


    //chiamata Axios grazie a Context
    const { posts, fetchPosts } = useContext(PostsContext)
    const { tags, fetchTags } = useContext(TagsContext)


    useEffect(() => {
        fetchPosts()
        fetchTags()
    }, [])

    return (
        <>
            <main>
                <section>
                    <div className={style.title}>
                        <h2 className=''>Popular Brawlers</h2>
                    </div>

                    <ul>
                        {tags.map(tag => (
                            <li>{tag}</li>
                        ))}
                    </ul>

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