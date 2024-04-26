package poo.trabalho.controller;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import poo.trabalho.model.Cliente;

public final class ControleCliente {

    static ArrayList<Cliente> clientelist = new ArrayList();

    public ControleCliente() {
    }

    public void adicionarCliente(Cliente c) {
        clientelist.add(c);
    }

    public int idCliente() {
        return clientelist.size();
    }

    public void mostrarCliente() {
        clientelist.forEach((c) -> {
            System.out.println(c);
        });
    }

    public ArrayList<Cliente> clientelist() {
        return clientelist;
    }

    public int gerarRelatorio() throws IOException {
        System.out.println("vc Clicou em Gerar relatorio!");

        String caminho = "..\\2TrabalhoPOO\\listaClientes.txt";
        try (FileWriter escrita = new FileWriter(caminho); BufferedWriter escritor = new BufferedWriter(escrita)) {
            for (int i = 0; i < clientelist.size(); i++) {
                escritor.write(clientelist.get(i).toString());
                escritor.newLine();
            }
            escritor.flush();
            return 1;
        }
        
    }

}
