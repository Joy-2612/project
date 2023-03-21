import { useState } from "react";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  // const [activeTab,setActiveTab] = useState(1);
  // const right
  const tab_headers = ["tab1","tab2","tab3"];
  const tab_contents=["qwertyuioasdfghjklcvbnm","sdjgvhjsdnjkvbfslgvmsd","sdghvjsdjfksdgjkjsdbhfv"];
  return (
    <div className="tab-container">
      <div className="bloc-tabs">
      {
        tab_headers.map((item,i)=>(<button key={i}
          className={`${toggleState === (i+1) ? "tabs active-tabs" : "tabs"}`}
          onClick={() => toggleTab(i+1)}
        >
          {item}
        </button>))
      }
        
        {/* <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Tab 3
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Tab 3
        </button> */}
      </div>

      <div className="tab-content-tabs">
      {
        tab_contents.map((item,i)=>(<div key={i}
          className={`${toggleState === (i+1) ? "tab-content  active-tab-content" : "tab-content"}`}
        >
          {/* <h2>tab-content 1</h2>
          <hr /> */}
          <p>
            {item}
          </p>
        </div>))
      }
        {/* <div
          className={toggleState === 1 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <h2>tab-content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <h2>tab-content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <h2>tab-content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={toggleState === 4 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <h2>tab-content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={toggleState === 5 ? "tab-content  active-tab-content" : "tab-content"}
        >
          <h2>tab-content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Tabs;