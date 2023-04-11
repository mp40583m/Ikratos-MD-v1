import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
import fs from 'fs'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  if (!args[0]) throw `*『اكتب الايموجيات يلي عاسز تدمجهم 』*\n\n*• مثال:*\n- ${usedPrefix + command} 🐱+👻\n\n[ لزم 2 ايموجي ]`
  let [emoji1, emoji2] = text.split`+`
  const anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
  if (anu.results[0] == undefined) throw '『مفيش كلام ده』'
  let emix = anu.results[0].media_formats.png_transparent.url
  let stiker = await sticker(false, emix, global.packname, global.author)
  conn.sendFile(m.chat, stiker, null, { asSticker: true }, m)
}

handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^(دمج|emix)$/i

export default handler
