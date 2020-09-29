$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GETUsers.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "GET User Features",
  "description": "",
  "id": "get-user-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "I get user list",
  "description": "",
  "id": "get-user-features;i-get-user-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I send get request /api/users",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should see status code 200",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/users",
      "offset": 19
    }
  ],
  "location": "BaseRestSpec.IGetRequest(String)"
});
formatter.result({
  "duration": 3714073900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 2791100,
  "status": "passed"
});
formatter.uri("LoginPost.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "Login POST Features",
  "description": "",
  "id": "login-post-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "I try login with out email",
  "description": "",
  "id": "login-post-features;i-try-login-with-out-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "password",
        "cityslicka"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see status code 400",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "error",
        "Missing email or username"
      ],
      "line": 11
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 813404100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 184901,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 901070500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "I try login with out password",
  "description": "",
  "id": "login-post-features;i-try-login-with-out-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ],
      "line": 15
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I should see status code 400",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "error",
        "Missing password"
      ],
      "line": 18
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 490143799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 182100,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 27869999,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I try login empty e-mail with out password",
  "description": "",
  "id": "login-post-features;i-try-login-empty-e-mail-with-out-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        ""
      ],
      "line": 22
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I should see status code 400",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "error",
        "Missing email or username"
      ],
      "line": 25
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 509341500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 114301,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 17057201,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "I try login empty password with out e-mail",
  "description": "",
  "id": "login-post-features;i-try-login-empty-password-with-out-e-mail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "password",
        ""
      ],
      "line": 29
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I should see status code 400",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "error",
        "Missing email or username"
      ],
      "line": 32
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 461635999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 250399,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 28113401,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "I try login empty e-mail with password",
  "description": "",
  "id": "login-post-features;i-try-login-empty-e-mail-with-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        ""
      ],
      "line": 36
    },
    {
      "cells": [
        "password",
        "cityslicka"
      ],
      "line": 37
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I should see status code 400",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "error",
        "Missing email or username"
      ],
      "line": 40
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 483467799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 200400,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 29811200,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "I try login empty password with e-mail",
  "description": "",
  "id": "login-post-features;i-try-login-empty-password-with-e-mail",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ],
      "line": 44
    },
    {
      "cells": [
        "password",
        ""
      ],
      "line": 45
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I should see status code 400",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "error",
        "Missing password"
      ],
      "line": 48
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 430355099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 154800,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 17648801,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "I try login with invalid e-mail and valid password data",
  "description": "",
  "id": "login-post-features;i-try-login-with-invalid-e-mail-and-valid-password-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        "eve.holt@reqres.in1"
      ],
      "line": 52
    },
    {
      "cells": [
        "password",
        "cityslicka"
      ],
      "line": 53
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I should see status code 400",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "error",
        "user not found"
      ],
      "line": 56
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 441316800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 135799,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 28797799,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "I try login with valid e-mail and invalid password data",
  "description": "",
  "id": "login-post-features;i-try-login-with-valid-e-mail-and-invalid-password-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ],
      "line": 60
    },
    {
      "cells": [
        "password",
        "cityslicka1111"
      ],
      "line": 61
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "I should see status code 200",
  "keyword": "When "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 649495501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 226700,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "I try login with valid e-mail and valid password data",
  "description": "",
  "id": "login-post-features;i-try-login-with-valid-e-mail-and-valid-password-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 65,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ],
      "line": 66
    },
    {
      "cells": [
        "password",
        "cityslicka"
      ],
      "line": 67
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "I should see status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "token",
        "QpwL5tke4Pnpja7X4"
      ],
      "line": 70
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 465571100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 240601,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 33641199,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "I try login with valid e-mail and valid password data",
  "description": "",
  "id": "login-post-features;i-try-login-with-valid-e-mail-and-valid-password-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "I send post request /api/login with parameters",
  "rows": [
    {
      "cells": [
        "email",
        "eve.holt@reqres.in"
      ],
      "line": 74
    },
    {
      "cells": [
        "password",
        "cityslicka"
      ],
      "line": 75
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I should see status code 200",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I should see following parameters",
  "rows": [
    {
      "cells": [
        "token",
        "not null"
      ],
      "line": 78
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "/api/login",
      "offset": 20
    }
  ],
  "location": "BaseRestSpec.IPostRequest(String,DataTable)"
});
formatter.result({
  "duration": 459364600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "BaseRestSpec.ishouldSeeStatusCode(int)"
});
formatter.result({
  "duration": 163001,
  "status": "passed"
});
formatter.match({
  "location": "BaseRestSpec.iShouldSeeFollowingParameters(DataTable)"
});
formatter.result({
  "duration": 1526600,
  "status": "passed"
});
});