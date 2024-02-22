import icons from "./icons";
const { FaRegStar, FaStar } = icons;

export const createSlug = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split()
    .join("-");

export const formatMoney = (money) => Number(money?.toFixed(1)).toLocaleString();
 
export const renderStarFromNumber = (num) => {
  //Ex: 4 stars = [1,1,1,1,0]
  let stars = [];
  for (let i = 0; i < +num; i++) {
    stars.push(<FaStar key={i} color="orange" />);
  }
  for (let i = 5; i > +num; i--) {
    stars.push(<FaRegStar key={i} color="orange" />);
  }
  return stars;
};
