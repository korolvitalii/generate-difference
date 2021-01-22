install:
	npm install

publish:
	npm publish --dry-run

lint:
	npx eslint .

gendiff:
	node bin/gendiff.js

test-coverage:
	npm test -- --coverage --coverageProvider=v8

test:
	npx -n '--experimental-vm-modules --no-warnings' jest

