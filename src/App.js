import React from 'react'
import {App} from './styles/App.module.css'



////////////////////////////////////////////////////////////////////////////////
////////////////////////JUST HERE FOR OCASIONAL INISIGHT INSIDE mapStateToProps
// JUST TO SEE HOW IT WORKS

import TrashComponent from './trash_stuff/trash'
// DON'T PAY ATTENTION TO IT
//  
//////////////////////////////////////////////////////////////////////////////

import ListsContainer from './containers/ListsContainer'


/////////////////////////////////////////////////////////////////////////////
export default props => {
  return (
    <main className={App}>
      <ListsContainer />    
      {/*     ///////////////////////////////////////////*/}
      <TrashComponent random_prop="random stuff" />

    </main>
  )   
}