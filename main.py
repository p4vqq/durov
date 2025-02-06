import os
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
from dotenv import load_dotenv

# Загрузка переменных окружения
load_dotenv()

# Константы
BOT_TOKEN = os.getenv("BOT_TOKEN")
WEB_APP_URL = "https://p4vqq.github.io/durov/webapp.html"  # Замените на URL вашего Web App

# Стартовая команда
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("Играть", web_app=WebAppInfo(url=WEB_APP_URL))]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    await update.message.reply_text("Добро пожаловать! Нажмите кнопку для начала игры.", reply_markup=reply_markup)

# Запуск бота
if __name__ == "__main__":
    application = ApplicationBuilder().token(BOT_TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    application.run_polling()
