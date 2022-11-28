var initialData = {
    products:[
        {
            name:"demo Product",
            price:299,
            category:"skin care",
            rating:"2.5"
        }
    ]
}


export default function ProductReducer(data = initialData , action){

    switch(action.type){

    
        default :{
            return data;
        }
    }



}