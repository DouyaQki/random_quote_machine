import React, { useRef } from 'react'
import account_avatar from '../assets/account_avatar.jpg'
import options_icon from '../assets/tweet_icons/icon_options.png'

const AvatarAndOptions = () => {
  const followRef = useRef(null)

  const handleClick = () => {
    const CONSIDER_THE_FOLLOWING_CLASS = 'consider-the-following'
    const BTN_FOLLOW = followRef.current

    const userDontFollow = !BTN_FOLLOW.className.includes(CONSIDER_THE_FOLLOWING_CLASS)
    if(userDontFollow) {
      BTN_FOLLOW.classList.add(CONSIDER_THE_FOLLOWING_CLASS)
      BTN_FOLLOW.textContent = 'Following'
      return
    }

    BTN_FOLLOW.classList.remove(CONSIDER_THE_FOLLOWING_CLASS)
    BTN_FOLLOW.textContent = 'Follow'
  }

  return (
    <section className='avatar-notification-options'>
        <img src={account_avatar} alt='' className='account_avatar' />

      <section className='options-box'>
        <div className='account-btn'>
          <img src={options_icon} alt='' className='option' />
        </div>

        <button className='follow-btn' ref={followRef} onClick={handleClick}>Follow</button>
      </section>
    </section>
  )
}

export default AvatarAndOptions
