describe('Testes de Cadastro', () => {
  //Primeiro o usuario deve se cadastrar. O site leva para login e depois clica-se em cadastrar.
  it('Deve fazer o cadastro com sucesso', () => {
      cy.visit('https://front.serverest.dev/login');//visita a url
      cy.wait(1500);// Delay só para esperar carregar a pagina e entender a automacao.
      cy.get('[data-testid="cadastrar"]').click(); //clica para se cadastrar     
      cy.get('input[data-testid="nome"]').type('Pedro Tiago Joao');// add nome
      cy.get('input[data-testid="email"]').type('pedro_joao@gmail.com');// add email
      cy.get('input[data-testid="password"]').type('Pedro123');// add a senha de cadastro
      cy.get('[data-testid="checkbox"]').check();// seleciona a opcao de Administrador
      cy.get('button[type="submit"]').click();// clica no botao de cadastrar.     
})
  });

describe('Testes de Login', () => {
    //Depois de cadastrar o usuario, o proximo passo é fazer o login.
    it('Deve fazer login com sucesso', () => {
        cy.visit('https://front.serverest.dev/login');       
        cy.get('input[data-testid="email"]').type('pedro_joao@gmail.com');
        cy.get('input[data-testid="senha"]').type('Pedro123'); //Add senha de login.
        cy.get('button[type="submit"]').click();
        cy.wait(2000);
        cy.url().should('include', '/home'); //verifica se o login foi feito correto pela url /home   
  })
    });

describe('Teste de cadastro com email já cadastrado', () => {
      //Teste caso o email ja esteja em uso.    
      it('Email já cadastrado', () => {
          cy.visit('https://front.serverest.dev/cadastrarusuarios');
  
          //Preenche o formulário com um email já cadastrado
          cy.get('input[data-testid="nome"]').type('Pedro Tiago Joao');
          cy.get('input[data-testid="email"]').type('pedro_joao@gmail.com');
          cy.get('input[data-testid="password"]').type('Pedro123');
          cy.get('button[type="submit"]').click();
          cy.contains('Este email já está sendo usado').should('be.visible'); //Verifica se a mensagem aparece na tela.
         
    
      });
  });

describe('Mensagem de erro com credenciais invalidas', () => {
  //Verifica caso o usuario esteja tentando acessar uma conta invalida.
  it('Deve exibir mensagem credenciais inválidas', () => {
    cy.visit('https://front.serverest.dev/login');

    cy.get('input[data-testid="email"]').type('joao_rox@gmail.com');
    cy.get('input[data-testid="senha"]').type('Joao123');
    cy.get('button[type="submit"]').click();
    cy.contains('Email e/ou senha inválidos').should('be.visible');
});
  });
