import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import '../App.css'

function About() {
    return(
        <div className="px-4 py-8 bg-transparent w-screen m-0 items-center justify-center" id="about">
            <div className="container mx-auto px-4 mt-20 rounded-xl p-10 bg-white m-2 shadow-xl">
                <h1 className="text-center text-2xl mb-5">About Me</h1>
                <p className="text-justify">
                Hello, my name is Alex, and I am currently a Computer Science 
                student currently pursuing a BSc Computer Science (Hons) degree 
                at the University of Plymouth. I have always had a vested interest 
                in computers and software since I was young and have now turned that 
                into studying a topic I love. I always strive to find and learn new 
                programming languages, libraries and frameworks to, not only broaden 
                my skillset, but also to use these new skills to create something unique.
                </p>    

                <Separator orientation="horizontal" className="my-4" />

                <div>
                    <span className="text-2xl mb-5 block">Skills</span>

                    <div className="grid grid-cols-2 gap-4 mb-10 mx-auto px-4">
                        {/* Frontend Column */}
                        <div className="container mx-auto rounded-xl border-1 shadow-md p-4">
                            <span className="text-xl mb-2 block">Frontend</span>
                            <div className="flex flex-wrap gap-2">
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>HTML</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>CSS</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>JavaScript</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>TypeScript</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>React</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>Tailwind CSS</span>
                                </div>
                            </div>
                        </div>

                        {/* Backend Column */}
                        <div className="container mx-auto rounded-xl border-1 shadow-md p-4">
                            <span className="text-xl mb-2 block">Backend</span>
                            <div className="flex flex-wrap gap-2">
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>Express.JS</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>Flask</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>SQL</span>
                                </div>
                            </div>
                        </div>

                        {/* Tools Column */}
                        <div className="container mx-auto rounded-xl border-1 shadow-md p-4">
                            <span className="text-xl mb-2 block">Development Tools</span>
                            <div className="flex flex-wrap gap-2">
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>Git</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>GitHub</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>Docker</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>Vite</span>
                                </div>
                                <div className="rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground flex items-center gap-1.5">
                                    <span>REST APIs</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <Separator orientation="horizontal" className="my-4" />


                <h1 className="text-center text-2xl mb-5">Curriculum Vitae</h1>
                <div className="container mx-auto px-4 flex justify-center">
                    <Button variant="secondary" asChild>
                        <a href="https://alexedwa1.tiiny.site" target="_blank">CV</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default About;