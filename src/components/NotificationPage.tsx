import { Fragment, SetStateAction, useState } from "react";
import NotificationItem from "./NotificationItem";
import Records from "../records.json";

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

      {Records.map((record) => {
        return (
          <NotificationItem
            image={record.image}
            name={record.message.name}
            action={record.message.action}
            timeElapsed={record.message.timeElapsed}
            isRead={readStatus}
          />
        );
      })}
    </>
  );
};

export default NotificationPage;
