import React, { useState, useEffect, useRef } from "react";
import "./ChatBox.css";

const ChatBox = () => {
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      messages: [
        { text: "Hello! How are you?", sender: "Amit", timestamp: new Date() },
        { text: "I’m good, thanks! Working on a project. You?", sender: "You", timestamp: new Date() },
      ],
    },
    {
      id: 2,
      name: "Priya Patel",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      messages: [
        { text: "Have you completed the assignment?", sender: "Priya", timestamp: new Date() },
        { text: "Yes, I finished it yesterday.", sender: "You", timestamp: new Date() },
      ],
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      messages: [
        { text: "Can we discuss the plan for tomorrow?", sender: "Rajesh", timestamp: new Date() },
        { text: "Absolutely, let’s plan it out.", sender: "You", timestamp: new Date() },
      ],
    },
    {
      id: 4,
      name: "Anita Verma",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
      messages: [
        { text: "I need some help with the presentation.", sender: "Anita", timestamp: new Date() },
        { text: "Sure, I can help with that.", sender: "You", timestamp: new Date() },
      ],
    },
    {
      id: 5,
      name: "Sandeep Reddy",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      messages: [
        { text: "Did you receive the files?", sender: "Sandeep", timestamp: new Date() },
        { text: "Yes, I got them. Thanks!", sender: "You", timestamp: new Date() },
      ],
    },
    {
      id: 6,
      name: "Neha Singh",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
      messages: [
        { text: "Let's catch up this weekend.", sender: "Neha", timestamp: new Date() },
        { text: "Sounds good, let’s do it.", sender: "You", timestamp: new Date() },
      ],
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (message.trim() !== "") {
      setIsTyping(true);
      const timer = setTimeout(() => setIsTyping(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (chatWindowRef.current) {
      const handleScroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = chatWindowRef.current;
        setShowScrollButton(scrollHeight - scrollTop - clientHeight > 100);
      };
      chatWindowRef.current.addEventListener('scroll', handleScroll);
      return () => chatWindowRef.current.removeEventListener('scroll', handleScroll);
    }
  }, [selectedChat]);

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    if (selectedChat) {
      const newMessage = { text: message, sender: "You", timestamp: new Date() };
      const updatedChats = chats.map((chat) =>
        chat.id === selectedChat.id
          ? { ...chat, messages: [...chat.messages, newMessage] }
          : chat
      );
      setChats(updatedChats);
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, newMessage],
      });
      setMessage("");
      setShowScrollButton(true);
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage(message + emoji);
    setShowEmojiPicker(false);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollButton(false);
  };

  const formatTime = (date) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div className="chatbox">
      <div className="chatbox-list">
        <div className="chatbox-header">
          <input type="text" placeholder="Search or start new chat" />
        </div>
        <div className="chatbox-chats">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`chatbox-item ${
                selectedChat && selectedChat.id === chat.id ? "active" : ""
              }`}
              onClick={() => setSelectedChat(chat)}
            >
              <img src={chat.avatar} alt={chat.name} className="avatar" />
              <div className="chatbox-info">
                <h3>{chat.name}</h3>
                <p>{chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : ""}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="chatbox-window">
        {selectedChat ? (
          <>
            <div className="chatbox-window-header">
              <img src={selectedChat.avatar} alt={selectedChat.name} className="avatar" />
              <h2>{selectedChat.name}</h2>
              <div className="chatbox-status">
                <span className={`status-indicator ${isTyping ? "typing" : "online"}`}></span>
                {isTyping ? "typing..." : "online"}
              </div>
            </div>
            <div className="chatbox-messages" ref={chatWindowRef}>
              {selectedChat.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chatbox-message ${
                    msg.sender === "You" ? "sent" : "received"
                  }`}
                >
                  <p>{msg.text}</p>
                  <small>{formatTime(new Date(msg.timestamp))}</small>
                  {msg.sender === "You" && <span className="message-status">✓✓</span>}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            {showScrollButton && (
              <button className="scroll-to-bottom" onClick={scrollToBottom}>
                ↓
              </button>
            )}
            <div className="chatbox-input">
              <button className="emoji-button" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                😊
              </button>
              {showEmojiPicker && (
                <div className="emoji-picker">
                  {["😊", "😂", "🤔", "👍", "❤️"].map((emoji) => (
                    <span key={emoji} onClick={() => handleEmojiClick(emoji)}>{emoji}</span>
                  ))}
                </div>
              )}
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
              />
              <button className="send-button" onClick={handleSendMessage}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="chatbox-placeholder">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatBox;
