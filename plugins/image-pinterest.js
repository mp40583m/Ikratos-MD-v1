import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `مثال ${usedPrefix + command} فري فاير`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*Search results*
${text}
`.trim(), m)
}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(بنتر)$/i

export default handler
