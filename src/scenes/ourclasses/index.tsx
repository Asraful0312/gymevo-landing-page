import { ClassType, SelectedPage } from "@/utils/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Title from "@/shared/Title";
import Class from "./Class";

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const classes: Array<ClassType> = [
  {
    title: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, asperiores, magni numquam aut, officiis dicta consequatur quas sunt sint explicabo beatae minus doloribus neque eius autem cum. Beatae, ipsum distinctio?",
    image: image1,
  },
  {
    title: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, asperiores, magni numquam aut, officiis dicta consequatur quas sunt sint explicabo beatae minus doloribus neque eius autem cum. Beatae, ipsum distinctio?",
    image: image2,
  },
  {
    title: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, asperiores, magni numquam aut, officiis dicta consequatur quas sunt sint explicabo beatae minus doloribus neque eius autem cum. Beatae, ipsum distinctio?",
    image: image3,
  },
  {
    title: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, asperiores, magni numquam aut, officiis dicta consequatur quas sunt sint explicabo beatae minus doloribus neque eius autem cum. Beatae, ipsum distinctio?",
    image: image4,
  },
  {
    title: "Fitness Classes",

    image: image5,
  },
  {
    title: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, asperiores, magni numquam aut, officiis dicta consequatur quas sunt sint explicabo beatae minus doloribus neque eius autem cum. Beatae, ipsum distinctio?",
    image: image6,
  },
];

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="bg-primary-100 py-20">
      <motion.div
        className="mx-auto w-full max-w-6xl px-6"
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="min-h-full w-full max-w-5xl px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Title>OUR CLASSES</Title>
            <p className="my-5 text-sm">
              Eu ipsum id egestas risus tempus enim semper felis quis. Nec
              consectetur ac venenatis facilisi est. Eget ac turpis id.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((c: ClassType, i) => (
              <Class
                key={c.title + i}
                title={c.title}
                description={c.description}
                image={c.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
