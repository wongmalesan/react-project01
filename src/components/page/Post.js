import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Post(props) {
  console.log(props.match);
  const [dataPost, setDataPost] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let id = props.match.params.post_id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setLoading(false);
        setDataPost(res.data);
      })
      .catch(err => console.log(err))
  }, []);

  const post = !loading && dataPost ? (
    <div className="post">
      <h4 className="center">{dataPost.title}</h4>
      <p>{dataPost.body}</p>
    </div>
  ) : (
      <div className="center">
        <h2 className="center">Loading....</h2>
      </div>
    )

  return (
    <div className="container">
      <h4>{post}</h4>
    </div>
  )
}

export default Post