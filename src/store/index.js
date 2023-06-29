import { reactive } from 'vue'

export const store = reactive({
  headerTitle: 'test',
  setHeaderTitle(title) {
    this.headerTitle = title
  }
})
