import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  tag: "a" | "button";
  backgroundColor?: string;
  color?: string
}

const Button: React.FC<ButtonProps> = ({
  text,
  tag,
  backgroundColor = "#4d5564",
  color = "black"
}) => {
  const anchor = "a";

  return (
    <div className={styles.buttonContainer}>
      {tag === anchor ? (
        <a className={styles.a} style={{ backgroundColor: backgroundColor, color: color }}>
          {text}
        </a>
      ) : (
        <button
          className={styles.button}
          style={{ backgroundColor: backgroundColor }}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
