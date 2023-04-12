/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : 𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃
 * @author : 𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃 
 * @description : 𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃 
 * @version 𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃
 * @file : 𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃
 **/

 import fancyText from '../lib/fancy.js';

let handler = async (m, { conn, text, args }) => {
  if (!text) {
    return m.reply('Please provide some text to apply the styles to.');
  }

  const inputArgs = text.split(" ");
  const code = parseInt(inputArgs[0]);
  const message = inputArgs.slice(1).join(" ");

  if (!message) {
    return await m.reply('Reply to a text or type text after command with a numeric code\n_Example: .fancy 10 Hello_\n                      .fancy Hello world\n                      .fancy <reply> 13\n\n'+String.fromCharCode(8206).repeat(4001)+fancy.list('Text here',fancy));
  }

  try {
    if (!code) {
      return await m.reply(fancy.list(message, fancy));
    }
    return await m.reply(fancy.apply(fancy[code - 1], m.quotedMsg ? m.quotedMsg.text : message));
  } catch {
    return await m.reply('_No such style :(_');
  }
}


  handler.help = ['fancy <text>']
  handler.tags = ['tool','maker']
  handler.command = /^(fff|stext|ftext|fancy)$/i
  export default handler
