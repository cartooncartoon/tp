import Head from 'next/head';
import React from 'react'


export interface BottomNavProps {
    
}
 
const BottomNav: React.SFC<BottomNavProps> = () => {
    return (
        <div className="w-full 
        border-secondary
        items-center
        justify-center
        h-20 bg-primary border-t fixed bottom-0 flex sm:hidden">
            <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossOrigin="anonymous" />
            </Head>
            <ul className="grid justify-items-center grid-cols-4 w-full">
                <li><i className="fas fa-igloo fa-2x text-secondary hover:text-white cursor-pointer"></i></li>
                <li><SearchIcon /></li>
                <li><Avi /></li>
                <li><i className="fas fa-sliders-h fa-2x text-secondary hover:text-white cursor-pointer"></i></li>
            </ul>
        </div>
    );
}



function SearchIcon() {
    return (
      <svg
      className="fill-secondary hover:fill-white cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 508.471 508.471"
    >
      <path
        d="M-11.29 320.766h303.999v93.989H-11.29z"
        transform="rotate(-45 140.654 367.814)"
      ></path>
      <path d="M321.02 120.98l-84.85 84.861 66.46 66.46 84.86-84.85zM149.21 206.521l36.508-66.752 66.752-36.508-66.752-36.508L149.21.001l-36.508 66.752-66.752 36.508 66.752 36.508zM421.21 174.521l30.851-56.41 56.41-30.85-56.41-30.851L421.21 0l-30.851 56.41-56.41 30.851 56.41 30.85zM421.21 232l-30.851 56.41-56.41 30.851 56.41 30.85 30.851 56.41 30.851-56.41 56.41-30.85-56.41-30.851z"></path>
    </svg>
    );
  }

const Avi = () => {
    return (<div className="w-8 h-8 rounded bg-secondary hover:bg-white cursor-pointer">

    </div>
    )
}
 
export default BottomNav;