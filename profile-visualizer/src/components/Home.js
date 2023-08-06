import { useState } from "react"

function home(e) {
    return (
        <div>
            <header className="App-header">
       <h1>Github Search</h1>
       <img src='gh.png' alt='Github' id='github'></img>
      </header>
        <div className='Search'>
          <input type='text' id='Search-bar' placeholder='Search...' />
        </div>
      <main className='Result'>
        <b><box id='box-result'>Profiles...</box></b>
        <form name="bing" onsubmit=""></form>
      </main>
        </div>
    )
}

export { home };