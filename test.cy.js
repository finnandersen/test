


   it('shoud open ', ()=>{
    cy.visit('https://byndyusoft.com/');
    cy.get('.know-more__container > .btn').click();
    cy.get('.popup-callback__footer-contacts > a').should('have.text', 'sales@byndyusoft.com')
});

