import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("enter the text");

    const onChHandeler = (event)=> {
        setText(event.target.value);
    }
    const upperCase=()=>{
        let a = text.toUpperCase();
        setText(a);
    }
    const lowerCase=()=>{
        let b = text.toLowerCase();
        setText(b);
    }
    const clearText=()=>{
        let c = '';
        setText(c);
    }
    return (
    <>
    <div>
       <h2 style={{color:props.mode==='light'?'black':'white'}}>
        {props.heading}
       </h2>
     
<div className="mb-3" >
  
  <textarea  style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}className="form-control"value={
    text
  } onChange={onChHandeler} id="mybox" rows="8"></textarea>
</div>
  <button className='btn btn-primary' onClick={upperCase}>Convert to UpperCase</button>
  <button className='btn btn-primary ms-2' onClick={lowerCase}>Convert to LowerCase</button>
  <button className='btn btn-primary ms-2' onClick={clearText}>Clear</button>
    </div>
    <div className="my-3"style={{color:props.mode==='light'?'black':'white'}} >
    <h2> Text Summary</h2>
    <p>{text.split(" ").length} words and {text.length} character</p>
    </div>
    <div style={{color:props.mode==='light'?'black':'white'}}>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
