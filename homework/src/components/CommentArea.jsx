import { Component } from "react";
import { Button } from "react-bootstrap";
import libri from "../data/fantasy.json"

class CommentArea extends Component{
   state = {
     comments: [],
   }

   commentFetch = () =>{
   fetch(
       `https://striveschool-api.herokuapp.com/api/comments/${this.props.book.asin}`,
       {
         headers: {
           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzZkNzA2ZmM4YzAwMTU2Yjg3MDciLCJpYXQiOjE3MzI4MDIyNjQsImV4cCI6MTczNDAxMTg2NH0.KicAtYkKuwseGp6TFBGUVXmvmUQwqPBd2mPGzqruEoE"
         }
       }
     )
     .then(response => {
       if (response.ok) {
         return response.json()
       } else {
         throw new Error('Errore nel recupero commenti')
       }
     })
     .then(comments => {
       console.log(comments)
       this.setState({
         comments: comments
       })
     })
     .catch(error => {
       console.log(error)
     })
   }
   

   render(){
     return(
       <button onClick={() => {
         this.commentFetch()
       }}> Click
       </button>
     )
   }
}
export default CommentArea

