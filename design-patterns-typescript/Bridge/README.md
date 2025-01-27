### Bridge

Decouples abstraction from implementation so that they can evolve independently.

## Why Use the Adapter Pattern?

- It is typically used when you want to separate high-level logic (abstraction) from low-level details (implementation).

## Examples

```python
# Renderer implementation hierarchy
class Renderer:
    def render(self, shape):
        pass

class VectorRenderer(Renderer):
    def render(self, shape):
        print(f"Rendering {shape.name} as lines")

class RasterRenderer(Renderer):
    def render(self, shape):
        print(f"Rendering {shape.name} as pixels")

# Shape abstraction hierarchy
class Shape:
    def __init__(self, name, renderer):
        self.name = name
        self.renderer = renderer

    def draw(self):
        self.renderer.render(self)

class Circle(Shape):
    def __init__(self, renderer):
        super().__init__("circle", renderer)

# Usage
raster_renderer = RasterRenderer()
circle = Circle(raster_renderer)
circle.draw()  # Output: Rendering circle as pixels
```
