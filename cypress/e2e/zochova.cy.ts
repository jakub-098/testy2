describe("testing page zochova.sk", () => {
    it("get contact email", () => {
        cy.visit("https://zochova.sk/");

        const contactEmail = "office@zochova.sk";

        cy.get("#hamburger").click();
        cy.get("#header a").contains("Kontakt").click();
        cy.get("#pageContent").contains(contactEmail);
    });
});
