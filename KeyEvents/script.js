const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.textContent = `
    ${event.key === ' ' ? 'Space' : event.key} (event.key)
    ${event.keyCode} (event.keyCode)
    ${event.code} (event.code)
    `
})