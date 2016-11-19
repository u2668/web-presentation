import angular from "angular";
import tmpl from "./car.html"; // for browserify-ng-html2js
import css from "./car.css"; // for browserify-css
import client from "../../client/client";

class Car {
    constructor() {
    }
}

export default {
    dependencies: ["emguo.poller"].concat(client.dependencies),
    registerComponent: function (moduleName) {
        angular.module(moduleName)
            .component("car", {
                templateUrl: "car.html",
                controller: [Car],
                bindings: {
                    passengers: "<",
                    time: "@",
                    place: "@"
                }
            });
    }
};