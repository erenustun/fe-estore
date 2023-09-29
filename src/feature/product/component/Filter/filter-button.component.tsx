import { ReactNode, useState } from 'react'
import { AnimateIn, Button, CheckField, FlexBox } from '@component'
import cn from 'classnames'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useRouterParams } from '@shared/util'

interface SelectFilterProps {
  activeList?: string[] | number[]
  buttonClassName?: string
  disabled?: boolean
  handleChange: (value: number | string) => void
  label: ReactNode | string | number
  list: SelectFilterListProps[]
  unit?: string
}

interface SelectFilterListProps {
  label?: ReactNode | string | number
  value: number | string
}

export const SelectFilter = ({
  activeList = [],
  buttonClassName,
  disabled = false,
  handleChange,
  label,
  list,
  unit,
}: SelectFilterProps) => {
  const [listOpen, showList] = useState(false)
  const toggleList = () => !disabled && showList(!listOpen)

  const { removeParam } = useRouterParams({ method: 'push' })

  const onChange = (value: number | string) => {
    removeParam('page')
    removeParam('limit')
    handleChange(value)
  }

  return (
    <div className="z-20">
      <Button
        onClick={toggleList}
        className={cn(
          'flex min-w-[14rem] select-none items-center justify-between px-2',
          listOpen && 'border-slate-500',
          buttonClassName,
          disabled && 'cursor-not-allowed'
        )}
        style="primary-dark"
      >
        <FlexBox>
          <div>
            {label}
            {activeList?.length > 0 && ':'}
          </div>
          <FlexBox className="ml-2 gap-x-1">
            {activeList?.map((listItem, index) => (
              <FlexBox key={index}>
                {listItem}
                {unit}
                {activeList?.length > 1 &&
                  index + 1 !== activeList?.length &&
                  ','}
              </FlexBox>
            ))}
          </FlexBox>
        </FlexBox>
        <div>
          {listOpen ? (
            <ChevronUpIcon className="h-4 text-white" />
          ) : (
            <ChevronDownIcon className="h-4 text-white" />
          )}
        </div>
      </Button>
      <AnimateIn direction="to-bottom">
        {listOpen && (
          <div className="fixed mt-2 w-60 rounded-sm bg-slate-900 p-4 shadow">
            {list?.map((listItem, index) => {
              return (
                <div
                  key={index}
                  className={cn('flex items-center', index !== 0 && 'mt-3')}
                  onClick={() =>
                    onChange(
                      (listItem.value ? listItem.value : listItem.label) as
                        | number
                        | string
                    )
                  }
                >
                  <CheckField
                    value={listItem.value}
                    label={listItem.label}
                    active={
                      !!activeList?.includes(
                        (listItem.value
                          ? listItem.value
                          : listItem.label) as never
                      )
                    }
                  />
                </div>
              )
            })}
          </div>
        )}
      </AnimateIn>
    </div>
  )
}
