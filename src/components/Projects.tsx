import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "./ui/card";
import GitStory from "../assets/git-story.jpg";
import EA from "../assets/EA_Dashboard.jpg";

function Projects() {
    return (
        <div className="px-4 py-8 bg-transparent w-screen m-0" id="projects">
            <div className="mt-20 items-center justify-center">
                <div className="container mx-auto px-4 rounded-sm p-10 bg-gray-200 m-2 shadow-md hover:shadow-xs transition-shadow duration-300">
                    <h1 className="text-center text-2xl mb-5">Projects</h1>
                    <p className="text-center mb-2">
                        Below are some personal projects that I have worked on,
                        most projects can be accessed on GitHub by clicking on
                        the respective images.
                    </p>
                    <div className="mx-auto px-4 mb-10">
                        <Card>
                            <CardHeader>
                                <CardTitle>Evolutionary Algorithm Dashboard</CardTitle>
                                <CardDescription>
                                    The Evolutionary Algorithm (EA) Dashboard was a project that allowed
                                    for users to visualise how different EAs tackle different test problems in real
                                    time. This project also allowed users to edit the different parameters for
                                    each algorithm to see how each would differ. This project was created in a team 
                                    where I had used Flask as it's backend framework along with the Pymoo library
                                </CardDescription>
                                <CardContent>
                                    <div className="flex justify-center items-center pt-5">
                                        <img src={EA} className="w-auto h-auto" alt="EA Dashboard homepage"/>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                    <div className="mx-auto px-4 mb-10">
                        <Card>
                            <CardHeader>
                                <CardTitle>Git Story</CardTitle>
                                <CardDescription>
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
                                        <img src={GitStory} className="w-auto h-auto" alt="Git Story homepage"/></a>
                                    </div>
                                </CardContent>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;