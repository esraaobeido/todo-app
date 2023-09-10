// import React, { useContext, useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { LoginContext } from './context';

// export default function Login() {
//   const login = useContext(LoginContext);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginError, setLoginError] = useState('');

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login.login(username, password);
//     } catch (error) {
//       setLoginError('Invalid username or password');
//     }
//   };

//   if (login.loggedIn) {
//     return <Navigate to="/" />;
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <div>
//           <button type="submit">Login</button>
//         </div>
//         {loginError && <p>{loginError}</p>}
//       </form>
//     </div>
//   );
// }
