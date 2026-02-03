/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

setGlobalOptions({maxInstances: 10});

// Datos de monstruos
const monstersData = {
  monsters: [
    {
      id: "monster-1",
      name: "Dead Unicorn",
      attack: 60,
      defense: 40,
      hp: 10,
      speed: 80,
      type: "Type",
      imageUrl: "images/dead-unicorn.png",
    },
    {
      id: "monster-2",
      name: "Old Shark",
      attack: 50,
      defense: 20,
      hp: 80,
      speed: 90,
      type: "Type",
      imageUrl: "images/old-shark.png",
    },
    {
      id: "monster-3",
      name: "Red Dragon",
      attack: 90,
      defense: 80,
      hp: 90,
      speed: 70,
      type: "Type",
      imageUrl: "images/red-dragon.png",
    },
    {
      id: "monster-4",
      name: "Robot Bear",
      attack: 50,
      defense: 40,
      hp: 80,
      speed: 60,
      type: "Type",
      imageUrl: "images/robot-bear.png",
    },
    {
      id: "monster-5",
      name: "Angry Snake",
      attack: 80,
      defense: 20,
      hp: 70,
      speed: 80,
      type: "Type",
      imageUrl: "images/angry-snake.png",
    },
  ],
};

/**
 * Endpoint para obtener todos los monstruos
 */
exports.monsters = onRequest({cors: true}, (req, res) => {
  logger.info("Request to /monsters", {method: req.method});

  if (req.method === "GET") {
    res.json(monstersData.monsters);
  } else {
    res.status(405).json({error: "Method not allowed"});
  }
});

/**
 * Endpoint para batalla entre monstruos
 */
exports.battle = onRequest({cors: true}, (req, res) => {
  logger.info("Request to /battle", {method: req.method});

  if (req.method !== "POST") {
    res.status(405).json({error: "Method not allowed"});
    return;
  }

  const {monster1Id, monster2Id} = req.body;

  if (!monster1Id || !monster2Id) {
    res.status(400).json({message: "Missing ID"});
    return;
  }

  const monster1 = monstersData.monsters.find(
    (monster) => monster.id === monster1Id,
  );
  const monster2 = monstersData.monsters.find(
    (monster) => monster.id === monster2Id,
  );

  if (!monster1 || !monster2) {
    res.status(400).json({message: "Invalid ID"});
    return;
  }

  const monster1Sum =
    monster1.attack + monster1.defense + monster1.hp + monster1.speed;
  const monster2Sum =
    monster2.attack + monster2.defense + monster2.hp + monster2.speed;

  if (monster1Sum > monster2Sum) {
    res.json({winner: monster1, tie: false});
    return;
  }

  if (monster2Sum > monster1Sum) {
    res.json({winner: monster2, tie: false});
    return;
  }

  if (monster1Sum === monster2Sum) {
    res.json({winner: monster1, tie: true});
    return;
  }
});
