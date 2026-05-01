import React, { useState } from 'react'
import { Row, Col, Button,Form } from "react-bootstrap";
import {StarFill, ChatDots } from 'react-bootstrap-icons'

export const CmntSection = ({comments}) => {
  // const [comments, setComments] = useState([
  //   {
  //     name: "Ali Raza",
  //     rating: 5,
  //     comment: "Amazing quality! The picture clarity is superb and setup was quick.",
  //     avatar: "https://i.pravatar.cc/50?img=12",
  //   },
  //   {
  //     name: "Fatima Khan",
  //     rating: 4,
  //     comment: "Good value for money, colors are vibrant though sound could be louder.",
  //     avatar: "https://i.pravatar.cc/50?img=47",
  //   },
  // ]);

  const [newComment, setNewComment] = useState("");

  console.log(comments);
  

   const handleAddComment = () => {
    if (!newComment.trim()) return;
    setComments([
      ...comments,
      {
        name: "Guest User",
        rating: 4,
        comment: newComment,
        avatar: "https://i.pravatar.cc/50?img=59",
      },
    ]);
    setNewComment("");
  };


  return (
    <div
      className="mt-5 p-4 rounded-4"
      style={{
        backgroundColor: "rgba(17,34,64,0.6)",
        border: "1px solid rgba(0,224,255,0.3)",
        boxShadow: "0 0 20px rgba(0,224,255,0.1)",
      }}
    >
      <h4
        className="fw-bold mb-4 d-flex align-items-center gap-2"
        style={{ color: "#00e0ff" }}
      >
        <ChatDots size={22} /> Customer Comments
      </h4>

      {/* Comments List */}
      {comments.map((c, index) => (
        <div
          key={index}
          className="d-flex align-items-start mb-4"
          style={{
            borderBottom: "1px solid rgba(0,224,255,0.1)",
            paddingBottom: "10px",
          }}
        >
          <img
            src={c.avatar}
            alt={c.name}
            className="rounded-circle me-3"
            style={{ width: "50px", height: "50px" }}
          />
          <div>
            <strong style={{ color: "#0aff9d" }}>{c.name}</strong>
            <div>
              {[...Array(5)].map((_, i) => (
                <StarFill
                  key={i}
                  size={16}
                  color={i < c.rating ? "#00e0ff" : "#3e4a64"}
                  className="me-1"
                />
              ))}
            </div>
            <p className="mt-2 mb-0 text-light">{c.comment}</p>
          </div>
        </div>
      ))}

      {/* Add Comment Box */}
      <div className="mt-4">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Write your comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          style={{
            backgroundColor: "#0d1b2a",
            color: "#e0e0e0",
            border: "1px solid rgba(0,224,255,0.4)",
            borderRadius: "10px",
            resize: "none",
            boxShadow: "0 0 10px rgba(0,224,255,0.1)",
          }}
        />
        <div className="text-end mt-3">
          <Button
            variant="outline-info"
            onClick={handleAddComment}
            className="rounded-pill px-4 py-2"
            style={{
              color: "#00e0ff",
              borderColor: "#00e0ff",
              boxShadow: "0 0 10px rgba(0,224,255,0.4)",
              transition: "0.3s ease",
            }}
          >
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  )
}
