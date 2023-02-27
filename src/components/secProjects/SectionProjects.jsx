import { useState } from "react";
import "./secProjects.css";

export function SectionProjects() {
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);

  const onClickDisplay3 = () => {
    setDisplay3(!display3);
  };
  const onClickDisplay1 = () => {
    setDisplay1(!display1);
  };
  const onClickDisplay2 = () => {
    setDisplay2(!display2);
  };
  return (
    <section id="projects" className="Projects">
      <div className="container1">
        <div className="title">Projects</div>
        <div className="wrapSubAndBtn">
          <div className="subTitle">
            Test task for one awesome company <p>TypeScript/React JS</p>
          </div>
          <button className="proBtn" onClick={onClickDisplay1}>
            {display1 ? "Hide Details" : "Show details"}
          </button>
        </div>
        <div className="prWrap">
          {display1 && (
            <div className="description">
              <p>
                1. Cards with article titles and descriptions for 100
                characters. The user can click on the card to go to an article
                page that contains the title and full description of the
                selected article.
              </p>

              <p>
                2. A field to filter by keyword. The user enters keywords into
                the field and the system displays all articles containing at
                least one of the keywords in the name or/and description.
              </p>

              <p>
                The priority of fields: (1) names; and (2) description. The
                article with one match in the name is higher than the article
                with one match in the description.
              </p>

              <p>
                The matched keywords should be highlighted with yellow color.
              </p>

              <p>
                Please use TypeScript as the main language. CSS preprocessors
                should be used. Please use Material UI. Showing an example of a
                custom hook will be a plus. Showing an example of state
                management will be a big plus.
              </p>
            </div>
          )}
          <a href="https://github.com/OlesyaPastushenko/TestTask">
            <button className="blackBtn">View at GitHub</button>
          </a>
          <a href="https://graceful-mandazi-47eeac.netlify.app/">
            <button className="whiteBtn">View at Netlify</button>
          </a>
        </div>
        <div className="wrapSubAndBtn">
          <div className="subTitle">
            Test task for another company
            <p>React JS/API NovaPoshta/Axios/LocalStorage</p>
          </div>
          <button className="proBtn" onClick={onClickDisplay3}>
            {display3 ? "Hide Details" : "Show details"}
          </button>
        </div>
        <div className="prWrap">
          {display3 && (
            <div className="description">
              <p>
                1. The user enters the TTN number or his invoice number in the
                input field on the page.
              </p>
              <p>
                2. The app sends a request for current data to the goods place
                of delivery.
              </p>
              <p>3. We display information about sending to the user.</p>
              <p>
                4. The user must see all the previous TTN numbers in the list in
                the Sitbar. Even after the page reboot.
              </p>
              <p>
                5. The click on the already added TTN number must automatically
                be a request for the status of finding the goods (delivery) and
                the relevant information is displayed. The TTN number should be
                automatically displayed in the input field.
              </p>
              <p>6. The TTN invoice number must be verified.</p>
              <p>7. There should be an opportunity to clean all the old TTN.</p>
              <p>
                8. If you are incorrect, after clicking on the TTN Delivery
                Status button, a hint must be shown and the request should not
                be sent.
              </p>
              <p>
                9. Going to the second tab, the user should be able to see the
                list of new mail branches, which is why you need to make a
                corresponding request to the API of the New Mail and display
                them with a list at your discretion.
              </p>
            </div>
          )}
          <a href="https://github.com/OlesyaPastushenko/NovaPoshtaTestTask">
            <button className="blackBtn">View at GitHub</button>
          </a>
          <a href="https://nova-poshta-test-task.vercel.app/">
            <button className="whiteBtn">View at Vercel</button>
          </a>
        </div>

        <div className="wrapSubAndBtn">
          <div className="subTitle">
            Website for Real Estate Agency<p>React JS</p>
          </div>
          <button className="proBtn" onClick={onClickDisplay2}>
            {display2 ? "Hide Details" : "Show details"}
          </button>
        </div>
        <div className="prWrap">
          {display2 && (
            <div className="description">
              <p>
                The main page contains a pre-filter for the object with the
                parameters "object type" and "location", a slider with the
                number of cards that refer to objects that have the value of the
                key "top_offer: true", each card is associated with a separate
                page with a description.
              </p>
              <p>
                The advanced filter page contains an advanced filter with 6
                basic parameters and the results of this search, represented by
                a card with a real estate photo slider.
              </p>
              <p>
                On a separate page there is detailed information about the
                object, a Google Maps map indicating the location and a form. On
                submit, the form sends information to the telegram app. The form
                has simple validation.
              </p>
            </div>
          )}
          <a href="https://github.com/OlesyaPastushenko/homeworks/tree/MyFinalProject">
            <button className="blackBtn">View at GitHub</button>{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
