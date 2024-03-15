import {
    FaGithub,
    FaLinkedin,
    FaTelegramPlane,
  } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { socialLinks } from "../data/fixedData";
import { Typography } from "@material-tailwind/react";

export default function FooterSection() {
  return (
    <div>
        <footer className="w-full flex flex-col items-center justify-center gap-2 lg:gap-3 py-2 lg:py-4">
            <Typography className="m-0 font-montserrat text-1.25xl font-semibold tracking-wide">Junior Worku</Typography>
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 text-center md:justify-between">
                <ul className="flex justify-center gap-y-2 gap-x-8 text-center">
                    <li>
                        <Typography
                            to="about"
                            onClick={() => scroll.scrollToTop({ smooth: true })}
                            color="blue-gray"
                            className="text-decoration-none text-colorWhite font-semibold text-1.125em font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            About me
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            to="skills"
                            onClick={() => scroll.scrollToTop({ smooth: true })}
                            color="blue-gray"
                            className="text-decoration-none text-colorWhite font-semibold text-1.125em font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            Skills
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            href='#projects'
                            onClick={() => scroll.scrollToTop({ smooth: true })}
                            color="blue-gray"
                            className="text-decoration-none text-colorWhite font-semibold text-1.125em font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            Projects
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            to="contact"
                            onClick={() => scroll.scrollToTop({ smooth: true })}
                            color="blue-gray"
                            className="text-decoration-none text-colorWhite font-semibold text-1.125em font-montserrat cursor-pointer transition-all duration-500 ease-in-out relative"
                        >
                            Contact Me
                        </Typography>
                    </li>
                </ul>
            </div>
            <div className="flex gap-2">
                <Typography as="a" href={socialLinks.github} target="_blank" className="transition-all duration-500 ease-in-out text-#7e908e hover:transform hover:scale-120">
                    <FaGithub size={35} />
                </Typography >
                <Typography as="a" href={socialLinks.linkedin} target="_blank" className="transition-all duration-500 ease-in-out text-#7e908e hover:transform hover:scale-120">
                    <FaLinkedin size={35} />                    
                </Typography>
                <Typography as="a" href={socialLinks.telegram} target="_blank" className="transition-all duration-500 ease-in-out text-#7e908e hover:transform hover:scale-120">
                    <FaTelegramPlane size={35} />                    
                </Typography>
            </div>
            <hr className="my-1 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; 2024 Junior Worku
            </Typography>
        </footer>
      
    </div>
  )
}
