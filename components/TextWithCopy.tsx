import clipboardCopy from 'clipboard-copy';
import styles from "@/styles/Home.module.css";

interface Props {
    label: string,
    text: string,
}

const TextWithCopy = ({ label, text } : Props) => {
  function copyToClipboard() {
    clipboardCopy(text);
    alert('Copiado al portapapeles');
  }

  return (
    <p>
      {label}: <strong>{text}</strong>
      <button className={styles.button} onClick={copyToClipboard}>Copiar</button>
    </p>
  );
};

export default TextWithCopy;
