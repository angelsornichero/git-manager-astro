const $ = selector => document.querySelector(selector)

const wrapper = $('#wrapper')

const { width, height } = wrapper.getBoundingClientRect()
const halfW = width / 2
const halfH = height /2 

wrapper.addEventListener('mousemove', evt => {
    const { offsetX, offsetY } = evt

    const rotationX = ((offsetX - halfW) / halfW) * 10
    const rotationY = ((offsetY - halfH) / halfH) * 10
    console.log(rotationX, rotationY)
    wrapper.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
}