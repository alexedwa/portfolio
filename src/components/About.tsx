import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function About() {
    return(
        <div className="px-4 py-8 bg-gray-100 w-screen m-0 items-center justify-center" id="about">
            <div className="container mx-auto px-4 rounded-sm p-10 bg-gray-200 m-2 shadow-md hover:shadow-xs transition-shadow duration-300">
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