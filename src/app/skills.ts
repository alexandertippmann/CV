export interface Skills {
  name: string,
  proficiency: number,
  action: string
}

const skills: Skills[] = [
  { name: "HTML", proficiency: 5, action: "none" },
  { name: "CSS", proficiency: 5, action: "none" },
  { name: "JavaScript", proficiency: 5, action: "none" },
  { name: "jQuery", proficiency: 5, action: "none" },
  { name: "ABAP", proficiency: 5, action: "none" },
  { name: "Julia (Programming Language)", proficiency: 5, action: "none" },
  { name: "Node.js", proficiency: 4, action: "none" },
  { name: "Swift", proficiency: 4, action: "none" },
  { name: "Kotlin", proficiency: 4, action: "none" },
  { name: "iOS Development", proficiency: 4, action: "none" },
  { name: "Android Development", proficiency: 4, action: "none" },
  { name: "Python", proficiency: 4, action: "none" },
  { name: "SQL", proficiency: 4, action: "none" },
  { name: "MongoDB", proficiency: 3, action: "none" },
  { name: "Mathematica", proficiency: 3, action: "none" },
  { name: "C++", proficiency: 3, action: "none" },
  { name: "Angular", proficiency: 0, action: "angular" },
]

const languages: Skills[] = [
  { name: "German", proficiency: 5, action: "german" },
  { name: "English", proficiency: 5, action: "english" },
  { name: "Japanese", proficiency: 1, action: "japanese" },
]


const skHalf = Math.ceil(skills.length / 2);
const laHalf = Math.ceil(languages.length / 2);

export const SKILLSL = skills.slice(0, skHalf);
export const SKILLSR = skills.slice(skHalf, skills.length);
export const LANGSL = languages.slice(0, laHalf);
export const LANGSR = languages.slice(laHalf, languages.length);
