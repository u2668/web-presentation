import angular from "angular";
import tmpl from "./cars.html"; // for browserify-ng-html2js
import css from "./cars.css"; // for browserify-css
import poller from "angular-poller"; // dependenciy poller
import settings from "../../../settings";
import car from "./car/car";

const CHECK_INTERVAL = 1000;

class Cars {
    constructor(poller, $scope) {
        this.poller = poller;
        let scorePoller = this._startPolling();
        $scope.$on("changeView", () => scorePoller.stop());
        this.cars = [];
    }

    _startPolling() {
        let scorePoller = this.poller.get("cars", {
            action: "get",
            delay: CHECK_INTERVAL,
            smart: true
        });
        scorePoller.promise.then(null, null, response => {
            this.cars = response.data;
        });
        return scorePoller;
    }
}

export default {
    dependencies: ["emguo.poller"].concat(car.dependencies),
    registerComponent: function (moduleName) {
        car.registerComponent(moduleName);
        angular.module(moduleName)
            .component("cars", {
                templateUrl: "cars.html",
                controller: ["poller", "$scope", Cars]
            });
    }
};