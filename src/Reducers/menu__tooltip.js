let initialvalue = false;

const handleTooltipClick = (state = initialvalue,action) => {
    switch (action.type) {
        case "toggle":
            return !state

        default:
            return state;
    }
}
export default handleTooltipClick;