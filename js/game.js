/* global Phaser */

// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: April 2023
// This is the Phaser3 game configuration file

import SplashScene from './splashScene.js'

// Our game scene

const splashScene  = new SplashScene()

//* Game scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background colour
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // We place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes
// Note: remember any 'key' (thing in single quotations) is global (across all files and the entire game) and CANNOT be reused!
game.scene.add('splashScene', splashScene)

// start title
game.scene.start('splashScene')
