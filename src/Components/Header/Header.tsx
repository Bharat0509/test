"use client";
import { headers } from "next/dist/client/components/headers";
import React, { useLayoutEffect, useRef, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";

const Header = () => {
  const refHeader = useRef<HTMLHeadingElement>(null);
  const [sideMenu, setSideMenu] = useState(false);
  const showSideMenu = () => setSideMenu(!sideMenu);

  useLayoutEffect(() => {
    const header = document.getElementById("header");
    console.log(refHeader?.current?.offsetTop!);

    let fixedTop = refHeader?.current?.offsetTop;
    const stickyHeader = () => {
      if (window.pageYOffset > fixedTop!) {
        header?.classList.add("stickyHeader");
      } else {
        header?.classList.remove("stickyHeader");
      }
    };
    window.addEventListener("scroll", stickyHeader);
  }, [refHeader, headers]);

  return (
    <>
      <header id="header" className="z-[9999] hidden lg:block" ref={refHeader}>
      
        <div className="topbar fixed md:top-[1.875rem] lg:top-[4rem] xl:top-[5rem]  left-0 w-full z-[9999]">
          <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
            <div className="flex items-center justify-between w-full topbarInner">
              <div className="logo inline-block max-w-[50%]">
                <a href="/" title="Hardik.io">
                  <img
                    src="logo.png"
                    alt="logo"
                  />
                </a>{" "}
              </div>
              <div className="hidden menuWrapper">
                <nav className="relative hidden lg:block">
                  <ul className="flex flex-col lg:flex-row gap-4 lg:gap-10">
                    <li className="menuItemHashChilderen relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                        Home
                      </span>
                    </li>
                    <li className="menuItemHashChilderen relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                      <span className="group-hover:text-accent text-accent2 pr-5  relative block cursor-pointer">
                        BLOG
                      </span>
                    </li>
                    <li className="menuItemHashChilderen relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                        PORTFOLIO
                      </span>
                    </li>
                    <li className="menuItemHashChilderen relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                      <span className="group-hover:text-accent text-accent2 pr-5 relative block cursor-pointer">
                        PAGES
                      </span>
                    </li>
                    <li className="menuItemHashChilderen relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                      <span className="group-hover:text-accent text-accent2 pr-5 relative  block cursor-pointer">
                        SERVICE
                      </span>
                    </li>
                    <li className="menuItemHashChilderen relative group text-[1rem] lg:text-[1.125rem] font-Poppins font-semibold uppercase">
                      <span className="group-hover:text-accent text-accent2 pr-5  relative block cursor-pointer">
                        CONTECT
                      </span>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="menuWrap hidden lg:flex flex-col items-center justify-between fixed left-[3.4375rem] top-[5.625rem] bottom-[5.625rem] border-2 border-solid border-accent rounded-full z-[9999] w-[6.25rem] px-5 py-[3.125rem]">
          <span className="mirror" onClick={showSideMenu}>
            <CgMenuRight
              className="text-white cursor-pointer hover:text-accent"
              size={32}></CgMenuRight>
          </span>
          <div className="flex flex-col items-center justify-center gap-8 menuInner">
            <div className="socialLinks flex flex-col items-center  justify-center gap-5">
              <a
                className="inline-block"
                href="https://www.facebook.com/"
                title="Facebook"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  fill="#284be5"
                  viewBox="0 0 200 200"
                  className="h-5 w-5 lg:h-10 lg:w-10 fill-accent hover:fill-accent">
                  <g>
                    <path d="M1,108.23C1,102.82,1,97.41,1,92c0.46-3.18,0.81-6.37,1.38-9.53C12.02,29.52,62.06-6.68,116.5,2.39 c53.5,8.91,90.1,59.29,81.15,112.99c-6.77,40.62-30.97,67.13-70.14,79.9c-6.32,2.06-12.9,2.92-19.48,3.73c-5.41,0-10.82,0-16.23,0 c-3.11-0.45-6.26-0.74-9.33-1.39c-39.34-8.26-65.23-31.55-77.69-69.74C2.69,121.5,1.79,114.87,1,108.23z M109.13,128.85 C109.13,128.85,109.13,128.85,109.13,128.85c0.01-6.57,0-13.13,0.01-19.7c0.01-2.48,0.14-2.59,2.65-2.6 c4.12-0.01,8.24,0.01,12.36-0.02c2.33-0.02,3.03-0.69,3.04-2.98c0.03-4.89,0.03-9.78,0-14.68c-0.01-2.59-0.73-3.28-3.38-3.29 c-4.12-0.02-8.24-0.05-12.36,0.01c-1.45,0.02-2.1-0.42-2.06-1.98c0.08-3.47-0.01-6.95,0.06-10.43c0.06-2.92,1.47-4.45,4.41-4.92 c3.65-0.58,7.33-0.23,10.99-0.34c2.33-0.07,2.86-0.51,2.87-2.86c0.03-4.63,0.01-9.27-0.05-13.9c-0.03-2.28-0.48-2.74-2.74-2.76 c-4.64-0.03-9.27-0.07-13.91,0.04c-12.43,0.31-21.4,8.47-23.01,20.76c-0.61,4.62-0.2,9.26-0.32,13.88 c-0.07,2.59-0.09,2.67-2.75,2.69c-3.35,0.02-6.7-0.02-10.04,0.03c-2.23,0.04-2.76,0.54-2.78,2.76c-0.05,5.08-0.05,10.17,0,15.26 c0.02,2.21,0.57,2.7,2.8,2.72c3.28,0.03,6.57,0.01,9.85,0.02c2.89,0.01,2.91,0.02,2.91,2.89c0,13,0,26.01,0.01,39.01 c0,2.75,0.54,3.3,3.27,3.32c4.96,0.02,9.92,0.02,14.87,0c2.84-0.01,3.28-0.43,3.29-3.24C109.14,141.99,109.13,135.42,109.13,128.85 z"></path>
                  </g>
                </svg>
              </a>

              <a
                className="inline-block"
                href="#"
                title="Tumblr"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 200 200"
                  className="h-5 w-5 lg:h-10 lg:w-10 fill-[#3d5a70] hover:fill-accent">
                  <g>
                    <path d="M108.03,199c-5.41,0-10.82,0-16.23,0c-3.11-0.45-6.26-0.74-9.33-1.39c-39.34-8.26-65.23-31.55-77.7-69.73 C2.69,121.5,1.8,114.87,1,108.23C1,102.82,1,97.41,1,92c0.46-3.18,0.81-6.37,1.38-9.53C12.02,29.52,62.06-6.68,116.5,2.39 c53.5,8.91,90.1,59.29,81.15,112.99c-6.77,40.62-30.97,67.13-70.14,79.9C121.19,197.34,114.61,198.2,108.03,199z M103.75,108.86 c0.08,0,0.15,0,0.23,0c0-5.34,0.07-10.68-0.04-16.02c-0.04-1.98,0.69-2.55,2.58-2.52c6.44,0.08,12.87-0.01,19.31,0.05 c1.67,0.02,2.31-0.59,2.28-2.25c-0.07-3.6-0.01-7.21-0.02-10.81c-0.01-2.47-0.17-2.63-2.64-2.64c-6.44-0.01-12.87-0.06-19.31,0.02 c-1.92,0.02-2.57-0.63-2.54-2.58c0.1-7.14,0.01-14.29,0.06-21.43c0.01-1.65-0.57-2.35-2.24-2.32c-3.28,0.06-6.57,0.07-9.85-0.01 c-1.56-0.04-2.31,0.56-2.68,2.09c-1.21,4.99-3.43,9.56-6.22,13.84c-3.26,5-7.23,9.22-13.03,11.31c-1.07,0.39-1.45,1.19-1.45,2.25 c0,3.54,0.01,7.08-0.01,10.62c-0.01,1.41,0.69,1.93,2.04,1.91c2.12-0.04,4.25-0.01,6.37,0c3,0.01,3.01,0.02,3.01,2.99 c0,12.55,0.06,25.1-0.03,37.64c-0.03,4.93,1.65,9,5.15,12.44c3.63,3.56,7.87,5.95,12.8,7.18c3.46,0.87,6.96,1.16,10.51,1.21 c7.53,0.11,14.69-1.43,21.55-4.49c0.96-0.43,1.97-0.85,1.98-2.11c0.03-4.25,0.04-8.49,0.02-12.74c0-1.04-0.58-1.38-1.54-0.95 c-0.71,0.31-1.4,0.64-2.1,0.97c-4.25,2.02-8.66,3.44-13.42,2.84c-6.68-0.85-10.99-3.95-10.81-11.06 C103.86,119.16,103.75,114.01,103.75,108.86z"></path>
                  </g>
                </svg>
              </a>

              <a
                className="inline-block"
                href="https://twitter.com/"
                title="Twitter"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 200 200"
                  className="h-5 w-5 lg:h-10 lg:w-10 fill-[#0ddae1] hover:fill-accent">
                  <g>
                    <path d="M1,108.51c0-5.67,0-11.34,0-17.02c0.46-3.12,0.85-6.24,1.4-9.35c6.58-37.18,34.99-68.1,71.46-77.89 C79.66,2.7,85.56,1.8,91.49,1c5.67,0,11.34,0,17.02,0c3.87,0.63,7.8,0.9,11.62,1.82c38.7,9.31,63.91,32.99,75.59,71.05 c1.8,5.86,2.56,11.94,3.29,18.01c0,5.41,0,10.83,0,16.24c-0.48,3.37-0.74,6.79-1.48,10.11c-8.71,39.51-32.42,65.31-71.02,77.39 c-5.98,1.87-12.18,2.65-18.38,3.38c-5.41,0-10.83,0-16.24,0c-3.24-0.47-6.53-0.74-9.73-1.43c-39.74-8.56-65.61-32.34-77.78-71.07 C2.54,120.66,1.79,114.57,1,108.51z M68.11,109.83c-1.92,1.07-3.06,1.22-7.42,1.11c-2.09-0.05-2.16,0.01-1.22,1.96 c3.17,6.56,8.32,10.7,15.38,12.44c1.06,0.26,2.16,0.32,3.24,0.48c0.38,0.05,0.87,0.05,0.91,0.51c0.02,0.24-0.26,0.57-0.49,0.76 c-0.44,0.38-0.92,0.7-1.4,1.02c-8.1,5.44-17.02,8.14-26.79,7.99c-0.82-0.01-1.69-0.21-2.8,0.26c1.01,0.58,1.72,1,2.45,1.39 c11.57,6.17,23.86,8.68,36.94,7.44c21.26-2.01,37.4-12.23,48.53-30.33c5.84-9.5,9.21-19.93,9.37-31.09 c0.06-4.51,1.65-7.37,5.07-9.91c2.18-1.61,3.87-3.85,5.63-6.54c-4.1,1.03-7.59,2.72-11.52,2.36c3.92-3,7.06-6.46,8.9-11.58 c-4.06,2.07-7.74,3.57-11.62,4.58c-1.53,0.4-2.62,0.17-3.84-0.91c-5.15-4.58-11.25-6.6-18.05-5.51 c-12.78,2.04-20.46,12.33-19.24,25.37c0.2,2.15,0.01,2.36-2.08,2.14C80.93,82.03,66.52,74.86,54.98,62 c-1.37-1.52-1.6-1.49-2.45,0.39c-4,8.83-1.56,19.43,5.97,26.04c0.58,0.51,1.46,0.81,1.58,1.99c-2.79-0.04-5.31-0.73-7.75-1.75 c-1.29-0.54-1.83-0.18-1.71,1.2c0.04,0.45,0.03,0.91,0.11,1.35c1.71,8.66,6.6,14.65,14.94,17.73 C66.38,109.21,67.09,109.46,68.11,109.83z"></path>
                  </g>
                </svg>
              </a>
            </div>
            <span className="h-[2.5rem] sm:h-[3rem] md:h-[5.625rem] bg-accent w-[1px]"></span>
            <h5
              className="uppercase text-white font-Poppins font-bold text-[1rem]"
              style={{
                textOrientation: "mixed",
                writingMode: "vertical-rl",
                transform: "matrix(-1,0,0,-1,0,0",
              }}>
              Follow Me
            </h5>
          </div>
        </div>
      </header>
      <div className="z-[9999] block lg:hidden w-full py-4">
        <div className="topbar w-full z-[9999]">
        
          <div className="container mx-auto sm:container md:container lg:container xl:container 2xl:container">
            <div className="flex items-center justify-between w-full topbarInner">
              <div className="logo inline-block max-w-[50%]">
                <a title="Fastone" href="/">
                  <img src="logo.png"alt="Logo"/></a></div>
                  <span className="flex items-center justify-center w-10 h-10 bg-accent2 rounded cursor-pointer resMenuBtn hover:bg-accent text-white">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></span></div></div></div>
                    <div className="backdrop-blur-md fixed transition-all ease-in-out duration-300 top-0 left-0 h-screen w-screen z-[9999]" style={{opacity:"0", visibility:"hidden" }}></div><div className="sideMenu bg-[#000]/90 backdrop-blur-sm fixed transition-all ease-in-out duration-300 z-[9999] top-0 h-screen w-64 px-8 py-16" style={{right:" -100%;"}}><span className="mirror absolute right-4 top-4"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="text-white cursor-pointer hover:text-accent" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor"></path></svg></span><ul className="w-full flex flex-col gap-4"><li><span className="flex justify-between items-center w-full relative"><a className="text-white block font-Poppins text-[1.125rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]" href="/">Home</a><i className="absolute right-0 top-[5.5px] cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg></i></span></li><li><span className="flex justify-between items-center w-full relative">
                    <a className="text-white block font-Poppins text-[1.125rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]" href="/">Blog</a>
                    <i className="absolute right-0 top-[5.5px] cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                     className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg></i></span></li><li>
                      <span className="flex justify-between items-center w-full relative"><a className="text-white block font-Poppins text-[1.125rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]" href="/">Portfolio</a><i className="absolute right-0 top-[5.5px] cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg></i></span></li><li><span className="flex justify-between items-center w-full relative"><a className="text-white block font-Poppins text-[1.125rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]" href="/">Pages</a><i className="absolute right-0 top-[5.5px] cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg></i></span></li><li><span className="flex justify-between items-center w-full relative"><a className="text-white block font-Poppins text-[1.125rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]" href="/">Service</a><i className="absolute right-0 top-[5.5px] cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="6 9 12 15 18 9"></polyline></svg></i></span></li><li><span className="flex justify-between items-center w-full relative"><a className="text-white block font-Poppins text-[1.125rem] font-medium uppercase hover:text-accent relative w-full pr-4 z-[1]" href="/contact">Contact</a>
                  <i className="absolute right-0 top-[5.5px] cursor-pointer">
                    </i></span></li></ul></div></div>

    
    </>
  );
};

export default Header;
