import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import { BASE_URI } from "./config.js"
import axios from "axios"
import PostsContext from "./Context/globalContext.jsx"
import TagsContext from "./Context/tagContext.jsx"
import DefaultLayout from "./assets/Layouts/DefaultLayout.jsx"
import Home from "./assets/Pages/Home-Page.jsx"
import About from "./assets/Pages/About-Us.jsx"
import Index from "./assets/Pages/posts/Posts-List.jsx"
import Show from "./assets/Pages/posts/PostsShow.jsx"
import Create from "./assets/Pages/posts/PostCreate.jsx"

import './App.css'

function App() {

  //Stato variabile e chiamata chiamata Axios per posts
  const [posts, setPosts] = useState([]) //variabile stato - array 

  function fetchPosts() {
    axios.get(`${BASE_URI}posts`)
      .then(res => {
        setPosts(res.data)

      })
      .catch(err => {
        console.error(err)
      })
  }

  //Stato variabile e chiamata chiamata Axios per Tags
  const [tags, setTags] = useState([])

  function fetchTags() {
    axios.get(`${BASE_URI}tags`)
      .then(res => {
        setTags(res.data)
        console.log('tags', res.data)

      })
      .catch(err => {
        console.error(err)
      })
  }

  return (

    <PostsContext.Provider value={{ posts, fetchPosts }}>
      <TagsContext.Provider value={{ tags, fetchTags }}>
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

      </TagsContext.Provider>
    </PostsContext.Provider >

  )
}

export default App
