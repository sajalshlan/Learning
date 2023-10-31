import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="create">
      <h2>Create a new blog</h2>

      <form onSubmit={handleSubmit}>
        {/* Title */}
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="your mom"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        {/* Body */}
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          cols="30"
          rows="10"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        {/* Author */}
        <label htmlFor="author">Author</label>
        <select
          name=""
          id="author"
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option>sajal</option>
          <option>raunak</option>
          <option>ayush</option>
        </select>

        {/* button */}
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
