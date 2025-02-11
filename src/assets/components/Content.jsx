import Experience from "./Experience";
import Projects from "./Projects";

const Content = () => {
  return (
    <div className="w-full md:w-2/3 lg:w-[60%] flex flex-col p-5 lg:p-10">
      <div className="py-10">
        <section
          id="about"
          className="flex flex-col items-center justify-start"
        >
          <div className="flex flex-col items-start justify-start gap-px mt-10">
            <p className="content pb-10">
            I hold an Honors degree in B.Tech in Artificial Intelligence and Data Science, 
            with a strong foundation in software development, AI/ML, and data-driven problem-solving. 
            My primary focus is on full-stack web development, building applications with React, Node.js, 
            Express, and MongoDB, while also exploring machine learning and its real-world applications. 
            Additionally, I am expanding my expertise in DevOps and cloud deployment to enhance the scalability 
            and efficiency of my projects.
            </p>
            <p className="content pb-10">
            Beyond coding, I have a deep appreciation for psychology, philosophy, 
            and storytelling, whether through books, movies, or photography. I enjoy analyzing 
            narratives, exploring thought-provoking ideas, and capturing the world through my lens. 
            When {`I'm`} not debugging code or fine-tuning an app, you’ll likely find me immersed in a 
            gripping thriller or refining my understanding of human behavior.
            </p>
            <p className="content pb-10">
            {`I’m`} actively seeking opportunities to apply my skills in software development and AI/ML, 
            contribute to meaningful projects, and grow in the ever-evolving tech landscape.
            </p>
          </div>
        </section>
        <ol className="">
          <Experience />
        </ol>
        <Projects/>
      </div>
    </div>
  );
};

export default Content;
