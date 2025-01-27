### Adapter

Adapts an existing interface to make it compatible with another interface.

## Why Use the Adapter Pattern?

- It is used when you have an existing class with an interface that doesn’t match what the client expects, and you want to reuse that class without modifying it.

## Examples

```python
# Square class
class Square:
    def __init__(self, side):
        self.side = side

# Function to calculate the area of a rectangle
def calculateArea(rectangle):
    return rectangle.width * rectangle.height

# Adapter class
class SquareToRectangleAdapter:
    def __init__(self, square):
        self.width = square.side
        self.height = square.side

# Example usage
square = Square(5)
adapter = SquareToRectangleAdapter(square)
area = calculateArea(adapter)

print(f"Area of the square (used as rectangle): {area}")
```
