import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URI } from "../../../config";
import placeHolderImg from "../../../../src/place-holder.jpg";

export default function Show() {

    const [post, setPost] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    // Para depurar
    console.log("Componente Show montato");
    console.log("ID  post:", id);

    useEffect(() => {
        console.log("chiamata HTTP API...");
        axios.get(`${BASE_URI}posts/${id}`)
            .then(res => {
                setPost(res.data) //la funzione solo puo ricevere una
                // console.log('hey', res.data)
                console.log(`url de la img: ${BASE_URI}images/${post.thumb}`)

            })
            .catch(err => console.error(err))
    }, [id]);

    if (!post) {
        return <p>Loading...</p>;
    }




    return (
        <main>
            <div>
                <button onClick={() => navigate(-1)}>
                    back
                </button>
            </div>
            <section>


                <figure>
                    <img src={post.published ? `${BASE_URI}images/${post.thumb}` : placeHolderImg} alt={post.name} />
                </figure>
                <div>
                    <h1>{post.name}</h1>

                </div>
                <div>
                    <p>{post.description}</p>
                </div>


            </section>
        </main>
    )
}
