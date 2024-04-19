package poo.trabalho.view;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import poo.trabalho.controller.ControleCliente;

public class Principal extends javax.swing.JFrame {

    public Principal() {
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel1 = new javax.swing.JPanel();
        botaoListarClientes = new javax.swing.JButton();
        botaoCadastrarCliente = new javax.swing.JButton();
        jPanel2 = new javax.swing.JPanel();
        botaoGeraRelatorio = new javax.swing.JButton();
        jPanel3 = new javax.swing.JPanel();
        botaoGeraRelatorio1 = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("TELA DE CADASTROS PRINCIPAL");
        setResizable(false);

        botaoListarClientes.setIcon(new javax.swing.ImageIcon(getClass().getResource("/poo/trabalho/img/listarCliente.png"))); // NOI18N
        botaoListarClientes.setText("     Listar Clientes");
        botaoListarClientes.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoListarClientesActionPerformed(evt);
            }
        });

        botaoCadastrarCliente.setIcon(new javax.swing.ImageIcon(getClass().getResource("/poo/trabalho/img/adicionarCliente.png"))); // NOI18N
        botaoCadastrarCliente.setText("     Cadastrar Cliente");
        botaoCadastrarCliente.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoCadastrarClienteActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addGap(24, 24, 24)
                .addComponent(botaoCadastrarCliente, javax.swing.GroupLayout.PREFERRED_SIZE, 241, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 78, Short.MAX_VALUE)
                .addComponent(botaoListarClientes, javax.swing.GroupLayout.PREFERRED_SIZE, 241, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(31, 31, 31))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(23, 23, 23)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(botaoCadastrarCliente)
                    .addComponent(botaoListarClientes))
                .addContainerGap(58, Short.MAX_VALUE))
        );

        jTabbedPane1.addTab("Cliente", jPanel1);

        botaoGeraRelatorio.setIcon(new javax.swing.ImageIcon(getClass().getResource("/poo/trabalho/img/relatorio.png"))); // NOI18N
        botaoGeraRelatorio.setText("      Gerar Relatorio");
        botaoGeraRelatorio.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoGeraRelatorioActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(botaoGeraRelatorio, javax.swing.GroupLayout.DEFAULT_SIZE, 615, Short.MAX_VALUE)
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(botaoGeraRelatorio, javax.swing.GroupLayout.DEFAULT_SIZE, 138, Short.MAX_VALUE)
        );

        jTabbedPane1.addTab("Relatorio", jPanel2);

        javax.swing.GroupLayout jPanel3Layout = new javax.swing.GroupLayout(jPanel3);
        jPanel3.setLayout(jPanel3Layout);
        jPanel3Layout.setHorizontalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 620, Short.MAX_VALUE)
        );
        jPanel3Layout.setVerticalGroup(
            jPanel3Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 131, Short.MAX_VALUE)
        );

        jTabbedPane1.addTab("Sobre", jPanel3);

        botaoGeraRelatorio1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        botaoGeraRelatorio1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                botaoGeraRelatorio1ActionPerformed(evt);
            }
        });
        jTabbedPane1.addTab("Sair", botaoGeraRelatorio1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jTabbedPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 620, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jTabbedPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 166, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(373, Short.MAX_VALUE))
        );

        setSize(new java.awt.Dimension(627, 547));
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void botaoGeraRelatorio1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoGeraRelatorio1ActionPerformed
        dispose();
    }//GEN-LAST:event_botaoGeraRelatorio1ActionPerformed

    private void botaoGeraRelatorioActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoGeraRelatorioActionPerformed
        // Aqui se gera um txt com os dados dos clientes cadastrados

        ControleCliente controle = new ControleCliente();

        try {
            if (controle.gerarRelatorio() == 1){
                JOptionPane.showMessageDialog(this, " Relatorio Gerado com sucesso! ");
            }

        } catch (IOException ex) {
            Logger.getLogger(Principal.class.getName()).log(Level.SEVERE, null, ex);
            System.out.println("Erro ao chamar controle.gerarRelatorio");
            JOptionPane.showMessageDialog(this, " Erro ao gerar Relatorio ");
        }

    }//GEN-LAST:event_botaoGeraRelatorioActionPerformed

    private void botaoCadastrarClienteActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoCadastrarClienteActionPerformed
        CadastrarCliente cadastrarCliente = new CadastrarCliente();
        cadastrarCliente.setVisible(true);
        dispose();
    }//GEN-LAST:event_botaoCadastrarClienteActionPerformed

    private void botaoListarClientesActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_botaoListarClientesActionPerformed
        new ListarCliente().setVisible(true);
        dispose();

    }//GEN-LAST:event_botaoListarClientesActionPerformed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Principal.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new Principal().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton botaoCadastrarCliente;
    private javax.swing.JButton botaoGeraRelatorio;
    private javax.swing.JButton botaoGeraRelatorio1;
    private javax.swing.JButton botaoListarClientes;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JTabbedPane jTabbedPane1;
    // End of variables declaration//GEN-END:variables
}
