#include <iostream>
#include <cmath>
#include <graphics.h>  // For graphical output (graphics.h is part of Turbo C++ and other libraries like WinBGI)

void bresenhamLine(int x1, int y1, int x2, int y2) {
    int dx = x2 - x1;
    int dy = y2 - y1;
    int dx2 = 2 * dx;
    int dy2 = 2 * dy;
    int x = x1;
    int y = y1;
    int p = dy2 - dx;  // Initial decision parameter

    if (dy < 0) {  // If the line is steep (dy < dx)
        dy = -dy;
        dx2 = -dx2;
    }

    if (dx < 0) {  // If the line is drawn from right to left
        std::swap(x1, x2);
        std::swap(y1, y2);
    }

    putpixel(x, y, WHITE);  // Put the first pixel

    while (x < x2) {
        x++;
        if (p < 0) {
            p += dy2;
        } else {
            y++;
            p += dy2 - dx2;
        }
        putpixel(x, y, WHITE);  // Plot the current pixel
    }
}

int main() {
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "");  // Initialize graphics mode

    // Example: Draw a line from (100, 100) to (200, 200)
    bresenhamLine(100, 100, 200, 200);

    getch();  // Wait for a key press
    closegraph();  // Close the graphics window
    return 0;
}
