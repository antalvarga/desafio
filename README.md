
### Desafio backend

Crie uma API para cadastro, atualização, remoção e listagem de planos de telefonia. Deve ser possível realizar buscas por tipo, operadora ou plano específico, sempre utilizando também o DDD.
Características dos planos: Código do plano, Minutos, Franquia de internet, Valor, Tipo (Controle, Pós, Pré) e Operadora
Obs.: Cada plano pode estar ou não disponível para um ou mais DDDs.


> Algum projeto front-end usará nossa API
> MÉTODOS:
	post
	put
	delete
	get



### R.F.:
> Buscas sempre usando DDD
	. tipo
	. operadora
	. plano



### O que usei:

- Node
- Typescript
- Express
- Sqlite
- TypeOrm
- Cors


#### Requirements
- Node + NPM
- Yarn
- 

#### Running the projects

> Server Project

- Accessar a pasta backend e executar yarn install para instalar as dependências
- Acessar a pasta do projeto e executar as migrations para criar o banco de dados
	> yarn typeorm migration:run
	ou 
	> yarn typeorm migration:revert

- Depois de tudo instalado e o banco criado executar o projeto 
	> yarn dev

- Feito isso acessar a url no seu browser [localhost](http://localhost:3333) ;
- Execute the server project;



## Thank you
 
[Antal Varga](http://asvarga@gmail.com) 

