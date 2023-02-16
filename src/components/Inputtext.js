import React, {useState} from "react";

// let count =1,num=0;

export default function Inputtext(props) {

    const [text, setText]= useState("");
    // console.log(text.length)
    // const countNumber = () =>{
    //     if (text.length===0) {
    //         count = num;
    //     } else {
    //         count= text.split(" ").length
    //     }
        
    //     return count
    // }

    const handleupClick = () =>{
        // console.log("Uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Covert into Upper Case", "success")
    }

    const handlelowerClick = () =>{
        // console.log("Uppercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Covert into Lower Case", "success")
    }
    const handleClClick = () =>{
        // console.log("Uppercase was clicked");
        let newtext = "";
        setText(newtext)
        props.showAlert("Display is Clean", "success")
    }
    const handleCopy = () => {
        // var myText = document.getElementById("mybox");
        //     myText.select();
            navigator.clipboard.writeText(text)
            props.showAlert("Text is Copied", "success")
    }

    const handleEncode = () =>{
        // console.log("Uppercase was clicked");
        let newtext = btoa(text);
        setText(newtext)
        props.showAlert("Text is Encoded", "success")
    }

    const handleDecode = () =>{
        // console.log("Uppercase was clicked");
        let newtext = atob(text);
        setText(newtext)
        props.showAlert("Text is Decoded", "success")
    }

    const handleReverse = () =>{
        // console.log("Uppercase was clicked");
        let words = text.split(' '); 
        let reverseWord = words.reverse();
        let newtext = reverseWord.join(" ");
        setText(newtext)
        props.showAlert("Text is Reverse", "success")
    }
    const handleExtraSpaceso = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove All Extra Space", "success")
    }

    const handleExtraSpaces = ()=>{
        let words = text.split(' ');
        let joinedWords = '';
        // console.log(words);
        words.forEach((elem)=>{
            if(elem[0] !== undefined){
                joinedWords += elem ;
                // console.log(joinedWords);
            }
        })
        setText(joinedWords);
        props.showAlert("Remove All Extra Space", "success")
    }
    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value);
    }

    
  return (
    <>
        <h1 className="my-3" style={{color:props.mode=== 'dark'?'white': 'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#042743': 'white', color:props.mode=== 'dark'?'white': 'black'}}  id="mybox" rows="10"></textarea>
      </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowerClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClClick}>Clear Display</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>join word</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleEncode}>Encode</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleDecode}>Decode</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleReverse}>Reverse</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaceso}>Remove extra spaces</button>

        <div className="container my-3" style={{color:props.mode=== 'dark'?'white': 'black'}}>
            <h1>Your text summary</h1>
            {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
            {/* <p>{text.split(" ").length=="1"?text.length:text.split(" ").length} words and {text.length} characters</p> */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h1>Preview</h1>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
    </>
  );
}
