import React from 'react'

function Emailto() {

  const sendEmail = () => {
    window.location.href = `mailto:indradpratama@gmail.com`;
  }

  return (
    <div>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  )
}

export default Emailto