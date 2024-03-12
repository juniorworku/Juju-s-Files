import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { projects } from "../data/fixedData";

export default function Projects() {
  return (
    <>
        <Typography variant="h3" className="m-0 text-gray-700 relative text-4xl font-bold md:text-5xl">PROJECTS</Typography>
        <Typography className="text-lg text-gray-100 font-medium text-center mb-4 font-montserrat md:w-80" variant="h6">Below, you'll find an overview of the various projects i've had the
            privilege to work on thus far:
        </Typography>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((item) =>(
              <Card color="light-green-" className="bg-light-green-300 relative py-1 px-2 rounded-3xl w-97 my-4 shadow-xl">
                  <div key={item.id + 32}>
                    <CardHeader shadow={false} floated={false} className="cursor-pointer max-w-19em p-0.5 flex flex-col justify-between gap-4 rounded-md shadow-md transition-all duration-500 ease-in-out hover:shadow-none">
                      <img 
                        src={item.image}
                        alt="projectImage"
                        className="w-full rounded-md transition-all duration-1500 ease-in-out md:hover:transform md:hover:scale-180" 
                      />
                    </CardHeader>
                    <CardBody>
                      <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        {item.title}
                      </Typography>
                      <div className="flex flex-row gap-3">
                        {item.tags.map((tag) => (
                          <Typography variant="h6" color="blue-gray" className="mb-2">{tag}</Typography>
                        ))}
                      </div>
                      <Typography color="gray" className="mb-8 font-normal">
                        {item.description}
                      </Typography>
                      {item.link && (
                        <a 
                          href={item.link}
                          className="inline-block"
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                          <Button variant="text" className="flex items-center gap-2">
                            Live demo
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                              className="h-4 w-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                              />
                            </svg>
                          </Button>
                        </a>
                      )}
                      
                      <a 
                        href={item.repository}
                        className="inline-block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="text" className="flex items-center gap-2">
                          Go to repository
                          <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                          </svg>
                        </Button>
                      </a>
            
                    </CardBody>
                  </div>
              </Card>
            ))}

          </div>

        </div>
        
    </>
    
  )
}
