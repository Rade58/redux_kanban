import React from 'react'
import {App, list} from './styles/App.module.css'
import Card from './components/Card'

import {connect} from 'react-redux'



////////////////////////////////////////////////////////////////////////////////
////////////////////////JUST HERE FOR OCASIONAL INISIGHT INSIDE mapStateToProps
// JUST TO SEE HOW IT WORKS

import TrashComponent from './trash_stuff/trash'
// DON'T PAY ATTENTION TO IT
//  
///////////////////////////////////////////////////////////////////




export default props => {
  return (
    <main className={App}>
      <section className={list}>Hello </section>
      <section className={list}>
        <Card card={{title: "blah",description: "something"}} />
      </section>
      <section className={list}>Hey  </section>
      
      {/*     ///////////////////////////////////////////*/}
      <TrashComponent random_prop="random stuff" />

    </main>
  )   
}