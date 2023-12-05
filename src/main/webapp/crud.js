var valores = [];
var idpessoa = 0;

function novo(){
    var form = document.getElementById("formulario");
    var lista = document.getElementById("lista");

    //mostra o formulário 
    form.style.display = "block";
    //esconde lista 
    lista.style.display = "none";

    //lista os inputs
    id = 0;
    var nome = document.getElementById("nome");
    var dataLancamento = document.getElementById("dataLancamento");
    var genero = document.getElementById("genero");
    var paginas = document.getElementById("paginas");
    var autor = document.getElementById("autor");
    nome.value = "";
    dataLancamento.value = "";
    genero.value = "";
    paginas.value = "";
    autor.value = "";
    
    // foco no 1º campo:
    nome.focus();
}

function alterar(i){
    var form = document.getElementById("formulario");
    var lista = document.getElementById("lista");

    //mostra o formulário 
    form.style.display = "block";
    //esconde lista 
    lista.style.display = "none";

    //lista os inputs
    id = valores[i].id;
    var nome = document.getElementById("nome");
    var dataLancamento = document.getElementById("dataLancamento");
    var genero = document.getElementById("genero");
    var paginas = document.getElementById("paginas");
    var autor = document.getElementById("autor");
    nome.value = valores[i].nome;
    dataLancamento.value = valores[i].dataLancamento;
    genero.value = valores[i].genero;
    paginas.value = valores[i].paginas;
  	autor.value = valores[i].autor;
    
    // foco no 1º campo:
    nome.focus();
}

function salvar(){
	//valida campos obrigarotios
	if(document.getElementById("nome").value  == ""){
		alert("campo Nome é obrigaratório!");
		return;
	}
	
    //pega os dados digitados pelo usuário e monta um objeto
    var l = {
		id: id,
		nome: document.getElementById("nome").value,
		dataLancamento: document.getElementById("dataLancamento").value,
		genero: document.getElementById("genero").value,
		paginas: document.getElementById("paginas").value,
		autor: document.getElementById("autor").value
	};
   
   	//define se o método sera para inserir ou alterar
   	if (id == 0) {
		   metodo = "POST";
	   } else {
		   metodo = "PUT";
	   }
   
	//envia os dados para o servidor
	fetch("http://localhost:8080/Livros/Livros",
		{method: metodo,
	    body: JSON.stringify(l)
		}
	).then(resp => resp.json())
	.then(function (Retorno){
		escondeLoading();
		alert(Retorno.mensagem);
		
		var form = document.getElementById("formulario");
    	var lista = document.getElementById("lista");

    	//escondeo o formulário 
    	form.style.display = "none";
    	//mostra a lista 
    	lista.style.display = "block";
    	
    	// recarrega lista
    	listar();
    	
	});
    
}
function excluir(i){
 	id = valores[i].id; 
 
	//envia os dados para o servidor
	fetch("http://localhost:8080/Livros/Livros" + id,
		{method: "DELETE",
		}
	).then(resp => resp.json())
	.then(function (retorno){
		escondeLoading();
		alert(retorno.mensagem);
		
		var form = document.getElementById("formulario");
    	var lista = document.getElementById("lista");

    	//esconde o formulário 
    	form.style.display = "none";
    	//mostra a lista 
    	lista.style.display = "block";
    	
    	// recarrega lista
    	listar();
    	
	});
    
}

function cancelar(){
    var form = document.getElementById("formulario");
    var lista = document.getElementById("lista");

    //escondeo o formulário 
    form.style.display = "none";
    //mostra a lista 
    lista.style.display = "block";
}

function listar(){
	var lista = document.getElementById("dados");
    //limpa a lista
    fetch ("http://localhost:8080/Livros/Livros")
    .then(resp => resp.json())
    .then(dados => mostrar(dados));
}

function mostrar(dados){
	valores = dados;
    var lista = document.getElementById("dados");
    //limpa a lista
    lista.innerHTML ="";
    //percoorre a lista 
    for (var i in dados){
        lista.innerHTML += "<tr>"
                        + "<td>" + dados[i].id + "</td>"
                        + "<td>" + dados[i].nome + "</td>"
                        + "<td>" + dados[i].dataLancamento + "</td>"
                        + "<td>" + dados[i].genero + "</td>"
                        + "<td>" + dados[i].paginas + "</td>"
                        + "<td>" + dados[i].autor + "</td>"
                        + "<td> <input type='button' value='A' onclick='alterar("+i+")'/></td>"
                        + "<td> <input type='button' value='X' onclick='excluir("+i+")'/>"
                        +"</td>"
                        + "</tr>";
                        
    }
}

function mostraLoading(msg){
	var loa = document.getElementById("loading");
    var con = document.getElementById("conteudo");
    loa.style.display = "block";
	con.style.display = "none";
	loa.innerHTML = msg;
}

function escondeLoading(){
	var loa = document.getElementById("loading");
    var con = document.getElementById("conteudo");
    loa.style.display = "none";
	con.style.display = "block";
	
}
listar();