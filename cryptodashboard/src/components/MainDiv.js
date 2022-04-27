import React from 'react'
import Navbar from './Navbar';

const MainDiv = () => {
  return (
    <div className='LandingPage'>
        <header className='Navbar'> 
        <Navbar />
        </header>
        <div className='TopImage'>


        </div>
       <ul className='BlockChainTiles'>
         <li className='Bitcoin'> </li>
          <li className='Ethereum'></li>
          <li className='Monero'></li>
          <li className='XRP'></li>
          <li className='Cardano'></li>
          <li className='Tezos'></li>
</ul>
</div>
  )
}

export default MainDiv;