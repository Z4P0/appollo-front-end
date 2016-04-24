(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
