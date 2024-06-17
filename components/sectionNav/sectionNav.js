import './sectionNav.css'
import {
  printPersonalInfo,
  printEducation,
  printSkills,
  printExp,
  printProject
} from '../sectionMain/sectionMain'

export const printS30 = () => {
  const perInfoBut = document.querySelector('#perInfo')
  const education = document.querySelector('#education')
  const skills = document.querySelector('#skills')
  const exp = document.querySelector('#exp')
  const project = document.querySelector('#project')

  perInfoBut.addEventListener('click', () => printPersonalInfo())
  education.addEventListener('click', () => printEducation())
  skills.addEventListener('click', () => printSkills())
  exp.addEventListener('click', () => printExp())
  project.addEventListener('click', () => printProject())
}
