# WB-Data Lab Hugo Setup

Before making a local build with Hugo, some adjustments have to be made.

1. First `npm install` to add the node_modules folder
2. Copy the `bootstrap` directory from the inside the `node_modules` directory and paste it into `WB-Data-Lab/static/assets/scss`.
3. Then copy the `vendor` directory into `WB-Data-Lab/static/`.


Now run `hugo server -D` to server your site.
Once the server is running, you can access the site through `localhost:1313`

Updated on: December 9, 2020
