var productNameInput=document.getElementById("productNameInput");
var productPriceInput=document.getElementById("productPriceInput");
var productCatInput=document.getElementById("productCatInput");
var productDescInput=document.getElementById("productDescInput");
var mainButtton=document.getElementById("mainButtton");
var productsContainer=[];
if (localStorage.getItem("myProducts")==null){

    productsContainer=[];

}
else{

    productsContainer=JSON.parse(localStorage.getItem("myProducts"));
    displayProduct();
}



function addProduct() {


    var product = {

        name:productNameInput.value,
        price:productPriceInput.value,
        cat:productCatInput.value,
        desc:productDescInput.value
    };
    productsContainer.push(product);
    localStorage.setItem("myProducts",JSON.stringify(productsContainer));
    clearform() ;
    displayProduct();

    

    
    console.log(productsContainer);
  
mainButtton.innerHTML="addproduct";

};

function clearform() {

    productDescInput.value="";
    productNameInput.value="";
    productPriceInput.value="";
    productCatInput.value="";

};


function displayProduct(){

    var cartoona=``;

    for (var i=0 ;i<productsContainer.length;i++){
        cartoona+=`
        <tr>
            <td>`+i+`</td>
            <td>`+productsContainer[i].name+`</td>
            <td>`+productsContainer[i].price+`</td> 
            <td>`+productsContainer[i].cat+`</td>
            <td>`+productsContainer[i].desc+`</td>
            <td><button onclick="updateProduct(`+i+`);" class="btn btn-outline-success">update</button></td>
            <td><button onclick="deleteProduct(`+i+`);" class="btn btn-outline-danger">delete</button></td>
    </tr>`;
};


    document.getElementById("tableBody").innerHTML=cartoona;    


};
function searchProduct(searchitem){

    var cartoona=` `;
    for(var i=0; i<productsContainer.length ;i++)
    
    {
        
        if(productsContainer[i].name.toLowerCase().includes(searchitem.toLowerCase()) == true)
        {
            
            
            cartoona+=`
            <tr>
            <td>`+i+`</td>
            <td>`+productsContainer[i].name+`</td>
            <td>`+productsContainer[i].price+`</td> 
            <td>`+productsContainer[i].cat+`</td>
            <td>`+productsContainer[i].desc+`</td>
            <td><button onclick="updateProduct(`+i+`);" class="btn btn-outline-success">update</button></td>
            <td><button onclick="deleteProduct(`+i+`);" class="btn btn-outline-danger">delete</button></td>
            </tr>`;
        }
        
    else{

            console.log("doesnt exist");
        }

    }

document.getElementById("tableBody").innerHTML=cartoona;    



}


function updateProduct(index) {
    
    productNameInput.value=productsContainer[index].name
    productCatInput.value=productsContainer[index].cat

    productPriceInput.value=productsContainer[index].price

    productDescInput.value=productsContainer[index].desc
    mainButtton.innerHTML="update";
    deleteProduct(index);

    
}


function deleteProduct(i) {
productsContainer.splice(i,1);
localStorage.setItem("myProduct",JSON.stringify(productsContainer));
displayProduct();


    
}


