//Editor.jsx
import GeneralForm from "./GeneralForm";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";

function Editor({ option }) {
  switch (option) {
    case "general":
      return <GeneralForm />;

    case "experience":
      return <ExperienceForm />;

    case "education":
      return <EducationForm />;

    case "skills":
      return <SkillsForm />;

    default:
      return null;
  }
}

export default Editor;