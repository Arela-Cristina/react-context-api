import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { BASE_URI } from "./config.js"
import axios from "axios"
import PostsContext from "./Context/globalContext.jsx"
import DefaultLayout from "./assets/Layouts/DefaultLayout.jsx"
import Home from "./assets/Pages/Home-Page.jsx"
import About from "./assets/Pages/About-Us.jsx"
import Index from "./assets/Pages/posts/Posts-List.jsx"
import Show from "./assets/Pages/posts/PostsShow.jsx"
import Create from "./assets/Pages/posts/PostCreate.jsx"

import './App.css'

function App() {

  const [posts, setPosts] = useState([]) //variabile stato - array 
  //chiamata Axios
  function fetchPosts() {
    axios.get(`${BASE_URI}posts`)
      .then(res => {
        setPosts(res.data)
        // console.log('data base', res.data)
        console.log(PostsContext)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (

    <PostsContext.Provider value={{posts, fetchPosts}}>

      <BrowserRouter>
        <Routes>
          {/* Header & Footer are here */}
          <Route element={<DefaultLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* ruta API */}
            <Route path="/blog">
              <Route index element={<Index />} />
              <Route path='posts/:id' element={<Show />} />
              <Route path="create" element={<Create />} />
            </Route>

            {/* <Route path="*" element={<div>404 :v</div>} /> */}
          </Route>

        </Routes >
      </BrowserRouter>
    </PostsContext.Provider >

  )
}

export default App
