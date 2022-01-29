import gitHubLogo from "./assets/github-logo.png";
import linkedinLogo from "./assets/linkedin-logo.png";
import { ApplicationLetter } from "./content";
import s from "./Page2.module.css";

type Props = {
  content: ApplicationLetter;
};

export const Page2: React.FC<Props> = ({ content }) => (
  <div className={`${s.page} page`}>
    <div className={s.container}>
      <div className={`${s.pb} card`}></div>
      <div className={`${s["header-card"]} card`}>
        <div className={s.left}>
          <div className={s.name}>{content.sender.name}</div>
          <div>
            {content.sender.study}, {content.sender.school} -{" "}
            {content.sender.studyYear}
          </div>
        </div>
        <div className={s.github}>
          <img src={gitHubLogo} alt="github" />
          <span>haryp2309</span>
        </div>
        <div className={s.linkedin}>
          <img src={linkedinLogo} alt="linkedin" />
          <span>haryp</span>
        </div>
      </div>
      <div className={`${s["letter-card"]} card`}>
        <h3 className={s["letter-title"]}>{content.title}</h3>
        <div>
          {content.content.split("\n").map((v) => (
            <p>{v}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);
