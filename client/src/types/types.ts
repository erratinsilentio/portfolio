export enum Page {
  About = "About",
  Projects = "Projects",
  Contact = "Contact",
}

export interface Store {
  page: Page;
  setPage: (arg: Page) => void;
}
