// var xhr = require('xhr');

var appollo = (function () {

    'use strict';


    // var moonPhasesDataURL = 'moon-phases.json';
    // var moonPhasesJSON;
    var user = {};



    // function processMoonPhaseData (err, response, body) {
    //     moonPhasesJSON = JSON.parse(body);
    // }



    function setupProfilePage (domNode) {

        // set the height of the domNode to equal that of the first question
        domNode.setAttribute('style', 'height: ' + domNode.firstElementChild.clientHeight + 'px;');

        // handle clicking the "next" button
        domNode.addEventListener('click', function (event) {
            // make sure they hit the next button
            if (event.target.hash !== undefined) {

                // get the data
                var questionId = event.target.offsetParent.id;
                if (questionId === 'step-1') {
                    // console.log('get name');
                    user.name = domNode.querySelector('#name').value;
                } else if (questionId === 'step-2') {
                    // get birthday info
                    user.birth = {
                        year: domNode.querySelector('#birth-year').value,
                        month: domNode.querySelector('#birth-month').value,
                        day: domNode.querySelector('#birth-day').value
                    };
                    user.birthday = user.birth.month + ' ' + user.birth.day + ', ' + user.birth.year;
                } else if (questionId === 'step-3') {
                    // get gender info
                    user.gender = event.target.offsetParent.querySelector('input[type="radio"]:checked').value;
                } else if (questionId === 'step-4') {
                    // get path info
                    user.path = event.target.offsetParent.querySelector('input[type="radio"]:checked').value;
                }

                // remove the old active class
                var oldQuestion = domNode.querySelector('.active');
                if (oldQuestion !== null) {
                    oldQuestion.classList.toggle('active');
                }


                domNode.querySelector(event.target.hash).classList.toggle('active');
            }
        });
    }



    function init() {
        // // load up moon-phases data
        // xhr.get(moonPhasesDataURL, processMoonPhaseData);

        var profileQuestions = document.querySelector('#profile-questions');
        if (profileQuestions !== null) {
            // console.log('test');
            // console.log(profileSetup);
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
