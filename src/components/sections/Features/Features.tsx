import Container from "@/layout/Container";

import styles from "./Features.module.css";
import Image from "next/image";

interface FeatureProps {
  title: string;
  paragraph: string;
  imageSrc: string;
}

const Feature: React.FC<FeatureProps> = ({ title, paragraph, imageSrc }) => (
  <div>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.paragraph}>{paragraph}</p>
    <Image alt="" src={imageSrc} className={styles.image} />
  </div>
);

const Features: React.FC = () => {
  const featuresData = [
    {
      title: "Best Feature Lorem",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt ",
      imageSrc: "",
    },
    {
      title: "Two Ipsum Feature",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt ",
      imageSrc: "",
    },
    {
      title: "Feature of Lorem",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat incidunt ",
      imageSrc: "",
    },
  ];

  return (
    <section>
      <div>
        <Container>
          <div className={styles.featuresContainer}>
            {featuresData.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                paragraph={feature.paragraph}
                imageSrc={feature.imageSrc}
              />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Features;
