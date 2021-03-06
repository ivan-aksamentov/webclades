import React from 'react'

import { useTranslation } from 'react-i18next'
import type { DeepReadonly } from 'ts-essentials'

import type { NucleotideInsertion } from 'src/algorithms/types'
import { formatInsertion } from 'src/helpers/formatInsertion'
import { truncateList } from 'src/components/Results/truncateList'

const LIST_OF_INSERTIONS_MAX_ITEMS = 10 as const

export interface ListOfInsertionsProps {
  readonly insertions: DeepReadonly<NucleotideInsertion[]>
}

export function ListOfInsertions({ insertions }: ListOfInsertionsProps) {
  const { t } = useTranslation()

  const totalInsertions = insertions.length

  let insertionItems = insertions.map(({ pos, ins }) => {
    const insertion = formatInsertion({ pos, ins })
    return <li key={insertion}>{insertion}</li>
  })

  insertionItems = truncateList(insertionItems, LIST_OF_INSERTIONS_MAX_ITEMS, t('...more'))

  return (
    <div>
      <div>{t('Insertions ({{totalInsertions}})', { totalInsertions })}</div>
      <ul>{insertionItems}</ul>
    </div>
  )
}
