import { useEffect, useState } from "react";
import api from "../api/axios";
import PostCard from "../components/PostCard";
import "../styles/HomeFeed.css"; // 👈 CSS Import

const HomeFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API se posts laana
    const fetchPosts = async () => {
      try {
        const res = await api.get("/posts/feed");
        setPosts(res.data);
      } catch (err) {
        console.error("Error fetching feed:", err);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      {/* Optional: Title hata sakte ho agar clean look chahiye */}
      <h3 className="feed-title">Your Feed</h3>
      
      <div className="feed-posts">
        {posts.length > 0 ? (
          posts.map((p) => <PostCard key={p._id} post={p} />)
        ) : (
          <p style={{ textAlign: "center", color: "#8e8e8e" }}>No posts yet. Follow someone!</p>
        )}
      </div>
    </div>
  );
};

export default HomeFeed;