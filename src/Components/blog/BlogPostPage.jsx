import { useParams } from "react-router";
import Content from "./Content";
import Comments from "./Comments";
import styles from '../css/BlogPost.module.css'
import { useEffect, useState } from "react";
import axios from "axios";

function BlogPost() {
    const {postId} = useParams(); 
    //console.log(postId);
    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();

    //console.log(postData);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const postRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        setPostData(postRes.data);

        const authorRes = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`
        );
        setAuthorData(authorRes.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
     }

     fetchData();
  }, [postId]);

    return (
        <div className={styles.blog}>
          {loading ? (
            <p>Loading</p>
          ) : (
            <>
            <Content 
                title={postData.title} 
                content={postData.body} 
                author={authorData.name}
                email={authorData.email}
              />
            <Comments postId={postId}/>
            </>
          )}
        </div>
    );
}

export default BlogPost;
