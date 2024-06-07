import { useState } from 'react';
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

function Dashboard() {
    const [coordinates, setCoordinates] = useState(null);

    const handleCoordinatesClick = () => {
        const latitude = 28.7041;
        const longitude = -74.0125;
        const temperature = "22°C";
        const ph = "8.1";
        setCoordinates({ latitude, longitude, temperature, ph });
    };

    return (
        <>
            <section style={{backgroundImage: "url('Banner.png')"}} className="min-w-full">
                <Header /> 

                <div className="flex p-24">
                    <h1 className="text-white text-5xl"> Dashboard </h1>
                </div>

                <div className="flex p-12">
                    <a href="https://www.google.com/maps/@28.7041,-74.0125,4z" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                            Mapa
                        </button>
                    </a>
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={handleCoordinatesClick}
                    >
                        Coordenadas
                    </button>
                </div>

                {coordinates && (
                    <div className="p-12">
                        <p className="text-lg text-white mb-4">
                            As informações abaixo representam as coordenadas geográficas do local,
                            junto com dados de temperatura e pH da água, essenciais para análises ambientais,
                            para que assim possamos indentificar areas que estao muito prejudicadas e assim
                            tomas as medidas possiveis.
                        </p>
                        <table className="w-full">
                            <thead className="bg-blue-700">
                                <tr>
                                    <th className="px-4 py-2 text-white">Descrição</th>
                                    <th className="px-4 py-2 text-white">Valor</th>
                                </tr>
                            </thead>
                            <tbody className="bg-blue-500 text-white">
                                <tr>
                                    <td className="border px-4 py-2">Latitude</td>
                                    <td className="border px-4 py-2">{coordinates.latitude}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Longitude</td>
                                    <td className="border px-4 py-2">{coordinates.longitude}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Temperatura</td>
                                    <td className="border px-4 py-2">{coordinates.temperature}</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">pH da Água</td>
                                    <td className="border px-4 py-2">{coordinates.ph}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                
                <Footer />
            </section>
        </>
    );
}

export default Dashboard;
