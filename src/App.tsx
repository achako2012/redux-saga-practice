import React from "react";
import {useDispatch, useSelector} from "react-redux";

const App: React.FC = () => {
    const store = useSelector(store => store)

    const dispatch = useDispatch()

    console.log(store)

    return (
        <div className="App">
            <p>foo</p>
            <button onClick={()=> dispatch({type:'LOAD_DATA'})}>click me</button>
        </div>
    );
}

export default App;
