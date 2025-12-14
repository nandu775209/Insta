import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/CreatePost.css"; // CSS hum step 3 mein banayenge

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // Photo preview ke liye
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Image select hone par handle karna
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); // User ko dikhane ke liye ki kya select kiya
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!image) return alert("Please select an image");

  setLoading(true);

  try {
    // 1️⃣ Image upload to Cloudinary
    const imgData = new FormData();
    imgData.append("image", image);

    const uploadRes = await api.post("/upload", imgData);
    const imageUrl = uploadRes.data.imageUrl;

    // 2️⃣ Create post with image URL
    await api.post("/posts", {
      image: imageUrl,
      caption,
    });

    alert("Post Created! 🎉");
    navigate("/");
  } catch (err) {
    console.error(err);
    alert("Failed to create post");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="create-post-container">
      <div className="create-card">
        <h3>Create New Post</h3>
        
        <form onSubmit={handleSubmit}>
          {/* Image Upload Box */}
          <div className="image-upload-box">
            {preview ? (
              <img src={preview} alt="Preview" className="image-preview" />
            ) : (
              <label htmlFor="file-upload" className="custom-file-upload">
                📂 Select from Computer
              </label>
            )}
            <input 
              id="file-upload" 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              style={{ display: "none" }} // Asli input chupa diya
            />
          </div>

          {/* Caption Input */}
          <textarea
            placeholder="Write a caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="caption-input"
          />

          {/* Submit Button */}
          <button type="submit" className="share-btn" disabled={loading}>
            {loading ? "Sharing..." : "Share Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;