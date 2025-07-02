// Editor.jsx ------------------------------------------------
import GeneralForm from "./forms/GeneralForm";
import ExperienceForm from "./forms/ExperienceForm";
import EducationForm from "./forms/EducationForm";
import SkillsForm from "./forms/SkillsForm";

export default function Editor({ active, data, setters }) {
  switch (active) {
    case "general":
      return (
        <GeneralForm
          value={data.general}
          onChange={setters.setGeneral}
        />
      );

    case "experience":
      return (
        <ExperienceForm
          entries={data.experience}
          onChange={setters.setExperience}
        />
      );

    case "education":
      return (
        <EducationForm
          entries={data.education}
          onChange={setters.setEducation}
        />
      );

    case "skills":
      return (
        <SkillsForm
          entries={data.skills}
          onChange={setters.setSkills}
        />
      );

    default:
      return null;
  }
}
