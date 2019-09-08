# typescript-env-webpack-npm-gulp-less-openstreetmaps-concurrently
basic repository using typescript/env/webpack/npm/gulp/less/openstreetmaps/concurrently

npm run watchall for this to run:

"concurrently \"tsc --watch\" \"npx webpack --watch\" \"npx gulp\""

typescript will be compiled to javascript in the /target folder
.less will be compiled with gulp to .css
webpack will take the .css and .js files to the /dist folder and creates a bundle of the .css and .js
this .css and .js is imported in the index.html
