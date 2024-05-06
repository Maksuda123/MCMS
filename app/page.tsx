


// export default function Example() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//         <img
//           className="mx-auto h-12 w-auto"
//           src="https://logodix.com/logo/1811215.png?color=indigo&shade=600"
//           alt="Ati Limited"
//         />
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <form className="space-y-6" action="#" method="POST">
//           <div>
//             <label htmlFor="user" className="block text-sm font-medium text-gray-700">
//               User Name:
//             </label>
//             <div className="mt-1">
//               <input
//                 id="user"
//                 name="user"
//                 type="text"
//                 autoComplete="username"
//                 required
//                 className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           <div>
//             <div className="flex justify-between">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password:
//               </label>
//               <div className="text-sm">
//                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//             <div className="mt-1">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>

//         <p className="mt-2 text-center text-sm text-gray-600">
//           Not signed up?{' '}
//           <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//             Sign up
//           </a>
//         </p>
//       </div>
//     </div>
//   )
// }




export default function Example() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center">
      <div className="bg-white bg-opacity-75 rounded-lg shadow-lg p-8 max-w-md w-full">
        <div className="text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="https://logodix.com/logo/1811215.png?color=indigo&shade=600"
            alt="Ati Limited"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="user" className="block text-sm font-medium text-gray-700">
              User Name:
            </label>
            <div className="mt-1">
              <input
                id="user"
                name="user"
                type="text"
                autoComplete="username"
                required
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password:
              </label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-2 text-center text-sm text-gray-600">
          Not signed up?{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
