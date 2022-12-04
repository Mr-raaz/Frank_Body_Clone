var initialData = {
    products:[],
    activeCat:"All Products",
    sortingOrder:"sbp",
    cart:[],
    loginStatus:false
}


export default function ProductReducer(data = initialData , action){

    switch(action.type){

        case "ADDDATA":
            return {
                ...data,
                products:[...data.products , ...action.payload]
            }

        case "SETCAT":
            return {
                ...data,
                activeCat:action.payload
            }

        case "SORTINGORDER":
            return{
                ...data,
                sortingOrder:action.payload
            }

        case "ADD":
            return {
                ...data,
                cart:[...data.cart , action.payload]
            }

        case "DELETE":
                return  {
                     ...data,
                     cart: [...action.payload]
                 }
        case "SetLogin":
            return{
                ...data,
                loginStatus:action.payload
            }
            case "Delete_From_Cart" : {
                return {
                    ...data,
                    cart : action.payload
                }
            }
            case "Add_quantity_key": {
                return {
                    ...data,
                    cart : action.payload
                }
            }
            case  "increase_quantity" : {
                return {
                    ...data,
                    cart : action.payload
                }
            }
            case  "decrease_quantity" : {
                return {
                    ...data,
                    cart : action.payload
                }
            }
            case "makezero":
                return{
                    ...data,
                    cart :[]
                }
        default :{
            return data;
        }
    }



}