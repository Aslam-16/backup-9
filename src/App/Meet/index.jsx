import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

import Jitsi from "react-jitsi";
import socketIOClient from "socket.io-client";

import "./index.css";

const Meet = ({ user }) => {
  const { webinar_id } = useParams();

  let socket = useRef();

  useEffect(() => {
    socket.current = socketIOClient(process.env.REACT_APP_SOCKET_URL, {
      path: "/webinar",
      rememberUpgrade: true,
      transports: ["websocket", "polling"],
      secure: true,
      rejectUnauthorized: false,
    });

    socket.current.emit("webinar_session", { user, webinar_id });

    socket.current.on("webinar_session_data", (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="position-relative">
      <Jitsi
        roomName={webinar_id}
        displayName={user ? user.name : ""}
        password={""}
        domain={process.env.REACT_APP_MEET_DOMAIN}
        onAPILoad={() => console.log("Jitsi!")}
      />
    </div>
  );
};

export default Meet;
