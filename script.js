document.addEventListener('keydown', function(event) {
    
    if (event.key === "Enter") {
        switchSection();
    }
});

function switchSection() {
    const sect1 = document.getElementById('sect1');
    const sect2 = document.getElementById('sect2');

    if (sect1.style.display === 'block') {
        sect1.style.display = 'none';
        sect2.style.display = 'block';
    } else {
        sect1.style.display = 'block';
        sect2.style.display = 'none';
    }
}
