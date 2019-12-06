import React from 'react'

const Spinner = ({ text }) => (
  <div className="spinner-border spinner-border-md spinner-theme" role="status">
    <span className="sr-only">{text}</span>

    <style jsx>{`
      .spinner-theme {
        color: #4e00ea;
      }
    `}</style>
  </div>
)

export default Spinner