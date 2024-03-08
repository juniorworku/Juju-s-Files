import Typewriter from "typewriter-effect";
import { Bio } from '../data/fixedData';
import {
  Button,
  Typography,
} from "@material-tailwind/react";


export default function HeroSection() {
  return (
    <>
      <header className="bg-white p-8">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch bg-center bg-contain bg-no-repeat">
          <div className="container mx-auto px-4 text-center">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl"
            >
              Hi, I'm {Bio.name}<br />
            </Typography>
            <Typography variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug  !text-2xl lg:max-w-3xl lg:!text-5xl">
                I am
                  <span className="leading-snug text-blue-500">
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
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              {Bio.description}
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <a href={Bio.resume} target="_blank" rel="noreferrer">
                  <Button color="gray" className=" px-4 md:w-[12rem]">View Resume</Button>
                </a>
                <a href={Bio.github} target="_blank" rel="noreferrer">
                  <Button color="gray" className=" px-4 md:w-[12rem]">Visit GitHub Account</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
