1. Review popular online sources:
    - Census.gov > Geography > Maps and Data > Tiger Products > Cartographic Boundary Shapefiles
    - NaturalEarthData.com
2. Download Shape Files
3. Install Node modules, create Makefile with copied shape file download link, run "make Makefile".
4. http://bit.ly/usa-fips for FIPS codes.
    ogr2ogr
        -f GeoJSON // Output format
        counties-filtered.json // Output file
        build/us-counties.shp // Input file
        -where "STATEFP='06'" // Filtering≈