### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  def checkforAce(card) # should use cammel case for best practise
    if card.value = 1 # should be ==
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) # should use def not dif. Comma between card1 and card2.
  if card1.value > card2.value
    return card.name # should be card1.suit
  else
    card2 # use return card2
  end
end
end # one extra end here, not needed.

def self.cards_total(cards) # self. not needed in method name.
  total # total should be = 0
  for card in cards
    total += card.value
    return "You have a total of" + total # use interpolation and return statement should be between the two end statements.
  end
end
