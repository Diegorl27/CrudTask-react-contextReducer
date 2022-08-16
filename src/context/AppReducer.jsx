export default function appReducer (state, action) {

 switch (action.type) {
  case 'ADD_TASK':
    return {
      task:[...state.task, action.payload]
    }
  case 'DELETE_TASK':
    return {
      task: state.task.filter(task => task.id !== action.payload)
    }
  case 'EDIT_TASK':
    const editTask = state.task.filter(task => task.id !== action.payload.id)
    console.log(action.payload)
    return {
      task: [...editTask, action.payload]
    }
  default: 
    break;
 }
}
