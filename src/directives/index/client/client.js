import angular from "angular";
import tmpl from "./client.html"; // for browserify-ng-html2js
import css from "./client.css"; // for browserify-css


class Client {
    constructor() {
        this.picUrl = "";
        switch (this.clientName) {
            case "Lynx Linux": {
                this.picUrl = "images/faces/yrumyancev.png";
                break;
            }
            case "Yurij Rumyancev": {
                this.picUrl = "images/faces/yrumyancev.png";
                break;
            }
            case "Aleksandr Aleksandrov": {
                this.picUrl = "images/faces/aalexandrov.png";
                break;
            }
            case "Александр Шушунов": {
                this.picUrl = "images/faces/ashushunov.png";
                break;
            }
            case "Игорь Дроздов": {
                this.picUrl = "images/faces/idrozdov.png";
                break;
            }
        }
    }

}

export default {
    dependencies: [],
    registerComponent: function (moduleName) {
        angular.module(moduleName)
            .component("client", {
                templateUrl: "client.html",
                controller: [Client],
                bindings: {
                    clientName: "@"
                }
            });
    }
};