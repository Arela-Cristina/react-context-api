import style from './Card.module.css'
import { BASE_URI } from '../../../config'
import placeHolderImg from '../../../../src/place-holder.jpg'
import { Link } from 'react-router-dom'
import DeletePosts from '../Button/DeletedPost'
// import PostsContext from '../../../Context/globalContext'
// import { useEffect, useContext } from 'react'



export default function Card({ posts = {} }) {
    const { description, id, name, published, quality, tag = [], thumb, tier } = posts

    // const { posts, fetchPosts } = useContext(PostsContext)

    // useEffect(() => {
    //     fetchPosts()
    // }, [])

    return (
        <>
            <div className={style.card}>
                <div className={style.containerImg}>
                    <img className={style.image} src={published ? `${BASE_URI}images/${thumb}` : placeHolderImg} alt="" />
                </div>
                <div className={style.bodyCard}>
                    <div>{name}</div>
                    <ul>
                        {posts.tag.map((tag, index) => <li key={index}>{tag}</li>)}
                    </ul>
                    <div>{tier}</div>
                    <div>{quality}</div>
                    <div>{description}</div>
                    <div className={style.buttonsCard}>
                        <Link to={`posts/${id}`}>See more</Link>
                        <DeletePosts id={id} />
                    </div>

                </div>
            </div>

        </>
    )
}

