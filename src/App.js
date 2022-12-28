import React from 'react'
import banner from './assets/banner_sf.jpg'
import AvatarAndOptions from './components/AvatarAndOptions'
import AccountDetails from './components/AccountDetails'
import Tweet from './components/Tweet'

const App = () => {
  return (
    <div className='random-machine-box'>
      {/* BANNER */}
      <header>
        <img
          src={banner}
          className='sf_banner'
          alt='Street Fighter II Ryu stage'
        />
      </header>
      {/* AVATAR AND OPTIONS */}
      <AvatarAndOptions />
      {/* ACCOUNT DETAILS */}
      <AccountDetails />
      <Tweet />
    </div>
  )
}

export default App
