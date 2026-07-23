import "./closing.css";

import { ClosingActions } from "./closing-actions";
import { ClosingFooter } from "./closing-footer";
import { ClosingHeadline } from "./closing-headline";
import { ClosingJourney } from "./closing-journey";

export function ClosingChapter() {
  return (
    <section className="closing" id="contact">
      <div
        className="closing__ambient closing__ambient--warm"
        aria-hidden="true"
      />
      <div
        className="closing__ambient closing__ambient--green"
        aria-hidden="true"
      />

      <div className="closing__inner">
        <ClosingHeadline />
        <ClosingJourney />
        <ClosingActions />
        <ClosingFooter />
      </div>
    </section>
  );
}