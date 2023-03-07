const initalDrawerState = {
    val: 'Fundoo'
}
export const Reducer = (state = initalDrawerState, action) => { //drawer reducer fuction //
    console.log("Action coming in Reducer", action)
    switch (action.type) {
        case "Notes":
            return { ...state, title: "Fundoo" };
        case "Reminders":
            return { ...state, title: "Reminders" };
        case "Labels":
            return { ...state, title: "Labels" };
        case "Archive":
            return { ...state, title: "Archive" };
        case "Trash":
            return { ...state, title: "Trash" };
        default:
            return { ...state, title: "Fundoo" };
    }
}