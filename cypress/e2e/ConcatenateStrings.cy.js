describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Concatenate Strings desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(7) > .sub_list > li > span > .link').click()

    // Generar strings
    cy.get('.strings_section > :nth-child(2)').click()


    // Verificar que los strings se generaron
    cy.get('.string1', { timeout: 10000 }).should('be.visible')

    // Obtener los textos de los strings
    cy.get('.string1').invoke('text').then((text1) => {
      cy.get('.string2').invoke('text').then((text2) => {
        const concatenatedText = text1.trim() + text2.trim()
        // Escribir el texto concatenado en el input
        cy.get('input', { timeout: 10000 }).clear().type(concatenatedText, { delay: 100 })
      })
    })

    // Seleccionar el botón de Submit String
    cy.get('.text-center > .form_btn').click()

    // Verificar el mensaje de éxito
    cy.get('[data-testid="message"]', {timeout: 2000}).should('be.visible')
    cy.get('[data-testid="message"]').invoke('text').then((message) => {
      expect(message.trim()).to.eq('Success!')
    })

  })
})