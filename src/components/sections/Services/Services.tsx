import Spacing from "@/layout/Spacing";
import styles from "./Services.module.css";
import Container from "@/layout/Container";

const Services: React.FC = () => (
  <section>
    <Spacing className={styles.sectionBg}>
      <Container>
        <div className={styles.margin}>
          <div className={styles.cardContainer}>
            <Card
              title="Lorem Ipsum Dolor"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempore perspiciatis voluptatum tempora quaerat facilis, velit quibusdam consequatur, commodi tenetur impedit esse delectus dolorem aspernatur repellat, nam neque porro fuga?"
              imgSrc="#"
            />
            <Card
              title="Lorem Ipsum Dolor"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tempora eligendi dolores asperiores, a maxime, aperiam itaque, officia libero minima consequuntur earum autem sit sint ipsam? Ducimus laborum obcaecati voluptas."
              imgSrc="#"
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              title="Lorem Ipsum Dolor"
              text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est deserunt eveniet facere iusto, dicta eum aliquid nisi iure illo, quos eius quaerat nulla totam soluta laudantium consequatur, voluptatum amet asperiores."
              imgSrc="#"
            />
            <Card
              title="Lorem Ipsum Dolor"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae natus fugiat velit provident ex voluptatum est tempore cum. Facere, exercitationem repellat fugiat soluta quibusdam praesentium vel provident voluptas deleniti."
              imgSrc="#"
            />
          </div>
        </div>
      </Container>
    </Spacing>
  </section>
);

interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({ title, text, imgSrc }) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{text}</p>
    <img src={imgSrc} alt={title} className={styles.image} />
  </div>
);

export default Services;
