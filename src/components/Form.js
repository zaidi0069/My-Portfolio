import React,{useState} from 'react'


const Form = (props) => {
    const [text,settext]= useState("")

   const change= () =>{
        let upper= text.toUpperCase()
        settext(upper)
 
    }


    const copy= () =>{
      let copytext=document.getElementById('tarea')
      
      navigator.clipboard.writeText(copytext.value)

      alert('Text copied')

  }


    const handleonchange= (e) =>{
        settext(e.target.value)
    }

  return (
    <>
      <div className='container'>
        <h1>{props.title}</h1>
        <textarea value={text} onChange={handleonchange} name="text" id="tarea" cols="60" rows="10" placeholder='Enter text here'></textarea>
        <button onClick={change} className="btn btn-primary">Caps</button>
      </div>

      <div className='container'>
        
       <h2>Summary:</h2>
       <p> <strong>Total words: { text.split(' ').length} ---- Characters: {text.length}</strong></p>
       <br />
       <button onClick={copy} className="btn btn-primary">Copy</button>
       <h2>Preview</h2>
       <p>{text}</p>
      </div>
    
    </>
    
    
    
  )
}


export default Form
