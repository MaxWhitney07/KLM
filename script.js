document.querySelectorAll('.toggle-button').forEach(button => {  
    button.addEventListener('click', () => {  
        const menuItem = button.parentElement.parentElement;  
        const descriptionContainer = menuItem.querySelector('.description-container');  
          
        // Toggle the 'open' class  
        descriptionContainer.classList.toggle('open');  
          
        // Change button text accordingly  
        const isVisible = descriptionContainer.classList.contains('open');  
        button.textContent = isVisible ? '▲' : '▼';  
    });  
});  