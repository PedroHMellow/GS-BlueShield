import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { FaGithubSquare } from "react-icons/fa";


function Contatos () {
    return (
        <>
            <section className="bg-Azul_Fiap w-full h-screen">
                <Header /> 

                <div className="flex p-24">
                    <h1 className="text-white text-5xl"> Contatos </h1>
                </div>

                <div className="grid grid-cols-3 grid-rows-1 ">

                    <div className="bg-white m-3 border-2 border-black rounded-lg border-solid	scale-1 hover:scale-110 drop-shadow-lg">
                        <div className="flex justify-center pt-4 ">
                            <img src="/public/undraw_pic_profile_re_7g2h (3).svg" alt="" className="w-40 h-40 drop-shadow-lg"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <div className="flex justify-center">
                                <p className="pl-2 text-2xl	text-Azul_Fiap"> Gustavo Gouvêa Soares </p> 
                            </div>
                            <div className="flex pt-5 text-xl">
                                <span className="font-bold"> RM: </span>
                                <p className="pl-2"> 553842 </p> 
                            </div>
                            <div className="flex hover:text-Azul_Fiap2 items-center text-xl">
                                <FaGithubSquare />
                                <span className="font-bold"> Github: </span>
                                <a href="https://github.com/OlaMeusAmigues"><p className="pl-2"> GustavoG </p></a> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white m-3 border-2 border-black rounded-lg border-solid	scale-1 hover:scale-110 drop-shadow-lg">
                        <div className="flex justify-center pt-4 ">
                            <img src="/public/undraw_pic_profile_re_7g2h (2).svg" alt="" className="w-40 h-40 drop-shadow-lg"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <div className="flex justify-center">
                                <p className="pl-2 text-2xl	text-Azul_Fiap"> Henrique Rafael Gomes de Souza </p> 
                            </div>
                            <div className="flex pt-5 text-xl">
                                <span className="font-bold"> RM: </span>
                                <p className="pl-2"> 553945 </p> 
                            </div>
                            <div className="flex hover:text-Azul_Fiap2 items-center text-xl">
                                <FaGithubSquare />
                                <span className="font-bold"> Github: </span>
                                <a href="https://github.com/HenriqueRafaell"><p className="pl-2"> Henrique Rafael </p></a> 
                            </div>
                        </div>
                    </div>

                    <div className="bg-white m-3 border-2 border-black rounded-lg border-solid	scale-1 hover:scale-110 drop-shadow-lg">
                        <div className="flex justify-center pt-4 ">
                            <img src="/public/undraw_pic_profile_re_7g2h (1).svg" alt="" className="w-40 h-40 drop-shadow-lg"/>
                        </div>
                        <div className="flex flex-col p-4">
                            <div className="flex justify-center">
                                <p className="pl-2 text-2xl	text-Azul_Fiap"> Pedro Henrique Mello Silva Alves </p> 
                            </div>
                            <div className="flex pt-5 text-xl">
                                <span className="font-bold"> RM: </span>
                                <p className="pl-2"> 554223 </p> 
                            </div>
                            <div className="flex hover:text-Azul_Fiap2 items-center text-xl">
                                <FaGithubSquare />
                                <span className="font-bold"> Github: </span>
                                <a href="https://github.com/PedroHMellow"><p className="pl-2"> PedroHMellow </p></a> 
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="pt-5"></div>
                
                <Footer />
            </section>
        </>
    )
} 

export default Contatos