import styles from "./Spacing.module.css";

const Spacing: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => <div className={`${styles.section} ${className}`}>{children}</div>;
export default Spacing;
