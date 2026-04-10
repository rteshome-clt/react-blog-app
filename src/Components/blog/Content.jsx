import React from "react"

function Content({title, content, author, email}) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p><strong>Author:</strong> {author}</p>
            <p><strong>Email</strong> {email}</p>
        </div> 
    );
}

export default Content; 