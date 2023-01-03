import React, { useRef } from 'react'
import account_avatar from '../assets/account_avatar.jpg'
import options_icon from '../assets/tweet_icons/icon_options.png'

const AvatarAndOptions = () => {
  const followRef = useRef(null)

  const handleClick = () => {
    const CONSIDER_THE_FOLLOWING_CLASS = 'consider-the-following'
    const BTN_FOLLOW = followRef.current

    const userDontFollow = !BTN_FOLLOW.className.includes(
      CONSIDER_THE_FOLLOWING_CLASS
    )
    if (userDontFollow) {
      BTN_FOLLOW.classList.add(CONSIDER_THE_FOLLOWING_CLASS)
      BTN_FOLLOW.textContent = 'Following'
      return
    }

    BTN_FOLLOW.classList.remove(CONSIDER_THE_FOLLOWING_CLASS)
    BTN_FOLLOW.textContent = 'Follow'
  }

  // handleMouseOver and handleMouseLeave are for the Follow button.
  const handleMouseOver = (e) => {
    // console.log(e.target.textContent = 'PIPE')
    const followBtnClass = [...e.target.classList]

    const BTN_SHOW_UNFOLLOW = e.target

    const userIsFollowing = followBtnClass.includes('consider-the-following')

    if (userIsFollowing) {
      BTN_SHOW_UNFOLLOW.textContent = 'Unfollow'
      BTN_SHOW_UNFOLLOW.style.color = '#cc3333'
      BTN_SHOW_UNFOLLOW.style.border = 'solid 1px #cc3333'
      return
    }
  }

  const handleMouseLeave = (e) => {
    // console.log(e.target.textContent = 'PIPE')
    const followBtnClass = [...e.target.classList]
    const BTN_SHOW_UNFOLLOW = e.target

    const userIsFollowing = followBtnClass.includes('consider-the-following')

    if (userIsFollowing) {
      BTN_SHOW_UNFOLLOW.textContent = 'Follow'
      BTN_SHOW_UNFOLLOW.style.color = ''
      BTN_SHOW_UNFOLLOW.style.border = ''
      return
    }

    BTN_SHOW_UNFOLLOW.style.color = ''
    BTN_SHOW_UNFOLLOW.style.border = ''
  }

  return (
    <section className='avatar-notification-options'>
      <img
        src={account_avatar}
        alt='account avatar'
        className='account_avatar'
      />

      <section className='options-box'>
        <div className='account-btn'>
          <img src={options_icon} alt='option icon' className='option' />
        </div>

        <button
          className='follow-btn'
          ref={followRef}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          Follow
        </button>
      </section>
    </section>
  )
}

export default AvatarAndOptions
