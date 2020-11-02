import React from "react";

import styles from "../styles/Option.module.scss";
import sidebarStyles from "../styles/Sidebar.module.scss";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import OptionHeading from "./OptionHeading";
import OptionParagraph from "./OptionParagraph";

type EndingTypes = {
  children: any;
};

const Ending = ({ children }: EndingTypes) => (
  <div className={`${styles.Option_block} ${styles.Option_inputblock}`}>
    <OptionHeading>Generated configuration file</OptionHeading>
    <OptionParagraph>
      Thank you for using our application! Your configuration file has been
      created.
    </OptionParagraph>
    <OptionParagraph>
      <React.Fragment>
        Have you encountered any undesirable behaviour? Please let us know by{" "}
        <a href="https://github.com/cholewka/typescript-generator/issues/new">
          submitting an issue
        </a>{" "}
        on our GitHub repository.
      </React.Fragment>
    </OptionParagraph>
    <hr className={sidebarStyles.SidebarProgressbar_divider} />
    <SyntaxHighlighter
      language="json"
      style={docco}
      customStyle={{ backgroundColor: "#fff" }}
    >
      {children}
    </SyntaxHighlighter>
    <hr className={sidebarStyles.SidebarProgressbar_divider} />
    <a
      href={`data:text/json;charset=utf-8,${encodeURIComponent(children)}`}
      download="tsconfig.json"
      className={styles.Option_downloadbutton}
    >
      <button className={sidebarStyles.SidebarButtons_button}>
        Save as tsconfig.json
      </button>
    </a>
  </div>
);

export default Ending;
