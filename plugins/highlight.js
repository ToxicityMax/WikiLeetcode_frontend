import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'

import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import rust from 'highlight.js/lib/languages/rust'
import typescript from 'highlight.js/lib/languages/typescript'
import scala from 'highlight.js/lib/languages/scala'
import go from 'highlight.js/lib/languages/go'
import csharp from 'highlight.js/lib/languages/csharp'
import c from 'highlight.js/lib/languages/c'
import swift from 'highlight.js/lib/languages/swift'
import ruby from 'highlight.js/lib/languages/ruby'
import php from 'highlight.js/lib/languages/php'
import kotlin from 'highlight.js/lib/languages/kotlin'
import cpp from 'highlight.js/lib/languages/cpp'

import 'highlight.js/styles/a11y-light.css'

Vue.use(VueHighlightJS, {
  languages: {
    javascript, java, python, rust, typescript, scala, go, csharp, c, swift, ruby, php, kotlin, cpp
  }
})
