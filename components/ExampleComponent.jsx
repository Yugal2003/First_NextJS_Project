"use client"; 
import Link from 'next/link';
// import React, { useState } from 'react';

// const ExampleComponent = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputValue);
//     alert(inputValue);
//     setInputValue("")
//   };

//   return (
//     <div>
//       <h1>Form Submission</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ExampleComponent;


import React from 'react'

const ExampleComponent = () => {
  return (
    <div>
      <h1>My First Post</h1>
      <h2>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>
    </div>
  )
}

export default ExampleComponent
