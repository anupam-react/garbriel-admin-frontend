import { atom } from 'recoil';

// Atom
export const initialState = {
  userId: "",
  productId: "",
  message: "",
  expireDate: "",
  price: "",
  typeOfReward: "",
  rewardPoints: "",
  amount: "",
  discount: "",
  type: "PercentageDiscount",
  image: {},
  description: "",
  };
export const offerState = atom({
  key: 'offerState', // unique ID (with respect to other atoms/selectors)
  default: initialState, // default value (aka initial value)
});