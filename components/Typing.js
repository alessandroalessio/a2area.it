import React from "react";
import Typed from 'typed.js';

const words = [
    'Ciao, sono Alessandro\nSviluppatore\nWeb Designer\nNerd.'
]


class Typing extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 40,
      backSpeed: 60,
      loop: false,
      cursorChar: '|',
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <>
        <div
          style={{whiteSpace: 'pre'}}
          ref={el => {
            this.el = el
          }}
        />
      </>
    )
  }
}

export default Typing