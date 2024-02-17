import React from "react"
import CVEnglish from "../pdfs/juhani_kataja_cv.pdf"
import CVFinnish from "../pdfs/juhani_kataja_cv2.pdf"

const PdfButtons = () => {
  return (
    <div>
      My CVs:
      <button onClick={() => window.open(CVEnglish, "_blank")}>
        English CV
      </button>
      <button onClick={() => window.open(CVFinnish, "_blank")}>
        Finnish CV
      </button>
    </div>
  )
}

export default PdfButtons
