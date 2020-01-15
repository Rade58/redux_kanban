import ListContainer from '../containers/ListContainer'
import React from 'react'

export default ({listIds}) => {

  return (
  <section>
    {listIds.map(listId => 
      <ListContainer key={listId} listId={listId} />)}
  </section>
  )

}
