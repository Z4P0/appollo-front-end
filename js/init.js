// var cheet = require('cheet');
var xhr = require('xhr');

var appollo = (function () {

    'use strict';


    var moonPhasesDataURL = 'moon-phases.json';
    var moonPhasesJSON;



    function processMoonPhaseData (err, response, body) {
        // console.log(err, response, body);
        moonPhasesJSON = JSON.parse(body);
        // console.log(moonPhasesJSON);
    }



    function setupProfilePage (domNode) {

        // set the height of the domNode to equal that of the first question
        domNode.setAttribute('style', 'height: ' + domNode.firstElementChild.clientHeight + 'px;');

        // handle clicking the "next" button
        domNode.addEventListener('click', function (event) {
            if (event.target.hash !== undefined) {
                console.log('anchor tag thing');
            }
        });
    }



    function init() {
        // load up moon-phases data
        xhr.get(moonPhasesDataURL, processMoonPhaseData);

        var profileQuestions = document.querySelector('#profile-questions');
        if (profileQuestions !== null) {
            setupProfilePage(profileQuestions);
        }

        // easter egg setup
        // cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { alert('yo'); });
    }

    return {
        init: init
    };

}());

window.onload = appollo.init;
