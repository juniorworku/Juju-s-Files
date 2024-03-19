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
      <header id="about" className="bg-light-green-200 p-4">
        <div className="mt-2 w-full">
          <div className="container grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mx-auto text-start">
            <div>
              <img
                className="m-auto h-80 w-80 rounded-full object-cover object-center shadow-xl shadow-blue-gray-900/50 border"
                src={heroImage}
                alt="profile image"
              />
            </div>
            <div>
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

            </div>
          </div>
          <div className="mt-8">
            <div className="justify-center items-center flex flex-row gap-12">
              <a href={Bio.resume} target="_blank" rel="noreferrer">
                <Button color="green" className=" px-4 md:w-[12rem]">View Resume</Button>
              </a>
              <a href={Bio.github} target="_blank" rel="noreferrer">
                <Button variant="outlined" className=" px-4 md:w-[12rem]">Visit GitHub Account</Button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
