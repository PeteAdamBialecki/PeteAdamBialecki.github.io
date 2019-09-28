# **Visual Studio Code User Settings**

- For icons, use "Material Theme Icons" or ""Material Theme Icons Darker".

- For theme, use "One Dark Pro", "Resesif", or "1 Southwark Bridge Dark".

- [VSC Themes](http://orta.io/vscode-themes/)

## **User Settings: "setting.json"**

        {
            "workbench.iconTheme": "eq-material-theme-icons-darker",
            "window.zoomLevel": 1,
            "workbench.activityBar.visible": false,
            "search.location": "panel",
            "editor.tabSize": 4,
            "editor.detectIndentation": false,
            "workbench.statusBar.visible": true,
            "editor.minimap.enabled": false,
            "workbench.colorTheme": "1 Southwark Bridge Dark",
            "editor.renderWhitespace": "all",
            "editor.renderControlCharacters": true,
            "workbench.colorCustomizations": {
                "statusBar.background" : "#252526",
                "statusBar.noFolderBackground" : "#727272",
                "statusBar.debuggingBackground": "#727272"
            }
        }

# **Notes for future Github Website**

## **What are some samples that I can display?**

D3.js

    - Barcharts

    - Choropleth Maps

# **Mental Notes + Questions**

#### **11/8/2018**

How can I check the hex value of a background and if it is 50% to dark, add the CSS value of " filter: invert(1); " to the image?

[JavaScript Color Contraster](https://stackoverflow.com/questions/5650924/javascript-color-contraster#)

    var darkOrLight = function(red, green, blue) {
    var brightness;
    brightness = (red * 299) + (green * 587) + (blue * 114);
    brightness = brightness / 255000;

    // values range from 0 to 1
    // anything greater than 0.5 should be bright enough for dark text
    if (brightness >= 0.5) {
        return "dark-text";
    } else {
        return "light-text";
    }
    }

[Calculating Color Contrast](https://24ways.org/2010/calculating-color-contrast/)

    function getContrast50(hexcolor){
        return (parseInt(hexcolor, 16) > 0xffffff/2) ? 'black':'white';
    }

    function getContrast50(hexcolor){
     return (parseInt(hexcolor.replace('#', ''), 16) > 0xffffff/4) ? 'black':'white';
    }