# Facade Pattern

> **Facade Pattern** provides a simplified, unified interface to a set of interfaces in a subsystem. This pattern defines a higher-level interface that makes the subsystem easier to use by hiding its complexities. In simple terms, it's like a gatekeeper or an interface that hides the intricate details of a larger, more complex system, and offers a cleaner, simpler API to the client.

### Usage

> In this example, the HomeTheaterFacade acts as the facade, simplifying multiple operations (turning on the projector, dimming the lights, playing the DVD, etc.) into two simple methods (watchMovie and endMovie). The client doesn't need to interact directly with the individual subsystems or worry about the order of operations. The facade handles all of this, offering a higher-level, streamlined interface.

```typescript
const projector = new Projector();
const dvd = new DVDPlayer();
const audio = new AudioSystem();
const lights = new AmbientLights();

const homeTheater = new HomeTheaterFacade(projector, dvd, audio, lights);

homeTheater.watchMovie("Inception");
// Output:
// Get ready to watch a movie...
// Projector is on.
// Lights dimmed to 30%.
// Audio System is on.
// Volume set to 5.
// Playing Inception.

homeTheater.endMovie();
// Output:
// Shutting down the theater...
// Projector is off.
// Audio System is off.
// DVD stopped.
// DVD ejected.
// Lights are on.
```
