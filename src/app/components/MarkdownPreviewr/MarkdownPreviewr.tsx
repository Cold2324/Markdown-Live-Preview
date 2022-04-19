import MarkdownPreview from '@uiw/react-markdown-preview'
import './MarkdownPreviewr.css'

interface MarkdownPreviewrProps {
  text: string
}

const MarkdownPreviewr: React.FC<MarkdownPreviewrProps> = (
  props: MarkdownPreviewrProps
) => {
  const { text } = props
  return (
    <section className="markdown-previewr--container">
      <MarkdownPreview className="markdown--preview" source={text} />
    </section>
  )
}

export default MarkdownPreviewr
