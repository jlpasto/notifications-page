import React, { ReactNode, useState } from "react";

interface Props {
  image: String;
  name: String;
  action: String;
  timeElapsed: String;
  isRead: boolean;
}

const NotificationItem = ({
  image,
  name,
  action,
  timeElapsed,
  isRead,
}: Props) => {
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
            <span className="notif-msg">{name} &nbsp;</span>
            {action}
            <span
              className={readStatus || isRead ? "" : "unread-symbol"}
            ></span>
          </p>
          <p className="notif-time-elapsed">{timeElapsed}</p>
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
