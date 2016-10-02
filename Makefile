build :
	tsc --watch

lint :
	eslint hello-world.html
	polymer lint --input hello-world.html

wct :
	wct -p
