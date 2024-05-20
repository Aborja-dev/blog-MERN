import React from 'react'

const Hero = () => {
  return (
    <div>
      <h1>Read the most interesting articles</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
            <img src="" alt="" />
            <input type="text" placeholder="Search article" />
        </div>
        <button type="submit">Search</button>
        <div>
            <span></span>
            <ul>
                <li>Design</li>
                <li>User Experience</li>
                <li>User interface</li>
            </ul>
        </div>
      </form>
    </div>
  )
}

export default Hero
