#include <iostream>

void drawCircle(int xc, int yc, int r) {
    int x = 0;
    int y = r;
    int d = 3 - 2 * r; // Initial decision parameter

    while (y >= x) {
        // Print the eight octants of the circle
        std::cout << "Pixel at: (" << xc + x << ", " << yc + y << ")\n";
        std::cout << "Pixel at: (" << xc - x << ", " << yc + y << ")\n";
        std::cout << "Pixel at: (" << xc + x << ", " << yc - y << ")\n";
        std::cout << "Pixel at: (" << xc - x << ", " << yc - y << ")\n";
        std::cout << "Pixel at: (" << xc + y << ", " << yc + x << ")\n";
        std::cout << "Pixel at: (" << xc - y << ", " << yc + x << ")\n";
        std::cout << "Pixel at: (" << xc + y << ", " << yc - x << ")\n";
        std::cout << "Pixel at: (" << xc - y << ", " << yc - x << ")\n";

        if (d <= 0) {
            d = d + 4 * x + 6; //updating Decision parameter
        } else {
            d = d + 4 * (x - y) + 10; //updating Decision parameter for the second time
            y--; // Move down in the circle
        }
        x++; // Move right in the circle
    }
}

int main() {
    drawCircle(5, 5, 3); // Sample circle with center at (5,5) and radius 3
    return 0;
}
