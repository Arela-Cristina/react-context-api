import style from './Card.module.css'
import { BASE_URI } from '../../../config'
import placeHolderImg from '../../../../src/place-holder.jpg'
import { Link } from 'react-router-dom'
import DeletePosts from '../Button/DeletedPost'
import { useNavigate } from 'react-router-dom'

export default function Card({ posts = {} }) {
    const { description, id, name, published, quality, tag = [], thumb, tier } = posts

    const navigation = useNavigate()
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
                        <DeletePosts id={id} onDelete={() => { }} />
                    </div>

                </div>
            </div>

        </>
    )
}

