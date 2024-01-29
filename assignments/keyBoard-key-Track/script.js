const key = document.getElementById('keys');

window.addEventListener('keydown', (e) => {
    key.innerHTML = `
    <div>
    <table>
    <tr>
      <td>Key</td>
      <td>KeyCode</td>
      <td>Code</td>
    </tr>
    <tr>
      <td>${e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
    </div>
    `
})
