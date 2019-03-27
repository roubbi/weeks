
// At the beginning of this lesson, before the Intro, there is an image with some code. 
//Study this code, think about what you expect to happen, and then complete the HTML to make the code work.

const explode = (lightFunc, soundFunc, sound) => {

  lightFunc()
  soundFunc(sound)
}

const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
const makeSound = (sound) => alert(sound)

explode(shineLight, makeSound, "BOOM")