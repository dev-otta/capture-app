Feature: The user interacts with the widgets on the enrollment add event page

  # Scenarios linked to the enrollment add event
  Scenario: The profile widget can be closed on the enrollment dashboard
    Given you land on the enrollment add event page by having typed #/enrollmentEventNew?programId=IpHINAT79UW&orgUnitId=DiszpKrYNg8&teiId=EaOyKGOIGRp&enrollmentId=wBU0RAsYjKE&stageId=A03MvHHogjR
    And you see the widget with data-test profile-widget
    When you click the widget toggle open close button with data-test profile-widget
    Then the widget profile should be closed

  Scenario: The profile widget can be closed and reopened on the enrollment dashboard
    Given you land on the enrollment add event page by having typed #/enrollmentEventNew?programId=IpHINAT79UW&orgUnitId=DiszpKrYNg8&teiId=EaOyKGOIGRp&enrollmentId=wBU0RAsYjKE&stageId=A03MvHHogjR
    And you see the widget with data-test profile-widget
    When you click the widget toggle open close button with data-test profile-widget
    And you click the widget toggle open close button with data-test profile-widget
    Then the profile details should be displayed

  Scenario: User can close the Enrollment Widget
    Given you land on the enrollment add event page by having typed #/enrollmentEventNew?programId=IpHINAT79UW&orgUnitId=DiszpKrYNg8&teiId=EaOyKGOIGRp&enrollmentId=wBU0RAsYjKE&stageId=A03MvHHogjR
    And the enrollment widget should be opened
    When you click the enrollment widget toggle open close button
    Then the enrollment widget should be closed

  Scenario: User can close and reopen the Enrollment Widget
    Given you land on the enrollment add event page by having typed #/enrollmentEventNew?programId=IpHINAT79UW&orgUnitId=DiszpKrYNg8&teiId=EaOyKGOIGRp&enrollmentId=wBU0RAsYjKE&stageId=A03MvHHogjR
    And the enrollment widget should be opened
    When you click the enrollment widget toggle open close button
    Then the enrollment widget should be closed
    When you click the enrollment widget toggle open close button
    Then the enrollment widget should be opened

  Scenario: User can see the enrollment details
    Given you land on the enrollment add event page by having typed #/enrollmentEventNew?programId=IpHINAT79UW&orgUnitId=DiszpKrYNg8&teiId=EaOyKGOIGRp&enrollmentId=wBU0RAsYjKE&stageId=A03MvHHogjR
    Then the enrollment widget should be opened
    And the user sees the enrollment status is Active
    And the user sees the enrollment date
    And the user sees the incident date
    And the user sees the enrollment organisation unit
    And the user sees the owner organisation unit
    And the user sees the last update date

  Scenario: User can open the delete modal
    Given you land on the enrollment add event page by having typed #/enrollmentEventNew?programId=IpHINAT79UW&orgUnitId=DiszpKrYNg8&teiId=EaOyKGOIGRp&enrollmentId=wBU0RAsYjKE&stageId=A03MvHHogjR
    Then the enrollment widget should be opened
    When the user opens the enrollment actions menu
    And the user clicks on the delete action
    Then the user sees the delete enrollment modal

  Scenario: User switch tab in add event page
    Given you land on the enrollment add event page by having typed #/enrollmentEventNew?programId=IpHINAT79UW&orgUnitId=DiszpKrYNg8&teiId=EaOyKGOIGRp&enrollmentId=wBU0RAsYjKE&stageId=A03MvHHogjR
    Then the enrollment widget should be opened
    Then you should see tabs: Report,Schedule
    When you click switch tab to Schedule
    Then you should see Schedule tab
    And you should see suggested date: 08-01

  Scenario: You can assign a user when scheduling an event
  Given you land on the enrollment edit event page by having typed /#/enrollmentEventNew?enrollmentId=zRfAPUpjoG3&orgUnitId=DiszpKrYNg8&programId=M3xtLkYBlKI&stageId=uvMKOn1oWvd&teiId=S3JjTA4QMNe
  When you click switch tab to Schedule
  Then you can assign a user when scheduling the event

  Scenario: User can complete the enrollment and the active events
    Given you land on the enrollment edit event page by having typed #/enrollmentEventNew?enrollmentId=YqNTNLKmX4z&orgUnitId=RzgSFJ9E46G&programId=IpHINAT79UW&teiId=mPLqCVS27AD
    And the enrollment widget should be opened
    And the user sees the enrollment status and the Baby Postnatal event status is active
    And the user opens the enrollment actions menu
    When the user completes the enrollment and the active events
    Then the user sees the enrollment status and the Baby Postnatal event status is completed

  Scenario: User can see the enrollment minimap
    Given you land on the enrollment dashboard page by having typed #/enrollmentEventNew?enrollmentId=LltDWGFdwTX&orgUnitId=DiszpKrYNg8&programId=IpHINAT79UW&teiId=lmcLfONF8rY&stageId=A03MvHHogjR
    Then you see the enrollment minimap
