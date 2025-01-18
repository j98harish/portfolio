import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.scss'

const App = () => (
  <div className="bg-gray-100 text-gray-800 h-screen flex items-center justify-center">
  <div className="max-w-4xl mx-auto p-4 sm:p-8 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-4">Frontend Software Engineer</h1>
      <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">Harish Joshi</h2>
      <p className="text-gray-600 mb-4">
          <strong>Experience:</strong> 3 Years in React and Modern FE Technologies
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
          <li><strong>React:</strong> Expert in building dynamic UIs using hooks and functional components.</li>
          <li><strong>JavaScript (ES6+):</strong> Strong understanding of modern JS features and asynchronous programming.</li>
          <li><strong>CSS/SCSS:</strong> Skilled in responsive design with Flexbox, Grid, and SCSS.</li>
          <li><strong>Testing:</strong> Proficient in Jest and Cypress for unit and end-to-end testing.</li>
          <li><strong>Tools:</strong> Familiar with Redux, Webpack, Git, and other frontend build tools.</li>
      </ul>
      <p className="text-gray-600 mb-6">
      I’m super pumped to dive into the world of frontend development! 🚀 The fast-paced vibe of this field and the chance to turn awesome ideas into reality gets me fired up. 🔥 Can’t wait to flex my skills, level up, and tackle exciting challenges head-on! 💪✨
        </p>
      <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">Contact Me</h3>
      <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/j98harish" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-7 h-7" />
            </a>
            <a href="https://github.com/j98harish" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-7 h-7" />
            </a>
            <a href="https://x.com/j98harish" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="X" className="w-7 h-7" />
            </a>
            <a href="mailto:harishjoshi1998+profile@gmail.com" target="_blank">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-7 h-7" />
            </a>
        </div>
  </div>
</div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)