function toggleText(button){
    var id1 = button.id.replace('botonreceta', 'texto');
    var id2 = button.id.replace('botonreceta', 'recipe');
    var image = document.getElementById(id2);
    var text = document.getElementById(id1);
    text.classList.toggle('show');
    image.classList.toggle('hover');
}