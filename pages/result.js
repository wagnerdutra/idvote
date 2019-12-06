import React, { useEffect, useState } from "react";
import App from '../layouts/app'

import firebase from '../services/firebase'

const Home = () => {
  const [votes, setVotes] = useState([])
  const [totalVotes, setTotalvotes] = useState(0)

  useEffect(() => {
    const starCountRef = firebase.ref('/voting');

    starCountRef.on('value', snapshot => {
      console.log(snapshot.val())
      setVotes(Object.entries(snapshot.val()).map(([id, value]) => ({ id, ...value })))
    });
  }, [])

  useEffect(() => {
    setTotalvotes(votes.reduce((acc, {votes}) => acc + votes, 0))
  }, [votes])

  return (
    <App>
      <section>
        <div className="result-title">
          <h1>
            Resultado
          </h1>
        </div>

        <div className="poll-result">
          {votes
            .map(({ votes, label, id }) => {
              const percentage = totalVotes && (votes * 100)/totalVotes
              return (
                <p key={id} className="poll-item">
                  <span className="poll-item-text">{label} = {percentage}%</span>
                  <span className="poll-item-bg" style={{width: `${percentage}%`}}></span>
                </p>
              )
            }
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

          .poll-item {
            width:100%;
            display:block;
            background:#f9f9f9;
            color:#4e00ea;
            margin:0;
            font-size: 1.2rem;
            height:70px;
            position:relative;
            flex-grow: 2;
          }

          .poll-item:nth-child(odd) {
            background:#f5f5f5;
          }

          .poll-item-text {
            z-index:10;
            position:absolute;
            top:0%;
            left:0;
            height:100%;
            margin:1.2rem;
          }

          .poll-item-bg {
            z-index:1;
            background: #eaeffb;
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
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
