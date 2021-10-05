type PayloadType = [
  note: string,
  id: number
]

export type Note = {
  note: string,
  id: number
}

export interface NotesState {
  notes: Note[]
}

type Action = {
  type: string,
  payload: PayloadType
}

const initialState = {
  notes: []
}

export const notesReducer = (state: NotesState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return {
        ...state,
        notes: [
          ...state.notes, {
            note: action.payload[0],
            id: state.notes.length > 0 ? state.notes[state.notes.length - 1].id + 1 : 0
          }
        ]
      }
    }
    case 'DELETE_NOTE': {
      return {
        ...state, notes: [
          ...state.notes.filter((note) => {
            return note.id !== action.payload[1]
          })
        ]
      }
    }
    case 'UPDATE_NOTE': {
      return {
        ...state, notes: [
          ...state.notes.map(element => {
            if (element.id === action.payload[1]) {
              return { ...element, note: action.payload[0] }
            } else {
              return { ...element }
            }
          })
        ]
      }
    }
    default:
      return state;
  }
}