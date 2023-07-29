// FUNÇÃO PARA CADASTRO DE USUÁRIO

var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    
    if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        console.log(dadosLista);
        document.getElementById('nomeUser').value = '';
    }
}

// FUNÇÃO PARA EXIBIR NOME DA TELA

function criaLista(){
    let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome de usuário</th><th>Ações</th></tr>";

    for(let i=0;i <= (dadosLista.length - 1);i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// FUNÇÃO PARA EDIÇÃO DE NOME

function editar(i){
    document.getElementById('nomeUser').value = dadosLista[(i-1)];
    dadosLista.splice(dadosLista[(i-1)], 1);
    console.log(dadosLista);
}

// FUNÇÃO PARA DELEÇÃO DE NOME

function excluir(i){
    dadosLista.splice((i-1), 1);
    document.getElementById('tabela').deleteRow(i);
    console.log(dadosLista);
}