var initialData = {
    products:[],
    activeCat:"All Products",
    sortingOrder:"sbp"
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

    
        default :{
            return data;
        }
    }



}