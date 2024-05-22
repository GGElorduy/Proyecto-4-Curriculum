import './S70.css'

export const printPersonalInfo = () => {
  const hero = document.querySelector('article')

  const coverLeter = document.createElement('p')
  coverLeter.textContent =
    '        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi quas, assumenda aperiam soluta, omnis consequuntur, autem et quidem perferendis neque provident! Iure ratione eveniet est sequi temporibus architecto. Sequi, assumenda.'
  const avatar = document.createElement('img')

  hero.appendChild(coverLeter)
  hero.appendChild(avatar)
}
