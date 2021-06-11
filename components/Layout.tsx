import Head from 'next/head';
import React from 'react'
import BottomNav from './BottomNav';
import Create from './Create';
import Footer from './Footer';
import Header from './Header'

export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = ({ children }) => {
    const [create, setCreate] = React.useState(false);

    return (
        <div className="bg-primary text-white font-pop">
            <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>
            {create && <Create setCreate={setCreate}/>}
            <Header setCreate={setCreate}/>
            {children}
            <BottomNav />
            <Footer />
        </div>
    );
}
 
export default Layout;