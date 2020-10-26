import React, { Suspense } from "react";
import { Settings, Questions, Steps } from "../typings";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const EndingSettings: Settings = {
  description:
    "Your journey has ended here. You can now generate the configuration file.",
};

type EndingProps = {
  questions: Questions;
};

function Ending({ questions }: EndingProps) {
  function renderRetrievedQuestions(questions: Questions) {
    let generatedArray: any = {};
    const steps = [Steps.COMPILER_OPTIONS];
    for (let i = 0; i < steps.length; i++) {
      generatedArray[steps[i]] = {};
      questions[steps[i]].forEach((value) => {
        if (
          value.selectedValue === value.defaultValue ||
          value.selectedValue === undefined
        )
          return;
        generatedArray[steps[i]][value.name] = value.selectedValue;
      });
    }
    return (
      <SyntaxHighlighter
        language="json"
        style={docco}
        className="section-endingvalue"
      >
        {JSON.stringify(generatedArray, null, 2)}
      </SyntaxHighlighter>
    );
  }

  return (
    <section className="app-grid-item">
      <div className="section-block input-block">
        <h1 className="block-heading">Generated configuration file</h1>
        <p className="block-paragraph">
          Thank you for using our application! Your configuration file is being
          created.
        </p>
        <p className="block-paragraph">
          Have you encountered any undesirable behaviour? Please let us know by{" "}
          <a
            className="block-link"
            href="https://github.com/cholewka/typescript-generator/issues/new"
          >
            submitting an issue
          </a>{" "}
          on our GitHub repository.{" "}
        </p>
        <p className="block-paragraph">This app is still under development.</p>
        <hr className="section-divider" />
        <Suspense
          fallback={
            <p className="block-paragraph">
              We're retrieving your selected inputs...
            </p>
          }
        >
          {renderRetrievedQuestions(questions)}
        </Suspense>
      </div>
    </section>
  );
}

export default Ending;
