import { store } from "./common/store";
import { increment } from "./counter-slice";


store.subscribe(function(){
  console.log("hello");
});

// send actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());


console.log(store.getState().counter.count); 