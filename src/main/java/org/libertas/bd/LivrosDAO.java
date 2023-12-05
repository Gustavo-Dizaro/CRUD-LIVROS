package org.libertas.bd;

import java.sql.Statement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.LinkedList;
import java.util.List;


public class LivrosDAO {
	public void inserir(Livros l) {
		Conexao con = new Conexao();
		try {
			String sql = "INSERT INTO livros"
					+ " (nome, dataLancamento, genero, paginas, autor ) VALUES (?, ?, ?, ?, ?) ";
			PreparedStatement prep = con.getConexao().prepareStatement(sql);
			prep.setString(1, l.getNome());
			prep.setString(2, l.getdataLancamento());
			prep.setString(3, l.getGenero());
			prep.setString(4, l.getPaginas());
			prep.setString(5, l.getAutor());
			prep.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
	}
	public void alterar(Livros l) {
		Conexao con = new Conexao();
		try {
			String sql = "UPDATE livros"
					+ " SET nome = ?, dataLancamento = ?, genero = ?, paginas = ?, autor = ?  "
					+ " WHERE id = ? ";
			PreparedStatement prep = con.getConexao().prepareStatement(sql);
			prep.setString(1, l.getNome());
			prep.setString(2, l.getdataLancamento());
			prep.setString(3, l.getGenero());
			prep.setString(4, l.getPaginas());
			prep.setString(5, l.getAutor());
			prep.setInt(6, l.getId());
			prep.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		
	}
	
	public void excluir(Livros l) {
		Conexao con = new Conexao();
		try {
			String sql = " DELETE FROM livros "
					+ " WHERE id = ? ";
			PreparedStatement prep = con.getConexao().prepareStatement(sql);
			prep.setInt(1, l.getId());
			
			prep.execute();
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		
	}

	public Livros consultar(int id) {

		Livros l = new Livros();
		Conexao con = new Conexao();
		try {
			String sql = "SELECT * FROM livros WHERE id = " + id;
			Statement sta = con.getConexao().createStatement();
			ResultSet res = sta.executeQuery(sql);
			while (res.next()) {
				l.setId(res.getInt("id"));
				l.setNome(res.getString("nome"));
				l.setdataLancamento(res.getString("dataLancamento"));
				l.setGenero(res.getString("gereno"));
				l.setPaginas(res.getString("paginas"));
				l.setAutor(res.getString("autor"));
				
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		return l;
	}
		
	public List<Livros> listar(){
		List<Livros> lista = new LinkedList<Livros>();
			Conexao con = new Conexao();
		
		try {
			String sql = "SELECT * FROM livros ORDER BY id";
			Statement sta = con.getConexao().createStatement();
			ResultSet res = sta.executeQuery(sql);
			while (res.next()) {
				Livros l = new Livros();
				l.setId(res.getInt("id"));
				l.setNome(res.getString("nome"));
				l.setdataLancamento(res.getString("dataLnacamento"));
				l.setGenero(res.getString("genero"));
				l.setPaginas(res.getString("paginas"));
				l.setAutor(res.getString("autor"));
				
				lista.add(l);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		con.desconectar();
		return lista;
	}
}

