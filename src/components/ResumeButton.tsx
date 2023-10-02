'use client'

import {saveAs} from 'file-saver'

export default function ResumeButton() {
    const downloadFile = () => {
        saveAs(
            "https://drive.google.com/file/d/1n82Wjto-J8MlE1nBpGwzGXzPLbno5gfc/view?usp=sharing",
            "ore-adeleye-resume-2023.pdf"
        )
    }

    return (
        <button className="link-solid self-end" onClick={downloadFile}>
            Download Resume
        </button>
    )
}