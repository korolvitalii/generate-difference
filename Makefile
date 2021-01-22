install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

gendiff:
	node bin/gendiff.js

testjest:
	npx -n '--experimental-vm-modules --no-warnings' jest

test-coverage:
	npm test -- --coverage --coverageProvider=v8
