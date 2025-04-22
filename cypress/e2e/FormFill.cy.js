describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Form fill desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(4) > .sub_list > :nth-child(2) > span > .link').click()

    // Completar el formulario con fixtures
    cy.fixture('FormFill').then((data) => {
      data.forEach((user) => {
        cy.wait(1000) 
        cy.get(':nth-child(1) > input').clear().type(user.FirstName, { delay: 100 })
        cy.get(':nth-child(2) > input').clear().type(user.LastName, { delay: 100 })
        cy.get(':nth-child(3) > input').clear().type(user.Email, { delay: 100 })
        cy.get(':nth-child(4) > input').clear().type(user.Password, { delay: 100 })

        // Enviar el formulario
        cy.get('.btn_section > .form_btn').click()

        // Validar el mensaje de éxito
        cy.get('.save_message', {timeout: 10000}).should('be.visible')

        // Mostrar en base de datos el usuario agregado
        cy.get('.orange').click()

        // Verificar que el usuario se haya agregado correctamente
        cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text').then((text) => {
          expect(text.trim()).to.eq(user.FirstName+' '+user.LastName)
        }) 
        // Verificar que el correo electrónico se haya agregado correctamente
        cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then((text) => {
          expect(text.trim()).to.eq(user.Email)
        })
        cy.wait(3000)
        cy.reload() // Recargar la página para limpiar el formulario
      });
    })
  })
})