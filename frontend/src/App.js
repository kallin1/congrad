import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [capacity, setCapacity] = useState(1);
  const [posts, setPosts] = useState([]);

  const API_URL = "http://localhost:8080/api/posts";

  const fetchPosts = async () => {
    const res = await axios.get(API_URL);
    setPosts(res.data);
  };

  const addPost = async () => {
    if (!title.trim()) {
      alert("제목을 입력하세요!");
      return;
    }
    await axios.post(API_URL, { title, capacity });
    setTitle("");
    setCapacity(1);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ margin: "2rem" }}>
      <h1>Congrad 모집글 게시판</h1>
      <div>
        <input
          placeholder="제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
        <button onClick={addPost}>등록</button>
      </div>

      <h2>등록된 글 목록</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>제목</th>
            <th>모집인원</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.capacity}</td>
              <td>{new Date(post.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
