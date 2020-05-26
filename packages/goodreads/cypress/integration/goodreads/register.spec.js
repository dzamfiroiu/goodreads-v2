describe('Registration works', () => {
    beforeEach(() => {
      cy.request('POST', 'http://localhost:3000/test/snapshot', {})
      cy.visit('http://localhost:3000/register')
    })
    afterEach(() => {
      cy.request('POST', 'http://localhost:3000/test/restore-snapshot', {})
    })
    it('Can type into the input and the value changes', () => {
      cy.get('#email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
        .clear()
        .type('slow.typing@email.com', { delay: 100 })
        .should('have.value', 'slow.typing@email.com')
      cy.get('#password').should('have.attr', 'type', 'password')
      cy.get('#password').type('password').should('have.value', 'password')
      cy.get('#re-password').type('password').should('have.value', 'password')
  
      cy.server()
      // Listen to GET to comments/1
      cy.route('POST', '/auth/register').as('request')
  
      cy.get('button:contains("Register")').click()
  
      // wait for GET comments/1
      cy.wait('@request').its('status').should('eq', 201)
    })
    it('Looks as expected', () => {
        cy.document().toMatchImageSnapshot({ // this options object is optional and has some sane defaults
          "createDiffImage": true,                // Should a "diff image" be created, can be disabled for performance
          "threshold": 0.01,                      // Amount in pixels or percentage before snapshot image is invalid
          "name": "custom image name",            // Naming resulting image file with a custom name rather than concatenating test titles
          "separator": "custom image separator",  // Naming resulting image file with a custom separator rather than using the default ` #`
          "thresholdType": "percent",             // Can be either "pixel" or "percent"
        })
      })
  })