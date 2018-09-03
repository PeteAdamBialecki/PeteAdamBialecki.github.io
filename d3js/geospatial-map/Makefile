all: us.json	

clean:	
	rm -rf -- us.json build

.PHONY: all clean

build/cb_2017_us_county_20m.shp: build/cb_2017_us_county_20m.shp
	unzip -od $(dir $@) $<
	touch $@

	build/cb_2017_us_county_20m.zip
	mkdir -p $(dir $@)
	curl -o $@ http://www2.census.gov/geo/tiger/GENZ2017/shp/$(notdir $@)