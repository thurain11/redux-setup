import React, { Component } from 'react'
import {MDBContainer, MDBBtn} from 'mdbreact'
import {bookListReducer} from './reducers/books_list'
import BooksList from './components/BooksList'

 class App extends Component {


   render(){
       
       return(
           <MDBContainer>
               <h1>Welcome to Redux</h1>
               <BooksList/>
           </MDBContainer>
       )
   }
}

export default App;
