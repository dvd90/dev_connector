import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
  profile: null,
  repos: [],
  profiles: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
