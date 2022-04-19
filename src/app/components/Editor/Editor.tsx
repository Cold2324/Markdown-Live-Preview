import Codemirror from '@uiw/react-codemirror'
import { EditorView } from '@codemirror/view'
import { oneDark } from '@codemirror/theme-one-dark'
import { markdown, markdownLanguage } from '@codemirror/lang-markdown'
import { languages } from '@codemirror/language-data'
import './Editor.css'

interface EditorProps {
  text: string
  setText: (text: string) => void
}

const EditorStyles = {
  fontSize: '22px',
}

const Editor: React.FC<EditorProps> = (props: EditorProps) => {
  const { setText, text } = props
  return (
    <section className="editor--root-container">
      <Codemirror
        value={text}
        style={EditorStyles}
        height={`${window.innerHeight - 40}px`}
        theme={oneDark}
        extensions={[
          oneDark,
          markdown({ base: markdownLanguage, codeLanguages: languages }),
          EditorView.lineWrapping,
        ]}
        onChange={(value, viewUpdate) => {
          setText(value)
        }}
      />
    </section>
  )
}

export default Editor
