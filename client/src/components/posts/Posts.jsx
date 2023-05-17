import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import "./posts.scss";
import Comments from "../comments/Comments";
import { useState } from "react";

export default function Posts({ post, comment }) {
  const [open, setOpen] = useState(false);
  const {
    isLoading: loadingComment,
    error: errorComment,
    data: commentData,
  } = useQuery(["comment", post, comment], async () => {
    const res = await makeRequest.get(
      `/comments?postId=${post.id}&limit=${comment}`
    );
    return res.data;
  });

  const {
    isLoading: loadingUser,
    error: errorUser,
    data: userData,
  } = useQuery(["userPost", post.userId], async () => {
    const res = await makeRequest.get(`/users?userId=${post.userId}`);
    return res.data;
  });

  return (
    <div className="post">
      {loadingUser ? (
        "loading"
      ) : errorUser ? (
        "error"
      ) : (
        <div className="posttop">
          <img src="/img/avatar.png" alt="" />
          <span>{userData.name}</span>
        </div>
      )}
      <div className="postbottom">
        <span>
          <b>Title:</b> {post?.title}
        </span>
        <span>
          <b>Description:</b> {post?.body}
        </span>
        <div className="postComment">
          <img
            src="/img/comment.png"
            alt=""
            onClick={() => {
              setOpen(!open);
            }}
          />
          Comment
        </div>
      </div>
      {open && (
        <div className="comments">
          {loadingComment ? (
            "loading .."
          ) : errorComment ? (
            "error"
          ) : (
            <>
              {commentData.map((comments) => (
                <Comments comment={comments} key={comments.id} />
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
