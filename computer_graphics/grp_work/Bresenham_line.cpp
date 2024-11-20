#include <iostream>
#include <cmath>

void drawLine(int x1, int y1, int x2, int y2) {
    int dx = x2 - x1;
    int dy = y2 - y1;
    int steps = std::max(abs(dx), abs(dy));
    float xIncrement = dx / (float)steps;
    float yIncrement = dy / (float)steps;

    float x = x1;
    float y = y1;

    for (int i = 0; i <= steps; i++) {
        std::cout << "Pixel at: (" << round(x) << ", " << round(y) << ")\n";
        x += xIncrement;
        y += yIncrement;
    }
}

int main() {
    drawLine(0, 0, 10, 5); // Sample line from (0,0) to (10,5)
    return 0;
}
