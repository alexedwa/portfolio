import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "./ui/card";
import { motion } from "motion/react";
import GitStory from "../assets/git-story.jpg";
import EA from "../assets/EA_Dashboard.jpg";
import Portfolio from "../assets/portfolio.jpg";


function Projects() {

    
    return (
        <motion.div className="px-4 py-8 bg-transparent w-screen m-0" id="projects"
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}>
            <div className="mt-20 items-center justify-center">
                <div className="container mx-auto px-4 rounded-xl p-10 bg-white m-2 shadow-xl">
                    <h1 className="text-center text-2xl mb-5">Projects</h1>
                    <p className="text-center mb-2">
                        Below are some personal projects that I have worked on,
                        most projects can be accessed on GitHub by clicking on
                        the respective images.
                    </p>
                    {/*EA Dashboard*/}
                    <div className="mx-auto px-4 mb-10">
                        <Card>
                            <CardHeader>
                                <CardTitle>Evolutionary Algorithm Dashboard</CardTitle>
                                <CardDescription className="text-justify">
                                    The Evolutionary Algorithm (EA) Dashboard was a project that allowed
                                    for users to visualise how different EAs tackle different test problems in real
                                    time. This project also allowed users to edit the different parameters for
                                    each algorithm to see how each would differ. This project was created in a team 
                                    where I had used Flask as it's backend framework along with the Pymoo library
                                </CardDescription>
                                <CardContent>
                                    <div className="flex justify-center items-center pt-5">
                                        <img src={EA} className="w-auto h-auto aspect-video" alt="EA Dashboard homepage" loading="lazy"/>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                    {/*Git Story*/}
                    <div className="mx-auto px-4 mb-10">
                        <Card>
                            <CardHeader>
                                <CardTitle>Git Story</CardTitle>
                                <CardDescription className="text-justify">
                                    The Git Story project was a personal project that I created to
                                    visualise the history of my GitHub repositories. The project uses the GitHub API
                                    to fetch the data and then displays it in a timeline format. In addition to this, 
                                    the project also sanitises the data to remove any redundant information and reduce
                                    data the overall data being parsed to the frontend. This project was created using
                                    React and JavaScript for the frontend, with a ExpressJS backend to handle the API requests.
                                </CardDescription>
                                <CardContent>
                                    <div className="flex justify-center items-center pt-5">
                                        <a href="https://github.com/alexedwa/git-story">
                                        <img src={GitStory} className="w-auto h-auto aspect-video" alt="Git Story homepage" loading="lazy"/></a>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                    {/*Portfolio*/}
                    <div className="mx-auto px-4 mb-10">
                        <Card>
                            <CardHeader>
                                <CardTitle>My Portfolio</CardTitle>
                                <CardDescription className="text-justify">
                                    My portfolio website is a personal project that I created to showcase my skills and projects.
                                    The website is built using the Vite frontend framework along with the React UI library
                                    and Tailwind CSS for styling. I also utilised the Shadcn UI library to create a consistent
                                    design throughout the website. The website is fully responsive and can be viewed on any device.
                                </CardDescription>
                                <CardContent>
                                    <div className="flex justify-center items-center pt-5">
                                        <a href="https://alexedwa.github.io/portfolio/" target="_blank">
                                        <img src={Portfolio} className="w-auto h-auto aspect-video" alt="Portfolio" loading="lazy"/></a>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;