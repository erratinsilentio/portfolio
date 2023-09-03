import { reactive } from "vue";
import { NotificationMessage, Page, Store } from "../types/types";

export const store = reactive<Store>({
  page: Page.About,
  setPage(arg: Page) {
    this.page = arg;
  },
  notificationStatus: NotificationMessage.NULL,
  setNotification(message: NotificationMessage) {
    this.notificationStatus = message;
  },
});
