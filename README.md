

api
	post
	put
	delete
	get
	

rf
--
	. Buscas sempre usando DDD
		. tipo
		. operadora
		. plano
		
	. PLANOS (plans)
		. id
		. descricao/especificacao
		. minutos
		. franquia internet
		. valor
		. tipo (controle, pós, pré)
		. operadora
		
	. DISPONIBILIDADE do plano (availability)
		. plano_id
		. DDD
		




insert into plans (description, minutes, internet, cost, type, operator) values ("2 novo gb teste", 10000, 2, 0, 'PRE', 'TIM' );
insert into plans (description, minutes, internet, cost, type, operator) values ("4 novo gb teste", 10000, 4, 40.75, 'POS', 'TIM' );
insert into plans (description, minutes, internet, cost, type, operator) values ("5 gb teste", 10000, 5, 49.99, 'CONTROLE', 'VIVO' );
insert into plans (description, minutes, internet, cost, type, operator) values ("8 gb teste", 10000, 8, 80, 'CONTROLE', 'OI' );
insert into plans (description, minutes, internet, cost, type, operator) values ("10 gb teste", 10000,10, 100, 'CONTROLE', 'CLARO' );
insert into plans (description, minutes, internet, cost, type, operator) values ("12 gb teste", 10000,12, 0, 'PRE', 'OI' );
insert into plans (description, minutes, internet, cost, type, operator) values ("14 gb teste", 10000,14, 140.01, 'PRE', 'CLARO' );
insert into plans (description, minutes, internet, cost, type, operator) values ("15 gb teste", 10000,16, 160, 'POS', 'TIM' );
insert into plans (description, minutes, internet, cost, type, operator) values ("25 gb teste", 10000,16, 160.99, 'POS', 'VIVO' );

