/* global Phaser */

// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: April 2023
// This is the Phaser3 game configuration file

const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  backgroundColor: 0x5f6e7a
}

const game = new Phaser.Game(config)
console.log(game)