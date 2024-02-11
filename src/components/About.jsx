export const About = ({tech})=> {

    return (
        <>
        <div className="flex justify-center mt-60">
        <div className="grid grid-cols-1 text-3xl ">
        <div > Hi, I'm <span className="font-bold"> Rishabh Rai.</span> </div>
        <div className="mt-2">I build <span className="font-bold">{tech}</span> stuff.</div>
        <div className="mt-2">Connect on <a href='https://twitter.com/rishabhtwtsX'><span className="font-bold underline" >Twitter </span></a>&<a href='https://github.com/rishabhknowss'><span className="font-bold underline"> Github</span></a></div>
        </div>
        </div>
        </>
    )
        
}