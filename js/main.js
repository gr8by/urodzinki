const containers = document.querySelectorAll("main > div")
const btnSwitch = document.querySelector("#switch")
const body = document.querySelector("body")
const btnFlame = document.querySelector("#flame")
const happyBirthdaySong = document.querySelector("audio")
const flameEl = document.querySelector(".flame")
const switchBox = document.querySelector(".switch-box")

function sleep(milliseconds) {
	return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

function switchOn() {
	body.classList.remove("bg-dark")
	btnSwitch.classList.add("light")
	btnSwitch.classList.add("animation")
	setTimeout(() => {
		body.classList.add("bg-birthday")
		containers[1].classList.remove("d-none")
		containers[1].classList.remove("aos-animate")
		containers[1].classList.add("aos-animate")
	}, 1600)
	setTimeout(() => {
		containers[0].classList.add("d-none")
		containers[0].style.display = "none"
	}, 1500)

     
	

}

function playMusic() {
    happyBirthdaySong.play()
}

function flame() {
	flameEl.classList.add("flame-week")
	setTimeout(() => {
		btnFlame.classList.add("d-none")
		containers[1].classList.add("away")
	}, 3000)
	setTimeout(() => {
		containers[1].classList.add("d-none")
		containers[1].style.display = "none"
		containers[2].classList.remove("d-none")
		containers[2].classList.add("zoom-in")
		console.log(containers[2])
	}, 4500)
}

addEventListener("DOMContentLoaded", () => {
	switchBox.classList.remove("d-none")
	switchBox.classList.add("zoom-in")
})

btnSwitch.addEventListener("click", switchOn)
btnSwitch.addEventListener("click", playMusic)

btnFlame.addEventListener("click", flame)
