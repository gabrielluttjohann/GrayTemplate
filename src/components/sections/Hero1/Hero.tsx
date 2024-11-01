import React from "react";
import VideoButton from "@/components/commons/VideoButton/VideoButton";
import styles from "./Hero.module.css";
import Container from "@/layout/Container";
import { FaPlay } from "react-icons/fa";
import Button from "@/components/commons/Button/Button";

const Hero: React.FC = () => {
  const handleVideoClick = () => {
    console.log("Botão de vídeo clicado!");
    // Aqui, adicione a lógica para exibir o vídeo ou abrir o modal, se necessário
  };

  return (
    <>
      <main>
        <section className={styles.heroSection}>
          <Container className={styles.container}>
            <div className={styles.wrapper}>
              <div>
                <h1>
                  High Converting Landing Page <br /> Lorem Impsum
                </h1>
              </div>
              <div className={styles.videoButton}>
                <VideoButton
                  onClick={handleVideoClick}
                  icon={FaPlay}
                  size={150}
                  color="#fff"
                />
              </div>
              <div className="">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  eum, deserunt, sit soluta molestiae esse incidunt magnam
                  provident tempore delectus, corporis commodi voluptatem neque
                  ab. Quas reiciendis nulla assumenda fugiat!
                </p>
              </div>
              <div>
                <Button tag="button" text="Lorem Impsum" />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
};

export default Hero;
