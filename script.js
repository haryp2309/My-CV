const leftContainerContent = [
  {
    title: "Profile",
    content:
      "Ung student som studerer Datateknologi (master) på NTNU. Jobber som mentor ved siden av studiet. Interessert i teknologi og utvikling.",
  },
  { title: "Contact", content: `` },
  { title: "References", content: "" },
  { title: "Interests", content: "" },
];

const createSection = ({ title, content }) => `
<h3>${title}</h3>
<div class="divider"></div>
<span>
${content}
</span>`;

const setLeftContent = () => {
  const leftContent = leftContainerContent
    .map(createSection)
    .reduce((a, b) => a + b);
  window.document.getElementById("left-column").innerHTML = leftContent;
};

window.onload = () => {
  setLeftContent();
};
