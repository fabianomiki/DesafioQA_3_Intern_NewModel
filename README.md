# DesafioQA_3_Intern_NewModel

BACK-END:
  No desafio de back-end foi utilizado o framework Postman(versao 10.24.11), assim como solicitado.
  Foram criados duas pastas, a primeira, CRUD_API_usuarios, foi feito o CRUD como solicitado e com as respectivas mensagens de saidas.
  Ja na segunda pasta, Buscar_usuarios_lista, é para fazer a busca de algum usuario usando os parametros passados para a busca.
  Foram criadas 4 variaves globais(usar_id, user_nome, user_password, user_email) para que nao fosse um codigo muito cru e assim que é feito o delete/edicao de algum usuario os testes ainda passam, pois quando criado um novo usuario os dados sao armazenados nas variaveis globais. 
  O arquivo salvo na pasta de back-end é arquivo ".postman_collection", sendo assim necessario importar para o Postman para ser executado.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

FRONT-END:
   No desafio de back-end foi utilizado o framework Cypress(versao 13.7.2) e o Visual studio code. 
   Foram criados quatro testes:
     1 - Primeiro o usuario deve se cadastrar. O site leva para login e depois clica-se em cadastrar.
     2 - Depois de cadastrar o usuario, o proximo passo é fazer o login.
     3 - Testar caso o email ja esteja em uso.
     4 - Verificar caso o usuario esteja tentando acessar uma conta invalida.
      todos com o resultado PASS.
     
    O arquivo com o codigo esta em DesafioQA_3_Intern_NewModel -> Frontend_cypress_desafio -> cypress -> e2e -> Login_teste.cy.js
