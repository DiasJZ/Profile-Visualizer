import { useState } from "react";

function Home(e) {
  return (
    <div>
      <header className="App-header">
        <h1>Github Search</h1>
        <img src="gh.png" alt="Github" id="github"></img>
      </header>
      <div className="Search">
        <input type="text" id="Search-bar" placeholder="Search..." />
        <input type="button" id="searchBtn" placeholder="Search"/>
      </div>
      <main className="Result">
        <b>
          <div id="box-result">Profiles...</div>
        </b>
        <template id="Profile-container">
          <img className='Profile-image' src="" alt="" />
          <p>Nome: <span></span></p>
        </template>
      </main>
    </div>
  );
}

export { Home };
