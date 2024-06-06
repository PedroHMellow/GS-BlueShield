import { MdContacts } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";



function Footer () {
    return (
        <>
            <section className="bg-Azul_Fiap  min-w-full min-h-full">

                <div className="flex flex-col md:flex-row justify-around pt-5">
                    <div className="flex flex-col justify-center items-center ">
                        <img src="/public/ODS14.jpg" alt=""  className="w-20 h-20"/>
                        <p className="text-white text-justify w-96 p-5 "> 
                            ODS 14 Objetivo: Conservar e promover o uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável 
                        </p>
                    </div>
                <div>
                    <div className="flex flex-col">

                        <div className="text-Azul_ODS14 text-7xl flex justify-center"> <MdContacts /> </div>
                        
                        <div className="pt-5 flex flex-col justify-center ">
                            
                            <a href="https://github.com/PedroHMellow/GS-BlueShield.git">
                                <div className="flex justify-center items-center text-2xl text-white hover:text-Azul_Fiap2 cursor-pointer">
                                    <samp className="text-2xl text-white  hover:text-Azul_Fiap2 cursor-pointer pr-3"> 
                                        Github 
                                    </samp> 
                                    <FaGithubSquare /> 
                                </div>
                            </a>
                            <div className="flex justify-center items-center text-2xl text-white hover:text-Azul_Fiap2 cursor-pointer">
                               <samp className="text-2xl text-white  hover:text-Azul_Fiap2 cursor-pointer pr-3"> 
                                 Youtube 
                               </samp> 
                               <FaYoutubeSquare />
                            </div>

                        </div>

                    </div>
                </div>
            </div> 
            
            </section>

            <div className=" bg-Azul_Fiap2 text-black text-xs flex justify-center font-sans md:p-5 text-center min-h-full h-auto">
                ® Global Solution 2: Projeto concluído em 2024
            </div>

        </>
    )
}

export default Footer 