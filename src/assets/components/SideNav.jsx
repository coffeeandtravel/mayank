const SideNav = () => {
  return (
    <div>
      <nav className="nav " aria-label="In-page jump links">
        <ul className="mt-16 w-max">
          <li>
            <a className="group flex items-center py-3" href="#about">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-colors duration-500"></span>
              <span className="nav-text text-xs lg:text-s uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                About
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3" href="#experience">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none duration-500"></span>
              <span className="nav-text text-xs lg:text-s  uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Experience
              </span>
            </a>
          </li>
          <li>
            <a className="group flex items-center py-3 active" href="#projects">
              <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none duration-500"></span>
              <span className="nav-text text-xs lg:text-s  uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                Projects
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
