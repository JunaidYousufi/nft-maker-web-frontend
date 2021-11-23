let initialvalue = {};

const NFTDetail = (state = initialvalue,action) => {
    switch (action.type) {
        case "nft__detail":
            return action.payload; 

        default:
            return state;
    }
}
export default NFTDetail;