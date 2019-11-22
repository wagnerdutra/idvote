// Packages
import React from 'react'
import Head from 'next/head'

const App = ({ children }) => {
  return (
    <main>
      <Head>
        <title>IdVote</title>
      </Head>
      {children}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        body {
          font-family: 'Margem';
        }
      `}</style>
    </main>
  )
}

export default App
