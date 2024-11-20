import turtle

# Create a screen object
wn = turtle.Screen()
wn.bgcolor("light green")

# Create a turtle object
skk = turtle.Turtle()

# Draw a square
for i in range(4):
    skk.forward(100)  # Move forward by 100 units
    skk.right(90)     # Turn right by 90 degrees

# Finish
turtle.done()
