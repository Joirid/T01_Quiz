describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Speed Game desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(2) > .sub_list > :nth-child(1) > span > .link').click()

    // Juego -> Presionar el botón de start Game
    cy.get('[data-testid="startBtn"]').click()
    // Esperar dinámicamente a que el botón de End Game aparezca en pantalla
    cy.get('.delete', {timeout: 20000}).should('be.visible').click()
  })
})