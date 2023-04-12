import { youtubeSearch } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw 'Example:\n.song believer'
  let cari = await youtubeSearch(`${text}`)
    let dapet = cari.video
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['صوت 🎧', usedPrefix + 'opta ' + v.url + ' yes', '\n⌚ *مدة:* ' + v.durationH + '\n⏲️ *تم الرفع:* ' + v.publishedTime + '\n👁️ *المشاهدات:* ' + v.view + '\n📎 *الرابط:* ' + v.url]
        ]])
	})
	return conn.sendList(m.chat, '*───「 نتيجة البحث 」───*', `اختار الاغنية...\n*الاغنية يلي طلبته:* ${text}\n\nRetype *${usedPrefix + command}* حاول مره تانيه\n 𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃 `, author, `اختار 🔎`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['tools']
handler.command = /^اغنيه?$/i
handler.premium = false


export default handler
