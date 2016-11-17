import angular from "angular";
import index from "./directives/index/index";

const moduleName = "goToCanteen";

angular.module(moduleName, ["templates"].concat(
    index.dependencies
));

index.registerComponent(moduleName);
