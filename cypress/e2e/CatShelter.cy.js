describe('template spec', () => {
  it('passes', () => {
    // Entrar en la pantalla de Cat Shelter desde la pantalla de inicio
    cy.visit('https://thelab.boozang.com/')
    cy.get('.veggie_burger').click()
    cy.get(':nth-child(4) > .sub_list > :nth-child(3) > span > .link').click()

    // Por cada gato en el fixture, agregarlo a la lista
    cy.fixture('CatShelter').then((data) => {
      data.forEach((cat) => {
        // Agregar un gato
        cy.get('.cat_shelter_header > .link_btn').click()
        cy.get('.list_form > :nth-child(1) > input').clear().type(cat.name, { delay: 100 })
        cy.get('.go_out_or_not > :nth-child(2) > label > input').click()
        cy.wait(3000)
        cy.get('.text-center > .form_btn').click()
        cy.wait(5000)

        // Validar el nombre del gato agregado
        cy.get('.cat_name_link > span').last().invoke('text').then((text) => {
          expect(text.trim()).to.eq(cat.name)
        })
      });
    })
  })
})