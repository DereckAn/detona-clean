import Navbar from "@/components/shared/navbar";
import { ReactNode } from "react";
import Footer from "../../components/shared/footer";

const MainLayout = ({children} : {children:ReactNode}) => {
    return ( 
        <div>
           <Navbar/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default MainLayout;