describe('Careers checking', () => {
    beforeEach(() => {
        const carrerText = 'We hire great people';
        cy
            .visit('/');
        cy
            .get('.nav-link-container div a[href*="careers"]:visible')
            .click();

        cy
            .url()
            .should('include', 'careers');
    });

    // this test will fail because of
    // regarding description of task it should only one record on a page
    // but there are two
    it('should find exact one record', () => {
        cy
            .get('.job-offer__title')
            .filter(':contains("QA Automation Engineer")')
            .should('have.length', 1)
    })

    it('should validate all titles', () => {
        cy
            .fixture('example').then(example => {
            cy
                .get('#search-job')
                .type(`${example.keyWord}`);

            cy
                .get('.job-offer__title')
                .each(($el, index, $list) => {
                    expect($el.text()).to.contains(example.keyWord);
                })
        });
    });
});
