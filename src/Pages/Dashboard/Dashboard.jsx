import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"


function Dashboard () {
    return (
        <>
            <section style={{backgroundImage: "url('Banner.png')"}} className="min-w-full">
                <Header /> 

                <div className="flex p-24">
                    <h1 className="text-white text-5xl"> Dashboard </h1>
                </div>
                
                <div className="p-12"></div>
                
                <Footer />
            </section>
        </>
    )
}

export default Dashboard