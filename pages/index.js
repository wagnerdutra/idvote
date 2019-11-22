import React from "react";

const Home = () => (
  <section>
    <div class="jumbotron">
      <h1 class="display-4">Vote no seu idlabs preferido!</h1>
    </div>

    <div className="options">
      {['Time 1', 'Time 2', 'Time 3', 'Time 4'].map(id =>
        (
          <label htmlFor={id} key={id}>
            <input id={id} type="radio" name="vote" value={id} />
              {id}
          </label>
        )
      )}
      <style jsx>{`
        section {
          display: flex;
          flex-direction: center;
          align-items: center;
        }

        .options {
          width:100%;
          margin:0;
        }

        .options label {
          width:100%;
          display:block;
          background:#f9f9f9;
          margin:0;
        }

        .options label:nth-child(odd) {
          background:#f5f5f5;
        }
      `}</style>
    </div>
  </section>
);

export default Home;
