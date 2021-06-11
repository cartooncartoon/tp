import React from 'react'

export interface PotProps {
    
}
 
const Pot: React.SFC<PotProps> = () => {
    return (
        <div className="p-6 grid grid-cols-12 w-full space-between">
           <div className="group relative max-w-lg sm:pb-6 col-span-4">
        <div className="w-full border-secondary
        h-72
        relative
        overflow-hidden
        border-b sm:border">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <h1 className="text-6xl font-bold">$100</h1>
                <p>Fee: $250</p>
            </div>
        </div>
        <div className="p-10 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas mr-2 fa-dice-two"></i>Select A Game
        </div>
        <div className="p-10 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas fa-award mr-2"></i>Tournament
        </div>
        <div className="p-10 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas fa-hat-wizard mr-2"></i> Join
        </div>
        </div> 
        <div className="mx-auto w-full col-span-6 col-start-6">
            <div className="border border-secondary w-full p-12"></div>
            <div className="border border-secondary w-full p-12"></div>
            <div className="border border-secondary w-full p-12"></div>
            <div className="border border-secondary w-full p-12"></div>
        </div>
        </div>
    );
}
 
export default Pot;