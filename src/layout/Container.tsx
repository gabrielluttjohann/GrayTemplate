import styles from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={`${styles.container} ${className}`}>{children}</div>
);

export default Container;
