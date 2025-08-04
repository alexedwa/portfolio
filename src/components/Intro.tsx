import { motion } from 'motion/react';

function Intro() {

    return(
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-svh w-screen flex items-center justify-center bg-transparent">
            <div className="rounded-sm p-10 bg-gray-200 m-2 shadow-md hover:shadow-xs transition-shadow duration-300">
                <p className="text-2g">Hello, I am Alex and welcome to my website!</p>
            </div>
        </motion.div>
    )
}

export default Intro;