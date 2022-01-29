import { content } from "./content";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

export const App = () => (
  <>
    <Page1 />
    {content.letter && <Page2 content={content.letter} />}
  </>
);
