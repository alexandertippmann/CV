export interface Hobbies {
  name: string,
  action: string;
}

const hobbies: Hobbies[] = [
  {name: "Chess", action: "chess"},
  {name: "Videogames", action: "games"},
  {name: "Drawing Portraits", action: "drawing"},
  {name: "Learning Japanese", action: "none"},
]

const hoHalf = Math.ceil(hobbies.length / 2);

export const HOBBIESL = hobbies.slice(0, hoHalf);
export const HOBBIESR = hobbies.slice(hoHalf, hobbies.length);
