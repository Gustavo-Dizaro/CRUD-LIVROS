package org.libertas.bd;

public class Livros {
	private int id;
	private String nome;
	private String dataLancamento;
	private String genero;
	private String paginas;
	private String autor;

	
	
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getdataLancamento() {
		return dataLancamento;
	}
	public void setdataLancamento(String dataLancamento) {
		this.dataLancamento = dataLancamento;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	
	public String getPaginas() {
		return paginas;
	}
	public void setPaginas(String paginas) {
		this.paginas = paginas;
	}
	public String getAutor() {
		return autor;
	}
	public void setAutor(String autor) {
		this.autor = autor;
	}
	
	

}
