describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Yellow or Blue desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(3) > .sub_list > :nth-child(1) > span > .link').click()

    // Juego -> Presionar el botón de generate color
    cy.get('.add').click()
    // Esperar dinámicamente a que el color aparezca en pantalla
    cy.get('.color', {timeout: 2000}).should('be.visible')


    cy.get('.color').invoke('text').then((colorText) => {
      // Iterar sobre los botones y seleccionar el que coincida con el texto
      cy.get('.yellow').invoke('text').then((yellowText) => {
          if (yellowText.trim() === colorText.trim()) {
            // Si el texto coincide, haz clic en el botón
            cy.get('.yellow').click()
          } else {
            // Si no coincide, haz clic en el botón azul
            cy.get('.blue').click()
          }
        })
      })
    // Verficar el mensaje de resultado
    cy.get('[data-testid="message"]', {timeout: 2000}).should('be.visible')
    cy.get('[data-testid="message"]').invoke('text').then((message) => {
      expect(message.trim()).to.eq('Success!')
    })
    })  
  })