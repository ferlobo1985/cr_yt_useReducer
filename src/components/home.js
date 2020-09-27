import React,{ useReducer } from 'react';
import { homeReducer } from './home_reducer';

const Home = () => {
  const [state,dispatch] = useReducer(homeReducer,{ user:'Steve',count:0, clicks:0 });

  const changeNameHandler = () => {
    const newName = ['Mike','Steve','Lisa','Carolina'];
    return {
      type:"change_name",
      payload:newName[Math.floor(Math.random() * newName.length)]
    }
  }

  return (
    <div className="App">
      <div>
        Current user: {state.user}
      </div>
      <div>
        Current clicks: {state.clicks}
      </div>
      <div>
        Current count: {state.count}
      </div>
      <hr/>

      <button onClick={()=> dispatch({type:"increment",payload:2})}> Increment </button>
      <button onClick={()=> dispatch(changeNameHandler())}> Change name </button>
    </div>
  );
}

export default Home;
