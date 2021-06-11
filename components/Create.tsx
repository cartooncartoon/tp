import React from 'react'

export interface CreateProps {
    setCreate: React.Dispatch<React.SetStateAction<boolean>>,
}
 
const Create: React.SFC<CreateProps> = ({ setCreate }) => {
    const [amt, setAmt] = React.useState<any>('0');

    return (
        <div
        onClick={() => setCreate(false)} 
        className="w-screen h-screen bg-primary fixed top-0 left-0 z-50 p-6 animate-fade-in grid grid-cols-12 items-center justify-center">
            <div className="group relative max-w-lg animate-fade-in-up col-span-4 col-start-5">
        <div className="w-full border-secondary
        h-72
        
        relative
        overflow-hidden
        border-b sm:border">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <input
                onChange={e => setAmt(e.target.value)} 
                placeholder="0"
                className="text-6xl font-bold bg-transparent font-inherit appearance-none max-w-md text-center" />
                <p>Fee: {amt * .55}</p>
            </div>
        </div>
        <div className="p-10 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas mr-2 fa-dice-two"></i>Select A Game
        </div>
        <div className="p-10 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas fa-award mr-2"></i>Tournament
        </div>
        <div className="p-10 w-full flex items-center justify-center border-b border-secondary sm:border-r sm:border-l">
        <i className="fas fa-award mr-2"></i>Challenge
        </div>
        </div>
        </div>
    );
}
 
export default Create;