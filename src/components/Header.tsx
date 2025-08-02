import { Separator } from "@/components/ui/separator";

function Header() {

    return(
        <header className="sticky top-0 z-1 border-2 border-b-gray-300 bg-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">Alexander Edwards</span>
                    </div>
                    <nav className="hidden md:flex item-center space-x-3">
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm">About me</a>
                        <Separator orientation="vertical"/>
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm">Projects</a>
                        <Separator orientation="vertical" />
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm">Contact</a>
                        <Separator orientation="vertical" />
                        <a className="hover:bg-gray-300 transition-colors p-1 rounded-sm">GitHub</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;