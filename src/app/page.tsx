import About from "@/Components/AboutSection/AboutSection";
import Header from "@/Components/Header/Header";
import HomePage from "@/Components/Home/Home";

import Image from "next/image";

export default function Home() {
    return (
        <main className='Main'>
            <h1 className='text-4xl bg-red-600'>Hello workd</h1>

            <HomePage />
        </main>
    );
}
