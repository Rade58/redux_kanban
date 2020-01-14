import normalizr from 'normalizr'
import * as fetchedData from './gathered_data.json'

// for node testing
/* const normalizr = require('normalizr')
const fetchedData = require('./gathered_data.json') */
//

// USERS AND CARDS ISOLATED 

const arrayOfUsers = fetchedData.users
const arrayOfLists = fetchedData.lists
// EVERY LIST OBJECT, HAS ALOSO A cards ARRAY


// NORMALAZING DATA

const userSchema = new normalizr.schema.Entity('users')         // STRING ARGUMENT DECIDES PROPERTY NAME OF THE OBJECT

const cardSchema = new normalizr.schema.Entity('cards', {assignedTo: userSchema})

const listSchema = new normalizr.schema.Entity('lists', {
  cards: [cardSchema]         // THIS YOU'LL HAVE TWO entities INSIDE OBJECT
})

// EVERY OBJECT WILL HAVE entities PROPERTY WITH KEY VALUE PAIRS

// IF YOU WRAP SHEMA IN ARRAY (SECOND ARGUMENT) YOU HAVE ARRAY result ,AND INSIDE WILL BE IDs

const normalizedUsers = normalizr.normalize(arrayOfUsers, [userSchema]) //  { result: [**USER IDS INSIDE**],   entities: { users: {  **KEY(ID)/VALUE PAIRS**  }   }   }

const normalizedLists = normalizr.normalize(arrayOfLists, [listSchema]) //  {   result: [**LIST IDS INSIDE**],   
//                                                                    entities: { 
//                                                                      lists: {  **KEY(ID)/VALUE PAIRS**  }, cards: {  **KEY(ID)/VALUE PAIRS** }
//                                                                    }   
//                                                                }

// TO ACCESS normalizedList.entities.lists    NOT IDEAL (SAME GOES FOR USERS TOO)

// ALSO IDS ARE UNDER result (NOT SO SUGESTIVE)

//   ALSO CARDS DON'T HVE ARRAY OF THEIR IDs

///////////////////////////////////////////////////////////////////////////////////////

const users = {
  entities: normalizedUsers.entities.users,
  ids: normalizedUsers.result
}

const lists = {
  entities: normalizedLists.entities.lists,
  ids: normalizedLists.result
}

const cards = {
  entities: normalizedLists.entities.cards,
  ids: Object.keys(normalizedLists.entities.cards)
}



// console.log({users: normalizedUsers, lists: normalizedLists})
// console.log({cards: normalizedLists.entities.cards})

export default {
  users,
  lists,
  cards
}