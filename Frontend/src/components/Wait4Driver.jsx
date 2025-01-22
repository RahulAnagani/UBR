import { FaMapPin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
const Wait4Driver=(props)=>{{
    return (
         <div className="flex flex-col w-full bg-white">
                    <div className="relative w-full h-[20] p-3">
                        <div className="flex flex-col bg-white justify-center items-center">
                        <div className="w-[10%] bg-gray-200 h-1 rounded-full"> 
                        </div>
                    </div>
                    </div>
                    <div className="w-full h-[10%]  flex  justify-between items-center bg-white">
                        <img className="object-contain w-1/3" src={`${props.vehicle}${props.vehicle==="car"?".png":".webp"}`}></img>
                        <div className="p-3">
                        <h1 className="text-xl font-semibold my-1">Rahul</h1>
                        <h1 className="text-xl font-semibold my-1">AP16TG1234</h1>
                        <h1 className="text-md text-gray-500 font-normal my-1">Maruti suziki alto</h1>
                        </div>
                    </div>
                    <div className="w-full  h-[60%] bg-white">
                        <div className=" w-[100%] mb-4 h-0.5 bg-gray-200">
                        </div>
                        <div className="flex flex-col p-0">
                            <div className="flex m-1 gap-5 justify-start items-center">
                            <FaMapPin />
                                <div className="flex flex-col border-b-2 w-full pb-1">
                                    <h1 className="text-l font-semibold">562/11-A</h1>
                                    <p className="text-gray-400">Kaikondrahalli, Bengalurur, Karnataka</p>
                                </div>
                            </div>
        
                            <div className="flex m-1 gap-5 justify-start items-center">
                            <FaLocationArrow/>
                                <div className="flex flex-col w-full border-b-2 pb-1">
                                    <h1 className="text-l font-semibold">Third Wave Coffee</h1>
                                    <p className="text-gray-400">17th Cross Rd, PWD Quaters, 1st Sector, HSR Layout, Bengaluru, Bengaluru, Karnataka</p>
                                </div>
                            </div>
        
                            <div className="flex m-1 gap-5 justify-start items-center">
                            <FaWallet />
                                <div className="flex flex-col w-full border-b-2 pb-1">
                                    <h1 className="text-l font-semibold">562.11</h1>
                                    <p className="text-gray-400">Cash</p>
                                </div>
                            </div>
                            <div className="flex m-3 gap-5 justify-center   items-center">
                            </div>
        
                        </div>
                    </div>
                </div>
    )
}}

export default Wait4Driver;