import React, { useEffect, useRef, useState } from "react";
import IndividualComment from './IndividualComment.jsx';
import Styles from '../css/Comments.module.css'
//import { useParams } from "react-router";
import axios from "axios";

 
function Comments({postId}) {
    //const params = useParams();
    //console.log(params.post_id);

    const [comment, setComment] = useState({
        name: '',
        content: '',
    });

    const [commentList, setCommentList] = useState([]);
    const [loading, setLoading] = useState(true);

    const textboxRef = useRef();

    useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        setCommentList(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
    }, [postId]);

    const postComment = async () => {
        if (!comment.name.trim() || !comment.content.trim()) {
            alert("Both Name and Comment fields must be filled.");
            return;
        }

        try {
            const res = await axios.post(
                `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
                {
                    name: comment.name,
                    body: comment.content,
                    postId: postId,
                }
            );
            setCommentList([
                ...commentList,
                {
                    id: res.data.id,
                    name: comment.name,
                    body: comment.content,
                },
            ]);
            setComment({
                name: "",
                content: "",
            });
            textboxRef.current.focus();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className={Styles.commentPage}>
            <h2 className={Styles.comment}>Comments</h2>
            <input
                className={Styles.namebox}
                value={comment.name}
                onChange={(e) => setComment({ ...comment, name: e.target.value })}
                placeholder="Name"
            />
            <div className={Styles.form}>
            <textarea
                className={Styles.text}
                ref={textboxRef}
                value={comment.content}
                onChange={(e) => setComment( {...comment, content: e.target.value})}
                placeholder="Add a comment"
            />
            <button 
                className={Styles.button}
                onClick={postComment}
                type="button"
            >Submit</button>
            </div>

            {loading ? (
                <p>Loading</p>
            ) : commentList.length === 0 ? (
                <p>There are no comments to display</p> 
                ) : (
                    <div>
                        <h3 className={Styles.commentsSection}>Existing Comments:</h3>
                        <ul className={Styles.commentsList}>
                            {commentList.map((value) => (
                                <IndividualComment value={value} key={value.id} />
                            ))}
                        </ul>
                    </div>
                    )
            }
            <br/>

        </div>
    );
}

export default Comments; 