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

        html, body {
          height: 100%;
          width: 100%;
        }

        body {
          font-size: 10px;
          font-family: 'Margem';
        }

        #__next {
          height: 100%;
        }

        main {
          height: inherit;
        }
      `}</style>
    </main>
  )
}

export default App
