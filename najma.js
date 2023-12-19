document.addEventListener('DOMContentLoaded', function(){
    
    const faqsItems = document.querySelectorAll('.faqs-items');

    faqsItems.forEach(function (items){
        const question = items.querySelector('.faqs-question')

        question.addEventListener('click' , function (){
            faqsItems.forEach(function (faqsItems){
                if(faqsItems !== items){
                    faqsItems.classList.remove('active');
                    faqsItems.querySelector('.faqs-answer').style.display = 'none';
                }
            });
            items.classList.toggle('active');

            const answer = items.querySelector('.faqs-answer')
            answer.style.display = items.classList.contains('active') ? 'block' :'none'
        })
    })
})