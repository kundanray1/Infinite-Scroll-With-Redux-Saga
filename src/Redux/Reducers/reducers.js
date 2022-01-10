import { GET_USERS_FETCH, GET_USERS_SUCCESS } from "../Actions/actions"

const FirstReducer = (state = { users: [], loading: false, }, action) => {

    switch (action.type) {



        case GET_USERS_SUCCESS:
            
            return {
                ...state, users:[...state.users, action.users],
                    loading:false,

               

            }  
        

            case GET_USERS_FETCH:
                console.log('inside Fetch action')
                return {
                    ...state, 
                    loading:true,
    
                    // ...Array.from({ length: 20 }).map((_, i) => i + 1 + state.length),
    
                }    // Here the images that will come from the dummy api will be replaced to the empty array state users
    

        default:
            return state;

    }





}

export default FirstReducer;