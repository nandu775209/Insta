import { useState } from "react";
import api from "../api/axios";

const FollowButton = ({ userId, isFollowingInitial = false }) => {
  const [isFollowing, setIsFollowing] = useState(isFollowingInitial);
  const [loading, setLoading] = useState(false);

  const handleFollow = async () => {
    if (loading) return;

    setLoading(true);
    try {
      await api.post(`/users/${userId}/follow`);
      setIsFollowing(true);
    } catch (err) {
      console.error("Follow failed", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleUnfollow = async () => {
    if (loading) return;

    setLoading(true);
    try {
      await api.post(`/users/${userId}/unfollow`);
      setIsFollowing(false);
    } catch (err) {
      console.error("Unfollow failed", err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={isFollowing ? handleUnfollow : handleFollow}
      disabled={loading}
      style={{
        backgroundColor: isFollowing ? "#efefef" : "#0095f6",
        color: isFollowing ? "#000" : "#fff",
        border: "none",
        padding: "6px 12px",
        borderRadius: "6px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      {loading ? "Please wait..." : isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;
