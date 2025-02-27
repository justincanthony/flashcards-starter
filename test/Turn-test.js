const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(
      1,
      'What allows you to define a set of related information using key-value pairs?',
      ['object', 'array', 'function'],
      'object'
    );
    turn = new Turn('array', card);
  });

  it('should be instantiated with two arguments', () => {
    expect(turn.guess).to.equal('array');
    expect(turn.card).to.deep.equal(card);
  });

  it('should be able to display a guess', () => {
    turn.returnGuess();

    expect(turn.returnGuess()).to.equal('array');
  });

  it('should be able to return the current card', () => {
    turn.returnCard();

    expect(turn.returnCard()).to.deep.equal({
      cardNum: 1,
      question:
        'What allows you to define a set of related information using key-value pairs?',
      answers: ['object', 'array', 'function'],
      correctAnswer: 'object',
    });
  });

  it("should be able to evaluate if the user's guess is correct", () => {
    turn.evaluateGuess();

    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should be able to give feedback depending on the answer', () => {
    turn.giveFeedback();

    expect(turn.giveFeedback()).to.equal('incorrect!');
  });
});
