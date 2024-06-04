import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


function Dashboard () {
    return (
        <>
            <section className="bg-Azul_Fiap w-full h-screen">
                <Header /> 

                <div className="flex p-24">
                    <h1 className="text-white text-5xl"> Dashboard </h1>
                </div>
                
                <Footer />
            </section>
        </>
    )
}

export default Dashboard