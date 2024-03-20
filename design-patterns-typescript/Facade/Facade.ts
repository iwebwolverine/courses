class Projector {
    on(): void {
        console.log('Projector is on.');
    }
    off(): void {
        console.log('Projector is off.');
    }
}

class DVDPlayer {
    play(movie: string): void {
        console.log(`Playing ${movie}.`);
    }
    stop(): void {
        console.log('DVD stopped.');
    }
    eject(): void {
        console.log('DVD ejected.');
    }
}

class AudioSystem {
    on(): void {
        console.log('Audio System is on.');
    }
    setVolume(level: number): void {
        console.log(`Volume set to ${level}.`);
    }
    off(): void {
        console.log('Audio System is off.');
    }
}

class AmbientLights {
    dim(level: number): void {
        console.log(`Lights dimmed to ${level}%.`);
    }
    on(): void {
        console.log('Lights are on.');
    }
}

class HomeTheaterFacade {
    constructor(
        private projector: Projector,
        private dvd: DVDPlayer,
        private audio: AudioSystem,
        private lights: AmbientLights
    ) {}

    watchMovie(movie: string): void {
        console.log('Get ready to watch a movie...');
        this.projector.on();
        this.lights.dim(30);
        this.audio.on();
        this.audio.setVolume(5);
        this.dvd.play(movie);
    }

    endMovie(): void {
        console.log('Shutting down the theater...');
        this.projector.off();
        this.audio.off();
        this.dvd.stop();
        this.dvd.eject();
        this.lights.on();
    }
}