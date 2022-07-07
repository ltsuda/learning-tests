# learning-tests

Unit, Integration, Contract, API and E2E

Initial thoughts

## Backend

-   [x] KoaJS server
    -   [x] Endpoints
        -   [x] /addition
        -   [x] /subtraction
        -   [x] /multiplication
        -   [x] /division
        -   [x] /driversLicense
    -   NOTE: only two operands
-   [ ] Tests
    -   [x] Unit for operation functions
    -   [x] API for endpoint interactions
    -   [ ] Contract between Server and Frontend (1)
        -   Must study to understand if this is the correct type of test

## Frontend

-   [ ] Svelte
    -   [ ] Pages
        -   [ ] /
        -   [ ] /license
        -   [ ] /math
            - NOTE: operation selector directs the request to the correct API endpoint
-   [ ] Tests
    -   [ ] Integration/Component for mocked endpoints responses (?)
    -   [ ] E2E
    -   [ ] (1) Contract, see backend section for details [Backend](#backend)
