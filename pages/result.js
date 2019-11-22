import React from "react";
import App from './app'

const Home = () => {
  return (
    <App>
      <section>
        <div className="result-title">
          <h1>
            Resultado
          </h1>
        </div>

        <div className="poll-options">
          {['Time 1', 'Time 2', 'Time 3', 'Time 4'].map(id =>
            (
              <p id={id}>{id} = 10%</p>
            )
          )}
        </div>

        <style jsx>{`
          section {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: 100%;
          }

          .result-title {
            margin:0;
            padding: 2rem;
            display:block;
          }

          .result-title h1 {
            color: #4e00ea;
            font-size: 2.2rem;
            font-weight: bold;
          }

          p {
            width:100%;
            display:block;
            background:#f9f9f9;
            color:#4e00ea;
            margin:0;
            padding: 1rem;
            position:relative;
            flex-grow: 2;
          }

          p:nth-child(odd) {
            background:#f5f5f5;
          }
        `}</style>
      </section>
    </App>
  )
};

export default Home;
