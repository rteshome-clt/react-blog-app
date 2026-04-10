import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import Style from '../css/PostList.module.css';
import axios from 'axios';

function PostList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={Style.postlist}>
      {loading ? (
            <p>Loading</p>
          ) : (
            <>
              <h2 className={Style.title}>Blog Posts</h2>
              {posts.map((post) => (
              <div className={Style.list} key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body.substring(0,100)}...</p>
                <Link to={`/posts/${post.id}`}>Read More</Link>
              </div>
        ))} 
            </>
        )}
    </div>
  ); 
   
}

export default PostList;