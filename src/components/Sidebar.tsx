import React from "react";

import SidebarHeading from "./SidebarHeading";
import SidebarParagraph from "./SidebarParagraph";

import styles from "../styles/App.module.scss";

const Sidebar = () => (
  <section className={`${styles.App_gridItem} ${styles.App_sideItem}`}>
    <SidebarHeading>Hello</SidebarHeading>
    <SidebarParagraph>Hello 2</SidebarParagraph>
  </section>
);

export default Sidebar;
