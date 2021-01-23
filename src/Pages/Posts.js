import React, { useEffect, useContext } from "react";
import { Data } from "../ContextApi/Context";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function Posts(props) {
  const { callingPostsbyUserId } = useContext(Data);

  const { posts } = useContext(Data);

  useEffect(() => {
    callingPostsbyUserId(props.match.params.slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {posts.map((data, pos) => {
        return (
          <div key={uuidv4()}>
            <h1>{data.userId}</h1>
            <Link
              to={`/posts/${props.match.params.slug}/${data.id}`}
              key={uuidv4()}
            >
              AAAA
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
