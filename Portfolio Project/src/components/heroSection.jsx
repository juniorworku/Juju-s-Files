import React from 'react'
import {
  Button,
  Typography,
  Input,
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
              Get ready to experience a new level of{" "}
              <span className="text-green-500 leading-snug ">
                performance
              </span>{" "}
              and{" "}
              <span className="leading-snug text-green-500">
                functionality
              </span>
              .
            </Typography>
            <Typography
              variant="lead"
              className="mx-auto w-full !text-gray-500 lg:text-lg text-base"
            >
              The time is now for it to be okay to be great. For being a bright
              color. For standing out.
            </Typography>
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-col gap-4 md:flex-row">
                <a href="#buttons-with-link" target="_blank" rel="noreferrer">
                  <Button color="green" className="w-full px-4 md:w-[12rem]">View Resume</Button>
                </a>
                <a href="#buttons-with-link" target="_blank" rel="noreferrer">
                  <Button color="gray" className="w-full px-4 md:w-[12rem]">Visit GitHub Account</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
