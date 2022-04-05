class Produto {
    //primeira função que executa quando inicia uma classe
    //passar atributos do produto dentro do método construtor
    constructor()
    {
        this.id = 1,
        this.arrayProdutos = []

    }
    //fora do constructor, segue os metodos que serão usados

    salvarProduto()
    {
        let produto = this.lerDados();
        if(this.validaCampos(produto)){
            this.adicionarProduto(produto);
        }
        
        this.listarTabelas();
        this.cancelarProduto();
    }
    listarTabelas()
    {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        
        for(let i = 0; i < this.arrayProdutos.length; i++) {
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            let td_produto = tr.insertCell();
            let td_preço = tr.insertCell();
            let td_acao = tr.insertCell();
            
            td_id.innerText = this.arrayProdutos[i].id;
            td_produto.innerText = this.arrayProdutos[i].nomeProduto;
            td_preço.innerText = this.arrayProdutos[i].preço;
            
            td_id.classList.add('center');
            td_acao.classList.add('center');

            let imgEdit = document.createElement('img');
            imgEdit.src = 'img/edit.png';

            let imgDelete = document.createElement('img');
            imgDelete.src = 'img/delete.png';

            td_acao.appendChild(imgEdit);
            td_acao.appendChild(imgDelete);

        }
    }
    adicionarProduto(produto)
    {
        this.arrayProdutos.push(produto);
        this.id++;
    }
    lerDados()
    {
        let produto = {};
        produto.id = this.id;
        produto.nomeProduto = document.getElementById('produto').value;
        produto.preço = document.getElementById('preço').value;

        return produto;
    }
    validaCampos(produto)
    {
        let msg = '';
        if(produto.nomeProduto == ''){
            msg += '- Informe o nome do produto. \n'
        }
        if(produto.preço == ''){
            msg += '- Informe o preço do produto. \n'
        }
        if(msg != '') {
            alert(msg);
            return false;
        }
        return true;
    }
    cancelarProduto()
    {
        document.getElementById('produto').value = '';
        document.getElementById('preço').value = '';
    }
}
//instanciar o objeto dentro da variável
let produto = new Produto;