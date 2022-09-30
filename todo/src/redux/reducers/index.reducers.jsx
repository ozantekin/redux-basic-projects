import { ADD, TOGGLE, CLEAR } from '../type/index.types'

const INITIAL_STATE = {
  notes: [
    { id: 1, todo: 'Redux basic proje yap.', completed: false },
    {
      id: 2,
      todo: 'E-commerce sitesine firebase authentication ekle!',
      completed: true,
    },
  ],
}

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: state.notes.length + 1,
            todo: action.payload,
            completed: false,
          },
        ],
      }

    case TOGGLE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload
            ? { ...note, completed: !note.completed }
            : note
        ),
      }

    case CLEAR:
      return {
        ...state,
        notes: state.notes.filter((note) => note.completed === false),
      }

    default:
      return state
  }
}
