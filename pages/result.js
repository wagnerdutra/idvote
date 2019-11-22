import React from "react";
import App from './app'
import options from '../helpers/options'


const Home = () => {
  return (
    <App>
      <section>
        <div className="result-title">
          <h1>
            Resultado
          </h1>
        </div>

        <div className="poll-result">
          {options.map(id => <p key={id}>{id} = 10%</p>
          )}
        </div>

        <div className="id-logo">
            <a href="https://idwall.co" className="logo">
                <img src="logo.svg" alt="Logo idwall" />
            </a>
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

          .poll-result {
            width:100%;
            margin:0;
            display:block;
            flex-grow: 2;
          }

          p {
            width:100%;
            display:block;
            background:#f9f9f9;
            color:#4e00ea;
            margin:0;
            padding: 1.2rem;
            font-size: 1.2rem;
            position:relative;
            flex-grow: 2;
          }

          p:nth-child(odd) {
            background:#f5f5f5;
          }

          .id-logo {
              text-align:center;
              margin-bottom:2rem;
          }
        `}</style>
      </section>
    </App>
  )
};

export default Home;
