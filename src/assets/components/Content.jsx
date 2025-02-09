

// const Content = () => {
//   return (

import Experience from "./Experience";

    
//        <div className="flex-1 lg:h-auto flex-col justify-between p-5 lg:p-0 top-0 scroll-smooth">
//         <div className="py-10 ">
//         <section id="about" className="flex flex-col items-center justify-start h-screen">
//             <div className="flex flex-col items-start justify-start gap-px mt-20">
//                 <p className="content pb-10">I recently graduated with an honors degree in B.Tech in Artificial Intelligence and Data Science. As a fresher, I am enthusiastic about launching my career and am actively seeking opportunities in web design, React, C++, SQL development, and AI/ML. I’m passionate about leveraging my skills to solve challenging problems, create innovative solutions, and contribute to cutting-edge projects in technology.</p>
//                 <p className="content">Outside of work, I trade lines of code for lines of sight—whether it’s capturing the elegance of wildlife or the beauty of landscapes through my lens. When I’m not clicking pictures, you’ll find me immersed in a captivating book or watching a movie, refining my ability to appreciate art, stories, and the occasional plot twist (both on-screen and in life).</p>
//             </div>
//         </section>
//         </div>
//     </div>
    
//   )
// }

// export default Content
const Content = () => {
    return (
      <div className="w-full md:w-2/3 lg:w-[60%] flex flex-col p-5 lg:p-10">
        <div className="py-10">
          <section id="about" className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-start justify-start gap-px mt-10">
              <p className="content pb-10">
                I recently graduated with an honors degree in B.Tech in Artificial Intelligence and Data Science. As a fresher, I am enthusiastic about launching my career and am actively seeking opportunities in web design, React, C++, SQL development, and AI/ML. I’m passionate about leveraging my skills to solve challenging problems, create innovative solutions, and contribute to cutting-edge projects in technology.
              </p>
              <p className="content pb-10">
                Outside of work, I trade lines of code for lines of sight—whether it’s capturing the elegance of wildlife or the beauty of landscapes through my lens. When I’m not clicking pictures, you’ll find me immersed in a captivating book or watching a movie, refining my ability to appreciate art, stories, and the occasional plot twist (both on-screen and in life).
              </p>
            </div>
          </section>
          <ol className="">
        <Experience/>
    </ol>
    <div></div>
        </div>
      </div>
    );
  };
  
  export default Content;
  
  