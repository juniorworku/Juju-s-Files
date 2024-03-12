import {
    Card,
    CardBody,
    Typography,
    Button,
    CardHeader,
  } from "@material-tailwind/react";

import { skills } from "../data/fixedData";
  
  export default function Skills() {
    return (
      <>
      <div className=" bg-light-green-200 flex flex-col text-white font-montserrat p-0 md:p-4 mb-8">
        <div className="flex flex-col flex-wrap items-center justify-center text-center gap-4">
            <Typography variant="h3" mb={4} className="text-center">
            Skills
            </Typography>
            <Typography variant="h6" mb={4} className="text-center">
            Check out some of the skills i've been working on:
            </Typography>
            <div className=" bg-light-green-200 flex flex-wrap items-center justify-center gap-12 md:w-full">
            {skills.map((skillCategory) => (
                <Card
                key={skillCategory.title}
                className=" bg-light-green-200 w-full flex flex-col gap-8 border-2 border-teal-500 rounded-md min-h-18em p-4 shadow-md transition-transform duration-1000 ease-in-out hover:transform hover:scale-103 hover:shadow-lg"
                >
                <CardHeader className=" bg-light-green-200relative m-0 text-4xl font-bold md:text-5xl">
                    <Typography variant="h4" className="text-center">
                    {skillCategory.title}
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-wrap items-center justify-center gap-5 self-center mb-4">
                    {skillCategory.skills.map((skill) => (
                    <Button
                        key={skill.name}
                        className="bg-light-green-300 flex flex-wrap items-center justify-center gap-2 p-2 border border-teal-500 rounded-full text-lg cursor-pointer hover:transform hover:scale-103 hover:shadow-md transition-transform hover:-translate-y-2 ease-in-out"
                    >
                        <img
                        className="w-5 h-5"
                        src={skill.image}
                        alt={skill.name}
                        />
                        {skill.name}
                    </Button>
                    ))}
                </CardBody>
                </Card>
            ))}
            </div>

        </div>
      </div>
      </>
    );
  }
  