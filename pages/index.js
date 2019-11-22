import React, {useState} from "react";
import App from './app'

const Home = () => {
  const [selected, setSelected] = useState(null)

  return (<App>
      <section>
        <div className="poll-title">
          <h1>
            Vote no seu idlabs preferido!
          </h1>
        </div>

        <div className="poll-options">
          {['Time 1', 'Time 2', 'Time 3', 'Time 4'].map(id =>
            (
              <label htmlFor={id} key={id} className={id === selected ? 'selected' : ''}>
                <input id={id} type="radio" name="vote" checked={id === selected} onChange={() => setSelected(id)}/>
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
            height: 100%;
          }

          .poll-title {
            margin:0;
            padding: 2rem;
            display:block;
          }

          .poll-title h1 {
            color:#4e00ea;
            font-size:2.2rem !important;
            font-weight:bold !important;
            width: 55%;
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

          .poll-options label.selected {
            background:#eff3fd;
            padding-left: 1.3rem;
            font-weight:bold;
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
    </App>)
};

export default Home;
