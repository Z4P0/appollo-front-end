// var cheet = require('cheet');
var xhr = require('xhr');
var profileSetup = require('./profileSetup.js');

var appollo = (function () {

    'use strict';


    var moonPhasesDataURL = 'moon-phases.json';
    var moonPhasesJSON;



    function processMoonPhaseData (err, response, body) {
        moonPhasesJSON = JSON.parse(body);
    }



    // function createProfile () {

    // }


    // function nextProfileQuestion () {
    //     console.log('next');
    // }

    // function previousProfileQuestion () {
    //     console.log('back');
    // }


    // function setupProfilePage (domNode) {
    //     var profileData = [];

    //     // set the height of the domNode to equal that of the first question
    //     domNode.setAttribute('style', 'height: ' + domNode.firstElementChild.clientHeight + 'px;');

    //     // handle clicking the "next" button
    //     domNode.addEventListener('click', function (event) {
    //         // make sure they hit the next button
    //         if (event.target.hash !== undefined) {
    //             if (event.target.innerHTML === 'Ok') {
    //                 nextProfileQuestion();
    //             } else if (event.target.innerHTML === 'Back') {
    //                 previousProfileQuestion();
    //             }

    //             // grab the data submitted
    //             // console.log(event.target.offsetParent.querySelector('input').value);

    //             // remove the old active class
    //             var oldQuestion = domNode.querySelector('.active');
    //             if (oldQuestion !== null) {
    //                 oldQuestion.classList.toggle('active');
    //             }

    //             if (event.target.hash !== '#profile-finish') {
    //                 // add the new active class
    //                 domNode.querySelector(event.target.hash).classList.toggle('active');
    //             } else {
    //                 // all fields submitted, create profile
    //                 console.log('create the profile');
    //             }
    //         }
    //     });
    // }


    // function profilePageEventHandler (event) {

    // }




    function init() {
        // load up moon-phases data
        xhr.get(moonPhasesDataURL, processMoonPhaseData);

        var profileQuestions = document.querySelector('#profile-questions');
        if (profileQuestions !== null) {
            console.log('test');
            console.log(profileSetup);
            // setupProfilePage(profileQuestions);
        }

        // easter egg setup
        // cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () { alert('yo'); });
    }

    return {
        init: init
    };

}());

window.onload = appollo.init;
