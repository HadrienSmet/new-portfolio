import Image from "next/image";
import splashInk from "../public/images/7468.jpg";

export default async function Home() {
    return (
        <main className="home-page">
            <section className="home-page__section-intro">
                <Image
                    height={2700}
                    width={2700}
                    alt="Splash of ink"
                    src={splashInk}
                />
                <h1>
                    Hadrien Smet <br />
                    <span>Web developer</span>
                </h1>
            </section>
        </main>
    );
}
