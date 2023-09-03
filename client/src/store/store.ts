import { reactive } from "vue";
import { Page, Store } from "../types/types";

export const store = reactive<Store>({
  page: Page.About,
  setPage(arg: Page) {
    this.page = arg;
  },
  notificationStatus: false,
  setNotification(arg: Boolean) {
    this.notificationStatus = arg;
  },
});
