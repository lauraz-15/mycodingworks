import project1_img from "../assets/juicy-recipes.png";
import project2_img from "../assets/fitme.png";
import project3_img from "../assets/trattoria-restaurant.png";
import shopping_list_img from "../assets/shopping-list-project.png";

const mywork_data = [
  {
    no: 1,
    title: "Juicy Recipes",
    img: project1_img,
    description: "Recipe platform, built using Django Python-based framework, additionally Javascript is used to import and dissplay results from Edamam API search results.",
    link: "https://juicy-recipes-z6hf.onrender.com/api/search/",
  },
  {
    no: 2,
    title: "FITME",
    img: project2_img,
    description: "Social media platform that is built using React and the backend database and the API is built using Django Rest Framework",
    link: "https://react-fitme.onrender.com/signup",
  },
  {
    no: 4,
    title: "Shopping List",
    img: shopping_list_img,
    description: "A dynamic shopping list app built with React, using useState for state management and real-time updates. ",
    link: "https://lauraz-15.github.io/shopping-list/",
  },
  {
    no: 3,
    title: "Trattoria Restuarant",
    img: project3_img,
    description: "Simple app built to practice the basics of React. The page dynamically shows which dishes are sold out and whether the restaurant is open or closed depending on the hour.",
    link: "https://lauraz-15.github.io/Trattoria-Restuarant/",
  },
];

export default mywork_data;
