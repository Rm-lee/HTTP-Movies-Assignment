import React from 'react';
import {useState} from 'react'
import axios from 'axios';
function UpdateForm(props) {
 const {id} = this.props.match.params;
const [state,setState] = useState({
 title: '',
 director: '',
 metascore: '',
 stars:[]
})

function handleChange(e) {
 const value = e.target.value;
 setState({
   ...state,
   [e.target.name]: value
 });
}

function submitHandler(e){
 e.preventDefault()
 
}



 return (
  <div> 
   <h2>Update Movie</h2>
   <form onSubmit={submitHandler}> 
   <input
     onChange={handleChange}
     placeholder="title"
     value={state.title}
     name="title"
   />
   <br />
    <input
     onChange={handleChange}
     placeholder="director"
     value={state.director}
     name="director"
   />
   <br />
    <input
     onChange={handleChange}
     placeholder="metascore"
     value={state.metascore}
     name="metascore"
   />
   <br />
    <input
     onChange={handleChange}
     placeholder="stars"
     value={state.stars}
     name="stars"
   />
   <br />
   <button>Update</button>
   </form>
  </div>
 );
}

export default UpdateForm;