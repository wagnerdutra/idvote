import React from "react";
import App from './app'

const Home = () => (
  <App>
    <section>
      <div className="poll-title">
        <h1>
          Vote no seu idlabs preferido!
        </h1>
      </div>

      <div className="poll-options">
        {['Time 1', 'Time 2', 'Time 3', 'Time 4'].map(id =>
          (
            <label htmlFor={id} key={id}>
              <input id={id} type="radio" name="vote" value={id} />
                {id}
            </label>
          )
        )}
      </div>

      <button>Votar</button>

      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          height: 100vh;
        }

        .poll-title {
          margin:0;
          padding: 2rem;
          display:block;
        }

        .poll-title h1 {
          color:#4e00ea;
          font-size:3rem !important;
          font-weight:bold !important;
          width: 50%;
        }

        .poll-options {
          width:100%;
          margin:0;
          display:block;
          flex-grow: 2;
        }

        .poll-options label {
          width:100%;
          display:block;
          background:#f9f9f9;
          color:#4e00ea;
          margin:0;
          padding: 1rem;
          position:relative;
          flex-grow: 2;
        }

        .poll-options label:nth-child(odd) {
          background:#f5f5f5;
        }

        .poll-options label input[type="radio"] {
          position: absolute;
          top:0;
          left:0;
          height:100%;
          width:0;
        }

        .poll-options label input[type="radio"]:checked < label {
          background:#c6d8fe;
        }

        .poll-options label input[type="radio"]:checked:before {
          content: '';
          background:#4e00ea;
          width:0.3rem;
          height:100%;
          position:absolute;
          top:0;
          left:0;
        }

        button {
          width: 100%;
          padding: 8px 16px;
          outline: 0;
          background: #4e00ea;
          color: #fff;
          border: 0;
          font-size: 24px;
          border-radius: 3px;
        }
      `}</style>
    </section>
  </App>
);

export default Home;
