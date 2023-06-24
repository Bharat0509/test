import About from "@/Components/AboutSection/AboutSection";
import Header from "@/Components/Header/Header";
import HomePage from "@/Components/Home/Home";

import Image from "next/image";

export default function Home() {
    return (
        <main className='Main leading-relaxed'>
            <Header />
            <HomePage />
        </main>
    );
}
