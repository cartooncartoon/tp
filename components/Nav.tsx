import React from 'react'


export interface NavProps {
    
}
 

const Nav: React.SFC<NavProps> = () => {
    return (
    <div className="flex w-full flex-end sticky top-0 bg-primary z-30 justify-end sm:px-6 sm:mt-6">
    <div className="py-4 px-4 sm:px-0 flex sm:grid grid-cols-3 sm:gap-4 max-w-4xl sm:max-w-2xl w-full">
        <NavItem className="h-14 border w-1/2 sm:w-full flex items-center mr-4 border-secondary justify-center transform transition duration-300 sm:hover:scale-95 cursor-pointer"><i className="fas mr-2 fa-dice-two"></i>Game</NavItem>
        <NavItem className="h-14 border hidden sm:flex items-center border-secondary justify-center transform transition duration-300 sm:hover:scale-95 cursor-pointer"><i className="fas fa-folder mr-2"></i>Type</NavItem>
        <NavItem className="h-14 border w-1/2 sm:w-full flex items-center border-secondary justify-center transform transition duration-300 sm:hover:scale-95 cursor-pointer"><i className="fas fa-sliders-h text-white cursor-pointer mr-2"></i>Filter</NavItem>
    </div>
    </div>);
}

export interface NavItemProps {
    className?: string;
}
 
const NavItem: React.SFC<NavItemProps> = ({ children, className }) => {
    return (
    <div className={className}>
        {children}
    </div>);
}
 
export default Nav;