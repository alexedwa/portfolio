import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from "@/components/ui/dropdown-menu" 

function Header() {

    return(
        <header className="fixed w-screen top-0 z-1 border-2 border-b-gray-300 bg-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">Alexander Edwards</span>
                    </div>

                    {/* Desktop menu buttons */}
                    <nav className="hidden md:flex item-center space-x-3">
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm">About Me</a>
                        <Separator orientation="vertical"/>
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm">Projects</a>
                        <Separator orientation="vertical" />
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm">Contact</a>
                        <Separator orientation="vertical" />
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm" href="https://github.com/alexedwa" target="_blank">GitHub</a>
                    </nav>

                    {/* Mobile dropdown menu */}
                    <nav className="block md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger>☰</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem><a>About Me</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Projects</a></DropdownMenuItem>
                                <DropdownMenuItem><a>Contacts</a></DropdownMenuItem>
                                <DropdownMenuItem><a href="https://github.com/alexedwa" target="_blank">GitHub</a></DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;