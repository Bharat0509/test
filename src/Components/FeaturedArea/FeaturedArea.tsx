import React from "react";

const FeaturedArea = () => {
  return (
    <section className="featuredAreaWrap md:text-left text-center bg-dark z-[1] flex items-center bgGrident1 bg-blend-hard-light  relative min-h-screen xl:rounded-br-[20rem] lg:rounded-br-[18rem] md:rounded-br-[15rem] sm:rounded-br-[10rem] rounded-br-0 w-screen md:py-[6.25rem] py-20">
      <div className="shaps absolute inset-0">
        <img
          className="absolute floatAnim left-[10%] top-[10%] animDelay1"
          src="ani1.webp"
          alt="Shape"
        />
        <img
          className="absolute floatAnim right-[10%] bottom-[20%] animDelay2"
          src="ani2.webp"
          alt="Shape"></img>
        <img
          className="absolute floatAnim right-[50%] bottom-[50%] animDelay3"
          src="ani2.webp"
          alt="Shape"></img>
        <img
          className="absolute floatAnim right-[15%] bottom-[40%] animDelay4"
          src="ani1.webp"
          alt="Shape"></img>
        <img
          className="absolute floatAnim right-[10%] top-[10%] animDelay5"
          src="ani1.webp"
          alt="Shape"></img>
        <img
          className="absolute floatAnim right-[45%] top-[10%] animDelay6"
          src="ani3.webp"
          alt="Shape"></img>
      </div>
      <span className="bg-accent absolute left-0 bottom-[-.75rem] h-6 w-1/2"></span>

      
        <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
          <div className="featuredAreaInner relative z-[1] w-full">
            <div className="grid gap-[1.875rem] md:grid-cols-2 grid-cols-1 items-center">
              <div className="md:order-1">
                <div className="featuredImgWrap text-center w-full">
                  <div className="featuredImgInner relative inline-block w-4/5 sm:w-full md:w-full lg:w-[26rem] xl:w-[35rem]">
                    <span
                      className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-white rounded-full right-[-2.5rem] top-[-2.5rem] md:right-[-3.5rem] md:top-[-3.5rem] lg:right-[-4rem] lg:top-[-4rem] xl:right-[-6.25rem] xl:top-[-6.25rem] z-[1]"></span>
                    <span
                      className="h-[8rem] w-[8rem] sm:h-[14rem] sm:w-[14rem] md:h-[10rem] md:w-[10rem] lg:h-[14rem] lg:w-[14rem] xl:h-[18.75rem] xl:w-[18.75rem] absolute bg-dark2 rounded-full left-[-2.5rem] bottom-[-2.5rem] md:right-[-3.5rem] md:bottom-[-3.5rem] lg:left-[-4rem] lg:bottom-[-4rem] xl:left-[-6.25rem] xl:bottom-[-6.25rem] z-[1]"></span>
                    <div className="featuredImg relative rounded-full ">
                      
                      <img
                        className="rounded-full relative z-[1] max-w-full"
                      //  src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76612106-8aba-4097-9619-baee44cc3b5f/deprm0d-1d3cf367-c685-42e2-ac5c-f4aba70c1b7f.png/v1/fill/w_894,h_894/commission__sasuke_uchiha__icon_avatar__ems__by_iennidesign_deprm0d-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzc2NjEyMTA2LThhYmEtNDA5Ny05NjE5LWJhZWU0NGNjM2I1ZlwvZGVwcm0wZC0xZDNjZjM2Ny1jNjg1LTQyZTItYWM1Yy1mNGFiYTcwYzFiN2YucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.ko_mwnNeDjG06GmAdQNwXkwktTH6NuWb4cr05PZaGGU'
                      // 
                      src="hardik.jpg"
                                              alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="featuredCap relative w-full mt-10 md:mt-0">
                  <span className="bg-accent opacity-[.07] w-[6.25rem] h-[6.25rem] md:w-[12.5rem] md:h-[12.5rem] absolute rounded-full z-[-1] top-[-2.5rem] md:top-[-5rem]"></span>
                  <span className="font-normal text-[1.5rem] sm:text-[1.5rem] md:text-[1.875rem] lg:text-[2rem] xl:text-[2.5rem] font-Caveat  text-white uppercase leading-none">
                    Hello, I Am
                  </span>
                  <h2 className="font-bold text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] font-Poppins text-white uppercase">
                    Hardik
                    <span className="font-normal text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[5rem] text-accent font-Poppins uppercase text-violet-600">
                      Bhammar
                    </span>
                  </h2>
                  <h3 className="md:justify-start justify-center font-bold text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] font-Poppins text-white uppercase flex items-center gap-2.5 tracking-[1px]">
                    <span className="w-[2.5rem] sm:w-[3rem] md:w-[4.375rem] bg-accent h-[1px]"></span>
                    FullStack Develper
                  </h3>
                  <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.375rem] text-desc md:leading-9 sm:leading-7 leading-6 w-full md:w-full lg:w-full xl:w-3/4 mt-6">
                    We're an award-winning, forward thinking, boutique digital
                    &amp; creative in Edmonton, Canada.
                  </p>
                  <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] lg:text-[1.25rem] xl:text-[1.375rem] text-desc md:leading-9 sm:leading-7 leading-6 w-full md:w-full lg:w-full xl:w-3/4 mt-4">
                    Our strategists, designers and coders work with clients from
                    all over the world to build successful,
                  </p>
                  <div className="flex items-center md:justify-start justify-center sm:gap-8 md:gap-10 lg:gap-15 xl:gap-20 gap-8 md:mt-[3.125rem] mt-[1.875rem]">
                    <a
                      className="text-accent uppercase md:text-[1.125rem] text-[1rem] flex gap-5 items-center hover:text-white"
                      title="Hire Me"
                      href="/">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"  
                        strokeLinejoin="round"
                        className="bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                      <span className="font-bold font-Poppins underline underline-offset-8">
                        Hire Me
                      </span>
                    </a>
                    <a
                      className="bg-white text-accent text-[1rem] font-Poppins font-bold uppercase rounded-[5px] md:rounded-[10px] md:px-6 lg:px-10 xl:px-11 px-7 md:py-[1.125rem] py-[14px] hover:bg-accent hover:text-white text-center inline-block"
                      title="Download CV"
                      href="/">
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default FeaturedArea;
