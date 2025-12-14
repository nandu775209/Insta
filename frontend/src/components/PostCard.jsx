import api from "../api/axios";
import "../styles/PostCard.css"; 

const PostCard = ({ post }) => {

  if (!post) return null; 

  const likePost = async () => {
    try {
      await api.post(`/posts/${post._id}/like`);
      window.location.reload(); 
    } catch (err) {
      console.error("Like failed", err);
    }
  };

  return (
    <div className="post-card">
     
      <div className="post-header">
        <div className="post-avatar"></div>
        <span className="post-username">
          {post.user ? post.user.username : "Unknown User"}
        </span>
      </div>

   
      <img src={post.image} alt="Post" className="post-image" />

     
      <div className="post-actions">
        <button onClick={likePost} className="btn-action">
           ❤️
        </button>
      </div>

      
      <div className="post-footer">
        <span className="likes-count">{post.likes.length} likes</span>
        <div className="post-caption">
          <span className="caption-user">
            {post.user ? post.user.username : "user"}
          </span>
          {post.caption}
        </div>
      </div>
    </div>
  );
};

export default PostCard;