import React from 'react'
import {Card} from '../styles/Card.module.css'

export default ({card}) => {
  return (
  <article className={Card}>
    <h3>{card.title}</h3>
    <div>{card.description}</div>
  </article>
  )
}
