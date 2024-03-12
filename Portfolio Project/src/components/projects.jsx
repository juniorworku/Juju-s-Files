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
    <div className="flex flex-col p-0 md:p-4 items-center justify-center mb-8 z-2">
      <div className="flex flex-col flex-wrap items-center justify-center gap-1">
        <Typography variant="h3" className="m-0 text-gray-700 relative text-4xl font-bold md:text-5xl">PROJECTS</Typography>
        <Typography className="text-lg text-gray-100 font-medium text-center mb-4 font-montserrat md:w-80" variant="h6">Below, you'll find an overview of the various projects i've had the
            privilege to work on thus far:
        </Typography>

        <Card className="w-full max-w-[48rem] flex-row">
          {projects.map((item) =>(
            <div key={item.id + 32}>
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img 
                  src={item.image}
                  alt="projectImage"
                  className="h-full w-full object-cover" 
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                  {item.title}
                </Typography>
                <Button>
                  {item.tags.map((tag) => (
                    <Typography variant="h4" color="blue-gray" className="mb-2">{tag}</Typography>
                  ))}
                </Button>
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
                  ref="noopener noreferrer"
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
            
          ))}
          
        </Card>
        
      </div>

    </div>
    
  )
}
