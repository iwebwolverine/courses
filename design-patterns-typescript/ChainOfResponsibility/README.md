### Chain of Responsibility Pattern

- Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

- The pattern lets you link several handlers into one chain and, upon receiving a request, “ask” each handler whether it can process it. This way all handlers get a chance to process the request.

## Why Use the Chain of Responsibility Pattern?

Use the Chain of Responsibility pattern when your program is expected to process different kinds of requests in various ways, but the exact types of requests and their sequences are unknown beforehand.

## Examples

### You are given a game scenario with classes Goblin and GoblinKing. Please implement the following rules:

- A goblin has base 1 attack/1 defense (1/1), a goblin king is 3/3.

- When the Goblin King is in play, every other goblin gets +1 Attack.

- Goblins get +1 to Defense for every other Goblin in play (a GoblinKing is a Goblin!).

```javascript
class Query {
  constructor(creature, statName, initialValue) {
    this.creature = creature;
    this.statName = statName;
    this.value = initialValue;
  }
}

class Goblin {
  constructor(game, unitName = "Goblin", baseAttack = 1, baseDefense = 1) {
    this.baseAttack = baseAttack;
    this.baseDefense = baseDefense;
    this.unitName = unitName;

    game.subscribe(this.handleQuery.bind(this));
    this.game = game;
  }

  handleQuery(query) {
    if (query.creature === this) return;
    if (
      Goblin.prototype.isPrototypeOf(query.creature) &&
      query.statName === "defense"
    ) {
      query.value += 1;
    }
  }

  get attack() {
    const query = new Query(this, "attack", this.baseAttack);

    this.game.handleQuery(query);

    return query.value;
  }

  get defense() {
    const query = new Query(this, "defense", this.baseDefense);

    this.game.handleQuery(query);

    return query.value;
  }
}

class GoblinKing extends Goblin {
  constructor(game) {
    super(game, "GoblinKing", 3, 3);
  }

  handleQuery(query) {
    super.handleQuery(query);
    if (query.creature.unitName === "Goblin" && query.statName === "attack") {
      query.value += 1;
    }
  }

  get attack() {
    const query = new Query(this, "attack", this.baseAttack);

    this.game.handleQuery(query);

    return query.value;
  }
}

class Game {
  constructor() {
    this.events = [];
  }

  subscribe(handler) {
    this.events.push(handler);
  }

  handleQuery(query) {
    this.events.forEach((handler) => handler(query));
  }
}

let game = new Game();

let goblin = new Goblin(game);

let goblinKing = new GoblinKing(game);

console.log("Goblin attack is: ", goblin.attack);
console.log("Goblin defense is: ", goblin.defense);
```
