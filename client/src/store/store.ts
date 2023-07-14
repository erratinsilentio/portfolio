import { reactive } from "vue";
import { Page, Store } from "../types/types";

export const store: Store = reactive({
  page: Page.About,
});
