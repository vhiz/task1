import { useState } from "react";
import { makeRequest } from "../../axios";
import Posts from "../../components/posts/Posts";
import "./home.scss";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const [post, setPost] = useState(100);

  const [comment, setComment] = useState(10000);

  const [userId, setUserId] = useState(null);

  const { isLoading, error, data } = useQuery(
    ["posts", post, userId],
    async () => {
      const res = await makeRequest.get(
        `/posts?limit=${post}&userId=${userId}`
      );
      return res.data;
    }
  );

  return (
    <div className="home">
      <div className="top">
        {isLoading ? (
          <div className="load">
            <img src="/img/loading.gif" alt="" />
          </div>
        ) : error ? (
          <div className="error">Error</div>
        ) : data.length === 0 ? (
          <div className="no-data">
            <img src="/img/nodata.gif" alt="" />
          </div>
        ) : (
          <div className="posts">
            {data.map((post) => (
              <Posts key={post.id} post={post} comment={comment} />
            ))}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="item">
          <span>Post :</span>
          <input
            type="number"
            onChange={(e) => setPost(e.target.value || 1000)}
            min={1}
          />
          <button>Limit</button>
        </div>
        <div className="item">
          <span>Comment :</span>
          <input
            type="number"
            min={1}
            onChange={(e) => setComment(e.target.value || 1000)}
          />
          <button>Limit</button>
        </div>
        <div className="item">
          <span>UserId :</span>
          <input
            type="number"
            min={1}
            onChange={(e) => setUserId(e.target.value || null)}
          />
          <button>Find</button>
        </div>
      </div>
    </div>
  );
}
