import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';

interface TodoListInfo {
  // placeholders - can be expanded as needed
  [key: string]: any;
}

interface TodoListState {
  value: TodoListInfo | string;
}

const initialState: TodoListState = {
  value: {
    // placeholders
  },
};

export const todoListSlice = createSlice({
  name: 'todolistInfo',
  initialState: initialState,
  reducers: {
    setTodoListInfo: (state, action: PayloadAction<TodoListInfo>) => {
      // change this
      state.value = action.payload;
    },
    resetTodoListInfo: state => {
      // change this
      state.value = '';
    },
  },
});

export const {setTodoListInfo, resetTodoListInfo} = todoListSlice.actions;

export const getTodoListInfo = (state: RootState): TodoListInfo | string => {
  // console.log('todolist-info-slice: getTodoListInfo: ', state.todolistInfo?.value);
  //   change this
  return (state as any).todolistInfo?.value || '';
};

export default todoListSlice.reducer;
