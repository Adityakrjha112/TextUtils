import React from 'react'

export default function Contact(props) {
  let myStyle = {
    color : props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'#042743':'white'
  }
  return (
    <>
    <h1 style={myStyle}>Contact Us</h1>
    <div className='my-5'>
      <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1" style={myStyle}>Name</span>
  <input type="text" className="form-control" placeholder="Username" style={myStyle} aria-label="Username" aria-describedby="basic-addon1"/>
</div>


<div className="input-group mb-3" style={myStyle}>
  <span className="input-group-text" id="basic-addon1" style={myStyle}>E-Mail</span>
  <input type="email" className="form-control" placeholder="Username" aria-label="Username"  style={myStyle} aria-describedby="basic-addon1"/>
</div>
{/* <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div> */}

{/* <label for="basic-url" className="form-label">Your vanity URL</label>
<div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
  <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
</div> */}

{/* <div className="input-group mb-3">
  <span className="input-group-text">$</span>
  <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span className="input-group-text">.00</span>
</div> */}

{/* <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
  <span className="input-group-text">@</span>
  <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
</div> */}

<div className="input-group" style={myStyle}>
  <span className="input-group-text"style={myStyle}>Message</span>
  <textarea className="form-control" style={myStyle} aria-label="With textarea"></textarea>
</div>

<button className="btn btn-primary my-4" rows="1000">Send Your Feedback</button>
</div>
    </>
  )
}
