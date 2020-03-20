import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  // const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const [filterPost, setFilterPost] = useState([]);

  useEffect(() => {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [id])

  const handleClick = () => {
    // setIdFromButtonClick(id);
    const fp = post.filter(pos => pos.id === parseInt(id,10));  
    setFilterPost(fp);
  }


  //const filterPost = post.filter(pos => pos.id === idFromButtonClick);

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={handleClick}>Get Title By id - {id}</button>
      {
        filterPost.map(fp => <h2 key={fp.id}>{fp.title}</h2>)
      }
      <ul>
        {
          post.map(pos => <li key={pos.id}>{pos.id} == {pos.title}</li>)
        }
      </ul>
    </div>
  )
}

export default DataFetching
