import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'

// avatar pictures
import zangief from '../assets/portraits/zangief.png'
import sagat from '../assets/portraits/sagat.png'
import vega from '../assets/portraits/vega.png'
import dhalsim from '../assets/portraits/dhalsim.png'
import honda from '../assets/portraits/honda.png'
import chunli from '../assets/portraits/chunli.png'
import guile from '../assets/portraits/guile.png'
import ryu from '../assets/portraits/ryu.png'
import ken from '../assets/portraits/ken.png'
import balrog from '../assets/portraits/balrog.png'
import bison from '../assets/portraits/bison.png'
import blanka from '../assets/portraits/blanka.png'

import sf_title from '../assets/sf_title.jpg'
import pin from '../assets/tweet_icons/pin.png'

export const quotes = [
  {
    author: 'Zangief',
    quote: "Next time we meet, I'm gonna break your arms!",
    img: zangief,
  },
  {
    author: 'Sagat',
    quote: "I am not satisfied until I have the world's strongest title again!",
    img: sagat,
  },
  {
    author: 'Vega',
    quote: 'Thank you for a gorgeous time!',
    img: vega,
  },
  {
    author: 'Vega',
    quote: 'Handsome fighters never lose a battle!',
    img: vega,
  },
  {
    author: 'Dhalsim',
    quote: 'I will meditate and then destroy you!!',
    img: dhalsim,
  },
  {
    author: 'E. Honda',
    quote: "Can't you do better than that?",
    img: honda,
  },
  {
    author: 'Chun-Li',
    quote: 'There is no chance for you to beat me! Challenge someone else!',
    img: chunli,
  },
  {
    author: 'Guile',
    quote: 'Go home and be a family man!',
    img: guile,
  },
  {
    author: 'Ryu',
    quote: 'You did quite well, but you need more training to defeat me!',
    img: ryu,
  },
  {
    author: 'Ryu',
    quote: 'You must defeat my Dragon Punch to stand a chance!',
    img: ryu,
  },
  {
    author: 'Ken',
    quote: "Get up!! It's too early for you to be defeated!",
    img: ken,
  },
  {
    author: 'Balrog',
    quote: "Hey, what happened? I'm not through with you yet!",
    img: balrog,
  },
  {
    author: 'M. Bison',
    quote: "Get lost, you can't compare with my powers!",
    img: bison,
  },
  {
    author: 'M. Bison',
    quote: 'Anyone who opposes me will be destroyed!',
    img: bison,
  },
  {
    author: 'Sagat',
    quote: "You are not a warrior, you're a beginner!",
    img: sagat,
  },
  {
    author: 'Ken',
    quote: 'Attack me if you dare, I will crush you!',
    img: ken,
  },
  {
    author: 'Balrog',
    quote: 'Get up you wimp!',
    img: balrog,
  },
  {
    author: 'Chun-Li',
    quote: "I'm the strongest woman in the world!",
    img: chunli,
  },
  {
    author: 'Dhalsim',
    quote: "Now you've realized the inner mysteries of yoga!",
    img: dhalsim,
  },
  {
    author: 'Blanka',
    quote: 'Seeing you in action is a joke!',
    img: blanka,
  },
  {
    author: 'Blanka',
    quote: 'Now you realize the powers I possess!',
    img: blanka,
  },
  {
    author: 'E. Honda',
    quote: "It's natural for a sumo wrestler to become the world's strongest!",
    img: honda,
  },
  {
    author: 'Guile',
    quote: 'Are you man enough to fight with me?',
    img: guile,
  },
  {
    author: 'Zangief',
    quote: 'My strength is much greater than yours!',
    img: zangief,
  },
]

const idx = Math.floor(Math.random() * (23 - 0 + 1) + 0)

const Tweet = () => {
  // TWEET LOGIC ------------------------------------------------------------------------>
  // TWEET LOGIC ------------------------------------------------------------------------>
  const [indexRandom, setIndexRandom] = useState(idx)

  const randomNumber = () => Math.floor(Math.random() * (23 - 0 + 1) + 0)

  const handleClick = () => setIndexRandom(randomNumber())

  const StreetFighterNames = quotes[indexRandom].author
    .replaceAll(/[-.]/gi, '_')
    .replaceAll(/[\s]/gi, '')

  const twitQuote =
    'https://twitter.com/intent/tweet?hashtags=' +
    `${StreetFighterNames}` +
    '&related=aca_el_tag&text=' +
    quotes[indexRandom].quote

  // QUOTE LOGIC ------------------------------------------------------------------------>
  // QUOTE LOGIC ------------------------------------------------------------------------>
  const [userIndex, setUserIndex] = useState(indexRandom)

  const { author, quote, img } = quotes[userIndex]

  useEffect(() => {
    if (indexRandom === userIndex) return

    setUserIndex(indexRandom)
  }, [userIndex, indexRandom])

  return (
    <div id='quote-box'>
      <div className='pinned-tweet secondary'>
        <img src={pin} alt='' />
        <p>Pinned Tweet</p>
      </div>
      
      <article className='tweet-box'>
        {/*  AVATAR */}
        {/*  no le puse estilos al div */}
        <div className='tweet-avatar-box'>
          <img className='tweet-avatar' src={img} alt={author} />
        </div>

        {/*  USER, @NICKNAME Y MEDIA */}
        <section className='tweet-user-text-and-media'>
          {/* AUTHOR, @USER ------------------------------> */}
          <article className='author-user-and-date'>
            {/* AUTHOR */}
            <p id='author'>{author}</p>

            {/* @USER */}
            <p className='secondary'>
              @{author.replaceAll(/[.-]/gi, '_').replaceAll(/[\s]/gi, '')}
            </p>
          </article>

          {/* QUOTE ------------------------------------------------> */}
          <blockquote id='text'>{quote}</blockquote>

          {/* MEDIA ------------------------------------------------> */}
          <img className='tweet-media' src={sf_title} alt={sf_title} />

          {/* SHARE Y BOTON ------------------------------------------------> */}

          <section className='share-and-new-quote'>
            <a
              href={twitQuote}
              className='share-and-quote'
              id='tweet-quote'
              target='_top'
            >
              Tweet this!
            </a>
            <button
              className='share-and-quote'
              id='new-quote'
              onClick={handleClick}
            >
              New quote
            </button>
          </section>
        </section>
      </article>
    </div>
  )
}

export default Tweet
