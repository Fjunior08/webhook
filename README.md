# webhook
webhook made in Node.js with Express

Este é um guia para manutenção/utilização da API da Pecista - Distribuição e Representação de Autopeças.

## Informações Gerais

Você deve ter instalado em sua máquina a última versão do [Node.js](https://nodejs.org/en/) 
e o gerenciador de pacotes [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

### Rodando localmente o projeto
Na pasta root do projeto, digite no terminal para instalar as dependências: 

    yarn add


Em seguida, para rodar a aplicação:

    yarn dev

A aplicação estará rodando no: http://localhost:8080/

> **Nota:** É **necessário** a criação de um aquirvo  ***db.js*** dentro da pasta *src/**config*** com as credenciais para conexão com banco de dados. *Veja o exemplo:*

    module.exports  = {
    username:  'usuario',
    password:  'senha',
    database:  'database',
    host:      'exemplo.com',
    dialect:   'mysql',
    define: {
	    timestamps:  false,
	    },
	};



Gerar o Executavel
--->
"build": "mkdir dist && pkg ."
},
  "bin": "index.js",
  "pkg": {
      "assets": [
          "view"
      ],
      "outputPath": "dist",
      "targets": [
          "node14-win-x64"
      ]
},
<---
