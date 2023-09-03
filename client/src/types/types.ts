export enum Page {
  About = "About",
  Projects = "Projects",
  Contact = "Contact",
}

export interface Store {
  page: Page;
  setPage: (arg: Page) => void;
  notificationStatus: NotificationMessage;
  setNotification: (message: NotificationMessage) => void;
}

export enum Project {
  SoulJournal = "Soul Journal",
  RoutineTracker = "Routine Tracker",
}

export enum NotificationMessage {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  NULL = "",
}
