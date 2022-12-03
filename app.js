const slides= document.querySelectorAll('.slide')
/* ex1 */
// for (const slider of slides) {
// 	slider.addEventListener('click', () => {
// 		clearActiveClass()
// 		slider.classList.add('active')
// 	})
// }

// /* ex2 */
// function clearActiveClass() {
// 	slides.forEach((slider) => {slider.classList.remove('active')})
// }



/* mouseover//mouseout */
slides.forEach((el) => {
	el.addEventListener('mouseover',
		() => {el.classList.add('active')
	})
})

slides.forEach((el) => {
	el.addEventListener('mouseout',
		() => {el.classList.remove('active')
	})
})



/* click ex3*/
// slides.forEach((el) => {
// 	el.addEventListener('click', () => {
// 		clearActiveClass()
// 		el.classList.add('active')
// 	})
// })

// const clearActiveClass = () => {
// 	slides.forEach((slider) => {slider.classList.remove('active')})
// }
