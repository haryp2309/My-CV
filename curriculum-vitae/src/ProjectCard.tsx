import styles from "./ProjectCard.module.css";

type Props = {
  title: string;
  description: string;
  index: number;
};

export const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description, index } = props;

  return (
    <div className={`${styles.card} ${styles[`gradient-${(index % 3) + 1}`]}`}>
      <div className={styles.title}>{title}</div>
      <div>{description}</div>
    </div>
  );
};
