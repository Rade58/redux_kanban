/* import normalizr from 'normalizr'
import * as fetchedData from './gathered_data.json'
 */
// for node testing
const normalizr = require('normalizr')
const fetchedData = require('./gathered_data.json')
//

// USERS AND CARDS ISOLATED 

const arrayOfUsers = fetchedData.users
const arrayOfLists = fetchedData.lists
// EVERY LIST OBHECT, HAS ALOSO A cards ARRAY


// NORMALAZING DATA

const userSchema = new normalizr.schema.Entity('users')         // STRING ARGUMENT DECIDES PROPERTY NAME OF THE OBJECT

const cardSchema = new normalizr.schema.Entity('cards', {assignedTo: userSchema})

const listSchema = new normalizr.schema.Entity('lists', {
  cards: [cardSchema]
})

// EVERY OBJECT WILL HAVE entities PROPERTY WITH KEY VALUE PAIRS

// IF YOU WRAP SHEMA IN ARRAY (SECOND ARGUMENT) YOU HAVE ARRAY result ,AND INSIDE WILL BE IDs

const users = normalizr.normalize(arrayOfUsers, [userSchema])

const lists = normalizr.normalize(arrayOfLists, [listSchema])

console.log({users, lists})

