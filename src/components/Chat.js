import React, { useState, useEffect } from "react";
import { db, ref, push, onValue } from "../firebaseConfig";

const Chat = ({ videoId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const chatRef = ref(db, `chats/${videoId}`);
    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      setMessages(data ? Object.values(data) : []);
    });
  }, [videoId]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    push(ref(db, `chats/${videoId}`), {
      user: "Guest",
      text: newMessage,
      timestamp: Date.now(),
    });
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <h3>Live Chat</h3>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
        ))}
      </div>
      <input type="text" placeholder="Escribe un mensaje..." value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default Chat;