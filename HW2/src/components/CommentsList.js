import {useState} from "react";

export default function CommentsList() {
    const [comments, setComments] = useState([
        {id: 1, text: "Это первый комментарий"},
        {id: 2, text: "Это второй комментарий"},
        {id: 3, text: "Это третий комментарий"}
    ]);

    const delComment = id => {
        setComments(comments.filter((comment) => comment.id !== id));
    }

    return (
        <ul className="comments-list">
            {comments.map(comment =>
                <li key={comment.id} className="comment-item">
                    <div className="item-box">
                        <p>{comment.text}</p>
                        <button className="btn" onClick={() => delComment(comment.id)}>X</button>
                    </div>
                </li>
            )}
        </ul>
    );
}