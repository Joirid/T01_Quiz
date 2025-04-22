describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Wait Game desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(2) > .sub_list > :nth-child(2) > span > .link').click()

    // Juego -> Presionar el botón de start Game
    cy.get('[data-testid="startBtn"]').click()
    // Esperar 5 segundos
    cy.wait(5000)
    // Seleccionar botón de End Game
    cy.get('.delete').click()
  })
})