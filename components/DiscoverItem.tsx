import Image from 'next/image';
import React from 'react'

export interface DiscoverItemProps {
    val: any;
}
 
const DiscoverItem: React.SFC<DiscoverItemProps> = ({val}) => {
    return (
        <div className="group relative cursor-pointer transform transition duration-300 sm:hover:scale-105 ">
        <div className="w-full border-secondary
        h-72
        relative
        overflow-hidden
        border-b sm:border">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10 bg-primary w-full h-full opacity-75">
            </div>
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center flex-col">
                <h1 className="text-6xl font-bold">100</h1>
                <p>Fee: 55</p>
            </div>
        <img 
        className="w-full h-full object-cover" src={val.img} />
        </div>
        <div className="p-8 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas mr-2 fa-dice-two"></i>{val.name} (PS4)
        </div>
        <div className="p-8 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas fa-award mr-2"></i>Tournament
        </div>
        </div>
    );
}
 
export default DiscoverItem;