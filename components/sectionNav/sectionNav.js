import './sectionNav.css'
import {
  printPersonalInfo,
  printEducation,
  printSkills,
  printExp,
  printProyect
} from '../sectionMain/sectionMain'

export const printS30 = () => {
  const perInfoBut = document.querySelector('#perInfo')
  const education = document.querySelector('#education')
  const skills = document.querySelector('#skills')
  const exp = document.querySelector('#exp')
  const poryects = document.querySelector('#proyect')

  perInfoBut.addEventListener('click', () => printPersonalInfo())
  education.addEventListener('click', () => printEducation())
  skills.addEventListener('click', () => printSkills())
  exp.addEventListener('click', () => printExp())
  addInfo.addEventListener('click', () => printProyect())
}
