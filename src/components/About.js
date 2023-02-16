import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'#042743':'white'
  }

  // const [btnText, setBtnTest] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //       border: '1px solid white',
  //     });
  //     setBtnTest("Enable dark Mode");
  //   }
  //    else {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //     });
  //     setBtnTest("Enable light Mode")
  //   }
  // };

  return (
    <div className="container my-4" style={myStyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze Your text</strong> 
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word cout, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free character counter tool that instant character count & word count statistics for a given text. TextUtils Report the of words and characters. Thus it is suitable for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree" style={myStyle}>
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
            <strong>Browser Compatible</strong>  
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={myStyle}
          >
            <div className="accordion-body" style={myStyle}>
              This word counter software works in any web browser such as Chrome, firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog books , excel documen, pdf document,essays, etc. 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
