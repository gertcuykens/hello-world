build :
	polymer serve&
	babel src -w -s -o bundle.js

lint :
	eslint src
	polymer lint --input hello-world.html