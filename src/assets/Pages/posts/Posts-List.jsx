import { useState, useEffect } from "react";
import { BASE_URI } from "../../../config";
import axios from "axios";
import style from "./Posts-List.module.css"
import Card from "../../Componentss/Card/Card";


export default function Posts() {

    const [post, setPosts] = useState([]) //variabile stato - array 

    //chiamata Axios
    function fetchPosts() {
        axios.get(`${BASE_URI}posts`)
            .then(res => {
                setPosts(res.data)
                // console.log('data base', res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

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
                            {post.map(post => (
                                <li key={post.id}>
                                    <Card post={post} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </main>


        </>
    )
}