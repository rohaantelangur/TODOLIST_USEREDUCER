import { createContext, useReducer } from "react";


export const Todocontext = createContext();

export const Todoprovider = ({children}) => {

    const handlesubmit = (state, action) => {
        switch (action.type) {
          case "add-todo":
            if (action.task !== "") {
              return [...state, { task: action.task, isCompleted: false }];
            }
            break;
      
          case "toggle-todo":
            return state.map((el, index) =>
              index === action.ind ? { ...el, isCompleted: !el.isCompleted } : el
            );

      
          case "Delete":
            return state.filter((el, index) => index !== action.ind);

          default:
            return state;
        }
      };

      
    const [todos, dispatch] = useReducer(handlesubmit, []);

    return <Todocontext.Provider value={{todos,dispatch}}> {children}</Todocontext.Provider>
}