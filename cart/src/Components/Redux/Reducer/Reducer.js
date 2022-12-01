var data = {
    cart : [{
        image : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13228967-1294896971213832.jpg",
        title : "Caffeinated Hair Mask",
        price : "16.95",
    },
    {
        image : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13228967-1294896971213832.jpg",
        title : "Caffeinated Hair Mask",
        price : "21.75",
    }
]
}

export const CartReducer = (storeData = data, action)=>{
     switch (action.type){
        case "Delete_From_Cart" : {
            return {
                ...storeData,
                cart : action.payload
            }
        }
        default : {
            return storeData;
        }
     }
}