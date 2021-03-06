export function TimelineDirective() {
    'ngInject';

    let directive = {
        restrict: 'E',
        templateUrl: 'app/components/timeline/timeline.html',
        scope: {
            allPoints: '=',
            itemClick: '=',
            map: '=',
            setDataInfo: '=',
            timelineContentData: '=',
            guid: '='
        },
        controller: timelineController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

class timelineController {
    constructor() {
        'ngInject';

        // "this.creationDate" is available by directive option "bindToController: true"
        this.points = this.allPoints
    }

    getClassName(hour, intensidad) {
        let className = hour.replace(":", "")
        return 'hour-' + className + ' ' + 'intensidad-' + intensidad
      }
}
