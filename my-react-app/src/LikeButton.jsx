import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>Likes: {likes}</h2>
      <button onClick={() => setLikes(likes + 1)}>
        Like 👍
      </button>
      <button onClick={() => setLikes(likes - 1)}>
        disLike 👎
      </button>
    </div>
  );
};

export default LikeButton;