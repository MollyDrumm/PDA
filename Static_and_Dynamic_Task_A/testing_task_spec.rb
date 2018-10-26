require('minitest/autorun')
require_relative('card.rb')
require_relative('testing_task_2.rb')


class TestingTask < MiniTest::Test

  def test_check_for_ace()
   card1 = Card.new('Ace', 1)
   cardGame1 = CardGame.new()
   actual = cardGame1.check_for_ace(card1)
   assert_equal(true, actual)
 end

 def test_highest_card()
   card1 = Card.new('Hearts', 10)
   card2 = Card.new('Clubs', 5)
   cardgame2 = CardGame.new()
   actual = cardgame2.highest_card(card1, card2)
   assert_equal('Hearts', actual)
 end

 def test_cards_total()
   card1 = Card.new('Spades', 8)
   card2 = Card.new('Hearts', 9)
   cardgame3 = CardGame.new()
   cards = [card1, card2]
   actual = cardgame3.cards_total(cards)
   assert_equal("You have a total of 17", actual)

 end

end
