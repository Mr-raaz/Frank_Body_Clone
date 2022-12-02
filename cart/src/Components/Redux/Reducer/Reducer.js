var data = {
    cart : [{
        image : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13228967-1294896971213832.jpg",
        title : "Caffeinated Hair Mask",
        price :  453.83,
    },
    {
        image : "https://static.thcdn.com/images/large/webp//productimg/1600/1600/13228967-1294896971213832.jpg",
        title : "Caffeinated Hair Mask",
        price :  871.9,
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
        case "Add_quantity_key": {
            return {
                ...storeData,
                cart : action.payload
            }
        }
        case  "increase_quantity" : {
            return {
                ...storeData,
                cart : action.payload
            }
        }
        case  "decrease_quantity" : {
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