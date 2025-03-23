import ExperienceCard from "@/components/ExperienceCard";
import { motion } from "framer-motion";
import { useState } from "react";
import LokiMediaCarousel from "@/components/LokiMediaCarousel";
import MediaCarousel from "@/components/MediaCarousel";

export default function Experience() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <section id='experience' className="max-w-4xl w-full flex flex-col mx-auto">
                <motion.h1
                    className="text-center font-bold text-5xl mt-16 -mb-2"
                    initial={{ transform: 'translateY(-30px)', opacity: 0 }}
                    whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
                    viewport={{ amount: 0.1, once: true }}
                >
                    Experience
                </motion.h1>
                <ul className={`flex flex-col pt-6 pb-1 gap-4 overflow-hidden`}>
                    <ExperienceCard
                        url="https://loki.lol/"
                        title="Loki.lol Biolink"
                        fullDescription={[
                            "While running Loki.lol, I've gained extensive experience in developing and deploying websites securely into production. With 3,000+ users, Loki.lol has been a key project where I've honed my skills in both frontend and backend development.",
                        ]}
                        cardImage="/loki.lol icon.webp"
                        cardDescription="While running Loki.lol, I've gained extensive experience in developing and deploying websites securely into production. With 3,000+ users, Loki.lol has been a key project where I've honed my skills in both frontend and backend development."
                        media={[
                            "/loki banenr.gif",
                            "/Loki_vid1.mp4",
                            "/loki pic.jpg"
                        ]}
                        myRole="Founder/Head Developer"
                        timeline="June 2023 - Present"
                        delay={0.1}
                        gradient="bg-gradient-to-br"
                        CarouselComponent={LokiMediaCarousel}
                    />
                </ul>
            </section>
        </>
    );
}
