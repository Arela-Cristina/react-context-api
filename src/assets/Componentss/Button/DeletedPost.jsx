import axios from "axios"
import { BASE_URI } from "../../../config"

export default function DeletePosts({ onDelete = (() => { }), id }) {

    function deletePost() {
        //chiamata axios destroy
        console.log('deleted post', id)
        if (confirm('Vuoi cancellare questo Post?')) {
            axios.delete(`${BASE_URI}posts/${id}`)
                .then(() => {
                    console.log('Post cancellato')
                    onDelete()
                })
                .catch(err => {
                    alert('Non e stato posibile eliminare questo Post')
                    console.error(err)
                })
        }
    }
    return (
        <button onClick={deletePost}>Delete</button>

    )
}