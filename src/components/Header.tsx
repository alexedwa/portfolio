import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from "@/components/ui/dropdown-menu" 
import { motion, useScroll } from 'motion/react';

function Header() {
    const { scrollYProgress } = useScroll();

    return(
        <header>
            <div className="fixed w-screen top-0 z-1 border-2 border-b-gray-300 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-foreground">Alexander Edwards</span>
                        </div>

                        {/* Desktop menu buttons */}
                        <nav className="hidden md:flex item-center space-x-3">
                            <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm" href="#about">About Me</a>
                            <Separator orientation="vertical" className="mx-2" />
                            <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm" href="#projects">Projects</a>
                            <Separator orientation="vertical" className="mx-2" />
                            <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm" href="mailto:alexedwa123@gmail.com">Contact</a>
                            <Separator orientation="vertical" className="mx-2" />
                            <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm" href="https://github.com/alexedwa" target="_blank">GitHub</a>
                        </nav>

                        {/* Mobile dropdown menu */}
                        <nav className="block md:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger>☰</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem><a href="#about">About Me</a></DropdownMenuItem>
                                    <DropdownMenuItem><a href="#projects">Projects</a></DropdownMenuItem>
                                    <DropdownMenuItem><a href="mailto:alexedwa123@gmail.com">Contacts</a></DropdownMenuItem>
                                    <DropdownMenuItem><a href="https://github.com/alexedwa" target="_blank">GitHub</a></DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </nav>
                    </div>
                </div>
                {/* Progress bar */}
                    <motion.div className="fixed w-screen"
                        style={{
                            scaleX: scrollYProgress,
                            position: "fixed",
                            top: 68,
                            left: 0,
                            right: 0,
                            height: 10,
                            originX: 0,
                            backgroundColor: "#71717A"
                        }}>     
                </motion.div>
            </div>
        </header>
    )
}

export default Header;