var initialData = {
    products:[],
    activeCat:"All Products",
    sortingOrder:"sbp",
    cart:[]
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
    
        default :{
            return data;
        }
    }



}