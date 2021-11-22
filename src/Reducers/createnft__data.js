let initialvalue = [];

const CreateNFTData = (state = initialvalue,action) => {
    switch (action.type) {
        case "createnftdata__store":
            return [...state,action.payload];

        default:
            return state;
    }
}
export default CreateNFTData;