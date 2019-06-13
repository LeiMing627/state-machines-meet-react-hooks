import 'antd/dist/antd.css'
import './App.css'

export { nightOwlFull as theme } from 'code-surfer/themes'

import { slides as conclusion } from './conclusion.mdx'
import { slides as demoA } from './demo-a.mdx'
import { slides as demoB } from './demo-b.mdx'
import { slides as demo1 } from './demo-1.mdx'
import { slides as demo2 } from './demo-2.mdx'
import { slides as demo3 } from './demo-3.mdx'
import { slides as demo4 } from './demo-4.mdx'
import { slides as demo5 } from './demo-5.mdx'
import { slides as demo6 } from './demo-6.mdx'
import { slides as toggle } from './toggle.mdx'
import { slides as guards2 } from './guards-2.mdx'
import { slides as guards } from './guards.mdx'
import { slides as hierarchy } from './hierarchy.mdx'
import { slides as interpreter } from './interpreter.mdx'
import { slides as introduction } from './introduction.mdx'
import { slides as solution } from './solution.mdx'
import { slides as useMachine } from './use-machine.mdx'

export const slides = [
  ...introduction,
  ...toggle,
  ...demoA,
  ...demoB,
  ...demo1,
  ...solution,
  ...demo2,
  ...interpreter,
  ...demo3,
  ...useMachine,
  ...demo4,
  ...hierarchy,
  ...demo5,
  ...guards,
  ...guards2,
  ...demo6,
  ...conclusion,
]
