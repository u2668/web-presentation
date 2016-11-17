import angular from "angular";
import tmpl from "./index.html"; // for browserify-ng-html2js
import css from "./index.css"; // for browserify-css
import bench from "./bench/bench";

class Index {
    constructor() {
    }
}


export default {
    dependencies: [].concat(
        bench.dependencies
    ),
    registerComponent: function (moduleName) {
        bench.registerComponent(moduleName);
        angular.module(moduleName)
            .component("index", {
                templateUrl: "index.html",
                controller: Index
            });
    }
};
