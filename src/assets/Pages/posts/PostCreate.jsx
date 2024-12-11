import { useEffect, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URI } from "../../../config"
import TagsContext from "../../../Context/tagContext"

export default function PostCreate() {

    const { tags, fetchTags } = useContext(TagsContext)

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        thumb: "",
        tag: [],
        tier: "",
        quality: "",
        published: false
    })

    //FUNZIONE PER CATTURARE I VALORI DEL FORM
    function handleFormData(e) {
        console.log(e)

        const key = e.target.name
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        // Se e una checkbox && il nome e  "tag"
        if (e.target.type === "checkbox" && e.target.name === "tag") {
            setFormData((currentData) => {
                const newTags = e.target.checked // se checkbox is checked
                    ? [...currentData.tag, e.target.value]  // Aggiungi il tag
                    : currentData.tag.filter((tag) => tag !== e.target.value); // cancella il tag

                return {
                    ...currentData,
                    tag: newTags,
                }
            });
        } else {
            setFormData({
                ...formData,
                [key]: value
            });
        }
    }

    const navigate = useNavigate()

    //FUNZIONE EPR SALVARE IL POST
    function savePost(e) {
        e.preventDefault();

        const newPost = {
            ...formData
        }
        console.log(newPost) //debug per vedere cosa ci arriva

        axios.post(`${BASE_URI}posts`, newPost)
            .then(res => {
                const newData = res.data

                setFormData({ //pulire il form
                    name: "",
                    description: "",
                    thumb: "",
                    tag: [],
                    tier: "",
                    quality: "",
                    published: false
                });

                navigate('/blog')
            })
            .catch(err => {
                console.error(err);
            });


    }



    useEffect(() => {
        // fetchPosts()
        fetchTags()
    }, [])

    return (
        <>
            <main>
                <h2>Create a new post</h2>
                <section>
                    <form action="" onSubmit={savePost}>

                        <div>
                            <label htmlFor="name">Name </label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleFormData} />
                        </div>

                        <div>
                            <label htmlFor="description">Description </label>
                            <input type="text" id="description" name="description" value={formData.description} onChange={handleFormData} />
                        </div>

                        <div>
                            <label htmlFor="thumb">Thumb </label>
                            <input type="text" id="thumb" name="thumb" value={formData.thumb} onChange={handleFormData} />
                        </div>

                        {tags.map((tag, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`tag-${index}`} name="tag" checked={formData.tag.includes(tag)} value={tag}
                                    onChange={handleFormData} /> {tag}
                            </div>
                        ))}

                        <div>
                            <label htmlFor="tier">Tier </label>
                            <select id="tier" name="tier" value={formData.tier} onChange={handleFormData}>
                                <option value="">Seleziona una opzione</option>
                                <option value="Legendary">Legendary</option>
                                <option value="Mythic">Mythic</option>
                                <option value="Epic">Epic</option>
                                <option value="Super rare">Super rare</option>
                                <option value="Rare">Rare</option>

                            </select>
                        </div>

                        <div>
                            <label htmlFor="quality">quality </label>
                            <select id="quality" name="quality" value={formData.quality} onChange={handleFormData}>
                                <option value="">Seleziona una opzione</option>
                                <option value="Assasin">Assassin</option>
                                <option value="Controller">Controller</option>
                                <option value="Sniper">Sniper</option>
                                <option value="Artillery">Artillery</option>
                                <option value="Support">Support</option>
                                <option value="Tank">Tank</option>
                                <option value="Destructor">Destructor</option>
                            </select>
                        </div>

                        <div>
                            <input type="checkbox" id="published" name="published" checked={formData.published} onChange={handleFormData} /> Is Published
                        </div>

                        <div>
                            <input type="submit" />
                        </div>

                    </form>
                </section>
            </main>

        </>
    )
}