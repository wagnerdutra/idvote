import React, {useState} from "react";
import {useRouter} from "next/router";
import App from './app'

const idLabsItems = [
  'MeuIDemocracia',
  'Fraudes Transacionais',
  'Ferramenta de Marketing'
]

const Voting = () =>
  <div class="spinner-border spinner-border-md" role="status">
    <span class="sr-only">Votando...</span>
  </div>

const Home = () => {
  const router = useRouter()
  const [selected, setSelected] = useState(null)
  const [voting, setVoting] = useState(false)

  const vote = async () => {
    await setVoting(true);

    setTimeout(() => {
      router.push('/result')
    }, 2000)
  }

  return (
    <App>
      <section>
        <div className="poll-title">
          <h1>
            Vote<br /> no seu idlabs<br /> preferido!
          </h1>
        </div>

        <div className="poll-options">
          {idLabsItems.map(id =>
            (
              <label htmlFor={id} key={id} className={id === selected ? 'selected' : ''}>
                <input id={id} type="radio" name="vote" checked={id === selected} onChange={() => setSelected(id)}/>
                  {id}
              </label>
            )
          )}
        </div>

        <button type="button" disabled={!selected || voting} onClick={vote}>
          {voting? <Voting/>: 'Votar'}
        </button>

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
            font-size:2.2rem;
            font-weight:bold;
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
            padding: 1.2rem;
            font-size: 1.2rem;
            position:relative;
            flex-grow: 2;
            cursor: pointer;
          }

          .poll-options label:nth-child(odd) {
            background:#f5f5f5;
          }

          .poll-options label input[type="radio"] {
            position: absolute;
            top:0;
            left:-1000px;
            height:100%;
            width:0;
          }

          .poll-options label.selected {
            background:#eff3fd;
            font-weight:bold;
            border-left:0.4rem solid #4e00ea;
            transition-property: border-left;
            transition-duration: 0.4s;
          }

          button {
            width: 100%;
            padding: 1.2rem;
            outline: 0;
            background: #4e00ea;
            color: #fff;
            border: 0;
            font-size: 24px;
            border-radius: 3px;
          }

          button:disabled {
            opacity:0.2;
          }
        `}</style>
      </section>
    </App>
  )
};

export default Home;
