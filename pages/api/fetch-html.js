// pages/api/fetch-html.js
import axios from 'axios'
import * as cheerio from 'cheerio'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { url } = req.body
  try {
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'KeywordDensityBot/1.0'
      }
    })

    const $ = cheerio.load(response.data)
    const content = $('body').html() || ''
    return res.status(200).json({ content })
  } catch (err) {
    return res.status(500).json({ error: 'Could not fetch HTML' })
  }
}
