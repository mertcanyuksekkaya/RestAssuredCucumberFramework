# new feature
# Tags: optional

Feature: GET User Features

  Scenario: I get user list
    Given I send get request /api/users
    When I should see status code 200

