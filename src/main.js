// Exercise 01: Normalized Movement
// Name: Rahamat Zaman
// Date: 10/20/23

// Spritesheet by ElvGames: https://elv-games.itch.io/free-fantasy-dreamland-sprites

"use strict"

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    width: 800,
    height: 750,
    scene: [ Movement ]
}

let game = new Phaser.Game(config)

let cursors
let { height, width } = game.config
let playerDirection; 
