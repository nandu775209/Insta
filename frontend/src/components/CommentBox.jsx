import { useState } from "react";
import api from "../api/axios";

const CommentBox = ({ postId }) => {
  const [text, setText] = useState("");

  const submit = async () => {
    await api.post(`/comments/${postId}`, { text });
    setText("");
  };

  return (
    <div>
      <input
        placeholder="comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={submit}>Send</button>
    </div>
  );
};

export default CommentBox;
