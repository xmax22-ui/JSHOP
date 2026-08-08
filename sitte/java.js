function updateAuthUI(isLoggedIn, username) {
    const accountBtn = document.querySelector('#accountDropdown');
    if (isLoggedIn) {
        accountBtn.innerHTML = `
            <span>\${username}</span>
            <button onclick="logout()">Выйти</button>
        `;
    } else {
        accountBtn.innerHTML = `
            <button onclick="openModal('login')">Войти</button>
            <button onclick="openModal('register')">Создать аккаунт</button>
        `;
    }
}
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) return res.status(500).send('Ошибка выхода');
        res.json({ success: true, message: 'Вы вышли из системы' });
    });
});
