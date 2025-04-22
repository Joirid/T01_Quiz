describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Yellow or Blue desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(4) > .sub_list > :nth-child(2) > span > .link').click()
  })
})