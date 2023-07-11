import React from 'react'

export default function HomePage() {
const scramble = require('@ignatiusmb/scramble');
scramble(document.querySelector('.scamble-text')).run();

  return (
    <div>
      <div className="scramble-contailer">
        <div className="scramble-bg">
            <div className="scramble-text">
                Sorting Visualizer
            </div>
        </div>
      </div>
    </div>
  )
}
