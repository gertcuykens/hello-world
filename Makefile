build :
	tsc
	# polymer serve&
	# babel src -w -s -o bundle.js

lint :
	eslint hello-world.html
	polymer lint --input hello-world.html