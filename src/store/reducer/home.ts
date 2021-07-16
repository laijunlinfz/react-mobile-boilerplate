import { GET_HOME_DATA } from "../actionTypes";
import { HomeState, ActivityAction } from "@/types/home";

const initialState: HomeState = {
  planNo: "",
};

const homeReducer = (
  state: HomeState = initialState,
  action: ActivityAction
): HomeState => {
  switch (action.type) {
    case GET_HOME_DATA: {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
};

export default homeReducer;
