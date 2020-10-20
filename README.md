
# Preliminar

	Embora, nosso projeto seja backend, e conceitualmente não haveria a camada View, eu uso essa camada, como tratamento para os dados que serão externados na nossa api, visto que, há casos em que precisamos fazer um tratamento da informação antes de disponiblizá-la.  




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
- Migrations
- Cors



#### Requirements

- Node + NPM
- Yarn
- insomnia



#### Executando 

> Server Project

- Accessar a pasta backend e executar yarn install para instalar as dependências.

- Acessar a pasta do projeto e executar as migrations para criar o banco de dados:
	> yarn typeorm migration:run
	ou 
	> yarn typeorm migration:revert

- Depois de tudo instalado e o banco criado executar o projeto 
	> yarn dev

- Feito isso acessar a url no seu browser [localhost](http://localhost:3333) ;

- Execute the server project;

- No insomnia (ou postman)
> Criar plano
	POST: http://localhost:3333/plans
{
	"description": "Plano TOP - VIP"
	, "minutes": 700000
	, "internet": 700000
	, "cost": 77.77
	, "type": "POS"
	, "operator": "VIVO"
	, "availabilities": [
		{"plan_id": 16, "ddd": "21"}
		, {"plan_id": 16, "ddd": "11"}
	]
}

> Atualizar Plano
	PUT: http://localhost:3333/plans/14
{
	"description": "Plano TOP - VIP"
	, "minutes": 7000001
	, "internet": 7000001
	, "cost": 77.77
	, "type": "POS"
	, "operator": "VIVO"
}

> Excluir Plano
	DELETE: http://localhost:3333/plans/10

> Listar Plano
	GET: http://localhost:3333/plans

> Exibir Plano
	GET: http://localhost:3333/plans/14

> Exibir Plano por DDD e Tipo
	GET:  http://localhost:3333/plans/byDddType/21/POS

> Exibir Plano por DDD e plano
	GET:  http://localhost:3333/plans/byDddPlan/21/1

> Exibir Plano por DDD e Operadora
	GET:  http://localhost:3333/plans/byDddOperator/21/TIM




## Obrigado
 
[Antal Varga](http://asvarga@gmail.com) 

