import "./comments.scss";

export default function Comments({ comment }) {
  return (
    <div className="comment">
      <div className="commentTop">
        <img src="/img/avatar.png" alt="" />
      </div>
      <div className="commentBottom">
        <span>
          <b>Name</b>: {comment.name}
        </span>
        <span>
          <b>Body</b>: {comment.body}
        </span>
      </div>
    </div>
  );
}
