import React from "react";
import styles from "./VideoButton.module.css";
import { IconType } from "react-icons"; // Confirme que o pacote está instalado: npm install react-icons

// Definição do tipo das propriedades
interface VideoButtonProps {
  onClick: () => void;
  icon: IconType; // Tipagem para o ícone
  size?: number;
  color?: string;
  backgroundColor?: string;
}

const VideoButton: React.FC<VideoButtonProps> = ({
  onClick,
  icon: Icon,
  size = 80,
  color = "#fff",
}) => {
  return (
    <button
      className={styles.videoButton}
      onClick={onClick}
      style={{ width: size, height: size }}
      aria-label="Play Video"
    >
      <Icon size={size * 0.4} color={color} />
    </button>
  );
};

export default VideoButton;
