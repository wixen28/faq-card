

const questions = document.querySelectorAll('.section')
const arrows = document.querySelectorAll('.arrow')
const answers = document.querySelectorAll('.answer')

arrows.forEach(function(arrow) {
    arrow.addEventListener('click', function(e) {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')

    })
})

