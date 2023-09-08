const plates = document.querySelectorAll ('.plate')

    plates.forEach(plates => {
        plates.addEventListener('click', () => {
            removeActiveClasses()
            plates.classList.add('active')
        })
    })

    function removeActiveClasses() {
        plates.forEach(plate => {
            plate.classList.remove('active')
        })
    }