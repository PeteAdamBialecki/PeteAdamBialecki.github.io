1. Review popular online sources:
    - Census.gov > Geography > Maps and Data > Tiger Products > Cartographic Boundary Shapefiles
    - NaturalEarthData.com
2. Download Shape Files
3. Install Node modules, create Makefile with copied shape file download link, run "make Makefile".
4. http://bit.ly/usa-fips for FIPS codes (go to http://bit.ly/flicker-geo-api for State clipped areas and http://bit.ly/usa-fips for filtered areas).
    ogr2ogr
        -f GeoJSON // Output format
        counties-filtered.json // Output file
        build/us-counties.shp // Input file
        -where "STATEFP='06'" // Filtering

5. Converting GeoJSON to topojson
    geo2topo -o <output file> <input file>
        geo2topo -o topo-counties.json counties.json