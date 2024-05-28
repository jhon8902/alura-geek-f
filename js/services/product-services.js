const productlist = async () => {
    return fetch ("http://localhost:3000/products")
        .then ((res) => res.json())
        .catch(err => console.log (err));
};

/*seccion crear producto*/
const createproducts = async (name, price, image) =>{
    return fetch ("http://localhost:3000/products",{
       method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name,
            price,
            image,
        })
    })

    .then((res)=> res.json())
    .catch((err) => console.log(err));

}
const deleteproducts = async (productsid) =>{
    return fetch (`http://localhost:3000/products/${productsid}`,{
       method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
        
    })

    .then((res)=> res.json())
    .catch((err) => console.log(err));

}



export const servicesProducts = {
    productlist,
    createproducts,
    deleteproducts,
};