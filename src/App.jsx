// import './App.css'
// import Content from './assets/components/Content'
// import Hover from './assets/components/Hover'
// import Sidebar from './assets/components/SIdebar'

// function App() {
//   return (
//     <>
//     <Hover/>
//     <div className='h-screen justify-center flex sticky top-0 scroll-smooth'>
//       <div className="flex justify-center items-center w-full sticky top-0">
//   <div className="flex md:flex-row flex-col justify-items-start lg:flex-row md:justify-center lg:justify-center lg:gap-10 items-stretch w-full lg:max-w-6xl">
//           <Sidebar/>
//           <Content/>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default App

import './App.css'
import Content from './assets/components/Content'
import Hover from './assets/components/Hover'
import Sidebar from './assets/components/Sidebar'

function App() {
  return (
    <>
      <Hover />
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row lg:flex-row w-full lg:max-w-6xl">
          <Sidebar />
          <Content />
        </div>
      </div>
    </>
    
  );
}

export default App;
