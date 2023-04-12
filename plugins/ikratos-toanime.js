import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ""
if (!/image/g.test(mime)) throw '*Respond to an image*'
m.reply('*بي الامر ده تقدر تحول صوره عاظيه لي انمي\nاصبر 🤌...\n\n\n𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃 • 𝙴𝙻 𝟹𝙼𝙳𝙰 𝙱𝙾𝚃\رقم المطور: +201284329186*')    
let data = await q.download?.()
let image = await uploadImage(data)
try {
let anime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkeysapi}&img=${image}`
await conn.sendFile(m.chat, anime, 'error.jpg', null, m)
} catch (i) {
try {
let anime2 = `https://api.zahwazein.xyz/photoeditor/jadianime?url=${image}&apikey=${keysxxx}`
await conn.sendFile(m.chat, anime2, 'error.jpg', null, m) 
} catch (a) {    
try{    
let anime3 = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`
await conn.sendFile(m.chat, anime3, 'error.jpg', null, m) 
} catch (e) {
throw '*حدث خطأما*'
}}}}
handler.help = ["toanime"]
handler.tags = ["tools"]
handler.diamond = true
handler.command = /^(انمي|toanime)$/i
export default handler
