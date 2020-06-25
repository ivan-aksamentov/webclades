import React, { SVGProps } from 'react'

import type { MutationElementWithId } from 'src/algorithms/types'
import { getNucleotideColor } from 'src/helpers/getNucleotideColor'

export interface MutationViewProps extends SVGProps<SVGRectElement> {
  mutation: MutationElementWithId
  pixelsPerBase: number
  width: number
}

export function MutationView({ mutation, pixelsPerBase, width, onClick, ...rest }: MutationViewProps) {
  const { id, pos, queryNuc } = mutation
  const fill = getNucleotideColor(queryNuc)
  const x = pos * pixelsPerBase
  return <rect id={id} fill={fill} x={x} y={-10} width={width} height="30" {...rest} />
}
