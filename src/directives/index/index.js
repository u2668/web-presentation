import angular from "angular";
import tmpl from "./index.html"; // for browserify-ng-html2js
import css from "./index.css"; // for browserify-css
import bench from "./bench/bench";
import cars from "./cars/cars";

class Index {
    constructor() {
    }
}


export default {
    dependencies: [].concat(
        bench.dependencies,
        cars.dependencies
    ),
    registerComponent: function (moduleName) {
        bench.registerComponent(moduleName);
        cars.registerComponent(moduleName);
        angular.module(moduleName)
            .component("index", {
                templateUrl: "index.html",
                controller: Index
            });
    }
};
