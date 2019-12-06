import React from 'react'

const Spinner = ({ text, color }) => (
  <div className="spinner-border spinner-border-md spinner-theme" role="status">
    <span className="sr-only">{text}</span>

    <style jsx>{`
      .spinner-theme {
        color: ${color};
      }
    `}</style>
  </div>
)

export default Spinner