import React from "react";

const Home = () => (
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
        font-size:3rem !important;
        font-weight:bold !important;
        width: 50%;
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

      .poll-options label input:checked:after {
        content: ' ';
        width: 4rem;
        background:#f0f;
        border-left: 0.3rem solid #5500ff;
      }
    `}</style>
  </section>
);

export default Home;
