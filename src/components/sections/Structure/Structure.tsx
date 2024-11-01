import Container from "@/layout/Container";
import Spacing from "@/layout/Spacing";
import styles from "./Structure.module.css";

const Structure: React.FC = () => (
  <section>
    <Spacing className={styles.section}>
      <Container>
        <div className={styles.sectionContainer}>
          <div className={styles.titleContainer}>
            <h2>Lorem Ipsum Dolor</h2>
          </div>
          <div className={styles.contentContainer}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              nulla repudiandae! Maiores delectus provident cupiditate, sequi
              veniam sapiente cumque, laboriosam inventore suscipit ratione
              officiis voluptatum nisi commodi consequuntur sint odio.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              minus vel, aliquam ab totam accusamus provident, unde sunt fugiat
              laboriosam repellat, nisi expedita. Iure et minima qui itaque
              officiis illo!
            </div>
          </div>
        </div>
      </Container>
    </Spacing>
    <Spacing>
      <Container>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <h3>Option One</h3>
            <p>
              This card contains a description of option one. It provides
              details on why this option may be beneficial and includes relevant
              information for the user to consider when making a decision.
            </p>
            <span>More Info</span>
          </div>
          <div className={`${styles.cardImageMiddle} ${styles.card}`}>
            <img
              src="/path/to/image.jpg"
              alt="Central card image"
              className={styles.image}
            />
          </div>
          <div className={styles.card}>
            <h3>Option Two</h3>
            <p>
              This card contains a description of option two. It explains the
              benefits and any important aspects to consider, giving the user a
              clear understanding of what this option entails.
            </p>
            <span>More Info</span>
          </div>
        </div>
      </Container>
    </Spacing>

    <Spacing className={styles.cardAltBg}> 
      <Container>
        <div className={styles.cardContainerAlt}>
          <div className={styles.cardAlt}>
            <h3>Option One</h3>
            <p>
              This card contains a description of option one. It provides
              details on why this option may be beneficial and includes relevant
              information for the user to consider when making a decision.
            </p>
            <span>More Info</span>
          </div>
          <div className={styles.cardAlt}>
            <h3>Option Two</h3>
            <p>
              This card contains a description of option two. It explains the
              benefits and any important aspects to consider, giving the user a
              clear understanding of what this option entails.
            </p>
            <span>More Info</span>
          </div>
          <div className={styles.cardAlt}>
            <h3>Option Two</h3>
            <p>
              This card contains a description of option two. It explains the
              benefits and any important aspects to consider, giving the user a
              clear understanding of what this option entails.
            </p>
            <span>More Info</span>
          </div>
        </div>
      </Container>
    </Spacing>
  </section>
);

export default Structure;
