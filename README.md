# KNZ Cars

O objetivo desse desafio é construir um e-commerce voltado para veículos

Documentação oficial: [KNZ-Cars](https://knz-cars-deploy.onrender.com/) 

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

Consulte **[Implantação](#-implanta%C3%A7%C3%A3o)** para saber como implantar o projeto.

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Editor de texto (IDE) preferencialmente VScode pois foi nele que a aplicação foi desenvolvida
Uma ferramenta de teste e depuração de APIs para testes (Opicional)
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

Clonar o Repositório :

```
Clique no botão (<>code) e copie e chave SSH
```

Salvar uma copia do projeto em sua máquina:

```
Abra o diretorio onde será salvo o projeto e abra o terminal nesse diretório
Rode o comando git clone (chave SSH copiada)
Após isso você terá uma copia totalmente editavel de todo o projeto em sua maquina
```

## 📦 Implantação

Procedimentos para rodar a API localmente:

- Instalando as dependências necessárias

```
Na raiz do projeto abra o terminal e instale as dependências do projeto com o comando npm install
```

- Criando uma conta no  [cloudinary](https://console.cloudinary.com/)
```
Será necessário criar uma conta no servidor cloudinary para armazenamento das imagens usadas na aplicação 
Após crias sua conta o site irá disponibilizar suas credenciais de usuário 
```

- Manipulando o arquivo .env

```
Na raiz do projeto crie um arquivo chamado .env e dentro dele crie as variáveis de ambiente seguindo o padrão do arquivo .env.example
Configure suas variáveis de ambiente com suas credenciais do PostgresSQL e um novo banco de dados para estar utilizando no projeto.
Configure suas variáveis de ambiente com suas credenciais do cloudinary para armazenamento das imagens no projeto.
ATENÇÃO: Para que o servidor funcione corretamente as credenciais do arquivo .env devem estar exatamente iguais as credenciais do seu banco de dados PostegresSQL e não se esqueça de salvar o arquivo 
```

- Executando as migrates

```
Na raiz do projeto abra o terminal e execute as migrações com o comando npm run typeorm migration:run -- -d src/data-source
```

- Executando o servidor localmente

```
Execute o servidor localmente com o comando: npm run dev
```

## 🛠️ Construído com

Ferramentas e tecnologias usadas na criação do projeto

* [Node](https://nodejs.org/pt-br) - O framework Back-end 
* [Typescript](https://www.typescriptlang.org) - Linguagem de programação
* [PostgreSQL](https://www.postgresql.org) - Gerenciador de banco de dados
* [Insomnia](https://insomnia.rest) - Software para debug de requisições HTTP
* [VScode](https://code.visualstudio.com) - Editor de texto (IDE)
* [Dbeaver](https://dbeaver.io) - Vizualizador de banco de dados 

## ✒️ Autores

A API de gestão de biblioteca foi desenvolvida por uma equipe de desenvolvedores altamente qualificados. Aqui estão os desenvolvedores responsáveis pelo projeto:

*  [Rafael Rocha](https://github.com/Rafaelgot10)
*  [Carlos Araujo](https://github.com/carlosgaraujo)
*  [Edvan Rodrigues](https://github.com/edvanrodriguesdev)
*  [Gustavo Cruz](https://github.com/GustavoGCM)
*  [Herli Khoury](https://github.com/HerliKhoury)
*  [Mauí Buarque](https://github.com/mauibuarque)
*  [Ubiratan Christian](https://github.com/unChrkr)
  
Se você tiver alguma dúvida, sugestão ou feedback sobre a API,
sinta-se à vontade para entrar em contato com qualquer um dos desenvolvedores mencionados acima.
Eles terão prazer em ajudar e ouvir seu feedback.
