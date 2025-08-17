// Инициализация Telegram WebApp
const tg = window.Telegram.WebApp;

// Уведомляем Telegram о готовности приложения
tg.ready();

// Расширяем приложение на все окно
tg.expand();

// Настраиваем главную кнопку Telegram
tg.MainButton.text = "Готово";
tg.MainButton.show();

// Обработчик нажатия главной кнопки
tg.MainButton.onClick(() => {
    tg.close();
});

// Получаем данные пользователя
const user = tg.initDataUnsafe?.user;
if (user) {
    document.querySelector('#app').innerHTML = 
        `<h1>Привет, ${user.first_name}!</h1>`;
}
