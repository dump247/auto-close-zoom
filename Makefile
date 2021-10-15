FILES = manifest.json auto-close-zoom.js
PACKAGE = build/auto-close-zoom.xpi

$(PACKAGE): $(FILES)
	@mkdir -p build
	zip -FS $@ $^

clean:
	rm -rf build/

