var initialData = {
    products:[]
}


export default function ProductReducer(data = initialData , action){

    switch(action.type){

        case "ADDDATA":
            return {
                ...data,
                products:[...data.products , ...action.payload]
            }

    
        default :{
            return data;
        }
    }



}