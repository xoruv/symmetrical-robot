import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  //set to true by default for now because there aren't enough projects to warrant a show more button
  const [showAll, setShowAll] = useState(true);

  return (
    <>
      <section id='projects' className="max-w-4xl w-full flex flex-col mx-auto">
        <motion.h1
          className="text-center font-bold text-5xl mt-16 -mb-2"
          initial={{ transform: 'translateY(-30px)', opacity: 0 }}
          whileInView={{ transform: 'translateY(0px)', opacity: 100 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.39, 0.21, 0.12, 0.96], }}
          viewport={{ amount: 0.1, once: true }}
        >
          Other Projects
        </motion.h1>
        <ul className={`${showAll ? '' : 'max-h-[100rem]'} grid md:grid-cols-2 pt-6 pb-1 grid-cols-1 gap-8 overflow-hidden`}>
          {!showAll &&
            <div className="absolute flex justify-center bottom-[5rem] z-10 bg-gradient-to-t from-background pb-8 pt-32 max-w-4xl w-full">
              <Button label="Show More" onClick={() => setShowAll(true)} width="w-[10rem]" />
            </div>
          }
          <ProjectCard
            url="https://rokarts.xyz/"
            title="Ro-Karts Website"
            fullDescription={[
              "Ro-Karts is a mario kart inspired game coming soon to roblox, with diffrent animes in it, like Solo leveling, Dragon ball Z, spoongbob and more!",
            ]}
            cardImage="/Ro-Karts.png"
            cardDescription="Ro-Karts is a mario kart inspired game coming soon to roblox, with diffrent animes in it, like Solo leveling, Dragon ball Z, spoongbob and more!"
            media={[
              "/sneak1 (1).mp4",
              "/winter map.mp4"
            ]}
            myRole="Frontend & Backend Developer/Designer"
            timeline="March 2025 - Present"
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
          <ProjectCard
            url="https://divinetower.xyz/"
            title="Tower of Divinity"
            fullDescription={[
              "Tower of Divinity is a high-stakes progression game where players climb the Tower, face unique challenges, and compete in a dynamic PvP world. With permadeath mechanics, powerful Rankers, and an evolving world, only the strongest will survive and ascend.",
            ]}
            cardImage="/CXAP_DIVINITY_LOGO_no_bg.webp"
            cardDescription="Tower of Divinity is a high-stakes progression game where players climb the Tower, face unique challenges, and compete in a dynamic PvP world. With permadeath mechanics, powerful Rankers, and an evolving world, only the strongest will survive and ascend."
            media={[
              "/CXAP_DIVINITY_LOGO_no_bg.webp",
              "/image.webp",
              "/image123.webp"
            ]}
            myRole="Project Lead"
            timeline="February 2025 - Present"
            delay={0.2}
            gradient="bg-gradient-to-t"
          />
          <ProjectCard
            title="Sentinel"
            fullDescription={[
              "Sentinel is a discord moderation bot focused on serving smaller, tight-knit communities - the kind where everyone knows each other. While we may expand in the future, our priority is providing the best possible experience for these close-knit servers!",
            ]}
            cardImage="/image12121.webp"
            cardDescription="Sentinel is a discord moderation bot focused on serving smaller, tight-knit communities - the kind where everyone knows each other. While we may expand in the future, our priority is providing the best possible experience for these close-knit servers!"
            media={[
              "/image12121.webp",
              "/image12222.webp",
              "/imageyes.webp"
            ]}
            myRole="Founder & Head Developer"
            timeline="March 2025 - Present"
            delay={0.1}
            gradient="bg-gradient-to-t"
          />
        </ul>
      </section>
    </>
  );
}
