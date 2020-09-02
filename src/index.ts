import "reflect-metadata";
import {createConnection} from "typeorm"
import * as express from "express";
import routes from "./routes";

import * as cors from 'cors';
import 'dotenv/config'

const ServerPort = process.env.PORT || 3333

const emojiList = Array.from('🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐞🐜🦟🦗🕷🦂🐢🐍🦎🦖🦕🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦛🦏🐪🐫🦒🦘🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🦮🐕‍🦺🐈🐓🦃🦚🦜🦢🦩🕊🐇🦝🦨🦡🦦🦥🐁🐀🐿🦔🐉🐲')
const randomEmoji = emojiList[Math.floor(Math.random() * emojiList.length)]

const app = express();
createConnection()

app.use(cors())

app.use(express.json())
app.use(routes)

app.listen(ServerPort, () => {
  console.log(`\n${randomEmoji}  Server started on port ${ServerPort}!  ${randomEmoji}\n`)
})