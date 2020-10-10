import { GET_CURRENT_PROFILE,GET_PROFILES,SET_LOADING,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from '../const/actionType';
  const initialState = {
   profile:{},
    profiles: [],
    isLoading: false
  }
  export default function (state = initialState , { type, payload }) {
    switch (type) {
      case SET_LOADING:
        return { ...state, isLoading: true };
        case GET_CURRENT_PROFILE:
      return {
        ...state,profile:payload};
        case GET_PROFILES:
          return {...state,profiles: payload,loading: false};
          case PRODUCT_DETAILS_REQUEST:
            return { isloading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return {...state,isloading: false, profile: payload };
        case PRODUCT_DETAILS_FAIL:
            return { isloading: false, error: payload };
              default:
                return state;
            }
          }

  