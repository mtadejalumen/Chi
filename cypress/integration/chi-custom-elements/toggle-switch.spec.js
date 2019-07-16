describe('Toggle Switch', () => {
  const selectors = [
    'toggle1',
    'toggle4',
    'toggle5',
  ];

  const assertion = (el, chainer, value) => {
    cy.get(el)
      .children()
      .first()
      .should('match', 'input')
      .and(chainer, value);
  };

  before(() => {
    cy.visit('tests/custom-elements/toggle-switch.html');
  });

  beforeEach(() => {
    selectors.forEach(s => {
      cy.get(`[data-cy=${s}]`, { timeout: 5000 })
        .should('have.class', 'hydrated')
        .as(s);
    });
  });

  it('Toggle switch should be included inside the custom element', () => {
    assertion('@toggle1', 'have.class', 'a-input -toggle');
  });

  it('Disabled toggle switch should be have appropriate attribute', () => {
    assertion('@toggle4', 'have.attr', 'disabled');
  });

  it('Clicking toggle switch should emit appropriate event', () => {
    const spy = cy.spy();
    let ans;

    cy.get('body').then((el) => {
      el.on('toggle', spy);
      el.on('toggle', (e) => {
        ans = e.detail;
      });
    });

    cy.get('@toggle5')
      .click()
      .then(() => {
        expect(spy).to.be.called;
        expect(ans).to.be.true;
      });
  });
});
