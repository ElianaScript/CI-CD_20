import React from 'react';
import Quiz from "../../client/src/components/Quiz"
// @ts-ignore
import { mount } from 'cypress-react-unit-test';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
    });

  it('should render the quiz component', () => {
    // @ts-ignore
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    // @ts-ignore
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    // Answer questions
    cy.get('button').contains('1').click();

    // Verify the quiz completion
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
    // @ts-ignore
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();

    // Answer questions
    cy.get('button').contains('1').click();

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').click();

    // Verify the quiz is restarted
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
// @ts-ignore
});
