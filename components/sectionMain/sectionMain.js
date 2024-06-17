import './sectionMain.css'
import { school } from '../../assets/school'
import { skills } from '../../assets/skills'
import { experience } from '../../assets/experience'
import { projects } from '../../assets/proyect'

export const printPersonalInfo = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  hero.className = 'information'
  const h1 = document.createElement('h1')
  const coverLeter = document.createElement('p')
  const location = document.createElement('p')
  const tlf = document.createElement('p')
  const mail = document.createElement('p')
  const linkedin = document.createElement('p')
  const moreWork = document.createElement('p')

  h1.textContent = 'Javier Gil-Guijarro Elorduy'
  coverLeter.textContent =
    'My name is Javier and I am writing to express my interest in the position of Quality Analyst that is currently available'
  location.textContent = 'Location: 11207 Algeciras, Spain'
  tlf.textContent = 'Tel: +353 87 947 9384'
  mail.textContent = 'Email: gilguijarro.elorduy@gmail.com'
  linkedin.textContent = 'LinkedIn: [hyperlink to your LinkedIn address]'
  moreWork.textContent =
    'For a sample of my work please visit: https://github.com/GGElorduy'

  /*   hero.appendChild(h1)
  hero.appendChild(coverLeter)
  hero.appendChild(tlf)
  hero.appendChild(mail)
  hero.appendChild(location)
  hero.appendChild(linkedin)
  hero.appendChild(moreWork) */

  hero.innerHTML = `<div class="container"><h1>Javier Gil-Guijarro Elorduy</h1><p>11207 Algeciras</p><p>Tel: +34 631597491</p><p>Email: <a href="mailto:gilguijarro.elorduy@gmail.com">gilguijarro.elorduy@gmail.com</a></p><p>LinkedIn: <a href="https://www.linkedin.com/in/javiergge/" target="_blank">https://www.linkedin.com/in/javiergge/</a></p><p>For a sample of my work, please visit: <a href="https://github.com/GGElorduy" target="_blank">https://github.com/GGElorduy</a></p><p><strong>LOOKING FOR SUMMER INTERNSHIPS & GRADUATE OPPORTUNITIES 2023</strong></p> Available to work full-time.</p><div class="section"><h2>Personal Profile/Career Objective</h2><p>I am a passionate front-end developer with international work experience in Ireland and Portugal. My background has equipped me with strong communication skills and the ability to adapt effectively in multicultural teams. Currently, I am enrolled in the "Rock the Code" course at The Power Tech School, where I am expanding and refining my web development skills.</p><p>As a front-end developer, my goal is to apply my knowledge and technical skills to create intuitive and responsive user interfaces, contributing to innovative and challenging projects. I aim to continue learning and growing professionally in a multicultural environment, leveraging my language skills and international experience to facilitate effective collaboration and enhance user experience.</p></div></div>  `
}
export const printEducation = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  const h2 = document.createElement('h2')
  h2.textContent = 'Education'
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'allCards'
  hero.appendChild(allCards)

  for (let i = 0; i < school.length; i++) {
    const card = document.createElement('li')
    const title = document.createElement('h3')
    const year = document.createElement('p')
    const institution = document.createElement('p')
    card.className = 'card'
    title.textContent = school[i].degree
    year.textContent = school[i].year
    institution.textContent = school[i].school
    allCards.appendChild(card)
    card.appendChild(title)
    card.appendChild(year)
    card.appendChild(institution)
    card.addEventListener('click', () => {
      hero.innerHTML = '<h2>Education</h2>' + school[i].html
    })
  }
}
export const printSkills = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  const h2 = document.createElement('h2')
  h2.textContent = 'Skills'
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'allCards'
  hero.appendChild(allCards)

  for (let i = 0; i < skills.length; i++) {
    const card = document.createElement('li')
    const title = document.createElement('h3')
    card.className = 'card'
    allCards.appendChild(card)
    card.appendChild(title)
    title.textContent = skills[i].Name

    card.addEventListener('click', () => {
      if (card.textContent == 'Language') {
        hero.innerHTML = '<h2>Skills</h2>' + skills[i].html
      }
      if (card.textContent == 'Professional Skills') {
        hero.innerHTML = ''
        /*      const divCont = document.createElement('div')
        divCont.className = 'container' */
        const h3 = document.createElement('h3')
        h3.textContent = skills[i].Name
        const ul = document.createElement('ul')
        ul.className = 'list'
        /*         hero.appendChild(divCont) */
        hero.appendChild(h3)
        hero.appendChild(ul)
        for (let index = 0; index < skills[i].Data.length; index++) {
          const li = document.createElement('li')
          li.textContent = skills[i].Data[index]
          ul.appendChild(li)
        }
      }
      if (card.textContent == 'Programming Languages') {
        hero.innerHTML = ''
        const h3 = document.createElement('h3')
        h3.textContent = skills[i].Name
        const ul = document.createElement('ul')
        ul.className = 'progLang'
        hero.appendChild(h3)
        hero.appendChild(ul)
        for (let index = 0; index < skills[i].List.length; index++) {
          const li = document.createElement('li')
          li.textContent = skills[i].List[index]
          ul.appendChild(li)
        }
      }
    })
  }
}
export const printExp = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  const h2 = document.createElement('h2')
  h2.textContent = 'Work Experience'
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'allCards'
  hero.appendChild(allCards)
  for (let i = 0; i < experience.length; i++) {
    const card = document.createElement('li')
    card.className = 'card'
    const title = document.createElement('h3')
    const company = document.createElement('h4')
    const time = document.createElement('p')
    const location = document.createElement('p')

    allCards.appendChild(card)
    card.appendChild(title)
    card.appendChild(company)
    card.appendChild(time)
    card.appendChild(location)

    title.textContent = experience[i].Name
    company.textContent = experience[i].Company
    time.textContent = experience[i].Time
    location.textContent = experience[i].Location

    card.addEventListener('click', () => {
      hero.innerHTML = '<h2>Experience</h2>'
      const divInfo = document.createElement('div')
      const pIntro = document.createElement('p')
      const ul = document.createElement('ul')
      pIntro.textContent = experience[i].Paragraph
      divInfo.className = 'container'
      hero.appendChild(divInfo)
      divInfo.appendChild(title)
      divInfo.appendChild(company)
      divInfo.appendChild(time)
      divInfo.appendChild(location)
      divInfo.appendChild(pIntro)
      divInfo.appendChild(ul)
      for (let index = 0; index < experience[i].List.length; index++) {
        const li = document.createElement('li')
        li.textContent = experience[i].List[index]
        ul.appendChild(li)
      }
    })
  }
}
export const printProject = () => {
  const hero = document.querySelector('#hero')
  hero.innerHTML = ''
  const h2 = document.createElement('h2')
  h2.textContent = 'Recent Projects'
  hero.appendChild(h2)
  const allCards = document.createElement('ul')
  allCards.className = 'allCards'
  hero.appendChild(allCards)
  for (let i = 0; i < projects.length; i++) {
    const a = document.createElement('a')
    a.href = projects[i].link

    const li = document.createElement('li')
    li.className = 'card'
    const h3 = document.createElement('h3')
    h3.textContent = projects[i].Name
    const img = document.createElement('img')
    img.src = projects[i].img
    img.className = 'project-pic'
    const p = document.createElement('p')
    p.textContent = projects[i].desccription
    allCards.appendChild(a)
    a.appendChild(li)
    li.appendChild(h3)
    li.appendChild(img)
    li.appendChild(p)
  }
}
