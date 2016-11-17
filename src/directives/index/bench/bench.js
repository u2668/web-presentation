import angular from "angular";
import tmpl from "./bench.html"; // for browserify-ng-html2js
import css from "./bench.css"; // for browserify-css
import poller from "angular-poller"; // dependenciy poller

const CHECK_INTERVAL = 400;

class Bench {
    constructor(poller, $scope) {
        this.poller = poller;
        let scorePoller = this._startPolling();
        $scope.$on("changeView", () => scorePoller.stop());
        this.number = 0;
    }

    _startPolling() {
        let scorePoller = this.poller.get("back-end", {
            action: "get",
            delay: CHECK_INTERVAL,
            argumentsArray: [{
                params: {

                }
            }
            ],
            smart: true
        });
        scorePoller.promise.then(null, null, response => {
            this.number = response.data;
        });
        return scorePoller;
    }
}

export default {
    dependencies: ["emguo.poller"],
    registerComponent: function (moduleName) {
        angular.module(moduleName)
            .component("bench", {
                templateUrl: "bench.html",
                controller: ["poller", "$scope", Bench]
            });
    }
};