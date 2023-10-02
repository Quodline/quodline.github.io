'use client'

import {saveAs} from 'file-saver'

export default function ResumeButton() {
    const downloadFile = () => {
        saveAs(
            "https://drive.google.com/file/d/17KeL58Ta7APMj0Ywxt0KGB513Ii_3_yT/view?usp=sharing",
            "ore-adeleye-resume-2023.pdf"
        )
    }

    return (
        <button className="link-solid self-center" onClick={downloadFile}>
            Download Resume
        </button>
    )
}