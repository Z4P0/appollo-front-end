var profileSetup = (function () {

    'use strict';



    function createProfile () {

    }


    function nextProfileQuestion () {
        console.log('next');
    }

    function previousProfileQuestion () {
        console.log('back');
    }


    function setupProfilePage (domNode) {
        var profileData = [];
    }



    function init() {
        console.log('hello from profileSetup.js');
        // var profileQuestions = document.querySelector('#profile-questions');
        // if (profileQuestions !== null) {
        //     setupProfilePage(profileQuestions);
        // }
    }

    return {
        init: init
    };

}());

module.exports = profileSetup.init;
