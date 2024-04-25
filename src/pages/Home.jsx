import "./Home.css";
import Spotlight from "../components/Spotlight";
import Card from "../components/Card";

export default function Home() {
    return (
        <>
            <div className="h-screen pt-20 overflow-hidden">
                <div className="h-96 w-screen">
                    <div className="h-16 text-2xl font-medium p-4">Spotlight</div>
                    <div className="h-80 flex flex-wrap overflow-scroll">
                        <div className="w-1/3 h-full text-7xl p-8">It's time for ANIME</div>
                        <div className="h-72 w-2/3 flex flex-wrap flex-col justify-center">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}