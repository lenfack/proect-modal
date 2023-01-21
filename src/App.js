import {useState} from 'react';
import './index.scss';

const App = () => {

   const [open, setOpen] = useState(false);

   return (
      <div className="App">
         <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
         <div className={`overlay animated ${open ? 'show' : ''}`}>
            <div className="modal">
               <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                  <title />
                  <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
               </svg>
               <img src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.webp" alt='gif'/>
            </div>
         </div>
      </div>
   );
}

export default App;
