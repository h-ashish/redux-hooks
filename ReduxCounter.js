import {useStore, useDispatch, useSelector} from 'react-redux';
function ReduxCounter(){
    //it will provide a dispatch function
    const dispatch = useDispatch();
    //this will give me access to the store
    const store = useStore();
    //this is the hook to get count from the state and if state changes then the count will also change
    const count = useSelector(state=>state.count);
    console.log(store);
    const increase =()=>{
        dispatch({type:'counter/increase'})
    }
    const decrease =()=>{
        dispatch({type:'counter/decrease'})
    }
    const reset =()=>{
        dispatch({type:'counter/reset'})
    }
    const square =()=>{ 
        dispatch({type:'counter/square'})
    }
    const squareroot =()=>{
        dispatch({type:'counter/squareroot'})
    }
    return(
        <div>
            count = {count}<br/>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={reset}>reset</button>
            <button onClick={square}>square</button>
            <button onClick={squareroot}>squareroot</button>
        </div>
    )
}
export default ReduxCounter;