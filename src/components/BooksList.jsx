import React, { Component } from 'react';
import {connect} from 'react-redux';
import DetailBook from './DetailBook'

 class BooksList extends Component {
   
    state={
        b : "",
        p: "",
    }

    onListClick=(title)=>{
        console.log(title);
        this.setState({
            b: title
        })
    }

    
    render() {  
        let renderList = this.props.books.map((book)=>{
            return <div 
                onClick={()=> this.onListClick(book.title)}
                key={book.id}>
                <li>{book.title}</li>
            </div>
        });

        console.log(this.props.books);
       
        return (
            <div>
              {renderList}
               <DetailBook />
            </div>
        )
    }
}


 const mapStateToProps = (state, ownProps) => {
     return {
         books: state.books
     }
 }



export default connect(mapStateToProps)(BooksList);