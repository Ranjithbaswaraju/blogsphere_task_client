// import { Routes, Route, } from "react-router-dom";
// import CreatePost from "./createPost";


// const AuthorDashBoard = () => {
  

//   return (
//     <>
//       <Routes>
//         <Route path="createPost" element={<CreatePost />} />
//       </Routes>
//     </>
//   );
// };

// export default AuthorDashBoard;

// import CreatePost from "./createPost";

// const AuthorDashBoard = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Author Dashboard</h2>
//       <CreatePost />
//     </div>
//   );
// };

// export default AuthorDashBoard;

import React from "react";
import CreatePost from "./createPost";

const AuthorDashBoard=()=>{
    return(
        <>
          <h1>Admin dahsborad</h1>
          <CreatePost/>
        </>
    )
}
export default AuthorDashBoard