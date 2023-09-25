import React, { ReactNode, useState } from "react";

interface Props {
  image: String;
  message: String;
  time: String;
  isRead: boolean;
}

const NotificationItem = ({ image, message, time, isRead }: Props) => {
  const [readStatus, setReadStatus] = useState(false);

  const handleClick = () => {
    setReadStatus(true);
  };

  return (
    <>
      <div
        className={readStatus || isRead ? "notif-box read" : "notif-box"}
        onClick={handleClick}
      >
        <img
          src={"src/assets/images/" + image}
          alt="profile photo"
          className="notif-img"
        />
        <div className="notif-descr-container">
          <p className="notif-descr">
            <span className="notif-msg">Full name </span>
            {message}
            <span
              className={readStatus || isRead ? "" : "unread-symbol"}
            ></span>
          </p>
          <p className="notif-time-elapsed">{time}</p>
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
