import { createStore } from 'redux';

// REDCUER
function counterReducer(state, action) {
if(typeof state == 'undefined'){
         return { count : 0 }
  }
  var nextState = {
    count : state.count
  }

  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
      break;
    default:
      return state
  }
}

// STORE
const store = createStore(counterReducer);
const counterEl = document.getElementById('counter');

function render() {
  const state = store.getState()
  counterEl.innerHTML = state.count.toString()
}

render()
store.subscribe(render)

// ACTIONS
document.getElementById('add')
  .addEventListener('click', () => {
    store.dispatch({ type: 'ADD' })
  })

document.getElementById('minus')
  .addEventListener('click', () => {
    store.dispatch({ type: 'MINUS' })
  })

document.getElementById('reset')
  .addEventListener('click', () => {
    store.dispatch({ type: 'RESET' })
  })