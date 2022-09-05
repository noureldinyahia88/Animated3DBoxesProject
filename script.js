const boxesContainer = document.getElementById('boxs')
const btn = document.getElementById('btn')


function creatBoxes() {
	for(let i=0; i<4; i++){
		for(let j=0; j<4; j++){
			const box = document.createElement('div')
			box.classList.add('box')
			box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px` 
			boxesContainer.appendChild(box)
		}
	}
}

btn.addEventListener('click',()=>{
	boxesContainer.classList.toggle('big')
})
creatBoxes()