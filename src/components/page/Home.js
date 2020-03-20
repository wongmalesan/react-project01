import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pokeball from '../../asset/pokeball.png';

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  const postList = posts.length ? (
    posts.map(post => {
      return (
        <div className="post card" key={post.id}>
          <img src={Pokeball} alt="A Pokeball"/>
          <div className="card-contain">
            <Link to={'/' + post.id}>
              <span className="card-title">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      )
    })
  ) : (
      <div className="center">No Posts Yet</div>
    )

  return (
    <div className="Home container">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  )
}

export default Home
