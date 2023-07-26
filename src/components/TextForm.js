import React,{useState} from 'react'

//import PropTypes from "prop-types";



export default function TextForm(props) {
  // let [count, setCount] = useState(0);
  // let [count1, setCount1] = useState(0);
  // let countVow = 0,countCons = 0;
    const handleUpClick=()=>{
        //console.log("Uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowClick=()=>{
      
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleClearClick=()=>{
    
    let newText="";
    setText(newText);
}
const handleToggleCaseClick = () => {
  let words = text.split(" ");
  let newText = words
    .map((word) => {
      let newWord = "";
      for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        if (char >= "A" && char <= "Z") {
          char = char.toLowerCase();
        } else if (char >= "a" && char <= "z") {
          char = char.toUpperCase();
        }
        newWord += char;
      }

      return newWord;
    })
    .join(" ");

  setText(newText);
};
const handleSentenceCaseClick = () => {
  let lowerCase = text.toLowerCase();
  let regex = /([^.!?]+[!?.\d\s]+)/g;
  let sentences = lowerCase.match(regex);
  let newText = sentences
    .map((sentence) => {
      return (sentence.charAt(0) >= "a" && sentence.charAt(0) <= "z"
        ? sentence.charAt(0).toUpperCase() + sentence.slice(1)
        : sentence);
    })
    .join("");

  setText(newText);
};
const handleCapitalizeWordClick = () => {
  let lowercase = text.toLowerCase();
  let words = lowercase.split(" ");
  let newWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let newText = newWords.join(" ");
  setText(newText);
};
// const handleVoClick = () => {
//   for (count = 0; count <= text.length; count++) {
//     if (text.charAt(count).match(/[aeiouAEIOU]/)) {
//       countVow++;
//       setCount (countVow);
//     }
//   }
//   // console.log("No. of Vowels are: " + countChar);
// };

// // Function to count Consonants:
// const handleCoClick = () => {
//   for (count1 = 0; count1 <= text.length; count1++) {
//     if (
//       text
//         .charAt(count1)
//         .match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
//     ) {
//       countCons++;
//       setCount1(countCons);
//     }
//   }
// }

    const handleOnChange=(event)=>{
        //console.log("on change");
        setText(event.target.value);
    }
    //state
 const [text, setText] = useState('enter the text');
//  text="new text"//wrongway to change the state
//  setText("new text")//correct way to change the state
  return (
    <>
    
    <div className="container" style={{color:props.mode==='light'?'#031f3b':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'#031f3b'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleToggleCaseClick}>Toggle Case</button>
        <button className="btn btn-primary mx-2" onClick={handleSentenceCaseClick}>Text2Sentence</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizeWordClick}>Capitalize Word</button>
        {/* <button className="btn btn-primary mx-1" onClick={handleVoClick}>Count no. of Vowels</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCoClick}>Count no. of Consonants</button> */}
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>      
        
        </div>
    <div className='container my-3' style={{color:props.mode==='light'?'#031f3b':'white'}}>
      <h2>Your text summary!!!</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split(" ").length } Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
      {/* <h3>You have entered:</h3>
      <p>{count} No. of Vowels</p>
      <p>{count1} No. of Consonants</p> */}



    </div>
    </>
  )
}

