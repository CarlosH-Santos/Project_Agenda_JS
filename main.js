const form = document.getElementById("form-contatos");
const contatos = []; 
const numeros = [];  

let linhas = ''; 


form.addEventListener('submit', function(e){
    e.preventDefault();  

    addLinha();
    atualizaTabela();
})


function addLinha(){
    const inputNomedoContato = document.getElementById("nome-do-contato");  
    const inputNumerodeTelefone = document.getElementById("numero-de-telefone");
    
    if (contatos.includes(inputNomedoContato.value)){
        alert(`O numero: ${inputNumerodeTelefone.value} já foi incluso`);
    
    } else{
        contatos.push(inputNomedoContato.value); 
        numeros.push(parseFloat(inputNumerodeTelefone.value));
    
        let linha = '<tr>';  
        linha += `<td>${inputNomedoContato.value}</td>`; 
        linha += `<td>${inputNumerodeTelefone.value}</td>`;
        linha += `</tr>`; 
        
        linhas += linha;
    }

    inputNomedoContato.value = ''; 
    inputNumerodeTelefone.value = '';
};


function atualizaTabela(){
    const corpotabela = document.querySelector('tbody');  
    corpotabela.innerHTML = linhas;    
}
