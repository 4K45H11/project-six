import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact">
        <main>
            <h1>Post your Queries:</h1>
            <form action="">
                <div>
                    <label>Name:</label>
                    <input type="text"  required placeholder='Abc..'/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text"required placeholder='abc@gmail.com' />
                </div>
                <div>
                    <label >Message:</label>
                    <input type="text" required placeholder='tell us your query'/>
                </div>
                <button type="submit">Send</button>
            </form>
        </main>
    </div>
    </>
  )
}

export default Contact