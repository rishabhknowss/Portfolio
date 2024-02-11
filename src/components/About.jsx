import { Navbar } from "./Navbar"
import { useState, useEffect } from 'react';

export const About = ()=> {

    const techList = ["Web3", "AI", "Real-Time"];
    const [techIndex, setTechIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTechIndex((prevIndex) => (prevIndex + 1) % techList.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    const currentTech = techList[techIndex];

    return (
        <>
        <Navbar></Navbar>
        <div className="flex justify-center mt-60">
        <div className="grid grid-cols-1 text-3xl ">
        <div > Hi, I'm <span className="font-bold"> Rishabh Rai.</span> </div>
        <div className="mt-2">I build <span className="font-bold">{currentTech}</span> stuff.</div>
        <div className="mt-2">Connect on <a href='https://twitter.com/rishabhtwtsX'><span className="font-bold underline" >Twitter </span></a>&<a href='https://github.com/rishabhknowss'><span className="font-bold underline"> Github</span></a></div>
        </div>
        </div>
        </>
    )
        
}