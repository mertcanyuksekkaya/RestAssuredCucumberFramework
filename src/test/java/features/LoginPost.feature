# new feature
# Tags: optional

Feature: Login POST Features

  Scenario: I try login with out email
    Given I send post request /api/login with parameters
      | password | cityslicka |
    When I should see status code 400
    Then I should see following parameters
      | error | Missing email or username |

  Scenario: I try login with out password
    Given I send post request /api/login with parameters
      | email | eve.holt@reqres.in |
    When I should see status code 400
    Then I should see following parameters
      | error | Missing password |

  Scenario: I try login empty e-mail with out password
    Given I send post request /api/login with parameters
      | email |  |
    When I should see status code 400
    Then I should see following parameters
      | error | Missing email or username |

  Scenario: I try login empty password with out e-mail
    Given I send post request /api/login with parameters
      | password |  |
    When I should see status code 400
    Then I should see following parameters
      | error | Missing email or username |

  Scenario: I try login empty e-mail with password
    Given I send post request /api/login with parameters
      | email    |            |
      | password | cityslicka |
    When I should see status code 400
    Then I should see following parameters
      | error | Missing email or username |

  Scenario: I try login empty password with e-mail
    Given I send post request /api/login with parameters
      | email    | eve.holt@reqres.in |
      | password |                    |
    When I should see status code 400
    Then I should see following parameters
      | error | Missing password |

  Scenario: I try login with invalid e-mail and valid password data
    Given I send post request /api/login with parameters
      | email    | eve.holt@reqres.in1 |
      | password | cityslicka          |
    When I should see status code 400
    Then I should see following parameters
      | error | user not found |

  Scenario: I try login with valid e-mail and invalid password data
    Given I send post request /api/login with parameters
      | email    | eve.holt@reqres.in |
      | password | cityslicka1111     |
    When I should see status code 200

  Scenario: I try login with valid e-mail and valid password data
    Given I send post request /api/login with parameters
      | email    | eve.holt@reqres.in |
      | password | cityslicka         |
    When I should see status code 200
    Then I should see following parameters
      | token | QpwL5tke4Pnpja7X4 |

  Scenario: I try login with valid e-mail and valid password data
    Given I send post request /api/login with parameters
      | email    | eve.holt@reqres.in |
      | password | cityslicka         |
    When I should see status code 200
    Then I should see following parameters
      | token | not null |


