const Experience = () => {
  return (
    <section>
    <a href="https://drive.google.com/file/d/1sl-G0CnSn0uGjhq5ovqmxlgc64Htpiw3/view?usp=drive_link" target="_blank">
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"><h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2></div>
    <li className="mb-12" id="experience">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
          JUN-2023 - JUL-2023
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-slate-200">
            <div>
              <span className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-base">
                Intern · UOONS
              </span>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal">
            Contributed to a {`startup's`} new e-commerce project by developing the landing page for the website. Collaborated closely with the team to ensure a responsive and visually appealing design, delivering a user-friendly experience for the {`platform's`} launch.
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                HTML
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                CSS
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                JavaScript
              </div>
            </li>
            <li className="mr-1.5 mt-2">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                ReactJS
              </div>
            </li>
          </ul>
        </div>
      </div>
    </li>
    </a>
    <div className="mt-12">
    <a
      className="inline-flex items-baseline leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold group/link text-base"
      href="https://drive.google.com/file/d/13Y9BoKM-bRrgOcmNwnb5bwPORoEl5yeX/view?usp=sharing"
      target="_blank"
      rel="noreferrer noopener"
      aria-label="View Full Résumé (opens in a new tab)"
    >
      <span>
        {`View Full `}
        <span className="inline-block">
           {`Résumé`}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </span>
    </a>
  </div>
    </section>
  );
};

export default Experience;
