import turtle


def draw_circles():
    # Set up the screen
    screen = turtle.Screen()
    screen.title("Circles Graphic")  # You can replace with your name
    screen.bgcolor("white")

    # Create and configure the turtle
    t = turtle.Turtle()
    t.hideturtle()
    t.speed(0)

    # Draw green background rectangle
    t.penup()
    t.goto(-200, 100)
    t.pendown()
    t.fillcolor("light green")
    t.begin_fill()
    for _ in range(2):
        t.forward(400)
        t.right(90)
        t.forward(200)
        t.right(90)
    t.end_fill()

    # Function to draw a circle with text
    def draw_labeled_circle(x, y, color, text):
        t.penup()
        t.goto(x, y - 50)  # Center position for circle
        t.pendown()
        t.fillcolor(color)
        t.begin_fill()
        t.circle(50)
        t.end_fill()

        t.penup()
        t.goto(x, y - 10)  # Position for text
        t.color("white")
        t.write(text, align="center", font=("Arial", 12, "bold"))

    # Draw the three circles with labels
    draw_labeled_circle(-120, 0, "red", "CST")
    draw_labeled_circle(0, 0, "royal blue", "SoICT")
    draw_labeled_circle(120, 0, "orange", "CS")

    screen.exitonclick()


if __name__ == "__main__":
    draw_circles()