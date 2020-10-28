import React from "react";
import styles from "../styles/Sidebar.module.scss";

type SidebarHeadingProps = {
  children: string;
};

const SidebarParagraph = ({ children }: SidebarHeadingProps) => (
  <p className={styles.SidebarParagraph_paragraph}>{children}</p>
);

export default SidebarParagraph;
