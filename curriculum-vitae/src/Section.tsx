import styles from "./Section.module.css";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Section: React.FC<Props> = (props: Props) => {
  const { title, children } = props;

  return (
    <div>
      <h3>{title}</h3>
      <div className={styles.divider}></div>
      {children}
    </div>
  );
};
