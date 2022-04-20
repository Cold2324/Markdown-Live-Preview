import MarkdownPreview from '@uiw/react-markdown-preview'
import { useRef } from 'react'
import './MarkdownPreviewr.css'

interface MarkdownPreviewrProps {
  text: string
}

const MarkdownPreviewr: React.FC<MarkdownPreviewrProps> = (
  props: MarkdownPreviewrProps
) => {
  const { text } = props
  const refFileContent = useRef<any>(null)
  return (
    <section className="markdown-previewr--container">
      <MarkdownPreview
        className="markdown--preview"
        source={text}
        ref={refFileContent}
      />
    </section>
  )
}

export default MarkdownPreviewr
