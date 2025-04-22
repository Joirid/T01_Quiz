describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Yellow or Blue desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(4) > .sub_list > :nth-child(1) > span > .link').click()

    // Agregar dos elementos a la lista
    cy.get('input').type('Elemento 1', { delay: 100 })
    cy.get('.add').click()
    cy.wait(1000) // Esperar un segundo para que el elemento se agregue a la lista  

    cy.get('input').type('Elemento 2', { delay: 100 })
    cy.get('.add').click()
  })
})