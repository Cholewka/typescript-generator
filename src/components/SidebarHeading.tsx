import React from "react";
import styles from "../styles/Sidebar.module.scss";

type SidebarHeadingProps = {
  children: string;
};

const SidebarHeading = ({ children }: SidebarHeadingProps) => (
  <h1 className={styles.SidebarHeading_heading}>{children}</h1>
);

export default SidebarHeading;
