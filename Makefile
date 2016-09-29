build :
	tsc

lint :
	eslint hello-world.html
	polymer lint --input hello-world.html