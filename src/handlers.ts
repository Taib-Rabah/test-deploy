import { CommandContext, Context } from "grammy";


export async function start(ctx: CommandContext<Context>) {
   await ctx.reply("Hello and welcome!")
}