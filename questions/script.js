
const questions = document.querySelectorAll('.question')

for (const q of questions) {
    
    const btn = q.querySelector('.question-btn')

    btn.onclick = function() {
        for (const qq of questions) {
            if (qq !== q) {
                qq.classList.remove('show-text')
            }
        }
        q.classList.toggle('show-text')
    }
}