
export const homeReducer = (state,action)=>{
    switch(action.type){
      case "increment":
        return { 
            ...state, 
            count: state.count + action.payload, 
            clicks: state.clicks++ 
        }
      case "change_name":
        return { 
          ...state, 
          user: action.payload
        }
      default:
        return state
    }
  }