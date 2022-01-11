import styles from "./App.module.css";
import { content } from "./content";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export const App = () => {
  return (
    <div className={`${styles.page} page`}>
      <div className={styles.left + " " + styles.column}>
        <div className={styles.pb} />
        <Section title={content.contactInfo.title}>
          {content.contactInfo.content.map(({ title, content, link }) => (
            <div className={styles["contact-info"]}>
              <div className={styles["contact-info-title"]}>{title}</div>
              <div className={styles["contact-info-content"]}>
                {link ? <a href={link}>{content}</a> : content}
              </div>
            </div>
          ))}
        </Section>
        <Section title={content.techologies.title}>
          {content.techologies.content.map(({ title }) => (
            <span className={styles.technology}>{title}</span>
          ))}
        </Section>
      </div>
      <div className={styles.right + " " + styles.column}>
        <Section title={content.summary.title}>
          <p className={styles["summary-content"]}>{content.summary.content}</p>
        </Section>
        <Section title={content.studies.title}>
          {content.studies.content.map(
            ({ fromTo, location, school, title }) => (
              <div>
                <div>
                  <span className={styles["studies-title"]}>{title}</span>,{" "}
                  <span className={styles["studies-from-to"]}>{fromTo}</span>
                </div>
                <div>
                  <span className={styles["studies-school"]}>{school}</span>,{" "}
                  {location}
                </div>
              </div>
            )
          )}
        </Section>
        <Section title={content.experience.title}>
          {content.experience.content.map(
            ({ company, companyCity, description, from, jobPosition, to }) => (
              <div className={styles["experience-container"]}>
                <div>
                  <span className={styles["experience-job-position"]}>
                    {jobPosition}
                  </span>
                  <span className={styles["experience-from-to"]}>
                    {from} - {to}
                  </span>
                </div>
                <div>
                  {company}{" "}
                  <span className={styles.faded}>- {companyCity}</span>
                </div>
                <div className={styles["experience-description"]}>
                  {description}
                </div>
              </div>
            )
          )}
        </Section>

        <Section title={content.projects.title}>
          <div className={styles["projects-description"]}>
            {content.projects.description}
          </div>
          <div className={styles.projects}>
            {content.projects.content.map((props, index) => (
              <ProjectCard {...props} index={index} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
};
