import { servicesProducts } from "../services/product-services.js";

const productContainer = document.querySelector("[data-product]");

const form = document.querySelector("[data-form]");
productContainer.addEventListener("click", async (event)=> {
   if (event.target.nodeName==="I"){
    const targetaid = event.target.dataset.id
    await servicesProducts.deleteproducts(targetaid);
    
   }
   
});


/*crear dinamicamente el producto*/

function createCard (name, price, image, id) {
    const card = document.createElement ("div");
    card.classList.add("card");

    card.innerHTML = `
                    <div class="img-container">
                       <img src="${image}" alt="${name}"> 
                    </div>

                    <div class="card-container--info">
                        <p>${name}</p>
                        <div class="card-container--value">
                         <p>${price}</p> 
                        </div>
                            <div>
                                <button class="delete-button">
                                <i class="fa-solid fa-trash-can"data-id="${id}"></i>
                                </button>
                            </div>
                        </div>

        `;

productContainer.appendChild(card);
    return card;

    }

const render = async () => {
    try {
        const ListProducts = await servicesProducts.productlist();
        ListProducts.forEach(product => {
           
                createCard(
                    product.name,
                    product.price,
                    product.image,
                    product.id,
                )
            
            console.log(product)
        });


    } catch (error) {
        console.log(error)
    }
};

/*seccion boton enviar*/
form.addEventListener("submit", async (event) =>{
    event.preventDefault();

    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const image = document.querySelector("[data-image]").value;


    

    await servicesProducts.createproducts(name, price, image).then((res) => console.log(res)).catch((err))

    
});


render();

