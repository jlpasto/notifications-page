import { Fragment, SetStateAction, useState } from "react";
import NotificationItem from "./NotificationItem";

const NotificationPage = () => {
  let [readStatus, setReadStatus] = useState(false);

  const handleMarkAll = () => {
    setReadStatus(true);
  };

  return (
    <>
      <div className="heading">
        <p className="heading-notif">
          Notifications <span className="heading-notif-counter"> 3 </span>
        </p>
        <a className="heading-mark-read" onClick={handleMarkAll}>
          Mark all as read
        </a>
      </div>

      <div>
        <NotificationItem
          image={"avatar-mark-webber.webp"}
          message={
            "Mark Webber reacted to your recent post My first tournament today!"
          }
          time={"1m ago"}
          isRead={readStatus}
        />
        <NotificationItem
          image={"avatar-angela-gray.webp"}
          message={"Angela Gray followed you"}
          time={"1 day ago"}
          isRead={readStatus}
        />
        <NotificationItem
          image={"avatar-jacob-thompson.webp"}
          message={"Jacob Thompson has joined your group Chess Club"}
          time={"5m ago"}
          isRead={readStatus}
        />
        <NotificationItem
          image={"avatar-rizky-hasanuddin.webp"}
          message={"Rizky Hasanuddin sent you a private message"}
          time={"5m ago"}
          isRead={readStatus}
        />
        <NotificationItem
          image={"avatar-kimberly-smith.webp"}
          message={"Kimberly Smith commented on your picture"}
          time={"1 week ago"}
          isRead={readStatus}
        />
        <NotificationItem
          image={"avatar-nathan-peterson.webp"}
          message={
            "Aathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate"
          }
          time={"2 weeks ago"}
          isRead={readStatus}
        />
        <NotificationItem
          image={"avatar-anna-kim.webp"}
          message={" Anna Kim left the group Chess Club"}
          time={"2 weeks ago"}
          isRead={readStatus}
        />
      </div>
    </>
  );
};

export default NotificationPage;
