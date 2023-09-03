import React from 'react'

type Props = {}

const ButtonForm = (props: Props) => {
  return (
    <div className="bottom-btn">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <form action="" className="email-signup">
            <input type="email" placeholder="Email address" required/>
            <button type="submit">Get Started {`>`}</button>
        </form>
    </div>
  )
}

export default ButtonForm