let stock

do{
    stock = Number(prompt("Ingrese cantidad de productos en stock"))
}while(isNaN(stock))

do{
    op=Number(prompt("Elija una opcion del menu\n\n1 - Consultar stock producto\n2 - Vender producto\n0 - Salir"))
    
    while(isNaN(op) || (op!==1 && op!==2  && op!==0) ){
        op=Number(prompt("Debe eligir una opcion correcta. Intente nuevamente."))
    }

    if (op===1){
        alert("Hay " + stock + " productos en stock")
    }else if (op===2){
        stock--
    }   

}
while(op && stock !== 0)


function get_stock(stockProd){
    if (!stockProd){
        return "Sin stock"
    }else{
        return "Quedan " + stockProd + " productos en stock"
    }
}

alert(get_stock(stock))


