interface Experiences{
  location: string,
  dates: string,
  position: string,
  description: string
}

export const EDUCATION : Experiences[] = [
  {location: "Justus-Liebig-Universität Gießen", dates: "2014-2017", position: "Bachelor of Science: Physics", description:"Bachelor's with focus on theoretical partical physics. (GPA: 3.0)"},
  {location: "Justus-Liebig-Universität Gießen", dates: "2017-2019", position: "Master of Science: Physics", description:"Master's degree with focus on Quantum Field Theory. (GPA 3.8)"},
  {location: "University of Washington", dates: "2017-2018", position: "Graduate Exchange in Physics", description:"One year exchange program with the University of Washington in Seattle."}
]

export const CAREERS : Experiences[] = [
  {location: "SAP", dates: "2020-present", position: "Software Developer", description:"I do Development and Support on both Frontend and Backend topics for the SAP Master Data Governance Application."}
]
