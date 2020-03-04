bcuse smoke
gen hsgrad=0
replace hsgrad=1 if educ>=12
sum cigs cigpric educ age income restaurn
ci means cigs cigpric educ age income restaurn
ci means cigs if hsgrad==1
ci means cigs if hsgrad==0
reg cigs cigpric
reg cigs hsgrad
reg cigs age educ
reg cigs cigpric educ age income
reg cigs cigpric educ age income restaurn hsgrad
hist cigs, kdensity addlabels title("Consumption of Cigarettes")
graph export histogram.png, as (png) replace
scatter cigs cigpric || lfit cigs cigpric
graph export scatter.png, as (png) replace
