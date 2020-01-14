import React from 'react'
import {App, list} from './styles/App.module.css'
import Card from './components/Card'

////////////////////////////////////////////////////////////////////////////////
////////////////////////JUST HERE FOR OCASIONAL INISIGHT OF WHAT I
// TESTING list TREE

import {connect} from 'react-redux'

const mapListsToProps = (state, ownProps) => { // mapStateToProps HAS ACCESS TO WHOLE STATE
// YOU CAN PICK WHAT YOU WANT FROM THE STATE 
// AND PASS IT TO HIGHER ORDER COMPONENTS

  return {lists: state.lists}

}

//


const TestListsContainer = connect(mapListsToProps)((props) => {
  
  const {lists} = props
  
  console.log(lists)

  return (<div>
    Lists are console logged
  </div>)
})

///////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////


export default props => {
  return (
    <main className={App}>
      <section className={list}>Hello </section>
      <section className={list}>
        <Card card={{title: "blah",description: "something"}} />
      </section>
      <section className={list}>Hey  </section>

      <TestListsContainer />

    </main>
  )   
}