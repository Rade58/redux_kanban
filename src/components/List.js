import {List} from '../styles/List.module.css'
import React from 'react'
 
// mapStateToProps    NEED TO PASS IN PROPS TO THIS COMPONENT

export default ({list = {}}) => {

  const title = list.title
  const listId = list.id
  const cardIds = list.cards

  console.log(cardIds)

  // Cards OR CardsContainer NEED JUST TO BE FED WITH THIR IDS OR ID OF THE LIST THEY BELONG IN

  // WILL GIVE LIST ID TO CARDS FOR FUTUE PROOFING (IF CARDS NEEDS TO BE REMOVED OR MOVED)

  return(
  <article className={List}>
    <h2>{title}</h2>
    {/* PLACE FOR CARDS, OR CARDS CONTAINER */}
  </article>
  )
}


// LISTS CONTAINER WILL BE RESPONSIBLE FOR PASSING DOWN THE LIST IDS AND CARD ID-S 