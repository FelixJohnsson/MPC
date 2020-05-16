const Discord = require('discord.js');
const fs = require('fs');

const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
const token = '';

const red = '#B20000';
const green = '#007300';
const blue = '#4C4CFF';
const prefix = ':B:';

bot.on('ready', () => {
    console.log(`
    ooo        ooooo     ooooooooo.         .oooooo.       
    88.       .888'       888   Y88.      d8P'   Y8b      
     888b     d'888       888   .d88'     888              
     8 Y88. .P  888       888ooo88P'      888              
     8  888'   888        888             888              
     8    Y     888  .o.  888         .o. 88b    ooo  .o. 
    o8o        o888o Y8P o888o        Y8P  Y8bood8P'  Y8P       


Online`)
});


bot.login(token);
