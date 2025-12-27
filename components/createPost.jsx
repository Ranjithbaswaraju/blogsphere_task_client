import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import axios from "axios";
import { baseURL } from "../src/App";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [posts, setPosts] = useState([]);

  // CREATE POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await axios.post(
        `${baseURL}/post/postPost`,
        { title, content, status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ USE BACKEND RESPONSE (_id from MongoDB)
      if (res.data && res.data.post) {
        setPosts((prev) => [...prev, res.data.post]);
      }

      alert("Blog Created");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      alert("Failed to create blog");
    }
  };

  // DELETE POST
  const deleteHandler = async (postId) => {
    const token = localStorage.getItem("token");

    try {
      await axios.delete(`${baseURL}/post/deletePost/${postId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPosts((prev) => prev.filter((post) => post._id !== postId));
      alert("Post deleted successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to delete post");
    }
  };

  return (
    <>
      {/* CREATE FORM */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="w-100">
          Create Blog
        </Button>
      </Form>

      {/* POSTS LIST */}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {posts.length === 0 && <p>No posts created yet</p>}

        {posts.map((post) => (
          <Card
            key={post._id}
            style={{ width: "250px", border: "2px solid red" }}
          >
            <Card.Body>
              <Card.Title>
                <b>Title:</b> {post.title}
              </Card.Title>

              <Card.Text>
                <b>Content:</b> {post.content}
              </Card.Text>

              <Card.Text>
                <small className="text-muted">
                  <b>Status :</b> {post.status}
                </small>
              </Card.Text>

              <Button
                variant="danger"
                onClick={() => deleteHandler(post._id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default CreatePost;
