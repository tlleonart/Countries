import { FETCH_ONE } from "../actions/types";

const initialDetail = {
  name: "",
  img: "",
  capital: "",
  subregion: "",
  area: "",
  pop: "",
  activities: [],
};

export default function detailReducer(
  state = initialDetail,
  { type, payload }
) {
  switch (type) {
    case FETCH_ONE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
