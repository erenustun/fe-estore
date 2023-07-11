import { ReactNode } from 'react'
import { Box, FlexBox, H1 } from '@shared/component'
import { FormattedMessage } from 'react-intl'

interface SimpleColumn {
  id: string | string[]
  accessor?: string
  header?: ReactNode | [ReactNode]
  formatData?: (v: any) => any
}

interface SimpleTableProps<> {
  columns: SimpleColumn[]
  data: any[] | any
  hover?: boolean
  hoverColor?: string
  stripped?: boolean
  strippedColor?: string
}

const SimpleTable = ({
  columns = [],
  data = [],
  hover = false,
  stripped = false,
}: SimpleTableProps) => {
  return (
    <Box className="bg-opacity-5 p-0" darkborder notopmargin>
      {columns.map((column, colIndex: number) => {
        const accessor = !Array.isArray(column.header)
          ? column.accessor ?? column.id
          : ''

        return (
          <FlexBox
            key={`row-${colIndex}`}
            className={`flex py-3 ${
              stripped && colIndex % 2 == 0 && 'bg-gray-800'
            } ${hover && 'hover:bg-gray-900'} ${
              !Array.isArray(column.header) && 'px-4'
            } ${
              // check for first and last row
              colIndex + 1 === columns.length
                ? 'pb-4'
                : colIndex === 0 && 'pt-4'
            }`}
            direction="col"
          >
            {!Array.isArray(column.header) ? (
              <>
                <span className="text-sm font-light">{column.header}</span>
                <span className="font-medium tracking-wide">
                  {column.formatData
                    ? column.formatData(data[accessor as string]) ?? '-'
                    : data[accessor as string] ?? '-'}
                </span>
              </>
            ) : (
              <FlexBox className="space-x-48">
                {column.header?.map((headerNode, headerIndex: number) => (
                  <FlexBox direction="col" className="px-4" key={headerIndex}>
                    <span className="text-sm font-light">{headerNode}</span>
                    <span className="font-medium tracking-wide">
                      {data[column.id[headerIndex]] ?? '-'}
                    </span>
                  </FlexBox>
                ))}
              </FlexBox>
            )}
          </FlexBox>
        )
      })}
    </Box>
  )
}

export { SimpleTable }
