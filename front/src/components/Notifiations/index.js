import { notification } from "antd";

export const Notifications = (data, history) => {
  notification.open({
    message: "Nuevo evento disponible.",
    description: data.title,
    onClick: () => {
      history.push(`/meetup/${data.id}`);
    }
  });
};
