import Container from "@/layout/Container";
import styles from "./CallToAction.module.css";
import Button from "@/components/commons/Button/Button";
import Spacing from "@/layout/Spacing";
import { FaLightbulb } from "react-icons/fa"; // Ícone de pessoa com gráfico

const CallToAction: React.FC = () => {
  return (
    <section className={styles.section}>
      <Spacing>
        <Container>
          <div className={styles.contentContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.heading}>Try It Now</h2>
              <p className={styles.subheading}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                recusandae.
              </p>
              <Button tag="a" text="Lorem Ipsum" backgroundColor="#6c757d" />
            </div>
            <div className={styles.iconContainer}>
              <div className={styles.circle}>
                <FaLightbulb className={styles.icon} />
              </div>
            </div>
            <div className={styles.descriptionContainer}>
              <div className={styles.paragraph}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  nesciunt, sequi magnam provident laboriosam ad accusantium
                  quae nisi ab nostrum, dolorem nihil libero.
                </p>
                <p>
                  Maiores ipsum, accusantium adipisci consequuntur itaque
                  eligendi. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Debitis natus perspiciatis odit, quidem mollitia atque
                  sunt quam cum exercitationem rerum quas laudantium eos? Dolore
                  beatae atque.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Spacing>
    </section>
  );
};

export default CallToAction;
