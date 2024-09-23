const num = 11
document.write('<table>')
document.write('<thead>')
for (i = 1; i < num; i++) {
    document.write(`<th class="tableTitle">${i}</th>`)
}
document.write('</thead>')
for (i = 2; i < num; i++) {
    document.write('<tr>')
    for (x = 1; x < num; x++) {
        if (x === 1) {
            document.write(`<td class="tableTitle">${x * i}</td>`)
        } else {
            document.write
                (`<td class="tableBox" >${x * i}</td>`)
        }
    }
    document.write('</tr>')
}
document.write('</table')

Array.from(document.querySelectorAll('.tableBox')).map((el) => {
    el.addEventListener('click', () => {
        el.style.contentVisibility = 'visible';
    })
})