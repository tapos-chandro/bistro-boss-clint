import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState(false)
  


  // const handleTheme = (e) =>{

    
  // }

  if(theme){
    document.querySelector(':root').setAttribute('data-theme', "light")
  }else{
    document.querySelector(':root').removeAttribute('data-theme', "luxury")

  }

  return (
    <div >
      <div className="drawer "  >
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>

<input type="checkbox" onClick={() =>setTheme(!theme)} className="toggle" />
<input type="checkbox" className="toggle"/>
    </div>
  )
}

export default App
