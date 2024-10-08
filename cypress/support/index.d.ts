// cypress/support/index.d.ts
import {Blog} from '../../models/blog.model'; // Adjust the import path as needed

declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to make GET API requests
             * @param url - The API endpoint URL
             * @param expectedProperies - The expected properties in the response
             */
            getApiAll(url: string, expectedProperies?: string[]): Chainable<Blog[]>;

            /**
             * Custom command to make GET API requests by ID
             * @param url - The API endpoint URL
             * @param id - The ID for the GET request
             */
            getAPIbyID(url: string, id: string): Chainable<Blog>;

            /**
             * Custom command to make GET API requests with a limit
             * @param url - The API endpoint URL
             * @param limit - The limit for the GET request
             */
            getAPILimited(url: string, limit: number): Chainable<Blog[]>;

            /**
             * Custom command to make POST API requests
             * @param url - The API endpoint URL
             * @param body - The request body
             */
            postAPI(url: string, body: any): Chainable<any>;

            /**
             * Custom command to intercept API requests
             * @param url - The API endpoint URL
             * @param method - The HTTP method to intercept
             * @param alias - Alias for interceptor
             */
            interceptAPI(url: string, method: string, alias: string): Chainable<any>;
        }
    }
}