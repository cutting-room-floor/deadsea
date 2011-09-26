UGLIFYJS = ./node_modules/.bin/uglifyjs
BANNER = ./node_modules/.bin/banner

build:
	$(BANNER) package.json > /tmp/header
	cat /tmp/header deadsea.js > /tmp/deadsea_amal
	$(UGLIFYJS) /tmp/deadsea_amal > deadsea.min.js

PHONY: build
