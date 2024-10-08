/**
 * PUBLIC REQUESTS
 */

// Command for getting API response for GET methods
Cypress.Commands.add('getApiAll', (url: string, expectedProperties: string[] = []) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.config('baseUrl')}${url}`
    }).then((response) => {

        // First check status code, then check if response is an array and if it has more than 0 elements
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.be.greaterThan(0)

        // Second check if expected properties are in the response
        if (expectedProperties.length > 0) {
            // Loop through each item in the response and check if it has all expected properties
            // Passing in any as Cypress custom command does not support generics
            response.body.forEach((item: any) => {
                expectedProperties.forEach((property) => {
                    expect(item).to.have.property(property)
                })
            })
        }

        // Return response body
        return response.body
    })
})

// Command for getting API response for GET by ID methods
Cypress.Commands.add('getAPIbyID', (url: string, id: string) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.config('baseUrl')}${url}/${id}`
    }).then((response) => {
        expect(response.status).to.eq(200)
        return response.body
    })
})

// Command for getting API response for GET limited amount of blogs methods
Cypress.Commands.add('getAPILimited', (url: string, limit: number) => {
    cy.request({
        method: 'GET',
        url: `${Cypress.config('baseUrl')}${url}?limit=${limit}`
    }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.an('array')
        expect(response.body.length).to.eq(limit)
        return response.body
    })
})

/**
 * PRIVATE REQUESTS
 */

// Commands for POST requests
Cypress.Commands.add('postAPI', (url: string, body: any) => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config('baseUrl')}${url}`,
        body: body
    }).then((response) => {
        expect(response.status).to.eq(201)
        return response.body
    })
})

/**
 * PUBLIC INTERCEPTORS
 */

Cypress.Commands.add('interceptAPI', (method: string, url: string, alias: string) => {
    cy.intercept(method, url).as(alias)
})

/**
 * PRIVATE INTERCEPTORS
 */