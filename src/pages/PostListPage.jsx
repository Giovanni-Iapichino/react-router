import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostListPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        setPost(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error("Errore nel recupero dei post", error));
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4">Articoli del Blog</h1>
      <div className="row">
        {post.map((post) => (
          <div key={post.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-header">
                <h2>{post.title}</h2>
              </div>
              <div className="card-body">
                <p>{post.tags}</p>
                <p>
                  <em>{post.content}</em>
                </p>
              </div>
              <p>
                <Link to={`/post/${post.id}`}>Mostra di più</Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
