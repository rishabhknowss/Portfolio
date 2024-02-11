import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{
    const navigate = useNavigate();
    return (
        <>
        <div className="flex rounded-md shadow-md bg-white p-5 text-2xl">
            <div className="rounded-full overflow-hidden h-12 w-12 mr-4"><img src="src/assets/pfp.png"></img></div>
            <div className="font-medium m-4 cursor-pointer" onClick={()=>{navigate('/')}}>About</div>
            <div className="font-medium m-4 cursor-pointer" onClick={()=>{navigate('/hackathons')}}>Hackathons</div>
            <div className="font-medium m-4 cursor-pointer" onClick={()=>{navigate('/projects')}}>Projects</div>
        </div>
        
        </>
    )
}