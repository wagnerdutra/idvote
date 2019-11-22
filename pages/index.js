import React from "react";

const Home = () => (
  <section>
    <div className="poll-title">
      <h1>
        Vote <br/> no seu idlabs preferido!
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

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
      }

      .poll-title {
        margin:0;
        padding: 2rem;
        display:block;
      }

      .poll-title h1 {
        color:#5500ff;
        font-size:2rem !important;
        font-weight:bold !important;
      }

      .poll-options {
        width:100%;
        margin:0;
        display:block;
      }

      .poll-options label {
        width:100%;
        display:block;
        background:#f9f9f9;
        margin:0;
        padding: 8px;
      }

      .poll-options label:nth-child(odd) {
        background:#f5f5f5;
      }

      .poll-options label input {
        display: none;
      }
    `}</style>
  </section>
);

export default Home;
