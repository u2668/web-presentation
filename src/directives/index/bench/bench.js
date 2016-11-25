import angular from "angular";
import tmpl from "./bench.html"; // for browserify-ng-html2js
import css from "./bench.css"; // for browserify-css
import poller from "angular-poller"; // dependenciy poller
import settings from "../../../settings";
import client from "../client/client";
import _ from "lodash";

const CHECK_INTERVAL = 1000;

class Bench {
    constructor(poller, $scope) {
        this.poller = poller;
        let scorePoller = this._startPolling();
        $scope.$on("changeView", () => scorePoller.stop());
        this.clients = [];
    }

    _startPolling() {
        let scorePoller = this.poller.get("bench", {
            action: "get",
            delay: CHECK_INTERVAL,
            smart: true
        });
        scorePoller.promise.then(null, null, response => {
            this.clients = _.uniq(response.data);
        });
        return scorePoller;
    }
}

export default {
    dependencies: ["emguo.poller"].concat(client.dependencies),
    registerComponent: function (moduleName) {
        client.registerComponent(moduleName);
        angular.module(moduleName)
            .component("bench", {
                templateUrl: "bench.html",
                controller: ["poller", "$scope", Bench]
            });
    }
};