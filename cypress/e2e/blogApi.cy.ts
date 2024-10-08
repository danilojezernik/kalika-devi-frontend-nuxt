import {Blog} from "../../models/blog.model";

describe('Blog API test', () => {

    context('Public Intercept', () => {
        it('Get all blogs from endpoint', () => {
            cy.interceptAPI('GET', '/blog', 'getAllBlogs');
        });
    });

    context('Private Intercept', () => {

    })

    context('Public API', () => {
        it('should fetch all PUBLIC blogs successfully', () => {
            const blogProperties = ['title', 'podnaslov', 'kategorija', 'vsebina', 'image', 'datum_vnosa']
            cy.getApiAll('blog', blogProperties).then((blogs) => {
                expect(blogs.length).to.be.greaterThan(0)
            })
        })

        it('should fetch a single PUBLIC blog successfully', () => {
            cy.getAPIbyID('blog', '66c8580c291fee5a57a23457')
        })

        it('should fetch a limited amount of PUBLIC blogs successfully', () => {
            cy.getAPILimited('blog/limited/', 3)
        })
    })

    context('Private API', () => {

    })

})