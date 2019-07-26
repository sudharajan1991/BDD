$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TC1.feature");
formatter.feature({
  "line": 1,
  "name": "testautomation login",
  "description": "",
  "id": "testautomation-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Click on skip back button",
  "description": "",
  "id": "testautomation-login;click-on-skip-back-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#Mapping : after creating methods and all we hv to come here. to remove the warning creare next line and click backspace. warnign will be removed."
    },
    {
      "line": 7,
      "value": "#select the click on the line and click CTRL+move the mouse point over the line. It will show url link and it will link the java lines"
    }
  ],
  "line": 9,
  "name": "login to demo automation with URL \"http://demo.automationtesting.in/Index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Skip sign in should launch the register page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Register page should get display",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.automationtesting.in/Index.html",
      "offset": 35
    }
  ],
  "location": "Stepdefinition.login(String)"
});
formatter.result({
  "duration": 8045552029,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.skip()"
});
formatter.result({
  "duration": 3092737214,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.checkregisterpage()"
});
formatter.result({
  "duration": 97042431,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.closebrowser()"
});
formatter.result({
  "duration": 2375001670,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "checking firstname",
  "description": "",
  "id": "testautomation-login;checking-firstname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "login to demo automation with URL \"http://demo.automationtesting.in/Index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Skip sign in should launch the register page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Register page should get display and enter \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 21,
      "value": "#If we want to check more than one input(eg: firstname,lastname) then we have to give Scenario Outline: and by using Examples: we can enter all our inputs"
    }
  ],
  "line": 22,
  "name": "",
  "description": "",
  "id": "testautomation-login;checking-firstname;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname"
      ],
      "line": 23,
      "id": "testautomation-login;checking-firstname;;1"
    },
    {
      "cells": [
        "sudha",
        "rajan"
      ],
      "line": 24,
      "id": "testautomation-login;checking-firstname;;2"
    },
    {
      "cells": [
        "Saranya",
        "rajan"
      ],
      "line": 25,
      "id": "testautomation-login;checking-firstname;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "checking firstname",
  "description": "",
  "id": "testautomation-login;checking-firstname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "login to demo automation with URL \"http://demo.automationtesting.in/Index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Skip sign in should launch the register page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Register page should get display and enter \"sudha\" and \"rajan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.automationtesting.in/Index.html",
      "offset": 35
    }
  ],
  "location": "Stepdefinition.login(String)"
});
formatter.result({
  "duration": 7601575375,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.skip()"
});
formatter.result({
  "duration": 3357051355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sudha",
      "offset": 44
    },
    {
      "val": "rajan",
      "offset": 56
    }
  ],
  "location": "Stepdefinition.firstname(String,String)"
});
formatter.result({
  "duration": 2522954135,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.closebrowser()"
});
formatter.result({
  "duration": 2365195542,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "checking firstname",
  "description": "",
  "id": "testautomation-login;checking-firstname;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "login to demo automation with URL \"http://demo.automationtesting.in/Index.html\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Skip sign in should launch the register page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Register page should get display and enter \"Saranya\" and \"rajan\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://demo.automationtesting.in/Index.html",
      "offset": 35
    }
  ],
  "location": "Stepdefinition.login(String)"
});
formatter.result({
  "duration": 8038650316,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.skip()"
});
formatter.result({
  "duration": 4113779061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Saranya",
      "offset": 44
    },
    {
      "val": "rajan",
      "offset": 58
    }
  ],
  "location": "Stepdefinition.firstname(String,String)"
});
formatter.result({
  "duration": 2357734536,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.closebrowser()"
});
formatter.result({
  "duration": 2146556803,
  "status": "passed"
});
});