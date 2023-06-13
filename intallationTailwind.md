## Tailwind Install
- lancer la ligne de commande : <npx tailwindcss init>
- créer un fichier build qui accueillera notre application (index.html)
- créer un fichier src pour appliquer du style complémentaire à notre fichier de configuration tailwind
- lancer la commande <npx tailwind -i ./src/style.css -o ./build/css/style.css>
    -i notre fichier d'input
    -o notre fichier d'output
Cela va créer un dossier CSS 
- commande pour recompiler le css <npx tailwind -i ./src/style.css -o ./build/css/style.css --watch> pour pouvoir actualiser nos changements