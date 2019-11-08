import React from 'react';

function UpdateForm(props) {
 return (
  <div>
   <form>
   <input
     onChange={handleInputChange}
     placeholder="title"
     value={title}
     name="title"
   />
    <input
     onChange={handleInputChange}
     placeholder="director"
     value={director}
     name="director"
   />
    <input
     onChange={handleInputChange}
     placeholder="metascore"
     value={metascore}
     name="metascore"
   />
    <input
     onChange={handleInputChange}
     placeholder="stars"
     value={stars}
     name="stars"
   />
   
   </form>
  </div>
 );
}

export default UpdateForm;