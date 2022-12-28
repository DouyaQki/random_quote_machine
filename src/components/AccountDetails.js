import React from 'react'
import weblink from '../assets/tweet_icons/link.png'
import calendar from '../assets/tweet_icons/calendar.png'
import location from '../assets/tweet_icons/location.png'

const AccountDetails = () => {
  return (
    <div className='general-details'>
      <section className='user-box'>
        <h1>StreetFighterQuotes</h1>
        <h2 className='secondary'>@SFRandomQuote</h2>
      </section>

      <article className='information'>
        <p>
          Random quote machine with all the Street Fighter II The World
          Warrior's quotes.
        </p>
        <section className='user-data'>
          <div className='profile-icon-details'>
            <img src={location} alt='' />
            <p>Metro City</p>
          </div>

          <div className='profile-icon-details'>
            <img src={weblink} alt='' />
            <a href='https://streetfighter.com/'>streetfighter.com</a>
          </div>

          <div className='profile-icon-details'>
            <img src={calendar} alt='' />
            <p>Joined August 2011</p>
          </div>
        </section>

        <section className='follow-box'>
          <p>
            73 <span className='secondary'>Following</span>
          </p>
          <p>
            378k <span className='secondary'>Followers</span>
          </p>
        </section>
      </article>
    </div>
  )
}

export default AccountDetails
