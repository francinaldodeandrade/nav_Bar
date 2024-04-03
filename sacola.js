class Pedido { 
    
    constructor() {
        this.itens = []
        this.subtotal = 0.0
        this.frete = 0.0
        this.encargos = 0.0
        this.total = 0.0
    }

    retornaCarrinho() {

        return this
    }

    adicionarProduto(nome, Qtd, Vlr) {

        let produto = {
            
            nome,
            Qtd,
            Vlr,
        }

        this.itens.push(produto)
        this.atualizarValores()
   
    }

    removeProduto(sku){   
        let resultado = this.itens.find(produto => produto.nome === nome)
        let index = this.itens.indexOf(resultado)

        console.log(index)
        
        if (index >= 0) {
           this.itens.splice(index, 1); //remove um elemento apartir do index determinado
        }   
    }

    atualizarValores(){
          
        this.listarProdutos()
        this.vlrItens()
        /*this.vlrTotal()
        this.vlrOutros()*/

    }

    vlrItens () {

        let subTotalizar = document.querySelector("#subTotalizar")
        let subtotal = 0

        this.itens.map(produto => {
            subtotal += produto.Qtd * produto.Vlr
            
        })

        this.subtotal = subtotal

        subTotalizar.innerHTML = ("Valor dos itens R$" + this.subtotal)

        console.log(subtotal);

    }

    vlrOutros () {
        let outrosEnc = document.querySelector("#outrosEnc")

        this.outrosTotais = this.frete + this.encargos

        outrosEnc.innerHTML = (`Outros encargos R$ ${this.outrosTotais}`)
    }

    vlrTotal () {

        let totalizar = document.querySelector("#vlrTotal")

        this.total = this.subtotal + this.frete + this.encargos

        totalizar.innerHTML = (`Total R$${this.total}`)

    }

    listarProdutos () {

            let listaItem = document.querySelector("#lista1") //guardei o valor digitado no input na variavel qtd
    
            this.itens.map( item => {
                           
                let listagem = document.createElement("h6")  //criei o elemento no html
                
                listagem.innerHTML = (                        //atribui o valor ao elemento (li) 
                    `PRODUTO -----------------------------${item.nome} 
                    <br>
                     QUANTIDADE---------------------------${item.Qtd} 
                     <br>
                     VALOR--------------------------------${item.Vlr} 
                     <Br> 
                    *************************************************`
                    ) 
                
                listaItem.appendChild(listagem) //incluir o elemento na DOM dentro da <ul>

            }) 
    }

    listarQtd () {

        let listaItem = document.querySelector("#lista2") //guardei o valor digitado no input na variavel qtd

        this.itens.map( item => {
                       
            let listagem = document.createElement("h5")  //criei o elemento no html
            
            listagem.innerHTML = (                        //atribui o valor ao elemento (li) 
                `PRODUTO -------------------------------------------------${item.nome} 
                <br>
                 QUANTIDADE-----------------------------------------------${item.Qtd} 
                 <br>
                 VALOR------------------------------------------------------${item.Vlr} 
                 <Br> 
                **********************************************************`
                ) 
            
            listaItem.appendChild(listagem) //incluir o elemento na DOM dentro da <ul>

        }) 
     }

    listarVlr () {

    let listaItem = document.querySelector("#lista5") //guardei o valor digitado no input na variavel qtd

    this.itens.map( item => {
                   
        let listagem = document.createElement("h3")  //criei o elemento no html
        
        listagem.innerHTML = (                        //atribui o valor ao elemento (li) 
            `PRODUTO -------------------------------------------------${item.nome} 
            <br>
             QUANTIDADE-----------------------------------------------${item.Qtd} 
             <br>
             VALOR------------------------------------------------------${item.Vlr} 
             <Br> 
            **********************************************************`
            ) 
        
        listaItem.appendChild(listagem) //incluir o elemento na DOM dentro da <ul>

    }) 
}
   
}

let carrinho = new Pedido()

let operation = document.querySelector("#opcoes").value

function enviar() {
   
    let prod = document.querySelector("#example")
    let input2 = document.querySelector("#input2")
    let input3 = document.querySelector("#input3")
    let cad = document.querySelector("#cad")
   


    /*if (operation === cad.value && input1.value != "" && input2.value != "" ) {*/

        carrinho.adicionarProduto(prod.value.trim()) /*, input2.value.trim(), input3.value.trim())*/

        prod.value = ""
        input2.value = ""
        input3.value = ""
   
    } //else {

      /*alert("Campos obrigatórios")*/
   
//}

}

function remove(){

    let rem = document.querySelector("#rem")
    let input0 = document.querySelector("#input0")

    if (operation === rem.value) {
        carrinho.removeProduto(input0.value)
        input0 = ""
    }
    

    
}

console.log(carrinho);
