import React from "react";

const NewPost = () => {
  return (
    <div>
      <section className="postWrap py-[5rem] sm:py-[6rem] md:py-[7.5rem] relative w-full">
        <div
          className="fixedBg bg-left-top bg-no-repeat opacity-20"
          style={{
            background: "url('./patternImg3.4f8b5f17c50389444037.jpg')",
          }}></div>
        <div className="container  sm:container md:container lg:container xl:container 2xl:container mx:auto">
          <div className="secTitleWrap flex justify-center text-center w-full mb-[2.1875rem]">
            <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
              <h2 className="text-accent2 text-[1.875rem] md:text-[3.125rem] font-Poppins font-bold relative">
                <i className="h-[3.5rem] w-[3.5rem] md:h-[5.625rem] md:w-[5.625rem] rounded-[10px] md:rounded-[1.25rem] absolute ml-[-1.75rem] md:ml-[-2.8125rem] left-1/2 bg-shapBg z-[-1] top-[-12%] md:top-[-15%]"></i>
                Featured{" "}
                <span className="text-accent text-[1.875rem] md:text-[3.125rem] font-Caveat font-bold relative">
                  Posts
                </span>
              </h2>
              <p className="text-desc2 text-[1rem] md:text-[1.25rem] sm:text-[1.225rem] mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>
          </div>
          <div className="postsList grid gap-[1.875rem] lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 relative w-full">
            <div className="postBox group relative w-full">
              <div className="postImg overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] w-full">
                <a
                  title="Spring Which I Enjoy With For Effective Agile Team"
                  href="/blog/1">
                  <img
                    className="w-full group-hover:scale-105"
                    src="./postImg1-1.a41a126523bdcfd2daf1.jpg"
                    alt="Spring Which I Enjoy With For Effective Agile Team"
                  />
                </a>
              </div>
              <div className="postInfo relative z-[1] px-5 sm:px-8 md:px-10 py-5 sm:py-7 md:py-8 mt-[-4.6875rem] inset-x-[10px] max-w-[calc(100%-1.25rem)]">
                <div
                  className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                  style={{background:"url('./patternImg2.8de82b580f10424e5d2f.jpg')"}}>

                  </div>
                <span className="flex items-center text-accent gap-[10px] text-[.9375rem] font-NunitoSans font-semibold">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  <a
                    className="hover:text-accent2"
                    title="January 21, 2022"
                    href="/">
                    January 21, 2022
                  </a>
                </span>
                <h3 className="text-accent2 text-[1.25rem] font-Poppins font-semibold mt-2">
                  <a
                    className="hover:text-accent"
                    title="Spring Which I Enjoy With For Effective Agile Team"
                    href="/blog/1">
                    Spring Which I Enjoy With For Effective Agile Team
                  </a>
                </h3>
                <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
                <span className="flex items-center text-accent gap-1 text-[1rem] font-NunitoSans font-bold">
                  By
                  <a
                    className="hover:text-accent2"
                    title="Berline Tokyo"
                    href="/">
                    Berline Tokyo
                  </a>
                </span>
              </div>
            </div>
            <div className="postBox group relative w-full">
              <div className="postImg overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] w-full">
                <a
                  title="But some of the current projects that make"
                  href="/blog/2">
                  <img
                    className="w-full group-hover:scale-105"
                    src="./postImg1-2.200c60ad990d446eec89.jpg"
                    alt="But some of the current projects that make"
                  />
                </a>
              </div>
              <div className="postInfo relative z-[1] px-5 sm:px-8 md:px-10 py-5 sm:py-7 md:py-8 mt-[-4.6875rem] inset-x-[10px] max-w-[calc(100%-1.25rem)]">
                <div
                  className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                  style={{background:"url('./patternImg2.8de82b580f10424e5d2f.jpg')"}}></div>
                <span className="flex items-center text-accent gap-[10px] text-[.9375rem] font-NunitoSans font-semibold">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                  <a
                    className="hover:text-accent2"
                    title="February 18, 2022"
                    href="/">
                    February 18, 2022
                  </a>
                </span>
                <h3 className="text-accent2 text-[1.25rem] font-Poppins font-semibold mt-2">
                  <a
                    className="hover:text-accent"
                    title="But some of the current projects that make"
                    href="/blog/2">
                    But some of the current projects that make
                  </a>
                </h3>
                <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
                <span className="flex items-center text-accent gap-1 text-[1rem] font-NunitoSans font-bold">
                  By
                  <a className="hover:text-accent2" title="John Doe" href="/">
                    John Doe
                  </a>
                </span>
              </div>
            </div>
            <div className="postBox group relative w-full">
              <div className="postImg overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] w-full">
                <a
                  title="Project that began allow second phase in worth"
                  href="/blog/3">
                  <img
                    className="w-full group-hover:scale-105"
                    src="./postImg1-3.97a4b42b6af2b6819c5d.jpg"
                    alt="Project that began allow second phase in worth"
                  />
                </a>
              </div>
              <div className="postInfo relative z-[1] px-5 sm:px-8 md:px-10 py-5 sm:py-7 md:py-8 mt-[-4.6875rem] inset-x-[10px] max-w-[calc(100%-1.25rem)]">
                <div
                  className="before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[1.875rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.875rem] inset-0 w-full bg-no-repeat bg-center bg-cover z-[-1] bg-gray"
                  style={{background:"url('./patternImg2.8de82b580f10424e5d2f.jpg')"}}></div>
                <span className="flex items-center text-accent gap-[10px] text-[.9375rem] font-NunitoSans font-semibold">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>{" "}
                  <a
                    className="hover:text-accent2"
                    title="April 05, 2022"
                    href="/">
                    April 05, 2022
                  </a>
                </span>
                <h3 className="text-accent2 text-[1.25rem] font-Poppins font-semibold mt-2">
                  <a
                    className="hover:text-accent"
                    title="Project that began allow second phase in worth"
                    href="/blog/3">
                    Project that began allow second phase in worth
                  </a>
                </h3>
                <i className="bg-[#d5daf2] h-[1px] border-0 relative before:absolute before:bg-accent before:w-[3.125rem] before:h-[3px] before:z-[1] block before:mt-[-1px] mt-5 mb-4"></i>
                <span className="flex items-center text-accent gap-1 text-[1rem] font-NunitoSans font-bold">
                  By
                  <a
                    className="hover:text-accent2"
                    title="Martha Beth"
                    href="/">
                    Martha Beth
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewPost;
