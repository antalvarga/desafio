
select	pln.id 
,		pln.description

from plans pln
join availability avl on avl.plans_id = pln.id

where 1=1
and   avl.ddd = 21
and   pln.operator = 'VIVO'
