import { reactive } from 'vue'

export const store = reactive({
  headerTitle: 'test',
  richTextContent: window.localStorage.getItem('richTextContent'),

  setHeaderTitle(title) {
    this.headerTitle = title
  },
  setRichTextContent(content) {
    window.localStorage.setItem('richTextContent', content)
    this.richTextContent = content
  }
})
