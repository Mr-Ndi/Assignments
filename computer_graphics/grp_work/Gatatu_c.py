import turtle

def draw_star(t, size):
    """Draw a single star"""
    for _ in range(5):
        t.forward(size)
        t.right(144)  # 144 degrees makes a five-pointed star

def star_fractal(t, size, level):
    """Recursively draw the star fractal pattern"""
    if level == 0:
        draw_star(t, size)
        return

    # Draw the central star
    draw_star(t, size)

    # Draw surrounding smaller stars in a pentagonal arrangement
    for angle in [0, 72, 144, 216, 288]:
        t.penup()
        t.forward(size * 1.5)  # Position closer to the center
        t.pendown()

        # Recursive call for smaller stars
        star_fractal(t, size / 3, level - 1)

        t.penup()
        t.backward(size * 1.5)  # Return to center
        t.right(72)  # Rotate for the next star

def setup_star_fractal():
    # Set up the screen
    screen = turtle.Screen()
    screen.title("Star Fractal")
    screen.bgcolor("white")

    # Create and configure the turtle
    t = turtle.Turtle()
    t.speed(0)  # Fastest speed
    t.color("blue")
    t.pensize(2)  # Increase pen thickness for visibility
    t.hideturtle()

    # Position the turtle to start drawing
    t.penup()
    t.goto(0, 0)
    t.setheading(90)  # Point upwards
    t.pendown()

    # Draw the fractal pattern
    star_fractal(t, 200, 4)  # Adjust size and recursion depth

    screen.exitonclick()

if __name__ == "__main__":
    setup_star_fractal()
