import Typewriter from "typewriter-effect";
import { Bio } from '../data/fixedData';
import heroImage from "../images/heroImage.jpg"
import {
  Button,
  Typography,
} from "@material-tailwind/react";


export default function HeroSection() {
  return (
    <>
      <header className="bg-indigo-400  p-4">
        <div className="grid mt-2 min-h-[80vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-start">
            <img
                className="m-auto h-60 w-60 rounded-full object-cover object-center shadow-xl shadow-blue-gray-900/50 border"
                src={heroImage}
                alt="profile image"
              />
            <Typography
              variant="h3"
              color="blue-gray"
              className="mx-auto my-2 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl text-center"
            >
              Hi, I'm {Bio.name}<br />
            </Typography>
            <Typography 
              variant="h3"
              color="green"
              className="mx-auto my-2 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl text-center">
                I am
                  <span className="leading-snug">
                    <Typewriter 
                      options={{ 
                        strings: Bio.roles, 
                        autoStart: true, 
                        loop: true,
                      }} 
                    />

                  </span>
            </Typography>
            <Typography
              variant="lead"
              color="blue-gray"
              className="mx-auto w-full lg:text-lg text-center"
            >
              {Bio.description}
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <a href={Bio.resume} target="_blank" rel="noreferrer">
                  <Button color="green" className=" px-4 md:w-[12rem]">View Resume</Button>
                </a>
                <a href={Bio.github} target="_blank" rel="noreferrer">
                  <Button variant="outlined" className=" px-4 md:w-[12rem]">Visit GitHub Account</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
