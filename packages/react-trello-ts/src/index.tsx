import React from 'react'

import {Draggable} from './dnd/Draggable'
import Container from './dnd/Container'
import {BoardContainer, BoardContainerProps} from './controllers/BoardContainer'
import {Lane} from './controllers/Lane'
import deprecationWarnings from './helpers/deprecationWarnings'
import * as DefaultComponents from './components'
import locales from './locales'

export * from './widgets'

import createTranslate from './helpers/createTranslate'
import {Board} from './controllers/Board'
import {LaneHeaderProps} from './components/Lane/LaneHeader'
import {CardComponent} from './components/Card'

export {Draggable, Container, BoardContainer, Lane, createTranslate, locales, LaneHeaderProps, CardComponent}

export {DefaultComponents as components}

const DEFAULT_LANG = 'en'

export default ({
  components,
  lang = DEFAULT_LANG,
  ...otherProps
}: BoardContainerProps & {
  lang?: keyof typeof locales
}) => {
  deprecationWarnings(otherProps)

  const translate = createTranslate(locales[lang || 'en'].translation)
  return <Board t={translate} components={{...DefaultComponents, ...components}} {...otherProps} />
}
