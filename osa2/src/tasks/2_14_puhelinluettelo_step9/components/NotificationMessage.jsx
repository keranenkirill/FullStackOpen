const NotificationMessage = ({ message, notifclass }) => {
  if (message === null) {
    return null;
  }
  console.log(notifclass)
  return <div className={notifclass}>{message}</div>;
};
export default NotificationMessage;
