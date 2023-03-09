
const inititalState = {
    value: 'Fundoo'
}

 export const DrawerReducer = (state = inititalState, action) => {

    console.log(action)

    switch (action.type) {
        case "Notes":
            return { ...state, value: "Fundoo" }
        case "Reminders":
            return { ...state, value: "Reminders" }
        case "Labels":
            return { ...state, value: "Labels" }
        case "Archive":
            return { ...state, value: "Archive" }
        case "Trash":
            return { ...state, value: "Trash" }
        default:
            // return { ...state }
        return state
    }
}


