document.addEventListener("DOMContentLoaded",()=>{
const products=[
    {id:1,name:"Organic Gala Apples (1kg)",price:200,work:true},
    {id:2,name:"Alphonso Mangoes (Set of 3)",price:500,work:true},
    {id:3,name:"Fresh Strawberries (250g punnet)",price:150,work:true},
    {id:4,name:"Navel Oranges (1kg Bag)",price:250,work:true},
    {id:5,name:"Ripe Bananas (1 Dozen)",price:100,work:true},
];

const lastCart=[];

const list=document.getElementById("product-list");
const cart=document.getElementById("cart-item");
const emptycart=document.getElementById("empty-cart");
const totalcart=document.getElementById("cart-total");
const totalprice=document.getElementById("total-price");
const chekoutbtn=document.getElementById("Checkout-btn");



products.forEach((product)=>
{
    const productdiv=document.createElement("div");
    productdiv.innerHTML=`
    <span>${product.name} --₹${product.price.toFixed(2)}</span>
    <button class="w-50% bg-emerald-600 text-white py-1 px-2  rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-300 shadow-md hover:shadow-lg" data-id="${product.id} ">Add to Cart </button>
    `;
    list.appendChild(productdiv);
});
list.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON")
    {
        const productId=parseInt(e.target.getAttribute("data-id"));
        const product=products.find((p)=>p.id===productId);
        addtoCart(product);

    }
})
function addtoCart(product)
{
    lastCart.push(product);
    console.log(lastCart);
    renderCart()
}
function renderCart()
{
    cart.innerHTML="";
    let totalprices=0;
    if(lastCart.length>0)
    {
        emptycart.classList.add("hidden");
        totalcart.classList.remove("hiden");
        lastCart.forEach((item)=>{
            totalprices+=item.price;
            const cartItem = document.createElement('div')
            cartItem.innerHTML=`${item.name}- ${item.price.toFixed(2)} 
            <button data-status="${products.work}">Remove</button>`;
            
        // lastCart.addEventListener("click",(e)=>
        // {
        //     if(e.target.tagName==="BUTTON")
        //     {
        //         const work=parseInt(e.taget.getAttribute("data-status"));
        //         const workstatus=products.find((p)=>p.work===work)
        //         remove.workstatus;

        //     }
        // })
            
            cart.appendChild(cartItem);
            totalprice.textContent=`${totalprices.toFixed(2)}`;
   })
    }else{
        emptycart.classList.remove("hidden");
        totalprice.textContent=`₹0.00`;
    }
}


chekoutbtn.addEventListener('click',()=>
{
    lastCart.length=0;
    alert("Checkout Sucessfuly...");
    renderCart();
});

removecart

});