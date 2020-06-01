import React from 'react'
import Button from './index'

export default { title: 'Button' }

export const withaText = () => <Button>Hello Button</Button>

export const withaEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
