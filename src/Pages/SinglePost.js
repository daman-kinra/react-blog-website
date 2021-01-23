import React, { useContext, useEffect } from "react";
import { Data } from "../ContextApi/Context";
import { v4 as uuidv4 } from "uuid";

function SinglePost(props) {
  const { findSinglePost, loadComments } = useContext(Data);
  const { singlePost } = useContext(Data);
  const { comments } = useContext(Data);

  useEffect(() => {
    findSinglePost(props.match.params.nuk);
    loadComments(props.match.params.nuk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>{singlePost.title}</h1>
      {comments.length === 0
        ? ""
        : comments.map((data) => {
            return <h1 key={uuidv4()}>{data.name}</h1>;
          })}
    </div>
  );
}

export default SinglePost;
