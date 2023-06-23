import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bottomBarWrap relative w-full py-8">
        <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
          <div className="bottomBar gap-4 flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-desc2 text-[1rem] md:text-[1.0625rem] font-NunitoSans font-semibold">
              © 2023 All Right Reserved By HDK Creations. 
            </p>
            <ul className="flex relative divide-x divide-solid -mr-6">
              <li className="text-desc2 text-[1rem] md:text-[1.0625rem] font-NunitoSans font-semibold px-6 leading-none">
                <a
                  className="hover:text-accent"
                  title="Terms &amp; Condition"
                  href="/">
                  Terms &amp; Condition
                </a>
              </li>
              <li className="text-desc2 text-[1rem] md:text-[1.0625rem] font-NunitoSans font-semibold px-6 leading-none">
                <a className="hover:text-accent" title="Privacy Policy" href="/">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
