import turtle


def setup_octagonal_spiral():
    # Set up the screen
    screen = turtle.Screen()
    screen.title("Colorful Octagonal Spiral")
    screen.bgcolor("white")

    # Create and configure the turtle
    t = turtle.Turtle()
    t.speed(2)  # Fastest speed
    t.hideturtle()

    # Colors for the spiral
    colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'cyan', 'magenta']

    # Starting size and position
    size = 10
    t.pensize(5)

    # Draw the spiral
    for i in range(50):  # Number of segments
        t.color(colors[i % 8])  # Cycle through colors
        t.forward(size)
        t.right(45)  # 45 degrees for octagon
        size += 5  # Increase size for spiral effect

    screen.exitonclick()


if __name__ == "__main__":
    setup_octagonal_spiral()