import random

# snake water gun game
def game_win(comp, you):
    # If two values are equal, declare a tie
    if comp == you:
        return None
    
    # Check for all possibilities when the computer chose s
    elif comp == 's':
        if you == 'w':
            return False
        elif you == 'g':
            return True

    # Check for all possibilities when the computer chose w
    elif comp == 'w':
        if you == 'g':
            return False
        elif you == 's':
            return True

    # Check for all possibilities when the computer chose g
    elif comp == 'g':
        if you == 's':
            return False
        elif you == 'w':
            return True
                                    
print("Comp's Turn: Snake(s) Water(w) or Gun(g)?")
randNo = random.randint(1, 3)
if randNo == 1:
    comp = 's'
elif randNo == 2:
    comp = 'w'
elif randNo == 3:
    comp = 'g'
    
you = input("Your Turn: Snake(s) Water(w) or Gun(g)?")
a = game_win(comp, you)

print(f"Computer chose {comp}")
print(f"You chose {you}")

if a is None:
    print("The game is a tie!")
elif a:
    print("You win!")
else:
    print("You lose!")
