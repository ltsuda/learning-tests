# learning-tests

Unit, Integration, Contract, API and E2E

Initial thoughts

## Backend

-   KoaJS server
    -   Endpoints
        -   /addition
        -   /subtract
        -   /multiply
        -   /division
    -   NOTE: only two operands
-   Tests
    -   Unit for operation functions
    -   Integration for mocked endpoints responses (?)
    -   API for endpoint interactions
    -   Contract between Server and Frontend (1)
        -   Must study to understand if this is the correct type of test

## Frontend

-   Any framework or basic HTML
    -   Pages
        -   /addition
        -   /subtract
        -   /multiply
        -   /division
    -   NOTE: or only root page with destination endpoint tied to operator dropdown
-   Tests
    -   E2E
    -   (1) Contract, see backend section for details [Backend](#backend)
